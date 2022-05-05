import { QRCodeSVG } from 'qrcode.react';

function Qr({ qrValue }) {
  return (
    <QRCodeSVG
      value={qrValue}
      size={256}
      bgColor='#EDF2F7'
      includeMargin={true}
      level='M'
      style={{
        borderRadius: 10
      }}
    />
  );
}

export default Qr;