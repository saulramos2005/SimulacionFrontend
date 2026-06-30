import type { SimulacionParams, SimulacionResults } from "../Types/Simulacion";
import { generarMuestras } from "../services/SimulacionService";
import { useState } from "react";

export const useSimulacion = () => {

  const [resultados, setResultados] = useState<SimulacionResults | null>(null);

  const ejecutarSimulacion = async (parametros: SimulacionParams) => {


    const data = await generarMuestras(parametros);
      setResultados(data); 

 }

 return {resultados, ejecutarSimulacion }

};
