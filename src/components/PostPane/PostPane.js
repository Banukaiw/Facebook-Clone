import React from "react";
import "./postpane.css";
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import PublicIcon from '@mui/icons-material/Public';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CloseIcon from '@mui/icons-material/Close';

export default function PostPane() {
  return (
    <div className="postpanebox1">
      <div className="StorySection">
        <div className="Story CreateStory">
          <div className="Storyimage"></div>
          <div className="StoryFont">
            <div className="CreateButton">+</div>
            <div className="CreateText">Create Story</div>
          </div>
        </div>

        <div className="Story">
          <div className="StoryProfile">
            <img src="./images/1.jpg" alt="Story"></img>
          </div>
          <div className="StoryContent">
            <img src="./images/story1.jpg" alt="Story"></img>
          </div>
          <div className="StoryName">Banuka Ishara</div>
        </div>

        <div className="Story">
          <div className="StoryProfile">
            <img src="./images/1.jpg" alt="Story"></img>
          </div>
          <div className="StoryContent">
            <img src="./images/story1.jpg" alt="Story"></img>
          </div>
          <div className="StoryName">Banuka Ishara</div>
        </div>

        <div className="Story">
          <div className="StoryProfile">
            <img src="./images/1.jpg" alt="Story"></img>
          </div>
          <div className="StoryContent">
            <img src="./images/story1.jpg" alt="Story"></img>
          </div>
          <div className="StoryName">Banuka Ishara</div>
        </div>

        <div className="Story">
          <div className="StoryProfile">
            <img src="./images/1.jpg" alt="Story"></img>
          </div>
          <div className="StoryContent">
            <img src="./images/story1.jpg" alt="Story"></img>
          </div>
          <div className="StoryName">Banuka Ishara</div>
        </div>
      </div>

      <div className="PostSection">
        <div className="UpperPost">
          <div className="PostImage">
            <img src="./images/1.jpg" alt="Story"></img>
          </div>
          <div className="PostSearch">
            <input type="text" className="PostSearch1" placeholder='   Whats on your mind, Banuka?' />
          </div>
        </div>
        <hr className="Posthr"/>
        <div className="DownPost">
          <div className="video">
                <VideoCameraBackIcon/>
                <p>Live Video</p>
          </div>
          <div className="Photo">
            <PhotoLibraryIcon/>
            <p>Photo/Video</p>

          </div>
          <div className="reel">
            <MovieCreationIcon/>
            <p>Reels</p>
            <div></div>
          </div>
        </div>
      </div>

      <div className="Posts">
        <div className="PostUpper">
          <div className="PostAccount">
            <div className="PostImage">
              <img src="./images/1.jpg" alt="Story"></img> 
            </div>
            <div className="AccountText">
              <div className="AccountName">
                <p>Watapita</p>
                <h4>Follow</h4>
              </div>
              <div className="AccountTime">
                <p>3 days ago</p>
                <PublicIcon/>
              </div>
            </div>
          </div>
          <div className="PostIcon">
              <MoreHorizIcon/>
              <CloseIcon/>
          </div>
        </div>
      </div>
    </div>
  );
}
