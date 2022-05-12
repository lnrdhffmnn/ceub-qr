import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Config.css';

function Config() {
  const navigate = useNavigate();

  const inputRaRef = useRef();
  const inputCodRef = useRef();

  function handleBtnSaveClick() {
    let ra = inputRaRef.current.value || '';
    let cod = inputCodRef.current.value || '';

    localStorage.setItem('ra', ra);
    localStorage.setItem('cod', cod);

    navigate('/');
  }

  return (
    <div id='config-form'>
      <label htmlFor='input-ra' className='config-label'>RA</label>
      <input type='number' id='input-ra' className='config-input' ref={inputRaRef} />
      <label htmlFor='input-cod' className='config-label'>Código (opcional)</label>
      <input type='number' id='input-cod' className='config-input' ref={inputCodRef} readOnly />
      <div className='btn-stack'>
        <input type='button' value='Ler Código QR' id='btn-qr' className='config-input config-btn' disabled />
        <input type='button' value='Salvar' id='btn-save' className='config-input config-btn' onClick={handleBtnSaveClick} />
      </div>
    </div>
  );
}

export default Config;