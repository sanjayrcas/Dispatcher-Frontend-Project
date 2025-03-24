import React from 'react';
import './Style/Dashboard.css';
import './MediaQueries/MediaQDashboard.css';
import { Link } from 'react-router-dom';
import banner1 from './Images/banner-color-2.png';
import LorryOwners from './Images/lorry-owner-list-3.png';
import AcceptedLoads from './Images/accepted load -2.png';
import TotalSales from './Images/total sales -2.png';
import completedPayout from  './Images/completed payout -1.png';
import PickupLoad from './Images/pickup load -1.png';
import States from './Images/states -1.png';
import TotalLorry from './Images/total lorry-1.png';
import TotalEarnings from './Images/total-earnings-1.png';
import Transporters from './Images/transportation-1.png';
import CompletedLoad from './Images/completed loads-2.png';
import TotalPages from './Images/total-pages-1.png';
import PendingPayouts from './Images/pending payouts-1.png';
import TotalFaq from './Images/total faq-1.png';
import PendingLoads from './Images/pending Loads-1.png';
import CancelledOrders from './Images/cancelled order-1.png';

export default function Dashboard() {
    const names = [
        {
            table1 : "Banners",
            table1Data1 : 7,
            table1Icons : banner1
        },
        {
            table1 : "States",
            table1Data1 : 30,
            table1Icons : States
        },
        {
            table1 : "Transporters",
            table1Data1 : 37,
            table1Icons : Transporters
        },
        {
            table1 : "Total FAQ",
            table1Data1 : 32,
            table1Icons : TotalFaq
        },
        {
            table1 : "Lorry Owners",
            table1Data1 : 22,
            table1Icons : LorryOwners
        },
        {
            table1 : "Total Lorry",
            table1Data1 : 21,
            table1Icons :  TotalLorry
        },
        {
            table1 : "Total pages",
            table1Data1 : 14,
            table1Icons :  TotalPages
        },
        {
            table1 : "Pending Loads",
            table1Data1 : 19,
            table1Icons :  PendingLoads
        },
        {
            table1 : "Accepted Loads",
            table1Data1 : 8,
            table1Icons : AcceptedLoads
        },
        {
            table1 : "Pickup Load",
            table1Data1 : 2,
            table1Icons :  PickupLoad
        },
        {
            table1 : "Completed Load",
            table1Data1 : 11,
            table1Icons :  CompletedLoad
        },
        {
            table1 : "Cancelled Load",
            table1Data1 : 15,
            table1Icons : CancelledOrders
        },
        {
            table1 : "Total sales",
            table1Data1 : "1000$",
            table1Icons : TotalSales
        },
        {
            table1 : "Total Earnings",
            table1Data1 : "2000$",
            table1Icons : TotalEarnings
        },
        {
            table1 : "Pending Payouts",
            table1Data1 : "3000$",
            table1Icons : PendingPayouts
        },
        {
            table1 : "Completed Payout",
            table1Data1 : "4000$",
            table1Icons : completedPayout
        },
    ]
    return (
        <div className='dashboard-items-main pt-3'>
            <div className="dashboard-items-container">
                <div className="dashboard-items-header1 px-3 d-flex justify-content-between align-items-center">
                    <p className='dashboard-text fw-semibold my-2'>Dashboard</p>
                    <div className="dashboard-header-btn-container d-flex gap-3">
                        <Link to="#" className='Get-Earning-Report btn btn-primary fw-semibold'>Get Earning Report</Link>
                        <Link to="#" className='Check-Payment btn btn-secondary fw-semibold'>Check Payment</Link>
                    </div>
                </div>
                <div className="dashboard-items-header2 mt-3">
                    <div className="row gap-2 gap-lg-2 gap-md-2 gap-sm-2 justify-content-around">


                        {
                            names.map((item,index)=>{
                                return(
                                    <div key={index} className="col-12 col-sm-6 col-md-3 dashboard-items-col-1 py-1 d-flex justify-content-between align-items-center">
                                        <div className="dashboard-items-datas1">
                                            <p className='Banners-text fw-semibold'>{item.table1}</p>
                                            <p className='Banners-count'>{item.table1Data1}</p>
                                        </div>
                                        <div className="dashboard-items-datas-icons">
                                            <img src={item.table1Icons} alt={item.table1} width={30} />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
