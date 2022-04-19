import {useContext} from "react";
import {AuthContext} from "../App";
import React from "react";
export const useAuth = () => {
    const context = useContext(AuthContext)
    return context;
}
