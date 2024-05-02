import React, { useEffect, useState } from "react";
// @ts-ignore
import hands from "assets/img/hands.png";
import LoginStyled from "./Login.styled";
import { login } from '../../lib/authSlice';
import { RootState } from 'lib/store';
import Action from "components/Action/Action";
import { useAppDispatch, useAppSelector } from "lib/hooks";
import { fetchUsers } from "lib/usersSlice";
import { useNavigate } from "react-router-dom";

interface Props {}
const Login: React.FC<Props> = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user, isAuthenticated } = useAppSelector((state: RootState) => state.authentication);
  const users = useAppSelector((state: RootState) => state.users.users);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('', )
    const user = users.find((u) => u.username === username && u.password === password);
    if (!user) {
      alert('Invalid email or password');
      return;
    }
    dispatch(login(user));
    navigate('/');
  };

  return (
    <LoginStyled>
      <div className="main-pic">
        <img alt="" src={hands} />
      </div>

      <form className="form" onSubmit={handleLogin}>
        <h1>Login</h1>
        <p>To continue using our platform, you need to login an account.</p>

        <div className="form__main">
          <div className="form__main-info">
            <p>Username</p>
            <input
              type="text"
              name="username"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="form__main-info">
            <p>Password</p>
            <input
              type="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <span>Forgot password?</span>
        <Action nextAction="Registration" action="LOGIN" width={"248px"} />
      </form>
    </LoginStyled>
  );
};

export default Login;
