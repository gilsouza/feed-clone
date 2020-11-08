import { createSlice } from '@reduxjs/toolkit';
import { getUserInfo } from '../../../services/userService';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        userInfo: null,
        isLoading: true,
        hasError: null,
    },
    reducers: {
        updateState: (state, action) => {
            const { hasError, isLoading, userInfo } = action.payload;

            if (hasError !== undefined) state.hasError = hasError;
            if (isLoading !== undefined) state.isLoading = isLoading;
            if (userInfo !== undefined) state.userInfo = userInfo;
        },
    },
});

const { updateState } = userSlice.actions;

export const fetchUserInfo = () => async (dispatch) => {
    try {
        dispatch(updateState({ hasError: null, isLoading: true }));
        const { user } = await getUserInfo();
        dispatch(
            updateState({ hasError: null, isLoading: false, userInfo: user })
        );
    } catch (error) {
        const errorMessage = 'Erro ao obter informação de usuário';
        console.error(errorMessage);

        dispatch(
            updateState({
                hasError: errorMessage,
                isLoading: false,
                userInfo: null,
            })
        );
    }
};

export const selectUser = (state) => state.user;

export default userSlice.reducer;
