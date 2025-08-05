// Este é o layout raiz OBRIGATÓRIO e mínimo.
// Ele não contém nenhum estilo ou componente compartilhado globalmente.
export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}