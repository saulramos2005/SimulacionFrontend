import type { SimulacionResults } from "../Types/Simulacion";
import { PruebaCard } from "./PruebaCard";

interface Pruebas{
  resultados: SimulacionResults;
}

export function Pruebas( {resultados}: Pruebas) {
  const tablaData = [
    { metodo: "Kolmogorov-Smirnov", ec: resultados.pruebas.K_Smirnov.estadistico_D, vc: resultados.pruebas.K_Smirnov.valor_critico },
    { metodo: "Varianza", ec: resultados.pruebas.Varianza.valor_estadistico, vc: resultados.pruebas.Varianza.valor_critico},
    { metodo: "Rachas (Independencia)", ec: resultados.pruebas.Rachas.estadistico_Z, vc: resultados.pruebas.Rachas.valor_critico_Z },
    { metodo: "Media", ec: resultados.pruebas.Media.estadistico, vc: resultados.pruebas.Media.valor_critico[1] },
  ];
  return (
    <section className='space-y-6'>
      <h3 className="border-b-2 pb-6 font-serif italic font-black text-xl">III. Análisis de Resultados (Pruebas)</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
       <PruebaCard 
          estado={resultados.pruebas.K_Smirnov.rechazar_H0 ? "Rechazada" : "Aprobada"} 
          nombre="K-Smirnov" 
          FilaDatos={[{ label: "Estadístico D+", valor: resultados.pruebas.K_Smirnov.estadistico_D }]} 
        />
        <PruebaCard 
          estado={resultados.pruebas.Media.rechazar_H0 ? "Rechazada" : "Aprobada"} 
          nombre="Media" 
          FilaDatos={[{ label: "Lim. Inf", valor: resultados.pruebas.Media.media_muestral}]} 
        />
        <PruebaCard 
          estado={resultados.pruebas.Varianza.rechazar_H0 ? "Rechazada" : "Aprobada"} 
          nombre="Varianza" 
          FilaDatos={[{ label: "Varianza Muestral", valor: resultados.pruebas.Varianza.varianza_muestral }]} 
        />
        <PruebaCard 
          estado={resultados.pruebas.Rachas.rechazar_H0 ? "Rechazada" : "Aprobada"} 
          nombre="Rachas" 
          FilaDatos={[{ label: "Rachas Obs.", valor: resultados.pruebas.Rachas.rachas_observadas }, { label: "Z", valor: resultados.pruebas.Rachas.estadistico_Z }]} 
        />
      </div>

      <div className='overflow-x-auto'>
        <table className="w-full latex-table">
          <thead className='bg-slate-50'>
            <tr data-kid="86">
              <th data-kid="87">Método de Prueba</th>
              <th data-kid="88">Valor Estadístico</th>
              <th data-kid="89">Valor Crítico</th>
            </tr>
          </thead>
          <tbody data-kid="91">
            {tablaData.map((f, index) => (
              <tr key= {index} data-kid="92">
                <td data-kid="93">{f.metodo}</td>
                <td className="mono" data-kid="94">{f.ec}</td>
                <td className="mono" data-kid="95">{f.vc}</td>
              </tr>
            ))}


          </tbody>
        </table>
      </div>
    </section>
  );
}