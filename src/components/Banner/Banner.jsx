import React from 'react';
import './style/Banner.css';

export default function Banner() {
  return (
    <div className='banner-management-main'>
        <div className="banner-management-container">
            <h5 className='mx-3 py-2'>Banner Management</h5>
            <form action="">
                <div className="banner-management-input-main m-3">
                    <label htmlFor="EnterCodeLabel" className='banner-management-label fw-bold ms-3 mt-3'>Banner Image</label>
                    <div className="banner-management-input-container mx-3 mt-1">
                        <input type="file" required id="EnterCodeLabel" className="form-control form-control-sm banner-management-input rounded-2 ps-2 py-1'" />
                    </div>
                    <label htmlFor="SelectStatusLabel" className='banner-management-label fw-bold ms-3 mt-3'>Banner Use For?</label>
                    <div className="banner-management-input-container mx-3 mt-1">
                        <input type="text" required id='SelectStatusLabel' className='banner-management-input rounded-2 ps-2 py-1' placeholder='Select Status' />
                    </div>
                    <label htmlFor="SelectStatusLabel" className='banner-management-label fw-bold ms-3 mt-3'>Banner Status</label>
                    <div className="banner-management-input-container mx-3 mt-1">
                        <input type="text" required id='SelectStatusLabel' className='banner-management-input rounded-2 ps-2 py-1' placeholder='Select Status' />
                    </div>
                    {/* <hr className='my-1' /> */}
                    <div className="banner-btn-container mt-4 ps-3 py-3">
                        <button type="submit" class="banner-btn fw-semibold btn btn-primary">Add Banner</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}
