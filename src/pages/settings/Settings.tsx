import { ChangeEvent, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Decoder } from "@nuintun/qrcode";
import { motion } from "framer-motion";
import "./Settings.css";

function Settings() {
  const inputQrImageRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const qrcode = new Decoder();

  async function handleInputQrImageChange(event: ChangeEvent<HTMLInputElement>) {
    const imageUrl = URL.createObjectURL(event.target.files![0]);
    const sep = "|";

    try {
      let result = await qrcode.scan(imageUrl);
      let data = result.data;

      if (!data.includes(sep)) throw new Error("Código QR inválido");

      localStorage.setItem("ceub-id", data);
      navigate("/");
    } catch (err: any) {
      alert(err.message || "Não foi possível ler o código QR");
    }
  }

  function wipeData() {
    if (confirm("Tem certeza?")) {
      localStorage.removeItem("ceub-id");
      navigate("/");
    }
  }

  return (
    <>
      <input
        type="file"
        id="input-qr-image"
        accept="image/*"
        ref={inputQrImageRef}
        onChange={handleInputQrImageChange}
      />
      <motion.button
        id="btn-qr"
        onClick={() => inputQrImageRef.current?.click()}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: .9 }}
      >
        Ler código QR
      </motion.button>
      {localStorage.getItem('ceub-id') &&
        <motion.button
          id="btn-wipe"
          onClick={wipeData}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: .9 }}
        >
          Apagar dados
        </motion.button>
      }
    </>
  );
}

export default Settings;