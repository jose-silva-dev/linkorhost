"use client"

import { useEffect } from "react"
import { Calendar, Building2, Shield, Lock, Eye, Users, FileText, Database, Globe, Mail, Phone } from "lucide-react"

export default function PoliticaDePrivacidadeClient() {
  useEffect(() => {
    window.scrollTo(0, 0)
    // Update document title for client-side navigation
    document.title = "Política de Privacidade | Linkor"
  }, [])

  return (
    <div className="min-h-screen bg-[#0A0712] text-gray-100">
      <main className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6">
              <Shield className="h-4 w-4 text-green-500 mr-2" />
              <span className="text-green-500 font-medium text-sm">LGPD Compliance</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Política de Privacidade</h1>

            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              Esta política explica como coletamos, usamos e protegemos suas informações pessoais em conformidade com a
              Lei Geral de Proteção de Dados (LGPD).
            </p>

            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-lg p-4 inline-flex items-center">
              <Calendar className="h-5 w-5 text-blue-500 mr-3" />
              <div className="text-left">
                <p className="text-blue-500 font-medium text-sm">Última Atualização:</p>
                <p className="text-white">18 de Junho de 2025</p>
              </div>
            </div>
          </div>

          {/* Company Information */}
          <section className="mb-12">
            <div className="bg-gray-950/50 border border-gray-800 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Building2 className="h-6 w-6 text-[#F04339] mr-3" />
                <h2 className="text-xl font-bold text-white">Informações da Empresa</h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                As soluções contidas no site www.linkor.host são disponibilizadas pela{" "}
                <strong>Linkor Brasil Ltda</strong>, pessoa jurídica de direito privado, inscrita no CNPJ/MF sob o nº
                59.818.181/0001-00, sediada em Rua Pamplona, 145 – Jardim Paulista, São Paulo – SP, 01405-100, Brasil.
              </p>
            </div>
          </section>

          {/* Section A - Introduction */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <Eye className="h-6 w-6 text-[#F04339] mr-3" />
              <h2 className="text-2xl font-bold text-white">A. Introdução</h2>
            </div>

            <div className="space-y-4 text-gray-300">
              <p>
                A privacidade dos visitantes do nosso site é muito importante para nós, e estamos comprometidos em
                protegê-la. Esta política explica o que faremos com suas informações pessoais.
              </p>
              <p>
                Consentir com o uso de cookies de acordo com os termos desta política, quando você acessa nosso site
                pela primeira vez nos permite usar cookies toda vez que você acessar nosso site.
              </p>
            </div>
          </section>

          {/* Section B - Data Collection */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <Database className="h-6 w-6 text-[#F04339] mr-3" />
              <h2 className="text-2xl font-bold text-white">B. Coleta de Informações Pessoais</h2>
            </div>

            <p className="text-gray-300 mb-6">
              Os seguintes tipos de informações pessoais podem ser coletados, armazenados e usados:
            </p>

            <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-6">
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#F04339] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>
                    Informações sobre o seu computador, incluindo endereço IP, localização geográfica, tipo e versão do
                    navegador
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#F04339] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>
                    Informações sobre suas visitas e uso deste site, incluindo fonte de referência e caminhos de
                    navegação
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#F04339] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Informações de registro, como endereço de e-mail e dados de perfil</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#F04339] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Informações de transações, incluindo dados de pagamento e histórico de compras</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#F04339] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Comunicações enviadas através do nosso site ou por e-mail</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section C - Data Usage */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <FileText className="h-6 w-6 text-[#F04339] mr-3" />
              <h2 className="text-2xl font-bold text-white">C. Uso de Suas Informações Pessoais</h2>
            </div>

            <p className="text-gray-300 mb-6">Podemos usar suas informações pessoais para:</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Administrar nosso site e negócios",
                "Personalizar nosso site para você",
                "Prestar serviços adquiridos",
                "Enviar faturas e lembretes",
                "Enviar comunicações de marketing",
                "Manter nosso site seguro",
                "Verificar conformidade com termos",
                "Lidar com perguntas e reclamações",
              ].map((item, index) => (
                <div key={index} className="bg-gray-900/50 border border-gray-700 rounded-lg p-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-[#F04339]/10 rounded-full flex items-center justify-center mr-3">
                      <div className="w-2 h-2 bg-[#F04339] rounded-full"></div>
                    </div>
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section G - Security */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <Lock className="h-6 w-6 text-[#F04339] mr-3" />
              <h2 className="text-2xl font-bold text-white">G. Segurança de Suas Informações Pessoais</h2>
            </div>

            <p className="text-gray-300 mb-6">
              Tomaremos as devidas precauções técnicas e organizacionais para evitar a perda, mau uso ou alteração de
              suas informações pessoais.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-400 mb-4">Proteções Técnicas</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Servidores seguros protegidos por senha</li>
                  <li>• Firewall avançado</li>
                  <li>• Criptografia de transações</li>
                  <li>• Monitoramento 24/7</li>
                </ul>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-400 mb-4">Suas Responsabilidades</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Manter senha em sigilo</li>
                  <li>• Não compartilhar credenciais</li>
                  <li>• Reportar atividades suspeitas</li>
                  <li>• Manter dados atualizados</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section N - LGPD Rights */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <Shield className="h-6 w-6 text-[#F04339] mr-3" />
              <h2 className="text-2xl font-bold text-white">N. Direitos com Relação aos Seus Dados Pessoais (LGPD)</h2>
            </div>

            <p className="text-gray-300 mb-6">
              Nos termos da Lei Geral de Proteção de Dados (LGPD), você tem direito de:
            </p>

            <div className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-500/20 rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Confirmar que realizamos o tratamento dos seus dados",
                  "Acessar seus dados pessoais",
                  "Requerer correção de dados incorretos",
                  "Requerer eliminação de dados desnecessários",
                  "Requerer portabilidade dos dados",
                  "Revogar consentimento a qualquer momento",
                  "Requerer informações sobre compartilhamento",
                  "Manifestar oposição a tratamento irregular",
                  "Requerer anonimização ou bloqueio",
                  "Obter informações sobre consequências",
                ].map((right, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    </div>
                    <span className="text-gray-300 text-sm">{right}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section M - Minors */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <Users className="h-6 w-6 text-[#F04339] mr-3" />
              <h2 className="text-2xl font-bold text-white">M. Dados de Menores de 13 Anos</h2>
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-400 mb-4">Proteção de Menores</h3>
              <p className="text-gray-300 text-sm">
                Não coletamos ou conscientemente solicitamos dados pessoais de menores de 13 anos. Se tomarmos
                conhecimento de que coletamos dados pessoais de um menor de 13 anos, cancelaremos a conta criada e
                excluiremos os dados pessoais, apenas podendo manter dados que tenham como objetivo evitar nova
                tentativa de cadastro.
              </p>
            </div>
          </section>

          {/* Section L - Cookies */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <Globe className="h-6 w-6 text-[#F04339] mr-3" />
              <h2 className="text-2xl font-bold text-white">L. Cookies</h2>
            </div>

            <p className="text-gray-300 mb-6">
              Nosso site usa cookies para melhorar sua experiência de navegação. Um cookie é um arquivo que contém um
              identificador enviado por um servidor web para um navegador e armazenado pelo navegador.
            </p>

            <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Tipos de Cookies Utilizados:</h3>
              <div className="space-y-3 text-gray-300 text-sm">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#F04339] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>
                    <strong>Cookies de Sessão:</strong> Expiram quando o navegador é fechado
                  </span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#F04339] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>
                    <strong>Cookies Persistentes:</strong> Permanecem até a data de vencimento
                  </span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#F04339] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>
                    <strong>Google Analytics:</strong> Para análise de uso do site
                  </span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#F04339] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>
                    <strong>Cookies Funcionais:</strong> Para melhorar a usabilidade
                  </span>
                </div>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                Você pode configurar seu navegador para bloquear cookies, mas isso pode afetar a funcionalidade do site.
              </p>
            </div>
          </section>

          {/* Section P - Contact */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <Mail className="h-6 w-6 text-[#F04339] mr-3" />
              <h2 className="text-2xl font-bold text-white">P. Informações e Dúvidas</h2>
            </div>

            <p className="text-gray-300 mb-6">
              Se após a leitura desta Política você tiver quaisquer dúvidas ou quiser apresentar alguma solicitação
              relativa a seus dados pessoais, você pode entrar em contato com nosso time de privacidade:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#F04339]/10 border border-[#F04339]/20 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <Mail className="h-5 w-5 text-[#F04339] mr-3" />
                  <h3 className="text-lg font-semibold text-white">E-mail</h3>
                </div>
                <p className="text-[#F04339] font-medium">abuse@linkor.host</p>
              </div>

              <div className="bg-[#F04339]/10 border border-[#F04339]/20 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <Phone className="h-5 w-5 text-[#F04339] mr-3" />
                  <h3 className="text-lg font-semibold text-white">Telefone</h3>
                </div>
                <p className="text-[#F04339] font-medium">+55 11 5236-0123</p>
              </div>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mt-6">
              <p className="text-blue-400 text-sm">
                Esta política pode ser atualizada periodicamente. Recomendamos que você a revise ocasionalmente.
              </p>
            </div>
          </section>

          {/* Footer Section */}
          <section className="text-center py-8 border-t border-gray-800">
            <div className="bg-[#F04339]/10 border border-[#F04339]/20 rounded-lg p-4 inline-block mb-8">
              <p className="text-[#F04339] font-medium">
                Ao utilizar nossos serviços, você concorda com esta política de privacidade.
              </p>
            </div>

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => {
                  window.location.href = "/"
                  setTimeout(() => window.scrollTo(0, 0), 100)
                }}
                className="inline-flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-lg transition-colors border border-gray-600"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                Voltar ao Início
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
