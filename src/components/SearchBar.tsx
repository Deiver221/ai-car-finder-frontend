import { useState } from "react";

const SUGGESTIONS = [
  "Ideal para familia",
  "Alto rendimiento",
  "Deportivo",
  "Fácil de estacionar"
];

export default function SearchBar({
  onSearch,
}: {
  onSearch: (query: string) => void;
}) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (!query.trim()) return;
    onSearch(query);
  };

  const handleSuggestion = (suggestion: string) => {
    setQuery(suggestion);
    onSearch(suggestion);
  };

  return (
    <div className="max-w-3xl mx-auto">

      {/* Search Bar */}
      <div className="group flex items-center bg-white rounded-full p-2 shadow-[0_20px_40px_rgba(0,101,145,0.05)] transition-all duration-300 focus-within:ring-2 focus-within:ring-[#0ea5e9]">

        {/* Icon */}
        <div className="pl-6 text-[#0ea5e9]">
          <span className="material-symbols-outlined">auto_awesome</span>
        </div>

        {/* Input */}
        <input
          type="text"
          placeholder="Auto barato para 4 personas..."
          className="w-full bg-transparent border-none outline-none focus:ring-0 px-4 py-4 text-[#191c1e] text-lg placeholder:text-[#6e7881]"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
        />

        {/* Button */}
        <button
          onClick={handleSearch}
          className="bg-[#0ea5e9] text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-sky-200 whitespace-nowrap"
        >
          Buscar
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>

      </div>

      {/* Quick Suggestions */}
      <div className="flex flex-wrap justify-center gap-3 mt-8">
        <span className="text-sm font-medium text-[#3e4850] pt-2">Prueba:</span>
        {SUGGESTIONS.map((s) => (
          <button
            key={s}
            onClick={() => handleSuggestion(s)}
            className="px-4 py-2 rounded-full bg-[#e6e8ea] text-[#3e4850] text-sm hover:bg-[#0ea5e9] hover:text-white transition-all"
          >
            {s}
          </button>
        ))}
      </div>

    </div>
  );
}
