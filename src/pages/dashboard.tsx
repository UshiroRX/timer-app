import { Timer } from "@/components/timer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Quote } from "@/components/quote";

const transitionConfig = {
  type: "spring",
  stiffness: 150,
  damping: 18,
  mass: 0.8,
};

const DashboardPage = () => {
  const [name, setName] = useState<string>("");
  const [timeInput, setTimeInput] = useState<string>("");
  const [startTime, setStartTime] = useState<number | null>(null);

  const handleStart = () => {
    localStorage.setItem("name", name);
    const parsedTime = parseInt(timeInput);
    if (!isNaN(parsedTime) && parsedTime > 0) {
      setStartTime(parsedTime);
    } else {
      alert("Введите корректное число секунд");
    }
  };

  const handleReset = () => {
    setName("");
    setTimeInput("");
    setStartTime(null);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black transition-colors relative">
      <Link
        to="/"
        className="absolute top-4 left-4 text-3xl md:text-4xl hover:scale-110 transition-transform select-none"
        aria-label="На главную"
      >
        ←
      </Link>
      <div className="w-full max-w-md flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl font-bold text-black dark:text-white tracking-tight">
            Ваш Таймер
          </h1>
          <p className="text-lg text-neutral-500 dark:text-neutral-400 text-center">
            Введите имя и время, чтобы начать свой мотивационный отсчет!
          </p>
        </div>
        <AnimatePresence mode="wait">
          {startTime === null ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -40, scale: 0.98 }}
              transition={transitionConfig}
              className="flex flex-col items-center gap-6 w-full"
            >
              <Input
                className="w-[300px] border-white text-black dark:text-white bg-white dark:bg-black"
                placeholder="Введите свое имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                className="w-[300px] border-white dark:border-white text-black dark:text-white bg-white dark:bg-black"
                placeholder="Введите время (в секундах)"
                value={timeInput}
                onChange={(e) => setTimeInput(e.target.value)}
                type="number"
                min={1}
              />
              <Button
                onClick={handleStart}
                variant="outline"
                className="w-50 border-black dark:border-white text-black dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
              >
                Создать таймер
              </Button>
            </motion.div>
          ) : (
            <motion.div
              key="timer"
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -40, scale: 0.98 }}
              transition={transitionConfig}
              className="flex flex-col items-center gap-6 w-full"
            >
              <Timer inputTime={startTime} name={name} />
              <Quote />
              <Button
                onClick={handleReset}
                variant="outline"
                className="w-32 border-black dark:border-white text-black dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
              >
                Сброс
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
};

export default DashboardPage;
