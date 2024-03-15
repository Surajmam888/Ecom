import React from 'react'
import "./Footer.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
const Footer = () => {
  return (
    <>
      <footer className="footer1">
        <div className="footer-content">
          <p>© 2024 All rights reseverd</p>
          <ul className="footer-links">
            <li>
              <a href="/" className="text-white me-4">
                <FacebookIcon/>
              </a>
            </li>
            <li>
              <a href="/" className="text-white me-4">
              <InstagramIcon/>
              </a>
            </li>
            <li>
              <a href="/" className="text-white me-4">
              <YouTubeIcon/>
              </a>
            </li>
            <li>
              <a href="/" className="text-white me-4">
              <TwitterIcon/>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default Footer;