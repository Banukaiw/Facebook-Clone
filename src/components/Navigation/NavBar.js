import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import VideogameAssetOutlinedIcon from '@mui/icons-material/VideogameAssetOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import "./navbar.css"

export default function NavBar() {
  return (
    
    <div className="navBarBox">
        <div className="navBarLeft">
            
            <div className="logoIcon">
                <img src='/images/logo1.jpg' alt=''/>
            </div>
            <div className="searchBarBox">
                <SearchIcon className='searchIcon'/>
                <input type="text" className="searchInput" placeholder='Search Facebook' />
            </div>
        </div>


        <div className="navBarCenter">
            <div className="navBarIcon">
                        <div className="EachIcon"><HomeOutlinedIcon sx={{ fontSize: 35 }} /> </div>
                        <div className="EachIcon"><OndemandVideoOutlinedIcon sx={{ fontSize: 35 }} /></div>
                        <div className="EachIcon"><StorefrontOutlinedIcon sx={{ fontSize: 35 }} /></div>
                        <div className="EachIcon"><GroupsOutlinedIcon sx={{ fontSize: 35 }} /></div>
                        <div className="EachIcon"><VideogameAssetOutlinedIcon sx={{ fontSize: 35 }} /></div>
    
            </div>
       </div>


        <div className="navBarRight">                     
                <div className="navBarIcon">                 
                    <div className="EachIcon">
                     <WidgetsOutlinedIcon  sx={{ fontSize: 35 }}/>
                    </div>
                     <div className="EachIcon">
                     <EmailOutlinedIcon  sx={{ fontSize: 35 }}/>  
                    </div>
                     <div className="EachIcon">
                     <NotificationsIcon  sx={{ fontSize: 35 }}/>
                    </div>
                </div>      
                <div className="pic">
                    <img src="/images/1.jpg" alt="" className="profilePicImg" />
                </div> 
        </div>
    </div>
  )
}
