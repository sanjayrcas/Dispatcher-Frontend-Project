import React from 'react';
import './style/SidebarItem.css';
import { Link } from 'react-router-dom';
import { CaretDown, Globe, Truck } from 'phosphor-react';
import HomeLine from '../Sidebar/Images/house-line-bold.png';
import Clipboard from '../Sidebar/Images/clipboard-icon.png';
import HomeDashboard from '../Sidebar/Images/home dashboard.png';
import Banner1 from '../Sidebar/Images/banner-1.png';
import ProvinceLocation4 from '../Sidebar/Images/province-location-4.png';
import Page from '../Sidebar/Images/page-1.png';
import FAQ1 from '../Sidebar/Images/faq-1.png';
import LoadOrder from '../Sidebar/Images/load-order-1.png';
import Minus from '../Sidebar/Images/minus-dash.png';
import PaymentMethod from '../Sidebar/Images/payment-method-2.png';
import TransporterList from '../Sidebar/Images/transporter-list-1.png';
import LorryOwnerList from '../Sidebar/Images/lorry-owner-list-2.png';
import LorryList from '../Sidebar/Images/Lorry-list.png';
import Settings from '../Sidebar/Images/setting-2.png';

export default function SidebarItem() {
    const sidebarDataNormal1 = [
        {
            name: "Home",
            icons: <img src={HomeLine} className='sidebar-data-normal-icons me-3' width={18} alt="HomeLine" />,
            linkPaths1: "/Home"
        },
        {
            // name: "Orders",
            name: "Orders",
            icons: <img src={Clipboard} className='sidebar-data-normal-icons me-3' width={18} alt="Clipboard" />,
            // linkPaths1: "/Orders"
        },
        {
            name: "Dashboard",
            icons: <img src={HomeDashboard} className='sidebar-data-normal-icons me-3' width={18} alt="HomeDashboard" />,
            linkPaths1: "/Dashboard"
        },
    ]
    const sidebarData = [
        {
            name: "Banner",
            icons: <img src={Banner1} className='sidebar-side-icons me-3' width={18} alt="Banner1" />,
            caretDown: <CaretDown size={18} color="#212529" weight="bold" className='caretDownIcon' />,
            dashIcon: <img src={Minus} className='Minus-icons me-3' width={16} alt="Page" />,
            subList: [
                { data: "Add Banner", sublink: "/Banner" },
                // { data: "List Banner", sublink: "/BannerList" }
                { data: "List Banner", sublink: "/BlmTable" }
            ]
        },
        {
            name: "Province",
            icons: <img src={ProvinceLocation4} className='sidebar-side-icons me-3' width={18} alt="ProvinceLocation4" />,
            caretDown: <CaretDown size={18} color="#212529" weight="bold" className='caretDownIcon' />,
            dashIcon: <img src={Minus} className='Minus-icons me-3' width={16} alt="Page" />,
            subList: [
                { data: "Add Banner", sublink: "/Province" },
                { data: "List Banner", sublink: "/ProvinceManagementTable" }
            ]
        },
        {
            name: "Vehicle",
            icons: <Truck size={20} className='sidebar-side-icons me-3' color="#212529" weight="bold" />,
            caretDown: <CaretDown size={18} color="#212529" weight="bold" className='caretDownIcon' />,
            dashIcon: <img src={Minus} className='Minus-icons me-3' width={16} alt="Page" />,
            subList: [
                { data: "Add Banner", sublink: "/VehicleManagement" },
                { data: "List Banner", sublink: "/VehicleManagementTable" }
            ]
        },
        {
            name: "Country Code",
            icons: <Globe size={20} className='sidebar-side-icons me-3' color="#212529" weight="bold" />,
            caretDown: <CaretDown size={18} color="#212529" weight="bold" className='caretDownIcon' />,
            dashIcon: <img src={Minus} className='Minus-icons me-3' width={16} alt="Page" />,
            subList: [
                { data: "Add Banner", sublink: "/CountryCode" },
                { data: "List Banner", sublink: "/CountryCodeTable" }
            ]
        },
        {
            name: "Page",
            icons: <img src={Page} className='sidebar-side-icons me-3' width={18} alt="Page" />,
            caretDown: <CaretDown size={18} color="#212529" weight="bold" className='caretDownIcon' />,
            dashIcon: <img src={Minus} className='Minus-icons me-3' width={16} alt="Page" />,
            subList: [
                { data: "Add Banner", sublink: "/PageManagement" },
                { data: "List Banner", sublink: "/PageManagementTable" },
                // { data: "List Banner", sublink: "/BannerListManagement" }
            ]
        },
        {
            name: "FAQ",
            icons: <img src={FAQ1} className='sidebar-side-icons me-3' width={18} alt="FAQ1" />,
            caretDown: <CaretDown size={18} color="#212529" weight="bold" className='caretDownIcon' />,
            dashIcon: <img src={Minus} className='Minus-icons me-3' width={16} alt="Page" />,
            subList: [
                { data: "Add Banner", sublink: "/Faq" },
                { data: "List Banner", sublink: "/FaqManagementTable" }
            ]
        },
        {
            name: "Load Order",
            icons: <img src={LoadOrder} className='sidebar-side-icons me-3' width={18} alt="LoadOrder" />,
            caretDown: <CaretDown size={18} color="#212529" weight="bold" className='caretDownIcon' />,
            dashIcon: <img src={Minus} className='Minus-icons me-3' width={16} alt="Page" />,
            subList: [
                { data: "Pending Order", sublink: "/PendingOrderTable" },
                { data: "Accepted Order", sublink: "/AcceptedOrderTable" },
                { data: "Pickup Order", sublink: "/PickupOrderTable" },
                { data: "Completed Order", sublink: "/CompletedOrderTable" },
                { data: "Cancelled Order", sublink: "/CancelledOrderTable" }
            ]
        },
    ]
    const sidebarDataNormal2 = [
        {
            name: "Payment Method",
            icons: <img src={PaymentMethod} className='sidebar-data-normal-icons me-3' width={18} alt="HomeDashboard" />,
        },
        {
            name: "Transporter List",
            icons: <img src={TransporterList} className='sidebar-data-normal-icons me-3' width={18} alt="HomeDashboard" />,
        },
        {
            name: "Lorry Owner List",
            icons: <img src={LorryOwnerList} className='sidebar-data-normal-icons me-3' width={18} alt="HomeDashboard" />,
        },
        {
            name: "Lorry List",
            icons: <img src={LorryList} className='sidebar-data-normal-icons me-3' width={18} alt="HomeDashboard" />,
        },
        {
            name: "Settings",
            icons: <img src={Settings} className='sidebar-data-normal-icons me-3' width={18} alt="HomeDashboard" />,
            linkPaths3: "/Settings"
        },
    ]

    return (
        <div className='sidebar-item-main'>
            <div className="sidebar-item-container">
                <div className="sidebar-data-three">
                    {
                        sidebarDataNormal1.map((item, index) => {
                            return (
                                <div className="sidebar-data-three-container" key={index}>
                                    <Link to={item.linkPaths1} className='text-decoration-none d-flex align-items-center'>
                                        {item.icons}
                                        <span className='sidebar-data-three-link ms-0'>{item.name}</span>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="sidebar-item-accordion-container accordion accordion-flush" id="accordionFlushExample">
                    {
                        sidebarData.map((item, index) => {
                            const collapseId = `flush-collapse${index + 1}`;
                            return (
                                <div className="sidebar-item-accordion-item accordion-item border-0" key={index}>
                                    <h2 className="accordion-header">
                                        <button className="sidebar-accordion-btn accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${collapseId}`} aria-expanded="false" aria-controls={collapseId}>
                                            {item.icons}
                                            <span className='sidebar-items-names'>{item.name}</span>
                                            {item.caretDown}
                                        </button>
                                    </h2>
                                    <div id={collapseId} className="sidebar-item-accordion-collapse accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        {
                                            item.subList && (item.subList.map((subitem) => {
                                                return (
                                                    <div className="sidebar-item-body accordion-body" key={`${item.name}-${subitem.data}`}>
                                                        <Link to={subitem.sublink} className='text-decoration-none sidebar-dropdown-list'>
                                                            {item.dashIcon}
                                                            {subitem.data}
                                                        </Link>
                                                    </div>
                                                )
                                            }))
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="sidebar-data-three">
                    {
                        sidebarDataNormal2.map((item, index) => {
                            return (
                                <div className="sidebar-data-three-container" key={index}>
                                    <Link to={item.linkPaths3} className='text-decoration-none d-flex align-items-center'>
                                        {item.icons}
                                        <span className='sidebar-data-three-link ms-0'>{item.name}</span>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}


