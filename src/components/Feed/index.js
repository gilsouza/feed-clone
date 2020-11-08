import React, { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { RecyclerListView } from 'recyclerlistview/web';
import { selectUser } from './../../store/features/user/userSlice';

import * as ROUTES from './../../routers';

import { listFriendsPosts } from './../../services/postsService';
import { hashHelper } from './../../helpers/hash';

import PostCard from './../PostCard';
import ActivityIndicator from './../ActivityIndicator';

import { getLayoutProvider, getDataProvider } from './RecyclerListHelper';
import { Container } from './styles';

const FIRST_PAGE = 0;

const Feed = ({ match: { path } }) => {
    const isHome = ROUTES.HOME === path;

    const parentRef = useRef(null);
    const layoutProvider = useRef(getLayoutProvider(parentRef.current)).current;
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(FIRST_PAGE);
    const [isLoading, setIsLoading] = useState(true);
    const [dataProvider, setDataProvider] = useState(getDataProvider(data));

    const { userInfo } = useSelector(selectUser);

    const getNextPage = async () => {
        try {
            if (isLoading) return;

            setIsLoading(true);
            const nextPage = currentPage + 1;
            const response = await listFriendsPosts(userInfo, nextPage);
            const newData = [...data, ...response];
            setCurrentPage(nextPage);
            setData(newData);
        } catch (error) {
            // FIXME: Tratamento de erro
            console.error('Erro ');
        } finally {
            setIsLoading(false);
        }
    };

    const renderItem = (type, data) => {
        const width = parentRef.current.clientWidth;
        const user = data.user.name.toLowerCase().replace(' ', '_');
        const _hash = hashHelper(JSON.stringify(data));

        return (
            <Link
                to={`/user/${user}/post/${_hash}`}
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
                const response = await listFriendsPosts(userInfo);
                setData(response);
            } catch (error) {
                // FIXME: Tratamento de erro
                console.error('Erro', error);
            } finally {
                setIsLoading(false);
            }
        };
        firstLoad();
    }, []);

    useEffect(() => {
        setDataProvider(getDataProvider(data));
    }, [data]);

    if (isHome) return renderFeedList();
    else return null;
};

export default withRouter(Feed);
