// src/app/components/Beneficios/Beneficios.js (ATUALIZADO COM NOVA MARCA)
'use client';

import { useRef, useLayoutEffect } from 'react';
import styles from './Beneficios.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Beneficios = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const gridRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.to(gridRef.current.children, {
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const beneficios = [
    // ✨ TEXTO ATUALIZADO PARA "MAX ODDS" ✨
    { icon: '📈', title: 'Odds Validadas', description: 'Max Odds atualizadas e analisadas por nossa equipe de especialistas.' },
    { icon: '🎯', title: 'Análise de Ponta', description: 'Nossos analistas se dedicam a encontrar as melhores oportunidades do mercado.' },
    { icon: '📱', title: 'Acompanhamento', description: 'Receba as entradas com antecedência e acompanhe os jogos conosco.' },
    { icon: '🛡️', title: 'Casas Seguras', description: 'Operamos apenas com as casas de apostas mais confiáveis e regulamentadas.' },
    { icon: '💸', title: '100% Gratuito', description: 'Você não paga absolutamente nada para fazer parte do grupo de elite.' },
    { icon: '💬', title: 'Comunidade', description: 'Somente para maiores de 18. Jogue com responsabilidade' },
  ];

  return (
    <section className={styles.beneficiosSection} ref={sectionRef}>
      <div className={`${styles.beneficiosContainer} container`}>
        <h2 className={styles.beneficiosTitle} ref={titleRef}>
          Aqui você tem acesso ao que <span className={styles.beneficiosHighlight}>realmente funciona</span>
        </h2>
        <div className={styles.beneficiosGrid} ref={gridRef}>
          {beneficios.map((beneficio, index) => (
            <div key={index} className={styles.beneficiosCard}>
              <div className={styles.cardIcon}>{beneficio.icon}</div>
              <h3 className={styles.cardTitle}>{beneficio.title}</h3>
              <p className={styles.cardDescription}>{beneficio.description}</p>
            </div>
          ))}
        </div>
        <a
          href="https://t.me/melhoressuperodds"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.beneficiosCtaButton}
        >
          QUERO ENTRAR NO GRUPO
        </a>
      </div>
    </section>
  );
};

export default Beneficios;