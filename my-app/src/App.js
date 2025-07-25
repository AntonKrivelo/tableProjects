import './App.css';
import React, {useState} from 'react';
import Table from './Components/Table/Table';
import Modal from './Components/Modal/Modal';



function App() {

    const [dataUser, setDataUser] = useState([
        {id: 1, name: 'Алексей Иванов', date: '2025-05-15', value: 42},
        {id: 2, name: 'Мария Петрова', date: '2025-06-20', value: 35},
        {id: 3, name: 'Иван Сидоров', date: '2025-07-10', value: 27},
    ]) 

  const [activeModal, setActiveModal] = useState()

  return (
    <div className="App">
      <Table dataUser={dataUser} activeModal={activeModal} setActiveModal={setActiveModal}  /> 
      <Modal activeModal={activeModal} setActiveModal={setActiveModal} />
    </div>
  );
}

export default App;
