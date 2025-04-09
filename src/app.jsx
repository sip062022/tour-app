import React, { useState } from 'react'; // imports react
import Gallery from './components/Gallery'; // imports gallery

function App ()  { // creates function for the app
    const [tours, setTours] = useState([]); // makes state to hold the tours

    const handleRemoveTour = (id) => { // function to remove the tours
        setTours(tours.filter(tour => tour.id !== id)); // Filter out the tour with the given id
      };

      return ( // returns following lines in the app
        <div>
          <h1>Tour App</h1> 
          <Gallery tours={tours} onRemoveTour={handleRemoveTour} />
        </div>
      );
    };
    
export default App; // export