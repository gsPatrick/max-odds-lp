// src/app/components/ChamadaFinal/ChamadaFinal.js (VERSÃO FINAL COM CONTEXTO)
'use client';

import { useRef, useLayoutEffect } from 'react';
import styles from './ChamadaFinal.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ChamadaFinal = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const numberRef = useRef(null); // Ref apenas para o número
  const titleRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 60%',
          toggleActions: 'play none none reverse',
        },
      });

      tl.from(contentRef.current.children, {
        opacity: 0,
        y: 60,
        stagger: 0.15,
        duration: 1,
        ease: 'power3.out',
      }).from(
        titleRef.current,
        {
          backgroundPosition: '200% 0',
          duration: 1.5,
          ease: 'power2.inOut',
        },
        '-=0.7'
      );

      // Animação de contagem regressiva com contexto
      const counter = { value: 99 };
      gsap.to(counter, {
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
        value: 17,
        duration: 3,
        ease: 'power2.out',
        onUpdate: () => {
          numberRef.current.textContent = Math.floor(counter.value)
            .toString()
            .padStart(2, '0');
        },
      });
    }, section);
    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.section} ref={sectionRef}>
      {/* Contador agora tem número e texto */}
      <div className={styles.bgCounterContainer}>
        <div className={styles.bgNumber} ref={numberRef}>
          99
        </div>
        <div className={styles.bgText}>Vagas Restantes</div>
      </div>
      <div className={styles.particles}>
        {[...Array(20)].map((_, i) => (
          <div key={i} className={styles.particle}></div>
        ))}
      </div>

      <div className={`${styles.container} container`} ref={contentRef}>
        <div className={styles.alertTag}>
          <span className={styles.alertIcon}>⏳</span>ÚLTIMA CHAMADA
        </div>
        <h2 className={styles.title} ref={titleRef}>
          As vagas estão se esgotando.
        </h2>
        <p className={styles.subtitle}>
          Esta é a sua chance final de garantir acesso gratuito. Depois que as vagas acabarem, o grupo será fechado por tempo indeterminado. Não fique de fora.
        </p>
        <a
          href="https://wa.me/5551999999999"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaButton}
        >
          <span>GARANTIR MINHA VAGA AGORA</span>
        </a>
      </div>
    </section>
  );
};

export default ChamadaFinal;