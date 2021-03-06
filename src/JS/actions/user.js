import {
    CURRENT_USER,
    FAIL_USER,
    LOAD_USER,
    LOGIN_USER,
    LOGOUT_USER,
    REGISTER_USER,
} from "../actionTypes/user";

import axios from "axios";

export const currentUser = () => async (dispatch) => {
    dispatch({
        type: LOAD_USER,
    });
    try {
        const options = {
            headers: { authorization: localStorage.getItem("token") },
        };
        const result = await axios.get("/api/user/current", options);
        dispatch({ type: CURRENT_USER, payload: result.data });
    } catch (error) {
        dispatch({ type: FAIL_USER, payload: error.response.data });
    }
};

export const login = (user, history) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    console.log(user);
    try {
        let result = await axios.post("/api/user/login", user);
        console.log(result);
        dispatch({ type: LOGIN_USER, payload: result.data }); //msg /token , user
        console.log("success");
        history.push("/admin");
    } catch (error) {
        dispatch({ type: FAIL_USER, payload: error.response.data.errors });
    }
};

export const register = (user, history) => async (dispatch) => {
    dispatch({ type: LOAD_USER });

    try {
        let result = await axios.post("/api/user/register", user);
        dispatch({ type: REGISTER_USER, payload: result.data }); //msg /token , user
        console.log("success");
        history.push("/profile");
    } catch (error) {
        dispatch({ type: FAIL_USER, payload: error.response.data.errors });
    }
};

export const logout = () => {
    return {
        type: LOGOUT_USER,
    };
};

export const videErrors = () => {
    return {
        type: "VIDE_ERRORS",
    };
};
