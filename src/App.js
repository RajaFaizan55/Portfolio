import SideBar from './components/side-bar';
import MainPage from './components/main-page/main-page';

import './App.css';
import { useState } from 'react';
import bg from './assets/bg.jpg'

function App() {
  const [select, setSelect]=useState("")
  return (
    <div
      className="lg:flex  py-10 md:px-48 px-5  "
      style={{ backgroundImage: `url(${bg})` }}
    >
      <SideBar setSelect={setSelect} select={select} />
      <MainPage />
    </div>
  );
}

export default App;
