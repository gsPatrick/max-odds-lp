// src/app/layout.js (CÓDIGO COMPLETO E CORRETO)

import { Poppins } from 'next/font/google'; // A importação estava correta
import './globals.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SocialProofPopup from './components/SocialProofPopup/SocialProofPopup';
import ExitIntentModal from './components/ExitIntentModal/ExitIntentModal';

// ✨✨ ESTA PARTE ESTAVA FALTANDO NA ÚLTIMA RESPOSTA ✨✨
// Aqui estamos definindo a constante 'poppins'
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900']
});
// ✨✨ FIM DA PARTE QUE FALTAVA ✨✨


export const metadata = {
  title: 'Max Odds - As Melhores Odds do Brasil',
  description: 'Entre gratuitamente no grupo exclusivo e receba as Max Odds mais procuradas e analisadas por especialistas.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      {/* Agora a constante 'poppins' existe e pode ser usada aqui */}
      <body className={poppins.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <SocialProofPopup />
        <ExitIntentModal />
      </body>
    </html>
  );
}