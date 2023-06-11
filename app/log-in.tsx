import React, { useState } from "react";
import { logOut, logIn, toggleModerator } from "./redux/features/authSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./redux/store";
import { useAppSelector } from "./redux/features/authSlice";

const Login = () => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const isAuth = useAppSelector((state) => state.authReducer.value.isAuth);

  const onClickLogin = () => {
    dispatch(logIn(username));
  };

  const onClickToggle = () => {
    dispatch(toggleModerator());
  };

  const onClickLogout = () => {
    dispatch(logOut());
  };

  return (
    <div>
      <input type="text" onChange={(e) => setUsername(e.target.value)} />
      <br />
      <button onClick={onClickLogin}>Log In </button>
      <br />
      <button onClick={onClickLogout}>Log Out</button>
      <br />
      {isAuth && (
        <button onClick={onClickToggle}>Toggle Moderator Status</button>
      )}
    </div>
  );
};

export default Login;
