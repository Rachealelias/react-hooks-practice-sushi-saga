import {useState} from "react";

function Sushi({handleEat, id, eaten, price, img_url, name,}) {
  
  return (
    <div className="sushi">
      <div className="plate" onClick={() =>handleEat(price, id)}>
        {/* Tell me if this sushi has been eaten! */}
        {eaten ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
