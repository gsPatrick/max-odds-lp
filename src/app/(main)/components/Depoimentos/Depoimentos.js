// src/app/components/Depoimentos/Depoimentos.js (ATUALIZADO COM NOVA MARCA)
'use client';

import { useRef, useLayoutEffect } from 'react';
import Image from 'next/image';
import styles from './Depoimentos.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Depoimentos = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const gridRef = useRef(null);
  const ctaRef = useRef(null);

  const depoimentos = [
    {
      nome: 'João P.',
      cidade: 'São Paulo, SP',
      texto: '“Finalmente um grupo sério e com análises que fazem sentido. Saí de vários grupos que só mandavam ‘sinal’ sem pé nem cabeça. Aqui a história é outra, é profissionalismo puro.”',
      imagem: '/joao.jpg',
    },
    {
      nome: 'Carlos A.',
      cidade: 'Belo Horizonte, MG',
      texto: '“O que eu mais gosto é a organização. Poucas entradas por dia, mas todas com uma qualidade absurda. Já consegui resultados que não tive em meses em outros lugares.”',
      imagem: '/carlos.jpg',
    },
    {
      nome: 'Mariana S.',
      cidade: 'Rio de Janeiro, RJ',
      texto: '“Tinha medo de não entender nada, mas as análises são muito claras. O grupo é focado e sem bagunça. Para quem está começando, como eu, é o lugar perfeito para aprender de verdade.”',
      imagem: '/mariana.jpg',
    },
     {
      nome: 'Lucas F.',
      cidade: 'Curitiba, PR',
      texto: '“A taxa de acerto das análises é impressionante. É nítido que existe um estudo muito aprofundado por trás de cada Max Odd enviada. Recomendo 100%.”',
      imagem: '/lucas.jpg',
    },
     {
      nome: 'Fernanda L.',
      cidade: 'Salvador, BA',
      // ✨ TEXTO ATUALIZADO PARA "MAX ODDS" ✨
      texto: '“Entrei com um pé atrás, por ser gratuito, mas a qualidade do conteúdo é de grupo VIP pago. Superou todas as minhas expectativas. O nome Max Odds faz jus!”',
      imagem: '/fernanda.jpg',
    },
     {
      nome: 'Rafael M.',
      cidade: 'Porto Alegre, RS',
      texto: '“A transparência é o ponto alto. Eles explicam o porquê da entrada, mostram os resultados. Isso passa uma confiança que eu não encontrei em nenhum outro lugar.”',
      imagem: '/rafael.jpg',
    },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, { scrollTrigger: { trigger: titleRef.current, start: 'top 85%', toggleActions: 'play none none none' }, opacity: 0, y: 50, duration: 0.8, ease: 'power3.out' });
      gsap.from(gridRef.current.children, { scrollTrigger: { trigger: gridRef.current, start: 'top 85%', toggleActions: 'play none none none' }, opacity: 0, y: 50, stagger: 0.15, duration: 0.8, ease: 'power3.out' });
      
      gsap.from(ctaRef.current.children, {
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={`${styles.container} container`}>
        <h2 className={styles.title} ref={titleRef}>
          Aprovado por quem <span className={styles.highlight}>já está no Grupo</span>
        </h2>
        <div className={styles.grid} ref={gridRef}>
          {depoimentos.map((depo, index) => (
            <div key={index} className={styles.card}>
              <p className={styles.text}>{depo.texto}</p>
              <div className={styles.author}>
                <Image
                  src={depo.imagem}
                  alt={`Depoimento de ${depo.nome}`}
                  width={50}
                  height={50}
                  className={styles.avatar}
                />
                <div>
                  <span className={styles.name}>{depo.nome}</span>
                  <span className={styles.city}>{depo.cidade}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.finalCtaContainer} ref={ctaRef}>
            <h3 className={styles.ctaSubtitle}>
                Viu como funciona? Chegou a sua vez de ter acesso às mesmas oportunidades.
            </h3>
            <a
              href="https://t.me/maxoddsBR"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              ENTRAR NO GRUPO GRATUITO AGORA
            </a>
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;