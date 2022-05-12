import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Decoder } from '@nuintun/qrcode';
import './Config.css';

function Config() {
  const navigate = useNavigate();

  const inputRaRef = useRef();
  const inputCodRef = useRef();
  const inputQrRef = useRef();

  const qrcode = new Decoder();

  useEffect(() => {
    let ra = localStorage.getItem('ra') || '';
    let cod = localStorage.getItem('cod') || '';

    inputRaRef.current.value = ra;
    inputCodRef.current.value = cod;
  }, []);

  function handleBtnSaveClick() {
    let ra = inputRaRef.current.value || '';
    let cod = inputCodRef.current.value || '';

    localStorage.setItem('ra', ra);
    localStorage.setItem('cod', cod);

    navigate('/');
  }

  async function handleFileInputChange(file) {
    let src = URL.createObjectURL(file);
    let sep = '|';

    try {
      let result = await qrcode.scan(src);
      let data = result.data;

      if (!data.includes(sep)) throw new Error('Código QR inválido.');

      let [ra, cod] = data.split(sep);

      inputRaRef.current.value = ra;
      inputCodRef.current.value = cod;
    } catch (err) {
      alert(err.message || 'Não foi possível ler o código');
    }
  }

  return (
    <div id='config-form'>
      <label htmlFor='input-ra' className='config-label'>RA</label>
      <input type='number' id='input-ra' className='config-input' ref={inputRaRef} />
      <label htmlFor='input-cod' className='config-label'>Código (opcional)</label>
      <input type='number' id='input-cod' className='config-input' ref={inputCodRef} />
      <input
        type='file'
        id='input-qr'
        ref={inputQrRef}
        accept='image/*'
        onChange={(e) => { handleFileInputChange(e.target.files[0]) }}
      />
      <div className='btn-stack'>
        <input
          type='button'
          value='Ler Código QR'
          id='btn-qr'
          className='config-input config-btn'
          onClick={() => { inputQrRef.current.click() }}
        />
        <input
          type='button'
          value='Salvar'
          id='btn-save'
          className='config-input config-btn'
          onClick={handleBtnSaveClick}
        />
      </div>
    </div>
  );
}

export default Config;