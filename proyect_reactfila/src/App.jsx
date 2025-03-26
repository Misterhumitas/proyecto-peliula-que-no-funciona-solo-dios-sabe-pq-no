import { useState } from "react";
import Semaforo from "./Semaforo.jsx";
import Issues from "./Issues.jsx";


export default function App() {
  const [view, setView] = useState("Semaforo");

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex space-x-4">
        <button
          onClick={() => setView("api")}
          className={`px-4 py-2 rounded ${view === "api" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
        >
          Ver API
        </button>
        <button
          onClick={() => setView("Semaforo")}
          className={`px-4 py-2 rounded ${view === "Semaforo" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
        >
          Ver Semáforo
        </button>
      </div>

      {view === "Semaforo" ? <Semaforo /> : <Issues />}
    </div>
  );
}