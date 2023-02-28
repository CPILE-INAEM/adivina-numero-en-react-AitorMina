import "./MostrarMensaje.css";
export default function MostrarMensaje({ number, secretNumber }) {
  console.log();
  if (secretNumber === number) {
    return <p className="message">Has acertado</p>;
  } else if (number === "") {
    return <p className="message">Empezamos a jugar...</p>;
  } else if (number > secretNumber) {
    return <p className="message">El número que buscas es menor</p>;
  } else if (number < secretNumber) {
    return <p className="message">El número que buscas es mayor</p>;
  }
}
