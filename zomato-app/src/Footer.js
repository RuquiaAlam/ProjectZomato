import "./footer.css";
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
    <footer>
      <div>
        <center>
        <h6>Copyright Developer 2022. All Rights Reserved</h6>
        </center>
        <div className="fotDiv">
          <ul>
            <li>Contact Us</li>
            <li>About Us</li>
          </ul>
        </div>
        <div className="fotDiv">
          <ul>
            <li>Contact Us</li>
            <li>About Us</li>
          </ul>
        </div>
        <div className="fotDiv noBorder">
          <ul>
            <li>Contact Us</li>
            <li>About Us</li>
          </ul>
        </div>

        <div className="social">
          <center>
          <SocialIcon  url="https://www.instagram.com"/>
<SocialIcon url="https://www.facebook.com"/>
<SocialIcon url="https://www.youtube.com"/>
          </center>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

