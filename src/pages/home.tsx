import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black transition-colors">
      <div className="w-full max-w-md flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl font-bold text-black dark:text-white tracking-tight">
            Мотивационный Таймер
          </h1>
          <p className="text-lg text-neutral-500 dark:text-neutral-400 text-center">
            Сфокусируйся на своих целях. Время — твой главный ресурс.
          </p>
        </div>
        <div className="flex flex-col items-center gap-6 w-full">
          <div className="w-full flex justify-center"></div>
          <Link to="/dashboard">
            <Button
              variant="outline"
              className="w-50 border-black dark:border-white text-black dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
            >
              Создать таймер
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
