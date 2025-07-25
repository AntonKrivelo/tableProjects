import React, {useState} from 'react'
import './Modal.scss';


const Modal = ({activeModal, setActiveModal}) => {

    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [age, setAge] = useState();

    console.log(name)

  return (
    <div className={activeModal ? 'modal active' : 'modal'} onClick={() => setActiveModal(false)}>
        <div className="modal__content" onClick={e => e.stopPropagation()}>
            <form className="modal__content-form">
                <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder='Введите имя и фамилию' required />
                <input value={date} onChange={e => setDate(e.target.value)} type="date" placeholder='Введите дату:  Пример: 29 мая 1998 г.' required/>
                <input value={age} onChange={e => setAge(e.target.value)}  type="text" placeholder='Введите возраст' required/>
                <button type="submit">Добавить</button>
            </form>
        </div>
    </div>
  )
}

export default Modal;
