import React from 'react';
import './Style/Dispatcher.css';
import './MediaQueries/MediaQDispatcher.css';
import dispatcherLoginImage from './Image/courier1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import dispatcherLoginLogoImg from './Image/DispatcherLogo.png';

export default function Dispatcher() {
  return (
    <div className='dispatcher-login-container'>
        <div className="container-fluid dispatcher-login-main">
            <div className="row dispatcher-login-row">
                <div className="col-md-5 d-sm-none d-none d-md-block dispatcher-login-image-container">
                    <img src={dispatcherLoginImage} alt="Login" className="img-fluid dispatcher-login-image" />
                </div>
                <div className="col-md-7 dispatcher-login-form-container">
                    <div className="dispatcher-login-form-main-container">
                        <div className="dispatcher-login-logo-container">
                            <img src={dispatcherLoginLogoImg} alt="dispatcherLogo" className='img-fluid dispatcher-login-logo-img' />
                        </div>
                        <form className='dispatcher-login-form'>
                            <h5 className='dispatcher-login-h1'>Login</h5>
                            <p className='dispatcher-welcome-back'>Welcome back! log in to your account</p>
                            <label htmlFor="dispatcher-username" className='dispatcher-label-username'>Username</label>
                            <div className="input-group flex-nowrap dispatcher-input-container">
                                <span className="input-group-text dispatcher-span-icon-container" id="addon-wrapping">
                                    <FontAwesomeIcon icon={faUser} className='dispatcher-icon-user' />
                                </span>
                                <input type="text" id='dispatcher-username' required className="form-control dispatcher-login-input-username" placeholder="Enter Username" aria-label="username" aria-describedby="addon-wrapping" />
                            </div>
                            <label htmlFor="dispatcher-password" className='dispatcher-label-password'>Password</label>
                            <div className="input-group flex-nowrap dispatcher-input-container">
                                <span className="input-group-text dispatcher-span-icon-container" id="addon-wrapping">
                                    <FontAwesomeIcon icon={faKey} className='dispatcher-icon-key' />
                                </span>
                                <input type="password" id='dispatcher-password' required className="form-control dispatcher-login-input-password" placeholder="Enter Password" aria-label="password" aria-describedby="addon-wrapping" />
                            </div>
                            <div className="dispatcher-signin-btn-container">
                                <button type="submit" className="btn btn-primary dispatcher-signin-btn">Sign In</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
