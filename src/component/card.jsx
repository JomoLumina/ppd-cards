import React from 'react';

const Card = ({ name, organization, title, sector }) => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="orange-border">
          <div className="red-border">
          <div className="logo-container">
            <img alt="logo" src="images/logo.png" />
          </div>
          <div className="psd-container">
            <img alt="logo" src="images/psd.png" />
          </div>
          <p className="guest-name">{name}</p>
          <p className="organization">
            {organization ? `(${organization})` : ''}
          </p>
          <div className="title-container">
            <p className="title">
              {title}
            </p>
          </div>
          <div className="sector-container">
            <p className="sector">
              {sector}
            </p>
          </div>
          <div className="footer-container">
            <img alt="ifc-logo" className="ifc-logo" src="images/ifc.png" />
            <img alt="zambia-logo" className="zambia-logo" src="images/zambia.png" />
            <img alt="netone-logo" className="netone-logo" src="images/netone.png" />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
