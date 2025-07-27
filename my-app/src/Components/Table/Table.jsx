import { useState } from 'react';
import './Table.scss';
import Modal from '../Modal/Modal';

const Table = ({ data }) => {
  const [usersData, setUsersData] = useState(data);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const deleteUser = (idToItem) => {
    setUsersData((prevItems) => prevItems.filter((usersData) => usersData.id !== idToItem));
  };

  return (
    <div className="table-container">
      <h2 className="table-title">Таблица данных</h2>
      <button
        onClick={() => {
          setIsModalOpen(true);
        }}
        className="button-tab"
      >
        Открыть окно для добавления пользователя
      </button>

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
          {usersData.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.date}</td>
              <td>{item.age}</td>
              <td className="delete-btn" onClick={() => deleteUser(item.id)}>
                Удалить
              </td>
              <td className="edit-btn" onClick={() => {}}>
                Изменить
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} userData={data} />}
    </div>
  );
};

export default Table;
