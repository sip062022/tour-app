import React, { useState, useEffect } from 'react'; // import react
import TourCard from './TourCard'; // Import TourCard component

function Gallery({ tours, onRemoveTour }) { // function for gallery
    const [loading, setLoading] = useState(true); // create constant for loading
    const [error, setError] = useState(null); // create constant for error

    useEffect(() => {
        const fetchTours = async () => { // fetch data from api
          try {
            const response = await fetch('https://course-api.com/react-tours-project'); // gives url to fetch
            const data = await response.json();  // Parse the response as JSON
        setTours(data);  // Set the fetched tours data into the tours state
        setLoading(false);  // Set loading to false
      } catch (err) {
        setError("Error fetching tours");  // Set error message if failure
        setLoading(false);  // Set loading to false if error
      }
    };
    
        fetchTours(); // calls function
      }, []);
    

      if (loading) { // if it is loading
        return <div>Loading...</div>; // Display loading message
      }
    
      if (error) {  // if there is an error
        return <div>Error: {error}</div>; // Display error message
      }
    
      return ( // return tour cards
        <div>
          {tourData.map(tour => ( // map tour data
            <TourCard
              key={tour.id}
              {...tour}  // Spread the tour data as props
              onRemove={onRemoveTour} // Pass down the remove handler
            />
          ))}
        </div>
      );
    }
    
export default Gallery; // exports gallery