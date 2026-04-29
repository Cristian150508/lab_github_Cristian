"use client"

import { useState } from "react"
import {
  Check,
  Copy,
  Terminal,
  GitBranch,
  Upload,
  Download,
  Folder,
  AlertCircle,
  Link2,
  Trash2,
} from "lucide-react"

interface Step {
  number: string
  title: string
  description: string
  command?: string
  note?: string
  icon: React.ReactNode
}

const steps: Step[] = [
  {
    number: "1",
    title: "Clonar o repositório",
    description: "Use o comando abaixo para clonar um repositório do GitHub:",
    command: 'git clone "url do repositorio" "nome do projeto"',
    icon: <Download className="h-5 w-5" />,
  },
  {
    number: "1.1",
    title: "Entrar na pasta do projeto",
    description: "Acesse a pasta do projeto clonado:",
    command: "cd nome-do-projeto",
    icon: <Folder className="h-5 w-5" />,
  },
  {
    number: "1.2",
    title: "Instalar dependências",
    description: "Instale todas as dependências do projeto:",
    command: "npm install",
    icon: <Terminal className="h-5 w-5" />,
  },
  {
    number: "2.1",
    title: "Criar repositório no GitHub",
    description: "Acesse o GitHub e crie um novo repositório.",
    icon: <GitBranch className="h-5 w-5" />,
  },
  {
    number: "2.2",
    title: "Iniciar o Git",
    description: "Inicialize o Git no projeto:",
    command: "git init",
    icon: <Terminal className="h-5 w-5" />,
  },
  {
    number: "2.3",
    title: "Verificar repositório remoto",
    description: "Veja se já existe um repositório conectado:",
    command: "git remote -v",
    icon: <AlertCircle className="h-5 w-5" />,
  },
  {
    number: "2.4",
    title: "Remover repositório (se necessário)",
    description: "Remova o repositório atual:",
    command: "git remote remove origin",
    icon: <Trash2 className="h-5 w-5" />,
  },
  {
    number: "2.5",
    title: "Adicionar novo repositório",
    description: "Conecte ao seu repositório no GitHub:",
    command: 'git remote add origin "url do repositorio"',
    icon: <Link2 className="h-5 w-5" />,
  },
  {
    number: "2.6",
    title: "Forçar branch main",
    description: "Defina a branch principal como main:",
    command: "git branch -M main",
    note: "Importante para padronizar o envio",
    icon: <GitBranch className="h-5 w-5" />,
  },
  {
    number: "3.1",
    title: "Adicionar arquivos",
    description: "Adicione todos os arquivos ao controle do Git:",
    command: "git add .",
    icon: <Upload className="h-5 w-5" />,
  },
  {
    number: "3.2",
    title: "Criar commit",
    description: "Crie uma versão do projeto:",
    command: 'git commit -m "versao 1"',
    icon: <Terminal className="h-5 w-5" />,
  },
  {
    number: "3.3",
    title: "Enviar para o GitHub",
    description: "Envie os arquivos para o repositório:",
    command: "git push -u origin main",
    icon: <Upload className="h-5 w-5" />,
  },
]

function CommandBlock({ command }: { command: string }) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(command)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="mt-3 flex items-center gap-2 rounded-lg bg-slate-100 p-3 font-mono text-sm border border-slate-200">
      <code className="flex-1 text-blue-700">{command}</code>
      <button
        onClick={copyToClipboard}
        className="rounded-md p-1.5 text-slate-500 hover:bg-slate-200"
      >
        {copied ? <Check className="h-4 w-4 text-blue-600" /> : <Copy className="h-4 w-4" />}
      </button>
    </div>
  )
}

function StepCard({ step }: { step: Step }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:border-blue-300 hover:shadow-md transition">
      <div className="flex gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-700">
          {step.icon}
        </div>
        <div className="flex-1">
          <span className="text-xs bg-blue-800 text-white px-2 py-1 rounded-full">
            Passo {step.number}
          </span>
          <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
          <p className="text-slate-600">{step.description}</p>

          {step.command && <CommandBlock command={step.command} />}

          {step.note && (
            <p className="text-sm text-slate-500 mt-2">
              * {step.note}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default function GitGuidePage() {
  return (
    <div className="min-h-screen bg-white px-4 py-12">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 border px-4 py-2 rounded-full bg-slate-50">
            <GitBranch className="h-5 w-5 text-blue-700" />
            <span className="text-sm">Guia Git</span>
          </div>

          <h1 className="text-3xl font-bold mt-4">
            Como clonar e enviar projetos para o GitHub
          </h1>

          <p className="text-slate-600 mt-2">
            Passo a passo completo para trabalhar com repositórios usando Git
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-4">
          {steps.map((step, index) => (
            <StepCard key={index} step={step} />
          ))}
        </div>

        {/* Extra */}
        <div className="mt-10 bg-blue-50 border border-blue-200 p-6 rounded-xl">
          <h4 className="font-semibold text-blue-800 flex items-center gap-2">
            <Terminal className="h-5 w-5" />
            Resumo rápido
          </h4>

          <div className="mt-4 space-y-2">
            <CommandBlock command='git clone "url"' />
            <CommandBlock command="cd projeto" />
            <CommandBlock command="npm install" />
            <CommandBlock command="git add ." />
            <CommandBlock command='git commit -m "versao"' />
            <CommandBlock command="git push" />
          </div>
        </div>
      </div>
    </div>
  )
}
