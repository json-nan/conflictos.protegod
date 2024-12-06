import dayjs from "dayjs";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [lastConflict] = useState(new Date(2024, 11, 6, 16, 15, 0));
  const [daysWithoutConflict, setDaysWithoutConflict] = useState(0);

  useEffect(() => {
    setDaysWithoutConflict(dayjs().diff(dayjs(lastConflict), "day"));
  }, []);

  return (
    <>
      <div>
        <p className="text-6xl font-bold">Contador de días sin conflictos</p>
      </div>
      <div>
        <p className="text-8xl mt-4">
          <span
            className={
              daysWithoutConflict > 0 ? "text-green-500" : "text-red-500"
            }
          >
            {daysWithoutConflict}
          </span>
        </p>
      </div>
    </>
  );
}

export default App;
