import { loginFailure, loginStart, loginSuccess, registerFailure, registerStart, registerSuccess } from "./userRedux";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login", user);
        dispatch(loginSuccess(res.data));
        return
    } catch (err) {
        dispatch(loginFailure());
    }
};

export const register = async (dispatch, registerUser) => {
    dispatch(registerStart());
    try {
        const res = await publicRequest.post("/auth/register", registerUser);
        dispatch(registerSuccess(res.data));
    } catch (err) {
        console.log(err)
        dispatch(registerFailure());
    }
};

