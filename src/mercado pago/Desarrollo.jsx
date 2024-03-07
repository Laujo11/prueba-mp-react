import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { useState } from "react";

export default function Prueba() {
  const [preferenceId, setPreferenceId] = useState("");

  initMercadoPago("TEST-0f14502d-ca69-425c-8886-7d871a5d1240", {
    locale: "es-AR",
  });

  const product = {
    title: "Servicios",
    price: 50000,
    quantity: 1,
  };

  async function createPreference(product) {
    const response = await fetch("http://localhost:8088/2/mp/preference", {
      body: JSON.stringify(product),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const resJson = await response.json();
    return resJson;
  }

  const getPreference = async () => {
    try {
      const data = await createPreference(product);
      if (data) {
        console.log(data.id);
        setPreferenceId(data.id);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1>Prueba mercado pago</h1>
      <button onClick={getPreference}>
        Obtener preference ID y mostrar botón
      </button>

      {preferenceId && (
        <Wallet initialization={{ preferenceId: preferenceId }} />
      )}
    </div>
  );
}
