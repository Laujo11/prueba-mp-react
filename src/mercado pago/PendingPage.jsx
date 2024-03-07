import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function PendingPage() {
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
  }, [id]);

  return (
    <div>
      <div>
        <h1>
          Parece que su pago quedó pendiente. Una vez que se resuelva se
          generará el pedido.
        </h1>
        <button>
          <Link to="/">Volver al inicio</Link>
        </button>
      </div>
    </div>
  );
}
