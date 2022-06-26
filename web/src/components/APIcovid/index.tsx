import ReactSwitch from "react-switch";
import { createContext, useState } from "react";
import { ThemeContext } from "../../App";

export function APIcovid() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <>
      <body>

        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <div className="App" id={theme}>
            <header className="header">

              <h2>Dados por regiao da Covid-19</h2>
            </header>

            <div className="container">
              <form className="my-form">
                <label id="label" htmlFor="cep">Digite um CEP: </label>
                <input id="input-cep" type="text" data-js="cep" />
                <button className="button" id="button">Pesquisar</button>
              </form>

              <div className="output">
                <p>Estado: <span id="span_estado"></span></p>
                <p>Casos: <span id="span_casos"></span></p>
                <p>Mortes: <span id="span_mortes"></span></p>
                <p>Suspeitos: <span id="span_suspeitos"></span></p>
                <p>Recusados: <span id="span_recusados"></span></p>
                <p id="update">Última atualização: <span id="span_atualizacao"></span></p>
              </div>
            </div>

            <div className="switch">
              <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
              <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
            </div>

            <footer className="footer">
              <p> Igo Kazuhiko Ujiie - Developer </p>
            </footer>
          </div>
        </ThemeContext.Provider>
        <script type="module" src="./modules/main.js"></script>
      </body>
    </>

  )
}