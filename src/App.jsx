import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Profile from "./components/sections/Profile";
import Projects from "./components/sections/Projects";
import Footer from "./components/sections/Footer";
import TestAPI from "./components/TestAPI";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">

      <Header />

      <main className="flex-1">
        <Hero />
        <Skills />
        <Profile />
        <Projects />
      </main>

      <Footer />

      <TestAPI />
    </div>
  );
}