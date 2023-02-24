import React from 'react';
import HomePage from './HomePage';
import FableLand from './FableLand';


function App() {
  const [page, setPage] = React.useState('home');

  
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const renderPage = () => {


    console.log(page);

    switch (page) {
      case 'home':
        return <HomePage setPage={handlePageChange}/>;
      case 'FABLELAND':
        return <FableLand setPage={handlePageChange}/>;
      case 'DEADMEAT':
        return <FableLand setPage={handlePageChange}/>;
      case 'FISHERMAN':
        return <FableLand setPage={handlePageChange}/>;
      case 'FPSFUN':
        return <FableLand setPage={handlePageChange}/>;
      case 'MASTEROFCASTLES':
        return <FableLand setPage={handlePageChange}/>;
      case 'ANIMALROLL':
        return <FableLand setPage={handlePageChange}/>;
      default:
        return <HomePage setPage={handlePageChange}/>;
    }
  };

  return (

    <div className="App">
        {renderPage()}
    </div>

  );
}

export default App;