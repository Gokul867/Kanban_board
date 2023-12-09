// ScrollButton.js


import React, { useState } from 'react';
import './ScrollButton.css'


const ScrollButton = ({ onGroupingClick, onSortingClick }) => {
    const [showBox, setShowBox] = useState(false);
    const [optionValue, setValue] = useState('status')
    const [optionSort, setOptionSort] = useState('priority')
    const handleClick = () => {
        setShowBox(!showBox);
    };
    const setVal = (options) => {
        setValue(options.target.value);
        onGroupingClick(options.target.value);
    }
    const setSort = (options) => {
        setOptionSort(options.target.value);
        onSortingClick(options.target.value);
    }
    return (
        <div className="scroll-button">
            <div className="button-group">
                <div>
                    <div className='display'>
                        <button className='display_button' onClick={handleClick}>Display <i class="fa fa-angle-down"></i></button>
                    </div>
                    {showBox && (
                        <div className='exterior_box'>
                            <br></br>
                            <div className='Box'>
                                <div className="grouping-options">
                                    <label htmlFor="grouping" className='group' >Grouping:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <select value={optionValue} onChange={setVal} className='button'>
                                        <option value="status">Status</option>
                                        <option value="user">User</option>
                                        <option value="priority">Priority</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="ordering" className='order' >Ordering:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <select value={optionSort} onChange={setSort} className='button'>
                                        <option value="priority">Priority</option>
                                        <option value="Title">Title</option>
                                    </select>
                                </div>
                            </div>
                            <br></br>
                        </div>
                    )}
                </div>


            </div>

        </div>
    );
};

export default ScrollButton;
