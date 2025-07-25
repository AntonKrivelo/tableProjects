import React,{useState} from 'react'
import './Table.scss';

const Table = ({
  activeModal, 
  setActiveModal, 
  dataUser, 
  setDataUser,
  activeEditModal,
  setActiveEditModal
}) => {


    const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('ru-RU', options);
  };


  const deleteUser = (idToItem) => {
    setDataUser(prevItems => prevItems.filter(dataUser => dataUser.id !== idToItem))
  }

  return (
    <div className="table-container">
      <h2 className="table-title">Таблица данных</h2>
      <button onClick={() => setActiveModal(true)} className="button-tab">Открыть окно для добавления пользователя</button>
      <table className="data-table">
        <thead>
          <tr>
            <th>Имя</th>
            <th>Дата</th>
            <th>Возраст</th>
            <th>Действия</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
          dataUser.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{formatDate(item.date)}</td>
              <td>{item.age}</td>
              <td className="delete-btn" onClick={() => deleteUser(item.id)}>Удалить</td>
              <td className="edit-btn" onClick={() => setActiveEditModal(true)}>Изменить</td>
            </tr>
          ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Table
