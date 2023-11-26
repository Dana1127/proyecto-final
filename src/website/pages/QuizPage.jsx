import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

export function QuizPage() {
  const [sliderValue, setSliderValue] = useState(1);
  const [sliderValue2, setSliderValue2] = useState(1);
  const [sliderValue3, setSliderValue3] = useState(1);
  const [sliderValue4, setSliderValue4] = useState(1);
  const [sliderValue5, setSliderValue5] = useState(1);
  const [sliderValue6, setSliderValue6] = useState(1);

  const handleSliderChange = (value) => {
    setSliderValue(value);
  };

  const handleSliderChange2 = (value) => {
    setSliderValue2(value);
  };

  const handleSliderChange3 = (value) => {
    setSliderValue3(value);
  };

  const handleSliderChange4 = (value) => {
    setSliderValue4(value);
  };

  const handleSliderChange5 = (value) => {
    setSliderValue5(value);
  };

  const handleSliderChange6 = (value) => {
    setSliderValue6(value);
  };




  //Mandar info al back-end
  const enviarAlQuiz = async () => {
    const datosUsuario = {
      categoria1: sliderValue,
      categoria2: sliderValue2,
      categoria3: sliderValue3,
      categoria4: sliderValue4,
      categoria5: sliderValue5,
      categoria6: sliderValue6,
    };

    try {
      const respuesta = await fetch('http://localhost:5000/calcular_similitud', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ datos_usuario: datosUsuario }),
      });

      const datos = await respuesta.json();
      console.log('Resultados de la similitud coseno:', datos.resultados);
    } catch (error) {
      console.error('Error al enviar datos al back-end:', error);
    }
  };




//debugging -> comprobar que sirve la similitud

  const datosUsuario = {
    color_preferido: sliderValue,
    estilo_preferido: sliderValue2,
    textura_preferida: sliderValue3,
    ajuste_ropa: sliderValue4,
    importancia_tendencia: sliderValue5,
  };

  // Realizar la solicitud al backend
  fetch('http://localhost:5000/calcular_similitud', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ datos_usuario: datosUsuario }),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Respuesta del servidor:', data);
    // Puedes agregar más lógica aquí según la respuesta del servidor
  })
  .catch(error => {
    console.error('Error en la solicitud:', error);
  });





  //resto del front PREGUNTAS
  return (
    <div className="bg-[#91B7DC] min-h-screen flex items-center justify-center">
      {/* Agrega el margen alrededor del card */}
      <div
        className="max-w-6xl w-full bg-white p-32 rounded-md shadow-md text-center my-8"
        style={{ margin: "100px" }}
      >
        {/* Pregunta 1 */}
        <h1 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          1. ¿Prefieres una paleta de colores vibrantes o una de tonos neutros?
        </h1>
        <div className="flex h-full items-center justify-center py-4">
          <img
            src="./imgs/pregunta1.png"
            alt="Logo"
            className="w-96 h-auto mr-2"
          />
        </div>

        <div className="flex items-center justify-between">
          <span className="px-4">Vibrantes</span>{" "}
          <Slider
            min={1}
            max={5}
            value={sliderValue}
            onChange={handleSliderChange}
            marks={{
              1: "1",
              2: "2",
              3: "3",
              4: "4",
              5: "5",
            }}
            step={1}
            dots
          />
          <span className="px-4">Oscuros</span>{" "}
        </div>
        <div className="border-b border-gray-300 my-4 py-6"></div>

        {/* Pregunta 2 */}
        <h1 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">
          2. ¿Qué tan formal prefieres tu estilo de vestir?
        </h1>
        <div className="flex h-full items-center justify-center py-4">
          <img
            src="./imgs/pregunta2.png"
            alt="Logo"
            className="w-96 h-auto mr-2"
          />
        </div>
        <div className="flex items-center justify-between">
          {/* Opciones para la nueva pregunta */}
          <span className="px-4">Casual</span>{" "}
          <Slider
            min={1}
            max={5}
            value={sliderValue2}
            onChange={handleSliderChange2}
            marks={{
              1: "1",
              2: "2",
              3: "3",
              4: "4",
              5: "5",
            }}
            step={1}
            dots
          />
          <span className="px-4">Formal</span>{" "}
        </div>
        <div className="border-b border-gray-300 my-4 py-6"></div>

        {/* Pregunta 3 */}
        <h1 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          3. ¿Qué tan a menudo usas prendas con estampados o diseños llamativos?
        </h1>
        <div className="flex h-full items-center justify-center py-4">
          <img
            src="./imgs/pregunta3.png"
            alt="Logo"
            className="w-96 h-auto mr-2"
          />
        </div>
        <div className="flex items-center justify-between">
          <span className="px-4">Nunca</span>{" "}
          <Slider
            min={1}
            max={5}
            value={sliderValue3}
            onChange={handleSliderChange3}
            marks={{
              1: "1",
              2: "2",
              3: "3",
              4: "4",
              5: "5",
            }}
            step={1}
            dots
          />
          <span className="px-4">Siempre</span>{" "}
        </div>
        <div className="border-b border-gray-300 my-4 py-6"></div>

        {/* Pregunta 4 */}
        <h1 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          4. ¿Cómo prefieres que se ajusten tus prendas?
        </h1>
        <div className="flex h-full items-center justify-center py-4">
          <img
            src="./imgs/pregunta4.png"
            alt="Logo"
            className="w-96 h-auto mr-2"
          />
        </div>
        <div className="flex items-center justify-between">
          <span className="px-4">Holgado</span>{" "}
          <Slider
            min={1}
            max={5}
            value={sliderValue4}
            onChange={handleSliderChange4}
            marks={{
              1: "1",
              2: "2",
              3: "3",
              4: "4",
              5: "5",
            }}
            step={1}
            dots
          />
          <span className="px-4">Ajustado</span>{" "}
        </div>
        <div className="border-b border-gray-300 my-4 py-6"></div>

        {/* Pregunta 5 */}
        <h1 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          5. ¿Qué tan importante son los accesorios en tu estilo?
        </h1>
        <div className="flex h-full items-center justify-center py-4">
          <img
            src="./imgs/pregunta5.png"
            alt="Logo"
            className="w-96 h-auto mr-2"
          />
        </div>
        <div className="flex items-center justify-between">
          <span className="px-4">No importantes</span>{" "}
          <Slider
            min={1}
            max={5}
            value={sliderValue5}
            onChange={handleSliderChange5}
            marks={{
              1: "1",
              2: "2",
              3: "3",
              4: "4",
              5: "5",
            }}
            step={1}
            dots
          />
          <span className="px-4">Muy importantes</span>{" "}
        </div>
        <div className="border-b border-gray-300 my-4 py-6"></div>

        {/* Pregunta 6 */}
        <h1 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          6. ¿Qué tan dispuesto/a estás a seguir las tendencias de moda
          actuales?
        </h1>
        <div className="flex h-full items-center justify-center py-4">
          <img
            src="./imgs/pregunta6.png"
            alt="Logo"
            className="w-96 h-auto mr-2"
          />
        </div>
        <div className="flex items-center justify-between">
          <span className="px-4">Nada dispuesto/a</span>{" "}
          <Slider
            min={1}
            max={5}
            value={sliderValue6}
            onChange={handleSliderChange6}
            marks={{
              1: "1",
              2: "2",
              3: "3",
              4: "4",
              5: "5",
            }}
            step={1}
            dots
          />
          <span className="px-4">Muy dispuesto/a</span>{" "}
        </div>
      </div>


{/* BOTÓN PARA ENVIAR LOS DATOS -> QUIZ */}
<button
onClick={enviarAlQuiz}
className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
>Enviar al Quiz</button>

</div>

  );
}


