import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gfgLogo from "./image/gfgLogo.png";
import facebookLogo from "./image/facebookLogo.png";
import instagramLogo from "./image/instagramLogo.png";
import githubLogo from "./image/githubLogo.png";

import "./Feadhoot.css";

// Social media link component
const SocialLink = ({ href, label, icon, isImage }) => (
  <a href={href} aria-label={label}>
    {isImage ? (
      <img src={icon} alt={label} className="socialIcon" />
    ) : (
      <FontAwesomeIcon icon={icon} />
    )}{" "}
    {label}
  </a>
);

const socialLinks = [
  {
    href: "https://github.com/bangwoo4",
    label: "Github",
    icon: githubLogo,
    isImage: true,
  },
  {
    href: "https://www.facebook.com/profile.php?id=100018136776949",
    label: "Facebook",
    icon: facebookLogo,
    isImage: true,
  },
  {
    href: "https://www.instagram.com/bangwoo4_/",
    label: "Instagram",
    icon: instagramLogo,
    isImage: true,
  },

  {
    href: "https://www.geeksforgeeks.org/user/bangwoo4/",
    label: "GeeksforGeeks",
    icon: gfgLogo,
    isImage: true,
  },
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
