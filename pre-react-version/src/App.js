import "./App.css";
import Aviso from "./Aviso.js";
import Pagina_principal from "./Pagina_principal.js";
import Contador from "./Contador.js";

function App() {
  return (
    <div className="App">
      <Pagina_principal titulo="Esta es la página principal" />
      <p>Párrafo de prueba</p>
      <Contador />
      <Aviso />
    </div>
  );
}

export default App;
