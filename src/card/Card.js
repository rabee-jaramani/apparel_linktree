import React from 'react';
import ag_website_icon from '../images/ag_website_icon.png';
import instagram from '../images/instagram.png';
import linkedin from '../images/linkedin.png';
import careers from '../images/careers.png';
import app_store from '../images/app_store.png';
import google_play from '../images/google_play.png';
import ca_logo from '../images/ca_logo.png';
import ag_logo from '../images/ag_logo.png';
export default function Card() {
  return (
    <div className="card-container">
      <div className="main-logo">
        <img alt="icon" src={ag_logo} />
      </div>
      <div className="items-container">
        <div className="card-item">
          <div className="icon">
            <img alt="icon" src={ag_website_icon} />
          </div>
          <div className="text">corporate website </div>
        </div>
        <div className="card-item">
          <div className="icon">
            <img alt="icon" src={instagram} />
          </div>
          <div className="text">corporate Instagram </div>
        </div>
        <div className="card-item">
          <div className="icon">
            <img alt="icon" src={linkedin} />
          </div>
          <div className="text">corporate Linkedin</div>
        </div>
        <div className="card-item">
          <div className="icon">
            <img alt="icon" src={careers} />
          </div>
          <div className="text">Careers</div>
        </div>
        <div className="card-item parent-item">
          <div className="icon">
            <img alt="icon" src={ca_logo} />
          </div>
          <div className="text">Club Apparel</div>
        </div>

        <div className="card-item child">
          <div className="icon">
            <img alt="icon" src={instagram} />
          </div>
          <div className="text">Club Apparel Instagram</div>
        </div>

        <div className="card-item child">
          <div className="icon">
            <img alt="icon" src={google_play} />
          </div>
          <div className="text">Download on google play</div>
        </div>

        <div className="card-item child">
          <div className="icon">
            <img alt="icon" src={app_store} />
          </div>
          <div className="text">Download on google play</div>
        </div>

        <div className="card-item">
          <div className="icon">
            <img alt="icon" src={instagram} />
          </div>
          <div className="text">Founder Mrs. Sima</div>
        </div>
      </div>
    </div>
  );
}
