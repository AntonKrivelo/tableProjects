import './App.css';
import React, {useState} from 'react';
import Table from './Components/Table/Table';
import Modal from './Components/Modal/Modal';



function App() {


  const [activeModal, setActiveModal] = useState()


  return (
    <div className="App">
      <Table activeModal={activeModal} setActiveModal={setActiveModal}  /> 
      <Modal activeModal={activeModal} setActiveModal={setActiveModal} />
    </div>
  );
}

export default App;
