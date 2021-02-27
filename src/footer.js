import React, { useState } from 'react';

const Footer = ({footerTxt}) => {

    return (
      <div className="footer-container">
        <p>{footerTxt}</p>
      </div>
    )
}

export default Footer;
