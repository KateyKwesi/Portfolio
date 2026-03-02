import Navbar from "./layout/Navbar";
import Hero from "./sections/Hero";

function App() {
  return (
    <div className="min-h-screen  overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;
