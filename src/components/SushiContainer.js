import React from "react";
import MoreButton from "./MoreButton";
import Sushi from './Sushi'

function SushiContainer({handleEat ,sushis, handleMore}) {
  return (
    <div className="belt">
      {sushis.slice(0,4).map(sushi => <Sushi key={sushi.id} {...sushi} handleEat={handleEat}/>)}
      <MoreButton handleMore={handleMore}/>
    </div>
  );
}

export default SushiContainer;
