import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="min-h-screen bg-[#141414] text-gray-100 font-sans">
      <Navbar />
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;
