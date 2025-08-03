'use client';

import { useRef, useLayoutEffect } from 'react';
import styles from './Hero.module.css';
import { gsap } from 'gsap';

const Hero = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const headlineRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // --- ANIMAÇÃO DE ENTRADA (REVISADA) ---
      
      // Animação 1: Elementos que NÃO são o título principal
      // Seleciona todos os filhos diretos do contentRef, exceto o h1
      const otherElements = gsap.utils.toArray(contentRef.current.children).filter(
        (child) => child !== headlineRef.current
      );

      gsap.from(otherElements, {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
      });
      
      // Animação 2: Apenas o título principal, com o callback onStart
      gsap.from(headlineRef.current, {
        opacity: 0,
        y: 50,
        scale: 0.95,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.2, // Stagger manual para o título (ele é o segundo elemento)

        // ✨✨✨ A SOLUÇÃO DEFINITIVA ESTÁ AQUI ✨✨✨
        // onStart é executado no momento em que a animação começa
        onStart: () => {
          // Aplicamos o brilho instantaneamente via gsap.set()
          gsap.set(headlineRef.current, {
            textShadow: "0 0 20px #b7ee23, 0 0 30px rgba(183, 238, 35, 0.7)",
          });
        },
      });

    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.heroSection} ref={heroRef}>
      <div className={`${styles.heroContent} container`} ref={contentRef}>
        
        <div className={styles.logo}>
          Grupo de <span className={styles.logoHighlight}>Odds Altas</span>
        </div>

        <h1 className={styles.headline} ref={headlineRef}>
          VOCÊ FOI<br />
          LIBERADO
        </h1>

        <p className={styles.subheadline}>
          Para o melhor grupo de <span className={styles.highlight}>Super Odds</span> do Brasil. Venha fazer parte do meu Grupo
        </p>

        <a
          href="https://t.me/maxoddsBR"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaButton}
        >
          Clique aqui para receber SUPER ODDS
        </a>

      </div>
    </section>
  );
};

export default Hero;