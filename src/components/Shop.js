import React, { useState, useEffect } from "react";
import "../App.css";

function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      " https://leboncoin-api.herokuapp.com/api/offer/with-count?skip=0&limit=25"
    );

    const items = await data.json();
    console.log(items);
    setItems(items.offers);
  };

  return (
    <div>
      {items.map(item => (
        <div className="card-container" key={item._id}>
          <div className="card">
            <div className="image-background">
              <img className="image" src={item.pictures} />
            </div>
            <div className="title-price-wrapper">
              <h4 className="card-title">{item.title}</h4>
              <h5 className="card-price">{item.price + "€"}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Shop;
