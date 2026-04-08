export default function Configuracao() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 font-sans text-zinc-900 dark:text-zinc-100 py-16 px-8">
      <main className="max-w-3xl mx-auto">
        
        {/* Cabeçalho */}
        <header className="mb-12 border-b border-zinc-200 dark:border-zinc-800 pb-8">
          <h1 className="text-3xl font-extrabold tracking-tight mb-4 sm:text-4xl">
            Configurando o GitHub no VS Code
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg">
            Siga este guia rápido para preparar seu ambiente de desenvolvimento local.
          </p>
        </header>

        <div className="space-y-12">
          
          {/* Passo 1 */}
          <section className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white text-sm font-bold">1</span>
              <h2 className="text-xl font-bold">Instalar o Git via Terminal</h2>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400">
              No terminal do VS Code (Ctrl + `), cole o comando abaixo para instalar o motor do Git:
            </p>
            <div className="relative group">
              <pre className="bg-zinc-900 text-zinc-100 p-4 rounded-xl overflow-x-auto font-mono text-sm border border-zinc-700">
                <code>winget install --id Git.Git -e --source winget</code>
              </pre>
            </div>
          </section>

          {/* Passo 1.1 */}
          <section className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white text-sm font-bold">1.1</span>
              <h2 className="text-xl font-bold">Reiniciar o Visual studio</h2>
            </div>
           <p className="text-xl text-amber-600 dark:text-amber-400 font-medium">
              ⚠️ Lembre-se de reiniciar o VS Code após a instalação concluir!
            </p>
            <p className="text-zinc-600 dark:text-zinc-400">
              No terminal do VS Code verifique se a versão do github foi instalada:
            </p>
            <div className="relative group">
              <pre className="bg-zinc-900 text-zinc-100 p-4 rounded-xl overflow-x-auto font-mono text-sm border border-zinc-700">
                <code>git --version</code>
              </pre>
            </div>
          </section>


          {/* Passo 2 */}
          <section className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white text-sm font-bold">2</span>
              <h2 className="text-xl font-bold">Configurar Identidade</h2>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400">
              Agora, informe ao Git quem é você para que seus commits sejam identificados corretamente:
            </p>
            <div className="flex flex-col gap-3">
              <div className="bg-zinc-900 text-zinc-100 p-4 rounded-xl font-mono text-sm border border-zinc-700">
                <code className="block text-zinc-500"># Defina seu e-mail do GitHub</code>
                <code>git config --global user.email {"email@exemplo.com"} </code>
              </div>
              <div className="bg-zinc-900 text-zinc-100 p-4 rounded-xl font-mono text-sm border border-zinc-700">
                <code className="block text-zinc-500"># Defina seu nome de usuário</code>
                <code>git config --global user.name {"SeuNomeUsuario"} </code>
              </div>
            </div>
          </section>

          {/* Passo 3 */}
          <section className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white text-sm font-bold">3</span>
              <h2 className="text-xl font-bold">Autorização</h2>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-6 rounded-2xl">
              <p className="text-blue-800 dark:text-blue-300">
                Ao tentar realizar o primeiro <strong>push</strong> ou sincronização, o Windows abrirá uma janela do navegador. Basta clicar em <strong>{ "Authorize GitHub"} </strong> para vincular sua conta ao Visual Studio Code.
              </p>
            </div>
          </section>

        </div>

        {/* Rodapé da página */}
        <footer className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800 text-center">
          <button 
                       className="text-sm font-medium text-blue-600 hover:underline"
          >
            ← Voltar para a Home
          </button>
        </footer>
      </main>
    </div>
  );
}