import React from 'react';
import { Link } from 'react-router-dom';
import '../Sidebar/style/SidebarDashboard.css';
import { CaretLeft } from 'phosphor-react';
import { List } from 'phosphor-react';
import sidebarLogoImg from '../LoginPage/Image/DispatcherLogo.png';
import SidebarItem from '../Sidebar/SidebarItem';
import NeedHelp from '../Sidebar/Images/need-help-3.png';

export default function SidebarDashboard() {
    return (
        <div className='sidebar-main'>
            <div className="sidebar-container">
                <div className='sidebar-offcanvas-container'>
                    <List type="button" className='sidebar-list-icon' data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling" />
                    <div className="offcanvas offcanvas-start sidebar-offcanvas" data-bs-scroll="true" data-bs-backdrop="false" tabIndex={0} id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                        <div className="offcanvas-header-container">
                            <div className="offcanvas-header1">
                                <img src={sidebarLogoImg} alt="sidebarLogoImg" className='sidebarLogoImg img-fluid' />
                            </div>
                            <div className="offcanvas-header2">
                                <CaretLeft className='sidebar-caret-icon'  data-bs-dismiss="offcanvas" aria-label="Close"/>
                            </div>
                        </div>
                        <div className="sidebar-offcanvas-body offcanvas-body">
                            <SidebarItem/>
                            <div className="need-help-container text-center">
                                <img src={NeedHelp} className='Sidebar-needHelp-img img-fluid'   alt="Need Help" />
                            </div>
                            <div className="sidebar-contact-us text-center mt-4">
                                <Link to={''} className='sidebar-contact-btn fw-semibold'>Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
