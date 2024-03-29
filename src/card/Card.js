import React from 'react';
import ag_website_icon from '../images/ag_website_icon.png';
import instagram from '../images/instagram.png';
import linkedin from '../images/linkedin.png';
import careers from '../images/careers.png';
import app_store from '../images/app_store.png';
import google_play from '../images/google_play.png';
import tree from '../images/tree.svg';
import ag_logo from '../images/ag_logo.png';
export default function Card() {
  return (
    <div className="card-container">
      <div className="main-logo">
        <img alt="icon" src={ag_logo} />
      </div>
      <div className="items-container">
        <a
          target="_blank"
          href="https://www.apparelgroupglobal.com/en/"
          rel="noreferrer"
        >
          <div className="card-item">
            <div className="icon">
              <img alt="icon" src={ag_website_icon} />
            </div>
            <div className="text">Apparel Group Website </div>
          </div>
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/apparelgroupofficial/"
          rel="noreferrer"
        >
          <div className="card-item">
            <div className="icon">
              <img alt="icon" src={instagram} />
            </div>
            <div className="text">Apparel Group Instagram </div>
          </div>
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/company/apparel-fzco/"
          rel="noreferrer"
        >
          <div className="card-item">
            <div className="icon">
              <img alt="icon" src={linkedin} />
            </div>
            <div className="text">Apparel Group Linkedin</div>
          </div>
        </a>
        <a
          target="_blank"
          href="https://ediu.fa.em2.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX"
          rel="noreferrer"
        >
          <div className="card-item">
            <div className="icon">
              <img alt="icon" src={careers} />
            </div>
            <div className="text">Careers</div>
          </div>
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/clubapparel/"
          rel="noreferrer"
        >
          <div className="card-item">
            <div className="icon">
              <img alt="icon" src={instagram} />
            </div>
            <div className="text">Club Apparel Instagram</div>
          </div>
        </a>
        <a
          target="_blank"
          href="https://play.google.com/store/apps/details?id=com.appemirates.clubapparel&hl=en"
          rel="noreferrer"
        >
          <div className="card-item">
            <div className="icon">
              <img alt="icon" src={google_play} />
            </div>
            <div className="text">Download on Android</div>
          </div>
        </a>
        <a
          target="_blank"
          href="https://apps.apple.com/ae/app/club-apparel/id936671343"
          rel="noreferrer"
        >
          <div className="card-item">
            <div className="icon">
              <img alt="icon" src={app_store} />
            </div>
            <div className="text">Download on IOS</div>
          </div>
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/thesimaved/"
          rel="noreferrer"
        >
          <div className="card-item">
            <div className="icon">
              <img alt="icon" src={instagram} />
            </div>
            <div className="text">Meet our founder Mrs. Sima Ved</div>
          </div>
        </a>

        <a
          target="_blank"
          href="https://apparelgroupglobal.com/en/wp-content/uploads/2022/10/SustainbilityReport.pdf"
          rel="noreferrer"
        >
          <div className="card-item">
            <div className="icon">
              <img alt="icon" src={tree} />
            </div>
            <div className="text">Apparel Group ESG REPORT 2021</div>
          </div>
        </a>

        <a
          target="_blank"
          href="https://apparelglobal.com/en/wp-content/uploads/2023/11/esg-report-2023-bdf.pdf"
          rel="noreferrer"
        >
          <div className="card-item">
            <div className="icon">
              <img alt="icon" src={tree} />
            </div>
            <div className="text">Apparel Group ESG REPORT 2022</div>
          </div>
        </a>
      </div>
    </div>
  );
}
