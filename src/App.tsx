import { useState } from "react";
import SearchBar from "./components/SearchBar";
import Results from "./components/Result";
const API_URL = import.meta.env.VITE_API_URL;

function App() {
  const [data, setData] = useState(null);

  const handleSearch = async (query: string) => {
    try {
      const res = await fetch(
        `${API_URL}/ai-search?query=${encodeURIComponent(query)}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query }),
        }
      );
      const json = await res.json();
      setData(json);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f9fb] text-[#191c1e] antialiased font-['Inter',sans-serif]">

      {/* ── Header ── */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-sm">
        <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
          <div className="text-2xl font-extrabold tracking-tighter text-slate-900 font-['Manrope',sans-serif]">
            AI Car Finder
          </div>
          <nav className="flex items-center gap-8">
            <a
              href="#"
              className="text-sky-600 font-semibold border-b-2 border-sky-500 font-['Manrope',sans-serif] tracking-tight center"
            >
              Inicio
            </a>
          </nav>
          <button className="px-5 py-2 rounded-full font-medium text-slate-500 hover:bg-slate-50 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>

          </button>
        </div>
      </header>

      {/* ── Main ── */}
      <main className="pt-24 pb-32">

        {/* Hero & Search Section */}
        <section className="max-w-7xl mx-auto px-6 py-12 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-[#191c1e] font-['Manrope',sans-serif]">
            Encuentra tu{" "}
            <span className="text-[#0ea5e9]">vehículo </span>
            ideal
          </h1>
          <p className="text-[#3e4850] text-lg mb-12 max-w-2xl mx-auto">
            Dile a nuestra IA lo que necesitas, sin filtros. Solo lenguaje natural, resultados precisos.
          </p>

          <SearchBar onSearch={handleSearch} />
        </section>

        {/* Results Section */}
        <section className="max-w-7xl mx-auto px-6">
          <Results data={data} />
        </section>

        {/* Features Bento Section */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-4 gap-6">

            {/* Big card */}
            <div className="col-span-2 bg-[#0ea5e9] text-white p-10 rounded-[2.5rem] flex flex-col justify-between relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-3xl font-extrabold mb-4 font-['Manrope',sans-serif]">
                  La ventaja de la IA
                </h3>
                <p className="max-w-xs opacity-90 font-medium">
                  Nuestra red neuronal analiza más de 50.000 anuncios para encontrar tu coincidencia exacta en milisegundos.
                </p>
              </div>
              <div className="mt-8 relative z-10">
                <button className="bg-white text-[#0ea5e9] px-6 py-3 rounded-full font-bold shadow-xl hover:opacity-90 transition-all">
                  Leer Más
                </button>
              </div>
              {/* Decorative blur */}
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-white/20 rounded-full blur-3xl pointer-events-none" />
            </div>

            {/* Verified */}
            <div className="bg-[#f2f4f6] p-8 rounded-[2.5rem] flex flex-col">
              <span className="material-symbols-outlined text-[#0ea5e9] text-4xl mb-4">
                verified
              </span>
              <h4 className="text-xl font-bold mb-2 font-['Manrope',sans-serif]">
                Dueños Verificados
              </h4>
              <p className="text-[#3e4850] text-sm">
                Todos los vehículos reciben una inspencción por el equipo antes de la entrega
              </p>
            </div>

            {/* Support */}
            <div className="bg-[#f2f4f6] p-8 rounded-[2.5rem] flex flex-col">
              <span className="material-symbols-outlined text-[#0ea5e9] text-4xl mb-4">
                support_agent
              </span>
              <h4 className="text-xl font-bold mb-2 font-['Manrope',sans-serif]">
                Soporte 24/7 
              </h4>
              <p className="text-[#3e4850] text-sm">
                Personal real a su disposición en cualquier momento que necesite ayuda durante su alquiler.
              </p>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}

export default App;
