import { Route, Routes } from "react-router-dom";
import Prueba from "./mercado pago/prueba";
import SuccesPage from "./mercado pago/SuccessPage";
import PendingPage from "./mercado pago/PendingPage";
import FailurePage from "./mercado pago/FailurePage";

const Router = () => {
  return (
    <Routes>
      <Route path="*" element={<Prueba />} />
      <Route path="/:id/success" element={<SuccesPage />} />
      <Route path="/:id/pending" element={<PendingPage />} />
      <Route path="/:id/failure" element={<FailurePage />} />
    </Routes>
  );
};

export default Router;
