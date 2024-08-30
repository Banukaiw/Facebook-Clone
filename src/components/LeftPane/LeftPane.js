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


export default function LeftPane() {
  return (
    <div className='leftpanebox'>
        <div className="leftpanecontainer">
            <div className="leftpanemenu">
                <li className='leftPaneMenuItem'>
                    <MarkUnreadChatAltIcon className='leftpaemenuIcon'/>
                    <span className='leftpaemenutext'>Messages</span>
                </li>
                <li className='leftPaneMenuItem'>
                    <GroupIcon className='leftpaemenuIcon'/>
                    <span className='leftpaemenutext'>Groups</span>
                </li>
                <li className='leftPaneMenuItem'>
                    <RssFeedIcon className='leftpaemenuIcon'/>
                    <span className='leftpaemenutext'>Feeds</span>
                </li>
                <li className='leftPaneMenuItem'>
                    <FlagIcon className='leftpaemenuIcon'/>
                    <span className='leftpaemenutext'>Pages</span>
                </li>
                <li className='leftPaneMenuItem'>
                    <CalendarMonthIcon className='leftpaemenuIcon'/>
                    <span className='leftpaemenutext'>Events</span>
                </li>
                <li className='leftPaneMenuItem'>
                    <BuildIcon className='leftpaemenuIcon'/>
                    <span className='leftpaemenutext'>Settings</span>
                </li>
                <li className='leftPaneMenuItem'>
                    <SportsEsportsIcon className='leftpaemenuIcon'/>
                    <span className='leftpaemenutext'>Games</span>
                </li>
                <li className='leftPaneMenuItem'>
                    <NewspaperIcon className='leftpaemenuIcon'/>
                    <span className='leftpaemenutext'>News</span>
                </li>
                <li className='leftPaneMenuItem'>
                    <WorkOutlineIcon className='leftpaemenuIcon'/>
                    <span className='leftpaemenutext'>Jobs</span>
                </li>
                <li className='leftPaneMenuItem'>
                    <AddShoppingCartIcon className='leftpaemenuIcon'/>
                    <span className='leftpaemenutext'>Market</span>
                </li>
                <hr/>

                <div className="pagesyouliked">
                  <h3>Pages You Liked</h3>
                </div>
                <li className="pagelistItem">
                  <img src="/images/1.jpg" alt="" className="pagepic" />
                  <span className='PageName'>Code With Baka</span>
                </li>
            </div>
        </div>
    </div>
  )
}
