import React, {useState} from 'react'
import './Modal.scss';


const Modal = ({activeModal, setActiveModal, dataUser, setDataUser}) => {


    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [age, setAge] = useState('');

  const addUserData = (e) => {
    e.preventDefault()
    const newUser = {
      id: Math.floor(Math.random() * 100),
      name,
      date,
      age
    }
    setDataUser([...dataUser, newUser]);
       setName('')
       setDate('')
       setAge('')
    }

  return (
    <div className={activeModal ? 'modal active' : 'modal'} onClick={() => setActiveModal(false)}>
        <div className="modal__content" onClick={e => e.stopPropagation()}>
            <form className="modal__content-form">
                <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder='Введите имя и фамилию:' required />
                <input value={date} onChange={e => setDate(e.target.value)} type="date" placeholder='Введите дату:' required/>
                <input value={age} onChange={e => setAge(e.target.value)}  type="text" placeholder='Введите возраст:' required />
                <button onClick={addUserData} type="submit">Добавить</button>
            </form>
        </div>
    </div>
  )
}

export default Modal;
