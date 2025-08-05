// src/app/components/OQueTem/OQueTem.js (ATUALIZADO COM PRINT DO GRUPO)
'use client';

import { useRef, useLayoutEffect } from 'react';
import Image from 'next/image';
import styles from './OQueTem.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const OQueTem = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        x: -100,
        duration: 1,
        ease: 'power3.out',
      });
      gsap.from(contentRef.current.children, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        x: 100,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    { icon: '🎯', title: 'Análise Direto ao Ponto', text: 'Sem enrolação. Você recebe apenas as análises com maior potencial de valor, prontas para serem usadas.' },
    { icon: '🧠', title: 'Decisões Inteligentes', text: 'Nossos especialistas usam dados e experiência para filtrar o ruído e encontrar as verdadeiras joias do mercado.' },
    { icon: '⚡', title: 'Velocidade e Praticidade', text: 'Receba tudo de forma clara e rápida no seu celular. Poucos minutos por dia são o suficiente.' },
  ];

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={`${styles.gridWrapper} container`}>
        <div className={styles.imageContainer} ref={imageRef}>
          <Image
            src="/images/Smartphone.png"
            alt="Print do grupo de Super Odds no Telegram"
            width={700}
            height={1450}
            className={styles.image}
          />
        </div>
        <div className={styles.contentContainer} ref={contentRef}>
          <h2 className={styles.title}>
            O caminho mais <span className={styles.highlight}>curto e inteligente</span> para as Odds de Valor
          </h2>
          <p className={styles.description}>
            Esqueça os grupos que te enchem de sinais sem fundamento. Aqui, você tem acesso a um sistema profissional que filtra o mercado para você.
          </p>
          <ul className={styles.featureList}>
            {features.map((feature, index) => (
              <li key={index} className={styles.featureItem}>
                <span className={styles.icon}>{feature.icon}</span>
                <div>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureText}>{feature.text}</p>
                </div>
              </li>
            ))}
          </ul>
           <a
              href="https://t.me/maxoddsBR"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              QUERO PEGAR ESSE ATALHO AGORA
            </a>
        </div>
      </div>
    </section>
  );
};

export default OQueTem;