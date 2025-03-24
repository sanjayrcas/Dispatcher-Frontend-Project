import React from 'react';
import './style/Settings.css';

export default function Settings() {
    return (
        <div className='settings-management-main'>
            <div className="settings-management-container">
                <h5 className='mx-3 py-2'>Settings Management</h5>
                <form action="">
                    <div className="settings-management-input-main m-3">
                        <p className='settings-general-information ms-3 mt-2 fw-bold'>General Information</p>
                            <div className="settings-row row row-cols-1 row-cols-md-3 row-cols-sm-2 ">
                                <div className="settings-management-input-container col">
                                    <label htmlFor="SelectStatusLabel" className='settings-management-label fw-bold mt-2'>Website Name</label>
                                    <input type="text" required id='SelectStatusLabel' className='settings-management-input rounded-2 ps-2 py-1' placeholder='Enter Store Name' />
                                </div>
                                <div className="settings-management-input-container col">
                                    <label htmlFor="SelectStatusLabel" className='settings-management-label fw-bold mt-2'>Website Image</label>
                                    <input type="file" required id="EnterCodeLabel" className="form-control form-control-sm  Vehicle-management-input rounded-2 ps-2 py-1" />
                                </div>
                                <div className="settings-management-input-container col">
                                    <label htmlFor="SelectStatusLabel" className='settings-management-label fw-bold mt-2'>Select TimeZone</label>
                                    <input type="text" required id='SelectStatusLabel' className='settings-management-input rounded-2 ps-2 py-1' placeholder='Select TimeZone' />
                                </div>
                                <div className="settings-management-input-container col">
                                    <label htmlFor="SelectStatusLabel" className='settings-management-label fw-bold mt-2'>Currency</label>
                                    <input type="text" required id='SelectStatusLabel' className='settings-management-input rounded-2 ps-2 py-1' placeholder='Enter Currency' />
                                </div>
                                <div className="settings-management-input-container col">
                                    <label htmlFor="SelectStatusLabel" className='settings-management-label fw-bold mt-3'>Minimum Payout for Lorry Owner</label>
                                    <input type="text" required id='SelectStatusLabel' className='settings-management-input rounded-2 ps-2 py-1' placeholder='Enter Payout for Lorry Owner' />
                                </div>
                            </div>
                        <p className='settings-general-information ms-3 mt-2 fw-bold'>Onesignal Information</p>
                            <div className="settings-row row row-cols-1 row-cols-md-3 row-cols-sm-2">
                                <div className="settings-management-input-container col">
                                    <label htmlFor="SelectStatusLabel" className='settings-management-label fw-bold mt-2'>Transporter App Onesignal App ID</label>
                                    <input type="text" required id='SelectStatusLabel' className='settings-management-input rounded-2 ps-2 py-1' placeholder='Enter User App Onesignal App ID' />
                                </div>
                                <div className="settings-management-input-container col">
                                    <label htmlFor="SelectStatusLabel" className='settings-management-label fw-bold mt-2'>Transporter App Onesignal Rest Api Key</label>
                                    <input type="text" required id='SelectStatusLabel' className='settings-management-input rounded-2 ps-2 py-1' placeholder='Enter User Boy App Onesignal Rest Api Key' />
                                </div>
                                <div className="settings-management-input-container col">
                                    <label htmlFor="SelectStatusLabel" className='settings-management-label fw-bold mt-2'>Transporter App Custom Ringtone Channel ID</label>
                                    <input type="text" required id='SelectStatusLabel' className='settings-management-input rounded-2 ps-2 py-1' placeholder='Enter User Boy App Onesignal Rest Api Key' />
                                </div>
                                <div className="settings-management-input-container col">
                                    <label htmlFor="SelectStatusLabel" className='settings-management-label fw-bold mt-2'>Transporter App Custom Ringtone Channel ID</label>
                                    <input type="text" required id='SelectStatusLabel' className='settings-management-input rounded-2 ps-2 py-1' placeholder='Enter User Boy App Onesignal Rest Api Key' />
                                </div>
                                <div className="settings-management-input-container col">
                                    <label htmlFor="SelectStatusLabel" className='settings-management-label fw-bold mt-2'>Transporter App Custom Ringtone Channel ID</label>
                                    <input type="text" required id='SelectStatusLabel' className='settings-management-input rounded-2 ps-2 py-1' placeholder='Enter User Boy App Onesignal Rest Api Key' />
                                </div>
                                <div className="settings-management-input-container col">
                                    <label htmlFor="SelectStatusLabel" className='settings-management-label fw-bold mt-2'>Transporter App Custom Ringtone Channel ID</label>
                                    <input type="text" required id='SelectStatusLabel' className='settings-management-input rounded-2 ps-2 py-1' placeholder='Enter User Boy App Onesignal Rest Api Key' />
                                </div>
                            </div>
                        <p className='settings-general-information ms-3 mt-2 fw-bold'>Onesignal Information</p>
                            <div className="settings-row row row-cols-1 row-cols-md-3 row-cols-sm-2">
                                <div className="settings-management-input-container col">
                                    <label htmlFor="SelectStatusLabel" className='settings-management-label fw-bold mt-2'>Transporter App Custom Ringtone Channel ID</label>
                                    <input type="text" required id='SelectStatusLabel' className='settings-management-input rounded-2 ps-2 py-1' placeholder='Enter User Boy App Onesignal Rest Api Key' />
                                </div>
                                <div className="settings-management-input-container col">
                                    <label htmlFor="SelectStatusLabel" className='settings-management-label fw-bold mt-2'>Transporter App Custom Ringtone Channel ID</label>
                                    <input type="text" required id='SelectStatusLabel' className='settings-management-input rounded-2 ps-2 py-1' placeholder='Enter User Boy App Onesignal Rest Api Key' />
                                </div>
                            </div>
                        <div className="settings-btn-container mt-4 ps-3 py-3">
                            <button type="submit" class="settings-btn fw-semibold btn btn-primary">Edit Settings</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
