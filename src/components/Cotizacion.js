import React from "react";

export const Cotizacion = ({ cripto, cotizacion, moneda }) => {
  return (
    <div className="border-4 rounded bg-amber-400 w-3/6 mx-auto text-xl lg:text-4xl animate__animated animate__flipInX">
      <h3 className="bg-amber-700 text-center text-stone-50 p-4">
        Tu Cotización es:{" "}
      </h3>

      <p className="text-center py-10">
        {cripto} = {cotizacion[moneda]} {moneda}
      </p>
    </div>
  );
};
