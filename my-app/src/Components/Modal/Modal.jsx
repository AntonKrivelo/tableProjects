import { useState } from 'react';
import './Modal.scss';
import { useForm } from 'react-hook-form';

const Modal = ({ onClose, onSubmit, userData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (userData) => {
    let id;
    const result = { ...userData, id };
    onSubmit(result);
    onClose();
  };

  return (
    <div>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <h2>Введите данные пользователя: </h2>
        <form onSubmit={handleSubmit(handleFormSubmit)} className="modal__content-form">
          <div>
            <input
              {...register('name', { required: 'Введите имя пользователя!' })}
              type="text"
              placeholder="Введите имя и фамилию:"
            />
            {errors.name && <p>{errors.name.message}</p>}
          </div>
          <div>
            <input
              {...register('date', { required: 'Введите дату!' })}
              type="date"
              placeholder="Введите дату:"
            />
            {errors.date && <p>{errors.date.message}</p>}
          </div>
          <div>
            <input
              {...register('age', { required: 'Введите возраст!' })}
              type="text"
              placeholder="Введите возраст:"
            />
            {errors.age && <p>{errors.age.message}</p>}
          </div>
          <button onClick={onClose} type="button">
            Отменить
          </button>
          <button type="submit">Добавить</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
