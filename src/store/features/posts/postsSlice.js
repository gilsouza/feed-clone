import { createSlice } from '@reduxjs/toolkit';
import { listPosts } from '../../../services/postsService';

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        isLoading: true,
        error: null,
    },
    reducers: {
        updateState: (state, action) => {
            console.log('payload', action.payload);
            const { error, isLoading, posts } = action.payload;

            if (error !== undefined) state.error = error;
            if (isLoading !== undefined) state.isLoading = isLoading;
            if (posts !== undefined) state.posts = posts;
        },
    },
});

const { updateState } = postsSlice.actions;

export const fetchPosts = () => async (dispatch) => {
    try {
        dispatch(updateState({ error: null, isLoading: true }));
        const posts = await listPosts();
        console.log(posts);
        dispatch(updateState({ error: null, isLoading: false, posts: posts }));
    } catch (error) {
        const errorMessage = 'Erro ao obter posts';
        console.error(errorMessage);

        dispatch(
            updateState({
                error: errorMessage,
                isLoading: false,
                userInfo: null,
            })
        );
    }
};

export const selectPosts = (state) => state.posts;

export default postsSlice.reducer;
