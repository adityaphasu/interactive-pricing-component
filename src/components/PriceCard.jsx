import React, { useState } from "react";
import Slider from "./Slider";
import Toggler from "./Toggler";
import Features from "./Features";
import Pricing from "../pricing.json";

function PriceCard() {
  const [isChecked, setIsChecked] = useState(false);
  const [price, setPrice] = useState(2);

  const currentViews = Pricing[price].pageviews;
  const currentPrice = Pricing[price].price;

  const discountPrice = currentPrice * (1 - 0.25);

  return (
    <div className="price-card">
      <div className="price-card__slider">
        <p className="price-card__views">{currentViews} Pageviews</p>
        <Slider
          min="0"
          max="4"
          value={price}
          onInput={(e) => {
            setPrice(e.target.value);
          }}
        />
        <p className="price-card__rate">
          <span className="price-card__span">
            {isChecked ? `$${discountPrice}.00` : `$${currentPrice}.00`}
          </span>
          /month
        </p>
      </div>
      <div className="price-card__toggler">
        <p>Monthly Billing</p>
        <Toggler checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
        <p>
          Yearly Billing
          <span className="price-card__value">
            25% <span className="price-card__discount">discount</span>
          </span>
        </p>
      </div>
      <div className="price-card__features">
        <Features />
        <button>Start my trial</button>
      </div>
    </div>
  );
}

export default PriceCard;
