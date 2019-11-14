import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function ItemDetail({ match }) {
  useEffect(() => {
    fetchItem();
    console.log(match);
  }, []);

  const [item, setItem] = useState([]);

  const fetchItem = async () => {
    const data = await fetch(
      "https://leboncoin-api.herokuapp.com/api/offer/" + match.params.id
    );

    const item = await data.json();
    console.log(item);
    setItem(item);
  };

  return (
    <div>
      <div class="wrapper">
        <div className="product">
          <img className="product-image" src={item.pictures} />
          <h4 className="product-title">{item.title}</h4>
          <h3 className="product-price">{item.price}€</h3>
          <br />
          <h4>
            <h3 className="product-date">{item.created}</h3>
          </h4>
        </div>
        <div className="seller-card">
          <h3 className="username">Farid</h3>
          <a className="seller-link">17 annonces en ligne</a>
          <br />
          <button className="seller-btn">Acheter</button>
        </div>
      </div>
      <div className="description">
        <div className="description-sous-wrapper">
          <h3>Description</h3>
          <p>{item.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
