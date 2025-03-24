import React from 'react';
import './style/Province.css';

export default function Province() {
  return (
    <div className='Province-management-main'>
        <div className="Province-management-container">
            <h5 className='mx-3 py-2'>Province Management</h5>
            <form action="">
                <div className="Province-management-input-main m-3">
                    <label htmlFor="EnterCodeLabel" className='Province-management-label fw-bold ms-3 mt-3'>Province Name</label>
                    <div className="Province-management-input-container mx-3 mt-1">
                        <input type="text" required id='SelectStatusLabel' className='Province-management-input rounded-2 ps-2 py-1' placeholder='Enter Title' />
                    </div>
                    <label htmlFor="SelectStatusLabel" className='Province-management-label fw-bold ms-3 mt-3'>Province Image</label>
                    <div className="Province-management-input-container mx-3 mt-1">
                        <input type="file" required id="EnterCodeLabel" className="form-control form-control-sm Province-management-input rounded-2 ps-2 py-1'" />
                    </div>
                    <label htmlFor="SelectStatusLabel" className='Province-management-label fw-bold ms-3 mt-3'>Province Status</label>
                    <div className="Province-management-input-container mx-3 mt-1">
                        <input type="text" required id='SelectStatusLabel' className='Province-management-input rounded-2 ps-2 py-1' placeholder='Select Status' />
                    </div>
                    {/* <hr className='my-1' /> */}
                    <div className="Province-btn-container mt-4 ps-3 py-3">
                        <button type="submit" class="Province-btn fw-semibold btn btn-primary">Add Province</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}
