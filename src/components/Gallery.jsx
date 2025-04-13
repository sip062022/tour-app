import React, { useEffect, useState } from 'react';  // import react
import TourCard from './TourCard'; // Import TourCard component

const Gallery = ({ tours, setTours, onRemoveTour }) => {  // create arrow function for gallery
    const [loading, setLoading] = useState(true); // Local loading state for UI
    const [error, setError] = useState(false); // Local error state for UI

    const fetchTours = async () => {  // arrow function to fetch tours
        setLoading(true); // Start loading
        try {
          const response = await fetch('https://course-api.com/react-tours-project');  // fetch the url
          if (!response.ok) {   // see if response is ok
            throw new Error("Failed to fetch tours");  // if error, log this message
          }
          const data = await response.json();
          setTours(data); // Save data to parent state
          setError(false); // Reset error state
        } catch (error) {
          console.error('Error fetching tours:', error);
          setError(true); // Set error state
        }
        setLoading(false); // Done loading
      };  

      useEffect(() => {
        fetchTours();
      }, []);
    
      if (loading) return <p>Loading tours...</p>;  // if loading, display message

      if (error) return <p>Something went wrong. Please try again later.</p>; // if error, display message
    
      return (
        <section className="gallery">  {/* set className as gallery*/}

    {tours.map((tour) => {
        // for each tour
        return (
            <TourCard 
            key={tour.id}
            {...tour}
            onRemove={onRemoveTour} // removing tour
            />
            );
        })}
        </section>
    );
};
    
export default Gallery; // export gallery