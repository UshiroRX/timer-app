import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Quote {
  text: string;
  author: string;
}

const quotes: Quote[] = [
  {
    text: "Успех — это способность шагать от одной неудачи к другой, не теряя энтузиазма.",
    author: "Уинстон Черчилль",
  },
  {
    text: "Если вы хотите изменить мир, начните с себя.",
    author: "Махатма Ганди",
  },
  {
    text: "Единственный способ делать великие дела — любить то, что вы делаете.",
    author: "Стив Джобс",
  },
  {
    text: "Ваше время ограничено, не тратьте его, живя чужой жизнью.",
    author: "Стив Джобс",
  },
  {
    text: "Не бойтесь больших расходов, бойтесь маленьких доходов.",
    author: "Джон Рокфеллер",
  },
  {
    text: "Если вы не готовы рисковать, вы не готовы расти.",
    author: "Роберт Кийосаки",
  },
  {
    text: "Успех — это не ключ к счастью. Счастье — это ключ к успеху.",
    author: "Альберт Швейцер",
  },
  {
    text: "Лучший способ предсказать будущее — создать его.",
    author: "Питер Друкер",
  },
  {
    text: "Не ошибается тот, кто ничего не делает.",
    author: "Теодор Рузвельт",
  },
  {
    text: "Ваши мечты должны быть больше ваших страхов.",
    author: "Роберт Кийосаки",
  },
  {
    text: "Если вы хотите быть успешным, начните думать о себе как об успешном.",
    author: "Джойс Бразерс",
  },
  {
    text: "Успех — это лестница, по которой не взобраться, держа руки в карманах.",
    author: "Зиг Зиглар",
  },
];

export const Quote = () => {
  const [quote, setQuote] = useState<Quote | null>(null);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  useEffect(() => {
    getRandomQuote();
    const interval = setInterval(getRandomQuote, 5000); // Меняем цитату каждые 10 секунд
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {quote && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="text-center max-w-md px-4"
        >
          <p className="text-lg text-neutral-600 dark:text-neutral-300 italic mb-2">
            "{quote.text}"
          </p>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            — {quote.author}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
