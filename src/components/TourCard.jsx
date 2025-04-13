import React, { useState } from 'react';  // import usestate from react

const TourCard = ({ id, name, info, image, price, onRemove }) => {  // arrow function for tourcard
  const [readMore, setReadMore] = useState(false); // set usestate to false

  return (
    <article className="tour-card"> // classname is tour-card
      <img src={image} alt={name} /> {/* Tour image */}

      <div className="tour-info"> {/* class name is tour-info */}
        <header>
          <h2>{name}</h2> {/* Tour name*/}
          <span className="tour-price">${price}</span> {/* Tour price */}
        </header>

        <p>
          {readMore ? info : `${info.substring(0, 150)}...`} {/* Tour information*/}
          <button onClick={() => setReadMore(!readMore)}> {/* if click, can show more*/}
            {readMore ? ' Show Less' : ' Read More'} {/* Tand show less */}
          </button>
        </p>

        <button className="btn-remove" onClick={() => onRemove(id)}> {/* Button to remove tour */}
          Not Interested
        </button>
      </div>
    </article>
  );
};

export default TourCard; // export tourcard