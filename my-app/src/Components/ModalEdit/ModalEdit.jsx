import React from 'react'
import styles from './ModalEdit.module.scss'


const ModalEdit = ({
    activeEditModal, 
    setActiveEditModal, 
    user, 
    setUser, 
    editingId,
    setEditingId, 
    editForm,
    setEditForm

}) => {


const editing = (user) => {
    setEditingId(user.id);
    setEditForm({name: user.name, date: user.date, age: user.age})
}

//на кнопку измененее
const saveEditing = () => {
    setUser(user.map(userItem => 
      userItem.id === editingId 
        ? { ...user, name: editForm.name, date: editForm.date, age: editForm.age } 
        : user
    ));
    setEditingId(null);
  };

const handleChange = (e) => {
    const { name, age, date, value } = e.target;
    setEditForm(prev => ({ ...prev, [name]: value }));
    setEditForm(prev => ({ ...prev, [age]: value }));
    setEditForm(prev => ({ ...prev, [date]: value }));
  };

  return (
    <div className={activeEditModal ? `${styles.modalActive}` : `${styles.modal}`} onClick={() => setActiveEditModal(false)}>
        <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <h2>Введите изменение формы:</h2>
            <form className="modal__content-form">
                <input type="text" value={editForm.name} onChange={handleChange} placeholder='Введите имя и фамилию:' />
                <input type="date" value={editForm.date} onChange={handleChange} placeholder='Введите дату:' />
                <input type="text" value={editForm.age} onChange={handleChange} placeholder='Введите возраст:' />
                <button onClick={saveEditing} type="submit">Изменить</button>
            </form>
        </div>
    </div>
  )
}

export default ModalEdit
