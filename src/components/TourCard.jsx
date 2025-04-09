import React, { useState } from "react";  // Import React and useState

function TourCard({ id, name, info, price, image, onRemove }) {  // create tourcard function
  const [showMore, setShowMore] = useState(false);  // see if useState is false

  
  const handleToggleInfo = () => {  // create toggle function
    setShowMore((prev) => !prev);  // Toggle the state between true and false
  };

  return (  // will return
    <div className="tour-card">  {/* for the tour-card class*/}
      <img src={image} alt={name} />  {/* Display the tour image */}
      <h2>{name}</h2>  {/* Display the tour name */}
      <p>{price}</p>  {/* Display the tour price */}
      <p>
        {showMore ? info : `${info.substring(0, 100)}...`}{" "} {/* Show string */}
        <button onClick={handleToggleInfo}>
          {/* Toggle the button text based on the showMore state */}
          {showMore ? "Show Less" : "Read More"}
        </button>
      </p>
      <button onClick={() => onRemove(id)}>Not Interested</button>  {/* Call onRemove with the tour's id when the button is clicked */}
    </div>
  );
}

export default TourCard;  // Export the TourCard