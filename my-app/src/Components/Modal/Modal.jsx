import React from 'react'
import './Modal.scss';


const Modal = ({activeModal, setActiveModal}) => {
  return (
    <div className={activeModal ? 'modal active' : 'modal'} onClick={() => setActiveModal(false)}>
        <div className="modal__content" onClick={e => e.stopPropagation()}>
            <form className="modal__content-form">
                <input type="text" placeholder='Введите имя и фамилию' required />
                <input type="date" placeholder='Введите дату' required/>
                <input type="text" placeholder='Введите возраст' required/>
                <button type="submit">Добавить</button>
            </form>
        </div>
    </div>
  )
}

export default Modal;
