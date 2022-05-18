import React from "react";
import TopCoins from "../../components/cryptotopcoins";
import "./CoinsPage.css";

function CoinPage() {
  return (
    <div>    
      <div className="title-parent"><h1 className="title"> Crypto Currencies by Market Cap </h1></div>
      <TopCoins />
    </div>
  );
}

export default CoinPage;
