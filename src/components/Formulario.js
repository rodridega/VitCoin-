import React from "react";
import { Boton } from "./Boton";

export const Formulario = ({
  setCotizacion,
  setCripto,
  setMoneda,
  moneda,
  cripto,
  setLoading,
  setMensaje,
}) => {
  const handleCoin = (e) => {
    setMensaje(false);
    setMoneda(e.target.value);
  };
  const handleCripto = (e) => {
    setMensaje(false);
    setCripto(e.target.value);
  };

  const solicitarCotizacion = (e) => {
    e.preventDefault();
    setLoading(true);
    setMensaje(false);
    const url = `https://min-api.cryptocompare.com/data/price?fsym=${cripto}&tsyms=${moneda}`;

    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setCotizacion(json);
        setLoading(false);
        setMensaje(true);
      });
  };
  return (
    <div>
      <form
        className="flex flex-col text-2xl mx-20 text-center text-amber-600"
        onSubmit={solicitarCotizacion}
      >
        <label>ELEGÍ TU MONEDA</label>
        <select onChange={handleCoin} defaultValue={"DEFAULT"}>
          <option value="DEFAULT" disabled>
            Elige tu moneda
          </option>
          <option value="USD">Dolar</option>
          <option value="ARG">Peso Argentino</option>
          <option value="EUR">Euro</option>
        </select>
        <hr className="m-5" />
        <label>ELEGÍ TU CRIPTO</label>
        <select onChange={handleCripto} defaultValue={"DEFAULT"}>
          <option value="DEFAULT" disabled>
            Elige tu cripto
          </option>
          <option value="BTC">Bitcoin</option>
          <option value="ETH">Ethereum</option>
          <option value="USDT">USDT</option>
          <option value="LUNA">LUNA</option>
          <option value="BNB">Binance Coin</option>
          <option value="USDC">USD Coin</option>
          <option value="SOL">Solana</option>
          <option value="ADA">Cardano</option>
        </select>
        <hr className="m-5" />
        <Boton />
      </form>
    </div>
  );
};
