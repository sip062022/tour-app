import React, { useState } from 'react';  // import usestate from react
import Gallery from './components/Gallery'; // imports Gallery

const App () => {  // sets up arrow function for the app
  const [tours, setTours] = useState([]); // state to hold list


const removeTour = (id) => { // sets up arrow function for removing tour
  setTours((prev) => prev.filter((tour) => tour.id !== id)); // removes tour by id
};

return (
  <main>
    <h1>Tours</h1>
    {/* Pass down state and handler to Gallery*/}
    <Gallery tours={tours} setTours={setTours} onRemoveTour={removeTour} />
    </main>
  );
};

export default App;