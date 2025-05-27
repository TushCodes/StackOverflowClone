import * as api from "../api";
import { FETCH_USERS, UPDATE_CURRENT_USER } from '../reducers/users';

export const fetchallusers = () => async (dispatch) => {
    try {
        const { data } = await api.getallusers();
        dispatch(FETCH_USERS(data));
    } catch (error) {
        console.log(error);
    }
};

export const updateprofile = (id, updatedata) => async (dispatch) => {
    try {
        const { data } = await api.updateprofile(id, updatedata);
        dispatch(UPDATE_CURRENT_USER(data));
    } catch (error) {
        console.log(error);
    }
};