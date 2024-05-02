import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// @ts-ignore
import logo from "assets/img/logo.svg";
// @ts-ignore
import heart from 'assets/img/heart.svg';
// @ts-ignore
import bell from 'assets/img/bell.svg';
// @ts-ignore
import camera from 'assets/img/camera.svg';
import HeaderStyle from './Header.styled';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../lib/authSlice';
import { RootState } from 'lib/store';

function Header({ activePage }: { activePage: string }) {
  const user = useSelector((state: RootState) => state.authentication.user);
  const isAuthenticated = useSelector((state: RootState) => state.authentication.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    console.log('user', user);
    console.log('isAuthenticated', isAuthenticated);
  }, [isAuthenticated]);

  console.log('activePage', activePage)
  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };
  
  const isActive = (pageName: string) => activePage === pageName ? 'active-page' : '';

  return (
    <HeaderStyle>
      <div className="header">
        <div className="wrapper">
          <div className="container">
            <div className="header__logo">
              <Link to={'/'}>
                <img src={logo} alt="" />
              </Link>
              <h4>Ayirbasta</h4>
            </div>

            <div className="header__page">
              <ul>
                <Link to={'/'} className={isActive('products')}>
                  <li>Products</li>
                </Link>
                { isAuthenticated &&
                <>
                  <Link to={'/create/product'} className={isActive('create-product')}>
                    <li>Create product</li>
                  </Link>
                  <Link to={'/chat'} className={isActive('chat')}>
                    <li>Chat</li>
                  </Link>
                </>
                }
                
                <Link to={'/about'} className={isActive('about')}>
                  <li>About us</li>
                </Link>

              </ul>
            </div>

            <div className="header__action">
              <div className="button">
                <img src={heart} alt="" />
              </div>
              <div className="button">
                <img src={bell} alt="" />
              </div>



              {isAuthenticated ? (
                <>
                <div className="button">
                {
                  <Link to={'/trades'}>
                    <img src={user?.avatar} alt="" className='avatar'/>
                  </Link>
                }
                </div>
                <button onClick={handleLogout}>
                  Logout
                </button>
                </>
              ) : (
                <button>
                  <Link to={'/login'}>LOGIN</Link>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </HeaderStyle>
  );
}

export default Header;

