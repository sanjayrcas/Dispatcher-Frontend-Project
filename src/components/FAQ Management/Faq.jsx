import React from 'react';
import './style/Faq.css';

export default function Faq() {
    return (
        <div className='faq-management-main'>
            <div className="faq-management-container">
                <h5 className='mx-3 py-2'>FAQ Management</h5>
                <form action="">
                    <div className="faq-management-input-main m-3">
                        <label htmlFor="EnterCodeLabel" className='faq-management-label fw-bold ms-3 mt-3'>Enter Question</label>
                        <div className="faq-management-input-container mx-3 mt-1">
                            <input type="text" required id='EnterCodeLabel' className='faq-management-input rounded-2 ps-2 py-1' placeholder='Enter Question' />
                        </div>
                        <label htmlFor="SelectStatusLabel" className='faq-management-label fw-bold ms-3 mt-3'>Enter Answer</label>
                        <div className="faq-management-input-container mx-3 mt-1">
                            <input type="text"  required id='SelectStatusLabel' className='faq-management-input rounded-2 ps-2 py-1' placeholder='Enter Answer' />
                        </div>
                        <label htmlFor="SelectStatusLabel" className='faq-management-label fw-bold ms-3 mt-3'>Select Status</label>
                        <div className="faq-management-input-container mx-3 mt-1">
                            <input type="text" required id='SelectStatusLabel' className='faq-management-input rounded-2 ps-2 py-1' placeholder='Choose..' />
                        </div>
                        {/* <hr className='my-1' /> */}
                        <div className="faq-btn-container mt-4 ps-3 py-3">
                            <button type="submit" class="faq-management-btn fw-semibold btn btn-primary">Add FAQ</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
