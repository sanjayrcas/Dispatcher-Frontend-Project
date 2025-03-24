import React from 'react';
import './style/VehicleManagement.css';

export default function VehicleManagement() {
    return (
        <div className='Vehicle-management-main'>
            <div className="Vehicle-management-container">
                <h5 className='mx-3 py-2'>Vehicle Management</h5>
                <form action="">
                    <div className="Vehicle-management-input-main m-3">
                        <label htmlFor="SelectStatusLabel" className='Vehicle-management-label fw-bold ms-3 mt-3'>Vehicle Name</label>
                        <div className="Vehicle-management-input-container mx-3 mt-1">
                            <input type="text" required id='SelectStatusLabel' className='Vehicle-management-input rounded-2 ps-2 py-1' placeholder='Enter Title' />
                        </div>
                        <label htmlFor="SelectStatusLabel" className='Vehicle-management-label fw-bold ms-3 mt-3'>Vehicle Min Weight</label>
                        <div className="Vehicle-management-input-container mx-3 mt-1">
                            <input type="text" required id='SelectStatusLabel' className='Vehicle-management-input rounded-2 ps-2 py-1' placeholder='Enter Start Weight' />
                        </div>
                        <label htmlFor="SelectStatusLabel" className='Vehicle-management-label fw-bold ms-3 mt-3'>Vehicle Max Weight</label>
                        <div className="Vehicle-management-input-container mx-3 mt-1">
                            <input type="text" required id='SelectStatusLabel' className='Vehicle-management-input rounded-2 ps-2 py-1' placeholder='Enter Max Weight' />
                        </div>
                        <label htmlFor="EnterCodeLabel" className='Vehicle-management-label fw-bold ms-3 mt-3'>Vehicle Image</label>
                        <div className="Vehicle-management-input-container mx-3 mt-1">
                            <input type="file" required id="EnterCodeLabel" className="form-control form-control-sm  Vehicle-management-input rounded-2 ps-2 py-1'" />
                        </div>
                        <label htmlFor="SelectStatusLabel" className='Vehicle-management-label fw-bold ms-3 mt-3'>Vehicle Status</label>
                        <div className="Vehicle-management-input-container mx-3 mt-1">
                            <input type="text" required id='SelectStatusLabel' className='Vehicle-management-input rounded-2 ps-2 py-1' placeholder='Select Status' />
                        </div>
                        {/* <hr className='my-1' /> */}
                        <div className="Vehicle-btn-container mt-4 ps-3 py-3">
                            <button type="submit" class="Vehicle-btn fw-semibold btn btn-primary">Add Vehicle</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
