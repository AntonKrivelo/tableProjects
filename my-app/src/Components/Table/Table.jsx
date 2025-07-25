import React from 'react'
import './Table.scss';

const Table = ({activeModal, setActiveModal, dataUser}) => {


    const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('ru-RU', options);
  };

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
          </tr>
        </thead>
        <tbody>
          {dataUser.map((row) => (
            <tr key={row.id}>
              <td>{row.name}</td>
              <td>{formatDate(row.date)}</td>
              <td>{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
