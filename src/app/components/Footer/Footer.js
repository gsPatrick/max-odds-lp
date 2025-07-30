// src/app/components/Footer/Footer.js (ATUALIZADO COM LOGO MAIOR)

import Link from 'next/link';
import Image from 'next/image'; // 1. Importar o componente Image
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} container`}>
        
        {/* 2. O logo em texto foi substituído por este Link com a Imagem */}
        <Link href="/">
          <Image
            src="/images/logomaxs.png" // Caminho a partir da pasta 'public'
            alt="Super Odds Logo"
            width={200}  // Maior que a do header (150px)
            height={200}   // Mantém a proporção (aprox.)
          />
        </Link>
        
        <div className={styles.disclaimers}>
          <p className={styles.warning18}>
            Atenção: Conteúdo destinado para maiores de 18 anos.
          </p>
          <p className={styles.responsibleGaming}>
            Nossos materiais têm fins puramente informativos e recreativos. As apostas esportivas envolvem riscos e devem ser feitas com responsabilidade. Nunca aposte dinheiro que você não pode perder. Não prometemos ou garantimos quaisquer ganhos.
          </p>
        </div>
        <div className={styles.bottomBar}>
          <p>© {currentYear} Max odds. Todos os direitos reservados.</p>
          <Link href="/politica-de-privacidade" className={styles.privacyLink}>
            Política de Privacidade
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;