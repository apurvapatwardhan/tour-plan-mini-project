import React from "react";
import { useState } from "react";

function Card({ id, image, info, price, name, removeTour }) {
  const [readMore, setReadMore] = useState(true);
  const description = readMore ? `${info.slice(0, 200)}...` : info;
  const readMoreHandler = (e) => {
    setReadMore(!readMore);
  };
  return (
    <div className="card">
      <img src={image} className="card-img" />
      <div className="tour-details">
        <h4 className="tour-price">{price}</h4>
        <h4 className="tour-name">{name}</h4>
      </div>
      <div className="tour-description">
        {description}
        <span className="read-more" onClick={readMoreHandler}>
          {readMore ? "Read More" : "Show Less"}
        </span>
      </div>
      <button onClick={() => removeTour(id)}>
        Not Interested
      </button>
    </div>
  );
}

export default Card;
