import React from "react";
import "./postpane.css";

export default function PostPane() {
  return (
    <div className="postpanebox1">
      {/* <div className="stories">
        <div className="carts1">
          <div className="logo1">            
            <div class="StoryLogo"></div>
            <div class="story-text">Create story</div>
          </div>
        </div>

        <div className="carts">
          <div className="logo">
            <img src="/images/1.jpg" alt="" className="StoryLogo"></img>
          </div>
          <div className="storyname">Rishi Bro</div>
        </div>
        <div></div>

        <div className="carts">
          <div className="logo">
            <img src="/images/1.jpg" alt="" className="StoryLogo"></img>
          </div>
          <div className="storyname">Rishi Bro</div>
        </div>
        <div></div>

        <div className="carts">
          <div className="logo">
            <img src="/images/1.jpg" alt="" className="StoryLogo"></img>
          </div>
          <div className="storyname">Rishi Bro</div>
        </div>

        <div className="carts">
          <div className="logo">
            <img src="/images/1.jpg" alt="" className="StoryLogo"></img>
          </div>
          <div className="storyname">Rishi Bro</div>
        </div>
      </div> */}

      

      {/* <div class="story-section">
        <div class="story create-story">
          <div class="story-image"></div>
          <div class="story-text">Create story</div>
        </div>
        <div class="story">
          <div class="story-profile">
            <img src="profile1.jpg" alt="ProfilePicture"></img>
          </div>
          <div class="story-content">
            <img src="1.jpg" alt="Story"></img>
          </div>
          <div class="story-name">Ahinsa Sewwandi</div>
        </div>

        <div class="story">
          <div class="story-profile">
            <img src="profile2.jpg" alt="ProfilePicture"></img>
          </div>
          <div class="story-content">
            <img src="story2.jpg" alt="Story"></img>
          </div>
          <div class="story-name">Sandani Fernando</div>
        </div>

        <div class="story">
          <div class="story-profile">
            <img src="profile3.jpg" alt="ProfilePicture"></img>
          </div>
          <div class="story-content">
            <img src="story3.jpg" alt="Story"></img>
          </div>
          <div class="story-name">Patta Comments</div>
        </div>
      </div> */}


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
          <div className="Story"></div>
          <div className="Story"></div>
        </div>

      
    </div>
  );
}
