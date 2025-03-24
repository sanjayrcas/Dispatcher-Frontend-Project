import React, {useState} from 'react';
import './style/BannerList.css';
import TableData from '../Banner List Management Two/Table Data/TableData';
import SearchIcon from '@mui/icons-material/Search';
import SearchOffIcon from '@mui/icons-material/SearchOff';
import { FunnelSimple } from 'phosphor-react';
import { FunnelSimpleX } from '@phosphor-icons/react';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';
import ReorderIcon1 from '@mui/icons-material/DensitySmall';
import ReorderIcon2 from '@mui/icons-material/Reorder';
import ReorderIcon3 from '@mui/icons-material/Menu';
import ReorderIcon4 from '@mui/icons-material/DragHandle';
import FullscreenIcon from '@mui/icons-material/Fullscreen'; 
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit'; 
import {Switch, Tooltip} from '@mui/material';
import {InputAdornment} from '@mui/material';
import { TextField } from '@mui/material';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function BannerList() {

    const [showSearch, setShowSearch] = useState(false);
    const handleSearchClick = () => {
        setShowSearch((prev) => !prev);
    };
  const [searchQuery,setSearchQuery] = React.useState('');

    const [isFullScreen, setIsFullScreen] = useState(false);
    const toggleFullScreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            setIsFullScreen(true);
        } else if (document.exitFullscreen){
            document.exitFullscreen();
            setIsFullScreen(false);
        }
    };

    const [columnVisibility, setColumnsVisibility] = useState({
        firstName : false,
        lastName : false,
        address : false,
        city : false,
        state : false,
        edit : false,
    });

    const toggleColumn = (column) =>{   // column is taken from this "firstName"  => toggleColumn("firstName")}
        setColumnsVisibility((prev) => ({  // (prev) It takes prev (the previous state) as an argument.
            ...prev,
            [column]: !prev[column],
        }))
    }

    const handleHide = () =>{
        setColumnsVisibility({
            firstName : false,
            lastName : false,
            address : false,
            city : false,
            state : false,
            edit : false,
        })
    }
    const handleShow = () =>{
        setColumnsVisibility({
            firstName : true,
            lastName : true,
            address : true,
            city : true,
            state : true,
            edit : true,
        })
    }

    const [funnelFilter, setFunnelFilter] = useState(false);
    
    const [rowHeight, setRowHeight] = useState(40);
    const getRowHeightIcon = () =>{
        if (rowHeight === 40) return <ReorderIcon1 className="List-icon" style={{ fontSize: "20px" }} />;
        if (rowHeight === 60) return <ReorderIcon2 className="List-icon" style={{ fontSize: "20px" }} />;
        if (rowHeight === 80) return <ReorderIcon3 className="List-icon" style={{ fontSize: "20px" }} />;
        if (rowHeight === 90) return <ReorderIcon4 className="List-icon" style={{ fontSize: "20px" }} />;
    };


    return (
        <div>
            <div className='banner-list-management-main'>
                <div className="banner-list-management-container">
                    <h5 className='mx-3 py-2'>Banner List Management</h5>
                    <div className="banner-list-header-container mx-3">
                        <div className="banner-list-items-container">
                            <div className="textfieldContainer">
                               {showSearch &&(
                                    <TextField
                                    id="input-with-icon-textfield"
                                    placeholder="Search"
                                    className="text-field-box"
                                    variant="standard"
                                    autoFocus
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <SearchIcon className="input-search-icon" />
                                            </InputAdornment>
                                        ),
                                    }}
                                    />
                                )}
                            </div>
                            <div className="icon-container-main">
                                <Tooltip title={showSearch ? "Close Search" : "Search"} arrow placement="bottom">
                                    <div className="iconContainer" onClick={handleSearchClick} >
                                        {showSearch ? <SearchOffIcon className="search-off-icon" /> : <SearchIcon className="search-icon" />}
                                    </div>
                                </Tooltip>

                                <Tooltip title={funnelFilter ? "Close Filter" : "Filter"} arrow placement="bottom">
                                    <div className="iconContainer" onClick={()=>{
                                        setFunnelFilter(funnelFilter ? false : true)
                                    }}>
                                        {/* <FunnelSimple className="FunnelSimple-icon"  /> */}
                                       {funnelFilter ? <FunnelSimpleX className="FunnelSimpleX-icon" /> : <FunnelSimple className="FunnelSimple-icon"/>}
                                    </div>
                                </Tooltip>
                                
                               <div className="dropdown">
                                    <button className="btn rounded-circle border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <div className="iconContainer">
                                            <ViewColumnIcon  className="ViewColumnIcon-icon" />
                                        </div>
                                    </button>
                                    <ul className="dropdown-menu view-column-dropdown ">
                                        <div className="viewColumnBtn">
                                            <button className='btn p-0 hide-all fw-semibold' onClick={handleHide} >HIDE ALL</button>
                                            <button className='btn p-0 show-all fw-semibold' onClick={handleShow} >SHOW ALL</button>
                                        </div>
                                        <hr className='my-2' />
                                        <li className='fw-semibold'>
                                            <Switch {...label} checked={columnVisibility.firstName} onClick={() => toggleColumn("firstName")}/>First Name
                                        </li>
                                        <li className='fw-semibold'>
                                            <Switch {...label} checked={columnVisibility.lastName} onClick={() => toggleColumn("lastName")}/> Last Name
                                        </li>
                                        <li className='fw-semibold'>
                                            <Switch {...label} checked={columnVisibility.address} onClick={() => toggleColumn("address")}/> Address
                                        </li>
                                        <li className='fw-semibold'>
                                            <Switch {...label} checked={columnVisibility.city} onClick={() => toggleColumn("city")}/> City
                                        </li>
                                        <li className='fw-semibold'>
                                            <Switch {...label} checked={columnVisibility.state} onClick={() => toggleColumn("state")}/> State
                                        </li>
                                        <li className='fw-semibold'>
                                            <Switch {...label} checked={columnVisibility.edit} onClick={() => toggleColumn("edit")}/> Edit
                                        </li>
                                    </ul>
                                </div>
                                <div className="iconContainer" onClick={() => {
                                    setRowHeight((prevHeight) => {
                                        if (prevHeight === 40) return 60;
                                        if (prevHeight === 60) return 80;
                                        if (prevHeight === 80) return 90;
                                        return 40;
                                    });
                                }}>
                                    {getRowHeightIcon()}
                                </div>

                                <Tooltip title={isFullScreen ? "Exit Full Screen" : "Full Screen"} arrow placement="bottom">
                                    <div className="iconContainer" onClick={toggleFullScreen} >
                                        {isFullScreen ? <FullscreenExitIcon className="FullscreenExitIcon-icon" /> : <FullscreenIcon className="FullscreenIcon-icon" />}
                                    </div>
                                </Tooltip>
                            </div>
                        </div>
                        {/* <TableData funnelFilter={funnelFilter} setFunnelFilter={setFunnelFilter} rowHeight={rowHeight} searchQuery={searchQuery} /> */}
                        {/* <TableData/> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
