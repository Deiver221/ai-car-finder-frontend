import CarCard from "./CarCard";
export default function Results({ data }: { data: any }) {
  if (!data) return null;

  return (
    <div className="py-12">

      {/* ── Header de sección ── */}
      <div className="flex justify-between items-end mb-10">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-[#191c1e] font-['Manrope',sans-serif]">
            Resultados precisos para ti
          </h2>
          {/* Mensaje generado por la IA */}
          <p className="text-[#3e4850] mt-1">{data.message}</p>
        </div>
        <button className="text-[#006591] font-semibold flex items-center gap-1 hover:underline transition-all">
          <a href="https://carrental-frontend-omega.vercel.app/" target="_blank" rel="noopener noreferrer">Ver Todo el Inventario</a>
          <span className="material-symbols-outlined text-sm">open_in_new</span>
        </button>
      </div>

      {/* ── Grid de cards ── */}
      <div className="grid grid-cols-1 gap-12">
        {data.cars.map((car: any) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>

    </div>
  );
}
