import React from 'react';
import PlanetsProvider from './context/PlanetsProvider';
import Table from './components/Table';
import Filters from './components/Filters';

function App() {
  return (
    <main>
      <PlanetsProvider>
        <Filters />
        <Table />
      </PlanetsProvider>
    </main>
  );
}

export default App;
