import React from 'react';
import './style/CountryCode.css';
    
export default function CountryCode() {
        return (
            <div className='counter-code-main'>
                <div className="counter-code-container">
                    <h5 className='mx-3 py-2'>Counter Code Management</h5>
                    <form action="">
                        <div className="counter-code-input-main m-3">
                            <label htmlFor="EnterCodeLabel" className='counter-code-label fw-bold ms-3 mt-3'>Enter Code</label>
                            <div className="counter-code-input-container mx-3 mt-1">
                                <input type="text" required id='EnterCodeLabel' className='counter-code-input rounded-2 ps-2 py-1' placeholder='Enter Title' />
                            </div>
                            <label htmlFor="SelectStatusLabel" className='counter-code-label fw-bold ms-3 mt-3'>Select Status</label>
                            <div className="counter-code-input-container mx-3 mt-1">
                                <input type="text" required id='SelectStatusLabel' className='counter-code-input rounded-2 ps-2 py-1' placeholder='Choose..' />
                            </div>
                            {/* <hr className='my-1' /> */}
                            <div className="counter-btn-container mt-4 ps-3 py-3">
                                <button type="submit" class="counter-code-btn fw-semibold btn btn-primary">Add Country Code</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
}
