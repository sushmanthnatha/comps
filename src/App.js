import Dropdown from './components/Dropdown';
import AccordionPage from './pages/AccordionPage';
import ButtonPage from './pages/ButtonPage';
import { useState } from 'react';
import DropdownPage from './pages/DropdownPage';
import Link from './components/Link';
import Route from './components/Route';
import Sidebar from './components/Sidebar';
import ModalPage from './pages/ModalPage';
import CounterPage from './pages/CounterPage';

function App() {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4 relative">
      <Sidebar />
      <div className="col-span-5">
        <Route path="/">
          <AccordionPage />
        </Route>
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/dropdown">
          <DropdownPage />
        </Route>
        <Route path="/buttons">
          <ButtonPage />
        </Route>
        <Route path="/modal">
          <ModalPage />
        </Route>
        <Route path="/counter">
          <CounterPage initialCount={10} />
        </Route>
      </div>
    </div>
  );
}

export default App;
