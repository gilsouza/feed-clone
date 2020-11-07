import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from './../../store/features/user/userSlice';

import { RecyclerListView } from 'recyclerlistview/web';

import { getLayoutProvider, getDataProvider } from './RecyclerListHelper';
import { listFriendsPosts } from './../../services/postsService';

import PostCard from './../PostCard';
import ActivityIndicator from './../ActivityIndicator';

import { Container } from './styles';

const FIRST_PAGE = 0;

const Feed = () => {
    const layoutProvider = useRef(getLayoutProvider()).current;
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

    const renderItem = (type, data) => <PostCard post={data} />;

    const renderLoading = () => isLoading && <ActivityIndicator size={20} />;

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

    return (
        <Container>
            {!!data.length && (
                <RecyclerListView
                    style={{ flex: 1 }}
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

export default Feed;
