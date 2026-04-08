interface Car {
  id: number;
  brand: string;
  model: string;
  seats: number;
  price_per_day: number;
  features: string[];
  image: string;
  is_best: boolean;
  is_alternative: boolean;
  recommendation: string;
}

export default function CarCard({ car }: { car: Car }) {
  return (
    <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm group border border-[#eceef0] hover:shadow-md transition-shadow duration-300">
      <div className="grid grid-cols-5">

        {/* ── Left: Image + Info ── */}
        <div className="col-span-3 p-8 flex flex-row gap-8">

          {/* Image */}
          <div className="w-1/2 relative h-64 rounded-3xl overflow-hidden bg-[#eceef0] shrink-0">
            <img
              src={car.image}
              alt={`${car.brand} ${car.model}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Price badge */}
            <div className="absolute top-4 right-4 bg-[#0ea5e9]/90 backdrop-blur-md text-white px-4 py-2 rounded-2xl font-bold text-sm shadow-sm">
              ${car.price_per_day}/día
            </div>
          </div>

          {/* Info */}
          <div className="w-1/2 flex flex-col justify-between py-2">
            <div>

              {/* Badge mejor opción / alternativa */}
              {car.is_best && (
                <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#0ea5e9] bg-sky-50 px-3 py-1 rounded-full mb-3">
                  ⭐ Mejor Opción
                </span>
              )}
              {car.is_alternative && (
                <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#3c627d] bg-slate-100 px-3 py-1 rounded-full mb-3">
                  👍 Alternativa
                </span>
              )}

              {/* Nombre */}
              <h3 className="text-3xl font-extrabold tracking-tight text-[#191c1e] font-['Manrope',sans-serif] mb-4">
                {car.brand} {car.model}
              </h3>

              {/* Asientos */}
              <div className="flex items-center gap-2 text-[#3e4850] mb-6">
                <span className="material-symbols-outlined text-base">event_seat</span>
                <span className="text-sm font-semibold">{car.seats} Asientos Disponibles</span>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-8">
                {car.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-4 py-1.5 rounded-xl bg-[#e6e8ea] text-[#3e4850] text-xs font-bold uppercase tracking-wider"
                  >
                    {feature}
                  </span>
                ))}
              </div>

            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <button className="bg-[#006591] text-white px-8 py-3.5 rounded-2xl font-bold text-sm shadow-lg shadow-sky-100 hover:-translate-y-0.5 transition-all active:scale-95">
                Reservar ahora
              </button>
              <button className="text-[#006591] font-bold text-sm px-4 py-3.5 hover:bg-sky-50 rounded-2xl transition-all">
                Ver Detalles
              </button>
            </div>

          </div>
        </div>

        {/* ── Right: AI Recommendation ── */}
        <div className="col-span-2 bg-sky-50/60 p-10 flex flex-col justify-center border-l border-[#eceef0]">
          <div className="flex items-center gap-2 text-[#0ea5e9] mb-4">
            <span className="material-symbols-outlined">auto_awesome</span>
            <h4 className="font-bold text-lg font-['Manrope',sans-serif]">Recomendación con IA</h4>
          </div>
          <p className="text-[#3e4850] leading-relaxed text-lg italic">
            "{car.recommendation.split(car.brand).map((part, i, arr) =>
              i < arr.length - 1 ? (
                <span key={i}>
                  {part}
                  <span className="font-bold text-[#006591] not-italic">{car.brand}</span>
                </span>
              ) : (
                part
              )
            )}"
          </p>
        </div>

      </div>
    </div>
  );
}
