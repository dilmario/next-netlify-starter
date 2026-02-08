import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="text-gray-800 max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Política de Privacidade</h1>
      
      <section className="mb-8">
        <p className="mb-4">
          A sua privacidade é importante para nós. É política do Consultor Solar respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site <strong>Consultor Solar</strong>, e outros sites que possuímos e operamos.
        </p>
        <p className="mb-4">
          Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
        </p>
        <p className="mb-4">
          Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
        </p>
        <p className="mb-4">
          Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Links Externos</h2>
        <p>
          O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Sua Escolha</h2>
        <p>
          Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.
        </p>
        <p className="mt-4">
          O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contacto connosco.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Publicidade e Cookies</h2>
        <div className="space-y-4">
          <p>
            O serviço Google AdSense que usamos para veicular publicidade usa um cookie DoubleClick para veicular anúncios mais relevantes em toda a Web e limitar o número de vezes que um determinado anúncio é exibido para você.
          </p>
          <p>
            Para mais informações sobre o Google AdSense, consulte as{' '}
            <Link 
              href="https://support.google.com/adsense/answer/1348695" 
              className="text-blue-600 hover:text-blue-800 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              FAQs oficiais sobre privacidade do Google AdSense
            </Link>.
          </p>
          <p>
            Utilizamos anúncios para compensar os custos de funcionamento deste site e fornecer financiamento para futuros desenvolvimentos. Os cookies de publicidade comportamental usados ​​por este site foram projetados para garantir que você forneça os anúncios mais relevantes sempre que possível, rastreando anonimamente seus interesses e apresentando coisas semelhantes que possam ser do seu interesse.
          </p>
          <p>
            Vários parceiros anunciam em nosso nome e os cookies de rastreamento de afiliados simplesmente nos permitem ver se nossos clientes acessaram o site através de um dos sites de nossos parceiros, para que possamos creditá-los adequadamente e, quando aplicável, permitir que nossos parceiros afiliados ofereçam qualquer promoção que pode fornecê-lo para fazer uma compra.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Compromisso do Usuário</h2>
        <p className="mb-4">
          O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o Consultor Solar oferece no site e com caráter enunciativo, mas não limitativo:
        </p>
        <ol className="list-decimal pl-6 space-y-3">
          <li>
            Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;
          </li>
          <li>
            Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, jogos de sorte ou azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;
          </li>
          <li>
            Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do Consultor Solar, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados.
          </li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Mais Informações</h2>
        <p className="mb-4">
          Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.
        </p>
      </section>

      <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold mb-2">Informações da Política</h3>
        <p className="text-gray-600">
          Esta política é efetiva a partir de <strong>8 de Fevereiro de 2026, 17:27</strong>.
        </p>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-200 text-sm text-gray-500">
        <p>
          Para entrar em contacto connosco sobre questões de privacidade, utilize os canais disponíveis em nossa página de{' '}
          <Link href="/contato" className="text-blue-600 hover:text-blue-800 hover:underline">
            Contato
          </Link>.
        </p>
      </div>
    </div>
  );
}
