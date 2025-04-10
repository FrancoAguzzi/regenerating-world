import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Leaf,
  Network,
  LineChart,
  Brain,
  ArrowRight,
  Github,
  Twitter,
  BookOpen,
  Sprout,
  Zap,
  RefreshCw,
  Globe,
} from "lucide-react";

export default function LandingPage() {
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
              href="#what-is"
              className="text-sm font-medium text-green-800 hover:text-green-600 transition-colors"
            >
              O que é
            </Link>
            <Link
              href="#pillars"
              className="text-sm font-medium text-green-800 hover:text-green-600 transition-colors"
            >
              Pilares
            </Link>
            <Link
              href="#community"
              className="text-sm font-medium text-green-800 hover:text-green-600 transition-colors"
            >
              Comunidade
            </Link>
            <Link
              href="/manifesto"
              className="text-sm font-medium text-green-800 hover:text-green-600 transition-colors"
            >
              Manifesto
            </Link>
          </nav>
          <a
            href="https://www.linkedin.com/in/crystal-creative/"
            className="text-sm bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded-md"
          >
            Participar
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-16 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-no-repeat bg-cover"></div>
          </div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <div className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4">
                Um novo paradigma digital
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-green-900 leading-tight">
                O futuro regenerativo já começou.
              </h1>
              <p className="text-xl md:text-2xl text-green-800 max-w-2xl mx-auto">
                Tecnologias para reconstruir relações, restaurar ecossistemas e
                reimaginar como vivemos e interagimos no planeta.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#edf3ed] to-transparent"></div>
        </section>

        {/* What Is Section */}
        <section id="what-is" className="w-full py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-green-900">
                O Que É o Regenerating World
              </h2>
              <p className="text-xl md:text-2xl text-green-800 leading-relaxed">
                Regenerating World é um novo continente digital.
                <br />
                Aqui, identidade, dados e colaboração não apenas fluem — eles
                florescem.
              </p>
              <div className="pt-8">
                <Image
                  src="/placeholder.svg?height=400&width=800"
                  alt="Regenerating World Ecosystem"
                  width={800}
                  height={400}
                  className="rounded-xl shadow-lg mx-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Pillars Section */}
        <section id="pillars" className="w-full py-16 md:py-24 bg-green-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
                Nossos projetos
              </h2>
              <p className="text-lg text-green-800">
                Quatro fundamentos descrevem nossa visão de um mundo
                regenerativo
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Pillar 1 */}
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <Leaf className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-green-900 mb-2">
                  Identidade regenerativa
                </h3>
                <p className="text-green-700">
                  Identidade soberana, contextual e controlada por on demand.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <LineChart className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-green-900 mb-2">
                  Economias regenerativas
                </h3>
                <p className="text-green-700">
                  Protocolos com incentivos humanos e governança para criar uma
                  prosperidade sustentável.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <Network className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-green-900 mb-2">
                  Cadeias de valor transparentes
                </h3>
                <p className="text-green-700">
                  Do campo ao código — dados que contam a verdade dos alimentos.
                </p>
              </div>

              {/* Pillar 4 */}
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <Brain className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-green-900 mb-2">
                  Inteligência Integrada
                </h3>
                <p className="text-green-700">
                  Agentes pessoais que não te manipulam. Te fortalecem.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Community & Vision Section */}
        <section
          id="community"
          className="w-full py-16 md:py-24 bg-green-800 text-white"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Comunidade & Visão
              </h2>
              <div className="text-2xl md:text-3xl font-light leading-relaxed">
                "Estamos aqui para regenerar.
                <br />
                Sistemas, relações, economias, natureza.
                <br />O mundo que queremos começa com o que construímos."
              </div>
              <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={"https://www.linkedin.com/in/crystal-creative/"}
                  className="rounded-md bg-white text-green-800 hover:bg-green-100 px-8 py-1.5 text-lg w-full sm:w-auto"
                >
                  Junte-se à Rede
                </a>
                <Link href="/manifesto">
                  <Button className="bg-white text-green-800 hover:bg-green-100 px-8 text-lg w-full sm:w-auto">
                    Leia o Manifesto
                  </Button>
                </Link>
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
                    className="text-sm hover:text-white transition-colors"
                  >
                    Manifesto
                  </Link>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/crystal-creative/"
                    className="text-sm hover:text-white transition-colors"
                  >
                    Participar
                  </a>
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
                  <span className="py-0.5 px-2 border rounded-xl ml-2 text-xs font-semibold">
                    Em breve
                  </span>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:text-white transition-colors"
                  >
                    Crystal Network
                  </Link>
                  <span className="py-0.5 px-2 border rounded-xl ml-2 text-xs font-semibold">
                    Em breve
                  </span>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:text-white transition-colors"
                  >
                    SupplyChain dApps
                  </Link>
                  <span className="py-0.5 px-2 border rounded-xl ml-2 text-xs font-semibold">
                    Em breve
                  </span>
                </li>
              </ul>
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
