import dayjs from "dayjs";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [lastConflict] = useState(new Date(2024, 11, 6, 16, 15, 0));
  const [daysWithoutConflict, setDaysWithoutConflict] = useState(0);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    setDaysWithoutConflict(dayjs().diff(dayjs(lastConflict), "day"));
  }, []);

  return (
    <div className="space-y-4">
      <div>
        <p className="text-6xl font-bold">Contador de días sin conflictos</p>
      </div>
      <div>
        <p className="text-8xl">
          <span
            className={
              daysWithoutConflict > 0 ? "text-green-500" : "text-red-500"
            }
          >
            {daysWithoutConflict}
          </span>
        </p>
      </div>
      <button
        onClick={() => setShowImage(true)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Si eres la Cuack da clic aquí para tu skin
      </button>
      {showImage && (
        <div className="flex flex-col justify-center items-center">
          <p>pati</p>
          <img src="/pati-brenda.jpeg" className="size-20" />
        </div>
      )}
    </div>
  );
}

export default App;
