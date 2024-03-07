import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function FailurePage() {
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
  }, [id]);

  return (
    <div>
      <div>
        <h1>Lo sentimos, su pago fue rechazado. Inténtelo de nuevo.</h1>
        <button>
          <Link to="/">Volver al inicio</Link>
        </button>
      </div>
    </div>
  );
}
