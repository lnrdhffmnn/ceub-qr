import './Config.css';

function Config() {
  return (
    <div id='config-form'>
      <label htmlFor='input-ra' className='config-label'>RA</label>
      <input type='number' id='input-ra' className='config-input' />
      <label htmlFor='input-cod' className='config-label'>Código (opcional)</label>
      <input type='number' id='input-cod' className='config-input' />
      <input type='button' value='Salvar' id='btn-save' className='config-input config-btn' />
      <input type='button' value='Ler Código QR' id='btn-qr' className='config-input config-btn' />
    </div>
  );
}

export default Config;