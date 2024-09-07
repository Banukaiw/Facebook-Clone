import React from 'react'
import './leftpane.css'
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import GroupIcon from '@mui/icons-material/Group';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import FlagIcon from '@mui/icons-material/Flag';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BuildIcon from '@mui/icons-material/Build';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


export default function LeftPane() {
  return (
    <div className='leftpanebox'>
        <div className="leftpanecontainer">
            <div className="leftpanemenu">
                <li className='leftPaneMenuItem1'>
                    <img src='/images/1.jpg' className='leftLogo'></img>
                    <span className='leftpaemenutext'>Banuka Ishara</span>
                </li>
                <li className='leftPaneMenuItem'>
                    <MarkUnreadChatAltIcon sx={{ fontSize: 30 }} color="blue" className='leftpaemenuIcon'/>
                    <span className='leftpaemenutext'>Messages</span>
                </li>
                <li className='leftPaneMenuItem' >
                    <GroupIcon sx={{ fontSize: 30 }} className='leftpaemenuIcon'/>
                    <span className='leftpaemenutext'>Groups</span>
                </li>
                <li className='leftPaneMenuItem'>
                    <RssFeedIcon sx={{ fontSize: 30 }} className='leftpaemenuIcon'/>
                    <span className='leftpaemenutext'>Feeds</span>
                </li>
                <li className='leftPaneMenuItem'>
                    <FlagIcon sx={{ fontSize: 30 }} className='leftpaemenuIcon'/>
                    <span className='leftpaemenutext'>Pages</span>
                </li>
                <li className='leftPaneMenuItem'>
                    <CalendarMonthIcon sx={{ fontSize: 30 }} className='leftpaemenuIcon'/>
                    <span className='leftpaemenutext'>Events</span>
                </li>
                <li className='leftPaneMenuItem'>
                    <BuildIcon sx={{ fontSize: 30 }} className='leftpaemenuIcon'/>
                    <span className='leftpaemenutext'>Settings</span>
                </li>
                <li className='leftPaneMenuItem'>
                    <SportsEsportsIcon sx={{ fontSize: 30 }} className='leftpaemenuIcon'/>
                    <span className='leftpaemenutext'>Games</span>
                </li>
                <li className='leftPaneMenuItem'>
                    <NewspaperIcon sx={{ fontSize: 30 }} className='leftpaemenuIcon'/>
                    <span className='leftpaemenutext'>News</span>
                </li>
                <li className='leftPaneMenuItem'>
                    <WorkOutlineIcon sx={{ fontSize: 30 }} className='leftpaemenuIcon'/>
                    <span className='leftpaemenutext'>Jobs</span>
                </li>
                <li className='leftPaneMenuItem'>
                    <AddShoppingCartIcon sx={{ fontSize: 30 }} className='leftpaemenuIcon'/>
                    <span className='leftpaemenutext'>Market</span>
                </li>

                <li className='leftPaneMenuItemLast'>
                    <KeyboardArrowDownIcon sx={{ fontSize: 30 }} className='leftpaemenuIcon'/>
                    <span className='leftpaemenutext'>See More</span>
                </li>

                <hr/>
                <div className='lefttext2'>
                    <h3>Your Shortcuts</h3>
                </div>
                <div className='lefttext2'>
                    <h3>Your Shortcuts</h3>
                </div>
                <div className='lefttext2'>
                    <h3>Your Shortcuts</h3>
                </div>

                
                
            </div>
        </div>
    </div>
  )
}
