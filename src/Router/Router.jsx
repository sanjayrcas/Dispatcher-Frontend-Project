import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dispatcher from '../components/LoginPage/Dispatcher';
import Home from '../components/Home/Home';
import Dashboard from '../components/Dashboard/Dashboard';
import Banner from '../components/Banner/Banner';
// import BannerList from '../components/Banner List Management Two/BannerList';
import BlmTable  from '../components/Banner List Management Two/Table Data/BlmTable'
import Province from '../components/Province Management/Province';
import ProvinceManagementTable  from '../components/Province Management/Province Management Table/ProvinceManagementTable'
import VehicleManagement from '../components/Vehicle Management/VehicleManagement';
import CountryCode from '../components/Country code/CountryCode';
import CountryCodeTable from '../components/Country code/Country Code Table/CountryCodeTable';
import PageManagement from '../components/Page Management/PageManagement';
import Faq from '../components/FAQ Management/Faq';
import Settings from '../components/Settings Management/Settings';
// import Orders from '../components/Orders/Orders';
import VehicleManagementTable from '../components/Vehicle Management/Vehicle Management Table/VehicleManagementTable';
import PageManagementTable from '../components/Page Management/Page Management Table/PageManagementTable';
import FaqManagementTable from '../components/FAQ Management/FAQ Management Table/FaqManagementTable';
import PendingOrderTable from '../components/Lord Order/Load Order Table/PendingOrderTable';
import AcceptedOrderTable from '../components/Lord Order/Load Order Table/AcceptedOrderTable';
import PickupOrderTable from '../components/Lord Order/Load Order Table/PickUpOrderTable';
import CompletedOrderTable from '../components/Lord Order/Load Order Table/CompletedOrderTable';
import CancelledOrderTable from '../components/Lord Order/Load Order Table/CancelledOrderTable';

export default function Router() {
    return (
        <div>
            <Routes>
                <Route path='/Login' element={<Dispatcher/>} />
                <Route path='/Home' element={<Home/>} />
                <Route path='/Dashboard' element={<Dashboard/>} />
                <Route path='/Banner' element={<Banner/>} />
                {/* <Route path='/BannerList' element={<BannerList/>} /> */}
                <Route path='/BlmTable' element={<BlmTable/>} />
                <Route path='/Province' element={<Province/>} />
                <Route path='/ProvinceManagementTable' element={<ProvinceManagementTable/>} />
                <Route path='/VehicleManagement' element={<VehicleManagement/>} />
                <Route path='/VehicleManagementTable' element={<VehicleManagementTable/>} />
                <Route path='/CountryCode' element={<CountryCode/>} />
                <Route path='/CountryCodeTable' element={<CountryCodeTable/>} />
                <Route path='/PageManagement' element={<PageManagement/>} />
                <Route path='/PageManagementTable' element={<PageManagementTable/>} />
                <Route path='/Faq' element={<Faq/>} />
                <Route path='/FaqManagementTable' element={<FaqManagementTable/>} />
                <Route path='/PendingOrderTable' element={<PendingOrderTable/>} />
                <Route path='/AcceptedOrderTable' element={<AcceptedOrderTable/>} />
                <Route path='/PickupOrderTable' element={<PickupOrderTable/>} />
                <Route path='/CompletedOrderTable' element={<CompletedOrderTable/>} />
                <Route path='/CancelledOrderTable' element={<CancelledOrderTable/>} />
                <Route path='/Settings' element={<Settings/>} />
                {/* <Route path='#' element={<Orders/>} /> */}
            </Routes>
        </div>
    )
}
