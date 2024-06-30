import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

// Social media link component
const SocialLink = ({ href, label, icon }) => (
  <a href={href} aria-label={label}>
    <FontAwesomeIcon icon={icon} /> {label}
  </a>
);

// Social media links data
const socialLinks = [
  {
    href: "https://www.geeksforgeeks.org/user/bangwoo4/",
    label: "GeeksforGeeks",
  },
  {
    href: "https://www.instagram.com/bangwoo4_/",
    label: "Instagram",
    icon: faInstagram,
  },
  {
    href: "https://www.facebook.com/profile.php?id=100018136776949",
    label: "Facebook",
    icon: faFacebook,
  },
  { href: "https://github.com/bangwoo4", label: "Github", icon: faGithub },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      {/* Footer Info */}
      <div className="footerInfo">
        <p>&copy; {currentYear} React App. All rights reserved.</p>
        <p>Designed by bangwoo4 - Bootstrapped with React </p>
      </div>
      {/* Social Media */}
      <div className="socialMediaLinks">
        {socialLinks.map((link, index) => (
          <SocialLink key={index} {...link} />
        ))}
      </div>
    </div>
  );
}

export default Footer;
