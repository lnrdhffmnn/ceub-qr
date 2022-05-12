import { useEffect, useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  const [qrData, setQrData] = useState('');

  useEffect(() => {
    let ra = localStorage.getItem('ra') || '';
    let cod = localStorage.getItem('cod') || '';
    if (ra) setQrData(`${ra}|${cod}`);
  }, []);

  return (
    <>
      {qrData ?
        <>
          <QRCodeSVG
            id='qr'
            value={qrData}
            size={250}
            bgColor='rgba(255, 255, 255, 0.9)'
            level='M'
            includeMargin
          />
          <span id='info'>{qrData}</span>
        </>
        :
        <h2 className='conteudo-erro'>
          Você precisa <Link to='/config' className='link-conteudo'>preencher</Link> seus dados.
        </h2>
      }
    </>
  );
}

export default Home;