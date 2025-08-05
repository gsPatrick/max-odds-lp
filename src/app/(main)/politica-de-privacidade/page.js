// src/app/politica-de-privacidade/page.js

import styles from './Privacy.module.css';

export const metadata = {
  title: 'Política de Privacidade - Super Odds',
  description: 'Conheça nossa política de privacidade e como lidamos com seus dados.',
};

const PrivacyPolicyPage = () => {
  return (
    <div className={styles.privacyPage}>
      <div className={`${styles.container} container`}>
        <h1 className={styles.title}>Política de Privacidade</h1>
        <p className={styles.lastUpdated}>Última atualização: Outubro de 2023</p>

        <p className={styles.text}>
          Bem-vindo à Política de Privacidade do grupo Super Odds. Sua privacidade é importante para nós. É política do Super Odds respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar em nossa página e outros sites que possuímos e operamos.
        </p>

        <h2 className={styles.sectionTitle}>1. Coleta de Dados</h2>
        <p className={styles.text}>
          Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
        </p>
        <p className={styles.text}>
          Nossa página coleta dados de duas formas:
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}><strong>Dados de Navegação (Automáticos):</strong> Coletamos informações que o seu navegador envia sempre que visita nosso site. Isso pode incluir o endereço IP do seu computador, tipo e versão do navegador, as páginas do nosso site que você visita, a hora e a data da sua visita, o tempo gasto nessas páginas e outras estatísticas.</li>
          <li className={styles.listItem}><strong>Informações de Contato (Voluntárias):</strong> Ao clicar no botão para entrar em nosso grupo do WhatsApp ou Telegram, você voluntariamente compartilha seu número de telefone com o respectivo aplicativo de mensagens, sob os termos de privacidade deles. Nós não armazenamos seu número de telefone em nossos servidores a partir deste site.</li>
        </ul>

        <h2 className={styles.sectionTitle}>2. Uso dos Dados</h2>
        <p className={styles.text}>
          Usamos as informações que coletamos para operar, manter e melhorar nosso site, entender como você o utiliza e desenvolver novos produtos, serviços e funcionalidades. As informações de contato fornecidas ao entrar no grupo são usadas exclusivamente para a comunicação e o envio das análulas de Super Odds dentro do próprio grupo.
        </p>

        <h2 className={styles.sectionTitle}>3. Cookies</h2>
        <p className={styles.text}>
          Utilizamos cookies para melhorar a experiência do usuário. Cookies são pequenos arquivos de dados que um site armazena no seu dispositivo. Usamos cookies para fins de análise e para entender melhor suas preferências, o que nos permite personalizar nosso conteúdo. Você pode configurar seu navegador para recusar todos os cookies ou para indicar quando um cookie está sendo enviado.
        </p>
        
        <h2 className={styles.sectionTitle}>4. Compartilhamento de Informações</h2>
        <p className={styles.text}>
          Não compartilhamos, vendemos, alugamos ou trocamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
        </p>

        <h2 className={styles.sectionTitle}>5. Segurança</h2>
        <p className={styles.text}>
          A segurança da sua informação é importante para nós, mas lembre-se que nenhum método de transmissão pela Internet ou método de armazenamento eletrônico é 100% seguro. Embora nos esforcemos para usar meios comercialmente aceitáveis para proteger suas informações pessoais, não podemos garantir sua segurança absoluta.
        </p>

        <h2 className={styles.sectionTitle}>6. Links para Terceiros</h2>
        <p className={styles.text}>
          Nosso site pode conter links para sites externos que não são operados por nós (como WhatsApp e Telegram). Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
        </p>

        <h2 className={styles.sectionTitle}>7. Conteúdo para Maiores de 18 Anos</h2>
        <p className={styles.text}>
          Nossos serviços são destinados exclusivamente a pessoas com 18 anos de idade ou mais. Não coletamos intencionalmente informações de identificação pessoal de menores de 18 anos.
        </p>
        
        <h2 className={styles.sectionTitle}>8. Alterações nesta Política</h2>
        <p className={styles.text}>
          Podemos atualizar nossa Política de Privacidade de tempos em tempos. Notificaremos você sobre quaisquer alterações, publicando a nova Política de Privacidade nesta página. Aconselhamos que você revise esta página periodicamente para quaisquer alterações.
        </p>

        <h2 className={styles.sectionTitle}>9. Contato</h2>
        <p className={styles.text}>
          Se você tiver alguma dúvida sobre nossa Política de Privacidade, entre em contato conosco através do e-mail: [seu-email-de-contato@exemplo.com].
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;