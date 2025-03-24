import React, { useEffect, useRef } from 'react';
import './style/PageManagement.css';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

export default function PageManagement() {
    // quill page description
        const quillRef = useRef(null); // it will use in div.
        const quillInstance = useRef(null);  

        useEffect(() => {
            if (!quillInstance.current) { 
                // It will check if the condition is true or false.
                // If true, the condition runs, and Quill is initialized.
                // If false, the condition does not run, and Quill is not initialized.
                quillInstance.current = new Quill(quillRef.current, {
                    theme: 'snow',
                    modules: {
                        toolbar: [
                            [{ 'header': [1, 2, false] }],
                            ['bold', 'italic', 'underline'],
                            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                            ['link'],
                            ['clean']
                        ]
                    }
                });
            }
        }, []);
    // quill page description
    return (
        <div className='page-management-main'>
            <div className="page-management-container">
                <h5 className='mx-3 py-2'>Page Management</h5>
                <form action="">
                    <div className="page-management-input-main m-3">
                        <label htmlFor="SelectStatusLabel" className='page-management-label fw-bold ms-3 mt-3'>Page Use For?</label>
                            <div className="page-management-input-container mx-3 mt-1">
                                <input type="text" required id='SelectStatusLabel' className='page-management-input rounded-2 ps-2 py-1' placeholder='Select Status' />
                            </div>
                        <label htmlFor="SelectStatusLabel" className='page-management-label fw-bold ms-3 mt-3'>Page Status</label>
                            <div className="page-management-input-container mx-3 mt-1">
                                <input type="text" required id='SelectStatusLabel' className='page-management-input rounded-2 ps-2 py-1' placeholder='Select Status' />
                            </div>
                        {/* quill editor */}
                        <label className='page-management-label fw-bold ms-3 mt-3'>Page Description</label>
                            <div className="mx-3 mt-1">
                                <div ref={quillRef} className="quill-editor-container"></div>
                            </div>
                        {/* quill editor */}
                        <div className="page-btn-container mt-4 ps-3 py-3">
                            <button type="submit" className="page-btn fw-semibold btn btn-primary">Add Pages</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
