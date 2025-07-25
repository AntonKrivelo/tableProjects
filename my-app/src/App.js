import './App.css';
import React, {useState} from 'react';
import Table from './Components/Table/Table';
import Modal from './Components/Modal/Modal';



function App() {

    const [dataUser, setDataUser] = useState([
        {id: 1, name: 'Алексей Иванов', date: '2025-05-15', age: 42},
    ]) 

  const [activeModal, setActiveModal] = useState()



  return (
    <div className="App">
      <Table 
        dataUser={dataUser} 
        setDataUser={setDataUser} 
        activeModal={activeModal} 
        setActiveModal={setActiveModal}  
      /> 
      <Modal 
        activeModal={activeModal} 
        setActiveModal={setActiveModal} 
        dataUser={dataUser}
        setDataUser={setDataUser}
      />
    </div>
  );
}

export default App;
