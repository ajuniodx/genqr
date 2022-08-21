import React, { useState } from "react";
import QRCode from "react-qr-code";
import QRCodeLink from "qrcode";
import "./App.css";

function App() {
  const [qrr, setQrr] = useState("");
  const [downQr, setDownQr] = useState("");

  function generateDownload(link_url) {
    QRCodeLink.toDataURL(
      link_url,
      {
        width: 1000,
        margin: 2,
      },
      function (err, url) {
        setDownQr(url);
      }
    );
  }

  return (
    <div className="App">
      <section>
        <div className="container">
          <div className="content">
            <div className="qr-section">
              <div className="qr-content">
                <QRCode viewBox={`0 0 256 256`} value={qrr} />
              </div>
              <p>Não armazenamos nenhum dado informado.</p>
              <div className="forms">
                <input
                  type="text"
                  placeholder="Link do QR Code"
                  onChange={(element) => {
                    setQrr(element.target.value);
                    generateDownload(element.target.value);
                  }}
                  value={qrr}
                ></input>
                <a
                  className="btn-primary "
                  href={downQr}
                  download="genqr.png"
                  disabled={false}
                >
                  Baixar QrCode
                </a>
              </div>
            </div>
            <div className="qr-about">
              <h1>Como Funciona</h1>
              <ul className="list-about">
                <li>Digite ou cole seu o link no campo.</li>
                <li>Aponte sua camera para testar o QR Code.</li>
                <li>Clique no Botão "Baixar QrCode" e pronto.</li>
              </ul>
              <p>
                O gerador de QR Code é uma ótima ferramenta para ações de
                marketing, relacionamento. Com o gerador de QR Codes você tem a
                possibilidade de utilizar em campanhar de marketing digital.
                Como a ferramenta disponibiliza o png para download, facilita
                muito na hora da criação da sua campanha. Utilize com moderação
                rsrs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
