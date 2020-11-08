import { createSlice } from '@reduxjs/toolkit';
import { getUserInfo } from '../../../services/userService';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        userInfo: null,
        isLoading: true,
        error: null,
    },
    reducers: {
        updateState: (state, action) => {
            const { error, isLoading, userInfo } = action.payload;

            if (error !== undefined) state.error = error;
            if (isLoading !== undefined) state.isLoading = isLoading;
            if (userInfo !== undefined) state.userInfo = userInfo;
        },
    },
});

const { updateState } = userSlice.actions;

export const fetchUserInfo = () => async (dispatch) => {
    try {
        dispatch(updateState({ error: null, isLoading: true }));
        const { user } = await getUserInfo();
        dispatch(
            updateState({ error: null, isLoading: false, userInfo: user })
        );
    } catch (error) {
        const errorMessage = 'Erro ao obter informação de usuário';
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

export const selectUser = (state) => state.user;

export default userSlice.reducer;
