import React from "react";
import "./rightpane.css";
import SearchIcon from "@mui/icons-material/Search";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export default function RightPane() {
  return (
    <>
      <div className="rightpanebox">
        <div className="contactSide">
        <div className="contactText1">
          <p>Contacts</p>
          <div className="ContactIcon1">
            <SearchIcon />
            <MoreHorizIcon />
          </div>
        </div>

        <div className="ContactList">
          <li className="Contacts">
            <img src='/images/1.jpg' alt="" className='leftLogo'></img>
            <span className='leftpaemenutext'>Banuka Ishara</span>
          </li>

          <li className="Contacts">
            <img src='/images/1.jpg' alt="" className='leftLogo'></img>
            <span className='leftpaemenutext'>Banuka Ishara</span>
          </li>

          <li className="Contacts">
            <img src='/images/1.jpg' alt="" className='leftLogo'></img>
            <span className='leftpaemenutext'>Banuka Ishara</span>
          </li>
          <li className="Contacts">
            <img src='/images/1.jpg' alt="" className='leftLogo'></img>
            <span className='leftpaemenutext'>Banuka Ishara</span>
          </li>
          <li className="Contacts">
            <img src='/images/1.jpg' alt="" className='leftLogo'></img>
            <span className='leftpaemenutext'>Banuka Ishara</span>
          </li>
          <li className="Contacts">
            <img src='/images/1.jpg' alt="" className='leftLogo'></img>
            <span className='leftpaemenutext'>Banuka Ishara</span>
          </li>
          <li className="Contacts">
            <img src='/images/1.jpg' alt="" className='leftLogo'></img>
            <span className='leftpaemenutext'>Banuka Ishara</span>
          </li>
          <li className="Contacts">
            <img src='/images/1.jpg' alt="" className='leftLogo'></img>
            <span className='leftpaemenutext'>Banuka Ishara</span>
          </li>
          <li className="Contacts">
            <img src='/images/1.jpg' alt="" className='leftLogo'></img>
            <span className='leftpaemenutext'>Banuka Ishara</span>
          </li>

          <li className="Contacts">
            <img src='/images/1.jpg' alt="" className='leftLogo'></img>
            <span className='leftpaemenutext'>Banuka Ishara</span>
          </li>

          <li className="Contacts">
            <img src='/images/1.jpg' alt="" className='leftLogo'></img>
            <span className='leftpaemenutext'>Banuka Ishara</span>
          </li>
          
          <li className="Contacts">
            <img src='/images/1.jpg' alt="" className='leftLogo'></img>
            <span className='leftpaemenutext'>Banuka Ishara</span>
          </li>

          <li className="Contacts">
            <img src='/images/1.jpg' alt="" className='leftLogo'></img>
            <span className='leftpaemenutext'>Banuka Ishara</span>
          </li>
        </div>
        <hr/>

        <div class="story">
          <div class="story-image1"></div>
          
        </div>
        </div>
        
      </div>
    </>
  );
}
