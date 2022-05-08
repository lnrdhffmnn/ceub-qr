import { QRCodeSVG } from 'qrcode.react';
import { useState } from 'react';
import './Home.css';

function Home() {
  const [qrData, setQrData] = useState('1234567890|1234567890');

  return (
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
  );
}

export default Home;