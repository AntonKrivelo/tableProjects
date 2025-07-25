import './App.css';
import React, {useState} from 'react';
import Table from './Components/Table/Table';
import Modal from './Components/Modal/Modal';
import ModalEdit from './Components/ModalEdit/ModalEdit';


function App() {

    const [dataUser, setDataUser] = useState([
        {id: 1, name: 'Алексей Иванов', date: '2025-05-15', age: 42},
        {id: 2, name: 'Кирилл Петров', date: '2025-05-15', age: 52},
        {id: 3, name: 'Павел Павлович', date: '2025-05-15', age: 62}
    ]) 

  const [activeModal, setActiveModal] = useState()
  const [activeEditModal, setActiveEditModal] = useState()

  const [user, setUser] = useState(dataUser)
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ name: '', date: '', age: '' });

  
  return (
    <div className="App">
      <Table 
        dataUser={dataUser} 
        setDataUser={setDataUser} 
        activeModal={activeModal} 
        setActiveModal={setActiveModal}  
        activeEditModal={activeEditModal}
        setActiveEditModal={setActiveEditModal}
      /> 
      <Modal 
        activeModal={activeModal} 
        setActiveModal={setActiveModal} 
        dataUser={dataUser}
        setDataUser={setDataUser}
      />
      <ModalEdit 
        activeEditModal={activeEditModal}
        setActiveEditModal={setActiveEditModal}
        user={user}
        setUser={setUser}
        editingId={editingId}
        setEditingI={setEditingId}
        editForm={editForm}
        setEditForm={setEditForm}
      />
    </div>
  );
}

export default App;
