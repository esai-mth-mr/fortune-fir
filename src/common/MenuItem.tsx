import React from "react";

import getImageURL from "../utils/getImageURL";
import "./MenuItem.css";

const MeunItem: React.FC = () => {
  return (
    <div>
      <div className="container crypto-container">
        <div className="crypto-img">
          <img
            width={35}
            height={35}
            src={getImageURL("./assets/crypto/btc.svg")}
          ></img>
        </div>
        <div className="crypto-content">
          <div>
            <span className="crypto-name">USDC</span>
            <span className="crypto-label">ETH</span>
          </div>
          <div className="crypto-description">USD Coin (Ethereum)</div>
        </div>
      </div>
    </div>
  );
};

export default MeunItem;
