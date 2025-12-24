import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Watchlist from "./pages/Watchlist";

function App() {
  return (
    <div className="min-h-screen bg-[#141414] text-gray-100 font-sans">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watchlist" element={<Watchlist />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
