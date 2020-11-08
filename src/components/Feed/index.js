import React, { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';
import { RecyclerListView } from 'recyclerlistview/web';
import { selectUser } from './../../store/features/user/userSlice';

import * as ROUTES from './../../routers';

import { getFriendsPosts } from './../../services/postsService';
import { hashHelper, normalizeUserName } from '../../helpers';

import PostCard from './../PostCard';
import ActivityIndicator from './../ActivityIndicator';

import { getLayoutProvider, getDataProvider } from './RecyclerListHelper';
import { Container, ErrorText } from './styles';

const FIRST_PAGE = 0;

const Feed = () => {
    const { path } = useRouteMatch();
    const { userInfo } = useSelector(selectUser);

    const isHome = ROUTES.HOME === path;

    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(FIRST_PAGE);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setError] = useState(false);
    const [dataProvider, setDataProvider] = useState(getDataProvider(data));

    const parentRef = useRef(null);
    const layoutProvider = useRef(getLayoutProvider()).current;

    const getNextPage = async () => {
        try {
            if (isLoading) return;

            setIsLoading(true);
            const nextPage = currentPage + 1;
            const response = await getFriendsPosts(userInfo, nextPage);
            const newData = [...data, ...response];
            setCurrentPage(nextPage);
            setData(newData);
        } catch (error) {
            console.error('Erro ao buscar próxima página', error);
            setIsLoading(false);
            setError(true);
        } finally {
            setIsLoading(false);
        }
    };

    const renderItem = (type, data) => {
        const width = parentRef.current.clientWidth;
        const user = normalizeUserName(data.user.name);
        const hashPost = hashHelper(data);

        return (
            <Link
                to={{
                    pathname: `/user/${user}/post/${hashPost}`,
                    state: { post: data },
                }}
                style={{
                    width,
                    textDecoration: 'none',
                    height: '100%',
                    borderBottom: '1px solid #2F3336',
                }}
            >
                <PostCard post={data} />
            </Link>
        );
    };

    const renderError = () => (
        <ErrorText>
            <span>Erro ao carregar posts.</span>
            <span> Tente novamente mais tarde.</span>
        </ErrorText>
    );

    const renderLoading = () => isLoading && <ActivityIndicator size={20} />;

    const renderFeedList = () => {
        return (
            <Container ref={parentRef}>
                {!!data.length && (
                    <RecyclerListView
                        layoutProvider={layoutProvider}
                        dataProvider={dataProvider}
                        rowRenderer={renderItem}
                        renderFooter={renderLoading}
                        useWindowScroll={true}
                        onEndReached={getNextPage}
                        renderAheadOffset={250}
                    />
                )}
                {!data.length && renderLoading()}
            </Container>
        );
    };

    useEffect(() => {
        const firstLoad = async () => {
            try {
                const response = await getFriendsPosts(userInfo);
                setData(response);
            } catch (error) {
                console.error('Erro ao buscar página inicial', error);
                setIsLoading(false);
                setError(true);
            } finally {
                setIsLoading(false);
            }
        };
        firstLoad();
    }, []);

    useEffect(() => {
        setDataProvider(getDataProvider(data));
    }, [data]);

    if (isError) return renderError();
    else if (isHome) return renderFeedList();
    else return null;
};

export default Feed;
