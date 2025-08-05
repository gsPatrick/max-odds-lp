// src/app/page.js (ATUALIZADO)
import Hero from './components/Hero/Hero';
import Beneficios from './components/Beneficios/Beneficios';
import VagaGarantida from './components/VagaGarantida/VagaGarantida'; // Importar
import OQueTem from './components/OQueTem/OQueTem';
import Depoimentos from './components/Depoimentos/Depoimentos';
import ChamadaFinal from './components/ChamadaFinal/ChamadaFinal';

export default function Home() {
  return (
    <>
      <Hero />
      <Beneficios />
      <VagaGarantida /> {/* Adicionar aqui */}
      <OQueTem />
      <Depoimentos />
      <ChamadaFinal />
    </>
  );
}