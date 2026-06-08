export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center 
                    bg-white text-black 
                    dark:bg-black dark:text-white">

      <h1 className="text-3xl font-bold">
        Tailwind Çalışıyor 🎉
      </h1>
<button onClick={() => document.documentElement.classList.toggle("dark")}>
  Toggle
</button>
    </div>
  );
}