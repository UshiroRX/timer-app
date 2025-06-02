import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

interface TimerProps {
  inputTime: number;
  name?: string;
}

export const Timer = ({ inputTime, name }: TimerProps) => {
  const [time, setTime] = useState<number>(inputTime);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    } else if (time === 0 && isActive) {
      setIsActive(false);
      setIsFinished(true);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, time]);

  const handleStart = () => {
    if (!isActive && time > 0) {
      setIsActive(true);
      setIsFinished(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center gap-6 bg-white dark:bg-black rounded-xl h-40 shadow-md transition-colors">
      {isFinished ? (
        <>
          <h1 className="text-2xl font-bold text-green-600 dark:text-green-400 text-center">
            Ура! {name}, вы справились!
          </h1>
          <Button
            onClick={() => {
              setTime(inputTime);
              setIsFinished(false);
            }}
            variant="outline"
            className="w-32 border-black dark:border-white text-black dark:text-white hover:bg-neutral-100 white:hover:bg-neutral-900 transition-colors"
          >
            Повторить
          </Button>
        </>
      ) : (
        <>
          {isActive && <h2>{name}, у вас осталось</h2>}
          <h1 className="text-3xl font-bold text-black dark:text-white mb-4">
            {time} сек.
          </h1>
          <div className="flex gap-4">
            <Button
              onClick={handleStart}
              disabled={isActive || time === 0}
              className="w-32 border-black dark:border-white text-black dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
              variant="outline"
            >
              Старт
            </Button>
          </div>
        </>
      )}
    </div>
  );
};
