import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      "https://leboncoin-api.herokuapp.com/api/offer/with-count"
    );

    const items = await data.json();
    console.log(items);
    setItems(items.offers);
  };

  return (
    <div>
      {items.map(item => (
        <div className="card-container" key={item._id}>
          <Link className="link-product" to={"/shop/" + item._id}>
            <div className="card">
              <div className="image-background">
                <img className="image" src={item.pictures} />
              </div>
              <div className="title-price-wrapper">
                <h4 className="card-title">{item.title}</h4>
                <h5 className="card-price">{item.price + "€"}</h5>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Shop;
