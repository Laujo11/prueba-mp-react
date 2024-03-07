import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function SuccesPage() {
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
  }, [id]);

  return (
    <div>
      <div>
        <h1>¡Su pago fue realizado con éxito!</h1>
        <button>
          <Link to="/">Volver al inicio</Link>
        </button>
      </div>
    </div>
  );
}
