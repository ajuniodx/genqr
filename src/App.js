import React, { useState } from "react";
import "./App.css";
import QenQr from "./genQr";

function App() {
  const [text, setText] = useState("");

  return (
    <div className="App">
      <header className="container">
        <a className="gen-logo" href="/">
          QenQr
        </a>
      </header>
      <section>
        <div className="container">
          <div className="content">
            <div className="qr-section">
              <div className="qr-content">
                <QenQr className="gen-code" text={text}></QenQr>
              </div>
              <p>Não armazenamos nenhum dado informado.</p>
              <div className="forms">
                <input
                  type="text"
                  placeholder="Link do QR Code"
                  onChange={(element) => {
                    setText(element.target.value);
                  }}
                  value={text}
                ></input>
              </div>
            </div>
            <div className="qr-about">
              <h1>Como Funciona</h1>
              <ul className="list-about">
                <li>Digite ou cole seu o link no campo.</li>
                <li>Aponte sua camera para testar o QR Code.</li>
                <li>
                  Clique no Botão direito na imagem clique em copiar ou baixar
                  imagem, e pronto.
                </li>
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
