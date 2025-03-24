import React from 'react';
import './style/Home.css';
import './MediaQueries/MediaQHome.css';

export default function Home() {
    return (
        <div className='dashboard-main'>
            <form action="">
                <div className="dashboard-container d-flex flex-column align-items-center">
                    <p className='dashboard-pickup-location mt-5 fw-semibold '>Pickup Location</p>
                    <div className="dashboard-input-container mt-2">
                        <input type="text" required className='dashboard-input-1' placeholder='Your Location' />
                        <input type="text" required className='dashboard-input-2' placeholder='Choose Destination' />
                    </div>
                    <p className='dashboard-pickup-date my-3 fw-semibold'>Pickup Date</p>
                    <div className="dashboard-dataTime-container">
                        <div className="dashboard-label-container">
                            <label htmlFor="chooseDate" className='chooseDate'>Choose Date</label>
                            <input type="date" required className='dashboard-input-date input-group bg-primary' />
                        </div>
                        <div className="dashboard-label-container">
                            <label htmlFor="chooseTime" className='chooseTime'>Choose Time</label>
                            <input type="time" required id='chooseTime' className='dashboard-input-time input-group bg-primary' />
                        </div>
                    </div>
                    <p className='dashboard-selectWeight my-3 fw-semibold'>Select your weight for allocating a suitable vehicle</p>
                    <div className="dashboard-weight-container ">
                        <label htmlFor="selectWeight" className='selectWeight'>Select Weight</label>
                        <input type="number" required className='dashboard-input-weight input-group' placeholder='Enter Weight' />
                    </div>
                </div>
            </form>
        </div>
    )
}
