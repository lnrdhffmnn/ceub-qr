import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react";
import "./Home.css";

function Home() {
  const [qrData, setQrData] = useState<string>();

  useEffect(() => setQrData(localStorage.getItem("ceub-id") || ""), []);

  return (
    <>
      {qrData
        ? <>
          <QRCodeSVG
            id="qr"
            value={qrData}
            size={250}
            bgColor="var(--ceub-white)"
            level="M"
            includeMargin
          />
          <span id="info">{qrData}</span>
        </>
        : <h2 id="conteudo">
          Você precisa <Link to="/settings" className="link-conteudo" draggable={false}>preencher</Link> seus dados.
        </h2>
      }
    </>
  );
}

export default Home;