const root = document.getElementById("root");

function Titulo(props) {
  return (
    <>
      <h1> {props.texto} </h1>
    </>
  );
}

function Participante(props) {
  const [votos, setVotos] = React.useState(0);

  function votar() {
    setVotos(votos + 1);
  }

  return (
    <>
      <h1>{props.nome}</h1>
      <h2>Votos: {votos}</h2>
      <button onClick={votar}>Votar</button>
    </>
  );
}

function Votacao() {
  return (
    <>
      <Titulo texto="Votação de melhor jogo da From Software" />
      <Participante nome="Dark Souls" />
      <Participante nome="Sekiro" />
      <Participante nome="Elden Ring" />
    </>
  );
}

ReactDOM.createRoot(root).render(<Votacao />);