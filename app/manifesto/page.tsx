import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Leaf, ArrowLeft, Sprout } from "lucide-react";

export default function ManifestoPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#f8faf8] to-[#edf3ed]">
      {/* Header */}
      <header className="w-full py-4 px-4 md:px-6 lg:px-8 border-b border-green-100">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Sprout className="h-8 w-8 text-green-600" />
            <span className="text-xl font-medium text-green-800">
              regenerating.world
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/#what-is"
              className="text-sm font-medium text-green-800 hover:text-green-600 transition-colors"
            >
              O que é
            </Link>
            <Link
              href="/#pillars"
              className="text-sm font-medium text-green-800 hover:text-green-600 transition-colors"
            >
              Pilares
            </Link>
            <Link
              href="/#use-cases"
              className="text-sm font-medium text-green-800 hover:text-green-600 transition-colors"
            >
              Casos de Uso
            </Link>
            <Link
              href="/#community"
              className="text-sm font-medium text-green-800 hover:text-green-600 transition-colors"
            >
              Comunidade
            </Link>
            <Link
              href="/manifesto"
              className="text-sm font-medium text-green-600 hover:text-green-700 transition-colors"
            >
              Manifesto
            </Link>
          </nav>
          <Button className="bg-green-700 hover:bg-green-800 text-white">
            Participar
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Manifesto Header */}
        <section className="w-full py-16 md:py-20 bg-green-800 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <Link
                href="/"
                className="inline-flex items-center text-green-100 hover:text-white mb-4"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar para a página inicial
              </Link>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                Regenerating World
              </h1>
              <p className="text-xl md:text-2xl font-light italic">
                Onde a tecnologia floresce com propósito.
              </p>
            </div>
          </div>
        </section>

        {/* Manifesto Content */}
        <section className="w-full py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto prose prose-green lg:prose-lg">
              <p className="text-lg md:text-xl text-green-800 mb-8">
                Vivemos tempos de exaustão — ambiental, social, digital.
                <br />
                Mas também somos testemunhas de uma nova inteligência emergente:
                <br />
                uma inteligência que conecta, respeita e regenera.
              </p>

              <p className="text-lg md:text-xl text-green-800 mb-8">
                Regenerating World nasce não como promessa,
                <br />
                mas como infraestrutura para mudanças concretas.
              </p>

              <div className="bg-green-50 p-6 md:p-8 rounded-xl mb-10">
                <h2 className="flex items-center text-xl md:text-2xl font-bold text-green-900 mb-4">
                  <span className="text-2xl mr-2">🛠</span> Já sabemos como:
                </h2>
                <ul className="space-y-4 text-green-800">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-1">
                      <Leaf className="h-3 w-3 text-green-600" />
                    </div>
                    <span>
                      Provar que uma identidade pertence a uma pessoa, sem
                      violar sua privacidade.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-1">
                      <Leaf className="h-3 w-3 text-green-600" />
                    </div>
                    <span>
                      Criar redes de governança onde cada voz conta e cada ação
                      deixa um rastro claro.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-1">
                      <Leaf className="h-3 w-3 text-green-600" />
                    </div>
                    <span>
                      Mapear a jornada de um alimento da terra até a mesa, com
                      transparência real.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-1">
                      <Leaf className="h-3 w-3 text-green-600" />
                    </div>
                    <span>
                      Desenhar agentes de IA que informam, mas não manipulam.
                      Que ajudam, mas não invadem.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-1">
                      <Leaf className="h-3 w-3 text-green-600" />
                    </div>
                    <span>
                      Permitir que dados contextuais sejam utilizados para o
                      bem-estar — e não para o lucro de poucos.
                    </span>
                  </li>
                </ul>
              </div>

              <p className="text-lg text-green-800 mb-8">
                Essas não são ideias distantes. São protótipos vivos, códigos
                públicos, comunidades ativas.
                <br />O que falta é orquestração. É integração. É direção.
              </p>

              <div className="bg-green-50 p-6 md:p-8 rounded-xl mb-10">
                <h2 className="flex items-center text-xl md:text-2xl font-bold text-green-900 mb-4">
                  <span className="text-2xl mr-2">🌍</span> Regenerar, para nós,
                  é:
                </h2>
                <ul className="space-y-4 text-green-800">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-1">
                      <Leaf className="h-3 w-3 text-green-600" />
                    </div>
                    <span>
                      Usar tecnologia para reequilibrar — não para explorar.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-1">
                      <Leaf className="h-3 w-3 text-green-600" />
                    </div>
                    <span>
                      Criar ferramentas que devolvam tempo, dignidade e poder de
                      escolha às pessoas.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-1">
                      <Leaf className="h-3 w-3 text-green-600" />
                    </div>
                    <span>
                      Construir redes que respeitem o território, o corpo, o
                      dado e o sonho.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-1">
                      <Leaf className="h-3 w-3 text-green-600" />
                    </div>
                    <span>
                      Permitir que a natureza seja parte da equação, não uma
                      variável externa.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 md:p-8 rounded-xl mb-10">
                <h2 className="flex items-center text-xl md:text-2xl font-bold text-green-900 mb-4">
                  <span className="text-2xl mr-2">🔧</span> O que estamos
                  construindo:
                </h2>
                <ul className="space-y-4 text-green-800">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-1">
                      <Leaf className="h-3 w-3 text-green-600" />
                    </div>
                    <span>
                      <strong>Mi & Iris:</strong> uma identidade digital
                      regenerativa, soberana, alinhada com quem você é em cada
                      contexto.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-1">
                      <Leaf className="h-3 w-3 text-green-600" />
                    </div>
                    <span>
                      <strong>Crystal Network:</strong> mecanismos de governança
                      e incentivo para comunidades e economias distribuídas.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-1">
                      <Leaf className="h-3 w-3 text-green-600" />
                    </div>
                    <span>
                      <strong>SupplyChain dApps:</strong> ferramentas para
                      produtores locais mostrarem ao mundo a origem do que
                      alimenta as pessoas.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-1">
                      <Leaf className="h-3 w-3 text-green-600" />
                    </div>
                    <span>
                      <strong>I & Agentes do Al:</strong> interfaces com IA que
                      respeitam sua intenção, sua privacidade e sua humanidade.
                    </span>
                  </li>
                </ul>
              </div>

              <p className="text-lg text-green-800 mb-8">
                Cada projeto é um tijolo. Cada linha de código, uma semente.
                <br />
                Cada pessoa que participa, uma raiz.
              </p>

              <div className="bg-green-700 text-white p-6 md:p-8 rounded-xl mb-10">
                <h2 className="flex items-center text-xl md:text-2xl font-bold mb-4">
                  <span className="text-2xl mr-2">🤝</span> Este é um chamado
                </h2>
                <p className="mb-4">
                  Não a um ideal abstrato,
                  <br />
                  mas a um trabalho contínuo e coletivo:
                  <br />
                  de regenerar a tecnologia,
                  <br />
                  para que a tecnologia nos ajude a regenerar o mundo.
                </p>
                <p>
                  Não sabemos todas as respostas.
                  <br />
                  Mas sabemos onde estão as boas perguntas.
                  <br />E estamos criando espaço para que elas sejam feitas,
                  ouvidas e cultivadas.
                </p>
              </div>

              <div className="bg-green-50 p-6 md:p-8 rounded-xl mb-10">
                <h2 className="flex items-center text-xl md:text-2xl font-bold text-green-900 mb-4">
                  <span className="text-2xl mr-2">✨</span> Regenerating World
                </h2>
                <p className="text-green-800 mb-4">
                  Não é uma plataforma.
                  <br />É um ecossistema em formação.
                </p>
                <p className="text-green-800 mb-4">
                  Não é sobre controle.
                  <br />É sobre coordenação.
                </p>
                <p className="text-green-800 mb-4">
                  Não é sobre utopia.
                  <br />É sobre agir agora, com ferramentas que respeitam o
                  amanhã.
                </p>
              </div>

              <div className="text-center py-8">
                <p className="text-xl md:text-2xl font-bold text-green-800">
                  O mundo que queremos começa com o que construímos.
                  <br />E já estamos construindo.
                </p>
              </div>

              <div className="flex justify-center mt-12">
                <Button className="bg-green-700 hover:bg-green-800 text-white px-8 py-6 text-lg">
                  Junte-se a nós
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 bg-green-900 text-green-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Link href="/" className="flex items-center space-x-2">
                <Sprout className="h-6 w-6 text-green-300" />
                <span className="text-lg font-medium">regenerating.world</span>
              </Link>
              <p className="text-sm text-green-300">onde o amanhã já começou</p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:text-white transition-colors"
                  >
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link
                    href="/manifesto"
                    className="text-sm text-white transition-colors"
                  >
                    Manifesto
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:text-white transition-colors"
                  >
                    Docs
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:text-white transition-colors"
                  >
                    Participar
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Ecossistema</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:text-white transition-colors"
                  >
                    Mi & Iris
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:text-white transition-colors"
                  >
                    Crystal Network
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:text-white transition-colors"
                  >
                    SupplyChain dApps
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:text-white transition-colors"
                  >
                    I & Agentes do AI
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Redes Sociais</h4>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="text-green-300 hover:text-white transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  href="#"
                  className="text-green-300 hover:text-white transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link
                  href="#"
                  className="text-green-300 hover:text-white transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                  <span className="sr-only">Mirror</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-green-800 mt-8 pt-8 text-sm text-green-400 text-center">
            &copy; {new Date().getFullYear()} Regenerating World. Todos os
            direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
