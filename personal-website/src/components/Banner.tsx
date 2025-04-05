import React from 'react'
import { useState } from 'react';

// Callback function to notify when the banner is closed
type BannerProps = {
    onClose: () => void; 
  };
  
function Banner({ onClose }: BannerProps) {
const [isBannerVisible, setIsBannerVisible] = useState(true);
function handleCloseBanner () {
    setIsBannerVisible(false);
    onClose(); // Notify the parent component to unblur the background
}
if (!isBannerVisible) return null;


  return (
    <div className="banner">
  <span className="closebtn" onClick={handleCloseBanner}>&times;</span>
  Your message has been sent successfully! 
</div>
  )
}

export default Banner;
