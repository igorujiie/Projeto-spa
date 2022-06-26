export function APIcovid() {
  return (


    <>
      <body>
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

        <footer className="footer">
          <p> Igo Kazuhiko Ujiie - Developer </p>
        </footer>

        <script type="module" src="./modules/main.js"></script>
      </body>
    </>

  )
}