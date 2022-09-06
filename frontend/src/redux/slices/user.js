import { createSlice, createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { fetchUsers } from "../../api/index";

const userAdapter = createEntityAdapter({
    selectId: (user) => user._id,
});

export const userSlice = createSlice({
    name: 'user',
    initialState: userAdapter.getInitialState(),
    reducers: {
        addUsers: userAdapter.upsertMany,
    }
})

export const setUserState = () => async (dispatch) => {
    try {
        await fetchUsers().then(data => dispatch(addUsers(data)));
    } catch (e) {
        return console.error(e.message);
    }
}

export const {
    selectAll: selectAllUsers,
    selectById: selectUserById,
} = userAdapter.getSelectors(state => state.user);

export const { addUsers } = userSlice.actions;
export default userSlice.reducer;