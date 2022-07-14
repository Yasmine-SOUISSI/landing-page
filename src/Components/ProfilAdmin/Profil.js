import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { currentUser } from "../../JS/actions/user";
import "./Profil.css";
import ImgProfil from "../../amy.jpg";

const Profil = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(currentUser());
    }, [dispatch]);
    const user = useSelector((state) => state.userReducer.user);
    return (
        <div className="Profil">
            <div className="ProfilContainer">
                <img className="ImgProfil" src={ImgProfil} alt="" />
                <div className="ProfilContainerLeft">
                    <h1 className="ProfilTitle">{user.name}</h1>
                    <p className="ProfilText">{user.email}</p>
                </div>
            </div>
        </div>
    );
};

export default Profil;
