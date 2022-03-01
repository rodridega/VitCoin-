import { Cotizacion } from "./components/Cotizacion";
import { Formulario } from "./components/Formulario";
import { Logo } from "./components/Logo";
import "./index.css";
import React, { useState } from "react";
import { Spinner } from "./components/Spinner";

function App() {
  const [cotizacion, setCotizacion] = useState("");
  const [moneda, setMoneda] = useState("");
  const [cripto, setCripto] = useState("");
  const [loading, setLoading] = useState(false);
  const [mensaje, setMensaje] = useState(false);

  return (
    <div className="App">
      <div className="container mx-auto">
        <div className="flex place-content-center pt-48 pb-16">
          <Logo />
          <Formulario
            setCotizacion={setCotizacion}
            setMoneda={setMoneda}
            setCripto={setCripto}
            moneda={moneda}
            cripto={cripto}
            setLoading={setLoading}
            setMensaje={setMensaje}
          />
        </div>
        {loading && <Spinner />}
        {mensaje && (
          <Cotizacion moneda={moneda} cripto={cripto} cotizacion={cotizacion} />
        )}
      </div>
    </div>
  );
}
export default App;
