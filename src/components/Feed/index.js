import React, { useEffect, useState, useRef } from 'react';
import { RecyclerListView } from 'recyclerlistview/web';

import { getLayoutProvider, getDataProvider } from './RecyclerListHelper';
import { listPosts } from './../../services/postsService';

import PostCard from './../PostCard';
import ActivityIndicator from './../ActivityIndicator';

import { Container } from './styles';

const Feed = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [dataProvider, setDataProvider] = useState(getDataProvider(data));

    const _layoutProvider = useRef(getLayoutProvider()).current;

    const getNextPage = async () => {
        try {
            if (isLoading) return;

            setIsLoading(true);
            const resData = await listPosts();
            console.log('>>> --', resData);
            setData(resData);
        } catch (error) {
            console.error('Erro ');
        } finally {
            setIsLoading(false);
        }
    };

    const renderItem = (type, data) => <PostCard post={data} />;

    const renderLoading = () => isLoading && <ActivityIndicator size={20} />;

    useEffect(() => {
        getNextPage();
    }, []);

    useEffect(() => {
        setDataProvider(getDataProvider(data));
    }, [data]);

    return (
        <Container>
            <RecyclerListView
                style={{ flex: 1 }}
                layoutProvider={_layoutProvider}
                dataProvider={dataProvider}
                rowRenderer={renderItem}
                renderFooter={renderLoading}
                useWindowScroll={true}
                onEndReached={getNextPage}
                onEndReachedThreshold={1}
            ></RecyclerListView>
        </Container>
    );
};

export default Feed;
