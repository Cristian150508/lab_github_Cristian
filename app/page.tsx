import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <main className="flex flex-1 w-full max-w-4xl flex-col items-center justify-center py-20 px-8 sm:items-start">
        
        {/* Logo/Header Section */}
        <div className="flex items-center gap-4 mb-8">
          <div className="bg-black dark:bg-white p-2 rounded-full">
            <Image
              className="invert dark:invert-0"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="GitHub logo"
              width={40}
              height={40}
              priority
            />
          </div>
          <span className="text-2xl font-bold tracking-tight">GitHub Guide</span>
        </div>

        {/* Hero Section */}
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight tracking-tighter">
            Onde o mundo constrói <br />
            <span className="text-blue-600 dark:text-blue-400">software.</span>
          </h1>
          
          <p className="max-w-2xl text-lg sm:text-xl leading-relaxed text-zinc-600 dark:text-zinc-400">
            O GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o <strong>Git</strong>. 
            É a maior comunidade de desenvolvedores do planeta, permitindo que pessoas colaborem em projetos de qualquer lugar.
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 w-full">
          <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm">
            <h3 className="text-xl font-bold mb-2">Para que serve?</h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Serve para gerenciar o histórico de alterações do seu código, evitar que arquivos se percam e facilitar o trabalho em equipe sem que um código sobrescreva o outro.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm">
            <h3 className="text-xl font-bold mb-2">Portfólio Vivo</h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Além de ferramenta técnica, funciona como uma rede social para programadores, onde você exibe seus projetos e contribui com tecnologias de código aberto (Open Source).
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-4 mt-12 w-full sm:flex-row">
          <a
            className="flex h-12 items-center justify-center gap-2 rounded-xl bg-zinc-900 px-8 text-white transition-all hover:bg-zinc-700 dark:bg-white dark:text-black dark:hover:bg-zinc-200 font-semibold"
            href="https://github.com/join"
            target="_blank"
            rel="noopener noreferrer"
          >
            Criar conta gratuita
          </a>
          <a
            className="flex h-12 items-center justify-center rounded-xl border border-zinc-300 px-8 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800 font-semibold"
            href="https://docs.github.com/pt"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ler documentação
          </a>
        </div>
      </main>

      <footer className="w-full py-8 text-center text-sm text-zinc-500 border-t border-zinc-200 dark:border-zinc-800">
        Feito com Next.js e Tailwind CSS
      </footer>
    </div>
  );
}