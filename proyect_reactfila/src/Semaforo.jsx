import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function TrafficLight() {
  const [color, setColor] = useState("green"); // El estado del color
  const [text, setText] = useState("Puede pasar"); // El texto que describe el estado del semáforo
  const [disabled, setDisabled] = useState(false); // Estado para deshabilitar el botón

  const handleClick = () => {
    setDisabled(true); // Deshabilita el botón cuando se presiona
    setColor("yellow"); // Cambia el color a amarillo
    setText("Prepárese para personas pasar"); // Cambia el texto

    // Luego de 2 segundos cambia a rojo
    setTimeout(() => {
      setColor("red");
      setText("Personas pueden pasar");

      // Después de 10 segundos, cambia de nuevo a verde
      setTimeout(() => {
        setColor("green");
        setText("Puede pasar");
        setDisabled(false); // Habilita el botón de nuevo
      }, 10000); // El semáforo se queda en rojo por 10 segundos
    }, 2000); // El semáforo se queda en amarillo por 2 segundos
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Este es el círculo que representa el semáforo */}
      <div
        className="w-24 h-24 rounded-full border-4"
        style={{ backgroundColor: color, borderColor: "#000" }} // Asegúrate de que el borde se vea
      ></div>

      {/* Este es el texto que cambia dependiendo del color */}
      <p className="text-xl font-semibold">{text}</p>

      {/* El botón para cambiar el semáforo */}
      <Button onClick={handleClick} disabled={disabled}>
        Cambiar Semáforo
      </Button>
    </div>
  );
}
