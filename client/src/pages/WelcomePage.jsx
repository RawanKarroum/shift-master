import React, { useState } from "react";
import "../assets/css/WelcomePage.css";
import { Link } from "react-router-dom";

export default function WelcomePage() {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="welcome-page">
        <div className={`register-card ${expanded ? 'expanded' : ''}`} onClick={handleClick}>
          {expanded ? 
            <Link to="/register" className="link">
              <div className="register-link" />
            </Link>
          : 'Start Scheduling'}
        </div>
    </div>
  )
}
