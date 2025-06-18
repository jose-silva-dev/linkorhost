"use client"

import { useEffect } from "react"
import {
  Calendar,
  Building2,
  Mail,
  CreditCard,
  Shield,
  Server,
  AlertTriangle,
  FileText,
  Clock,
  Database,
} from "lucide-react"

export default function TermosDeServicoClient() {
  useEffect(() => {
    window.scrollTo(0, 0)
    // Update document title for client-side navigation
    document.title = "Termos de Serviço | Linkor"
  }, [])

  return (
    <div className="min-h-screen bg-[#0A0712] text-gray-100">
      <main className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6">
              <FileText className="h-4 w-4 text-green-500 mr-2" />
              <span className="text-green-500 font-medium text-sm">Documento Legal</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Termos de Serviço</h1>

            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              Ao assinar qualquer produto ou serviço da Linkor, você concorda que leu e aceita todos os termos abaixo.
            </p>

            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-lg p-4 inline-flex items-center">
              <Calendar className="h-5 w-5 text-blue-500 mr-3" />
              <div className="text-left">
                <p className="text-blue-500 font-medium text-sm">Última Atualização:</p>
                <p className="text-white">18 de junho de 2025 - Revisão 1.0</p>
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
                <strong>Linkor Brasil Ltda.</strong>, pessoa jurídica de direito privado, inscrita no CNPJ/MF sob o nº
                59.818.181/0001-00, sediada em Jardim Paulista, São Paulo – SP, Brasil.
              </p>
            </div>
          </section>

          {/* Section 1 */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <Mail className="h-6 w-6 text-[#F04339] mr-3" />
              <h2 className="text-2xl font-bold text-white">1. Ativação de contas / e-mail utilizado para cadastro</h2>
            </div>

            <div className="space-y-4 text-gray-300">
              <p>
                Sua conta será ativada após o efetivo cadastro na plataforma e permanecerá ativa até a confirmação de
                recebimento do pagamento referente ao(s) serviço(s) contratado(s). Esta confirmação será obtida junto a
                instituição financeira responsável pelo processamento da transação e validada após comprovação de
                legitimidade.
              </p>

              <p>
                No ato da contratação do serviço o cliente deverá cadastrar um e-mail não pertencente a um dos domínios
                que irá hospedar em seu plano. Este e-mail será utilizado para comunicação entre a Linkor e o cliente,
                portanto é responsabilidade do cliente manter seu cadastro sempre atualizado.
              </p>

              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-yellow-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-yellow-500 mb-2">Importante</h4>
                    <p className="text-gray-300 text-sm">
                      Alguns clientes que utilizam sistemas de e-mail da Microsoft (hotmail.com, msn.com, etc) têm
                      observado que os e-mails enviados automaticamente por nosso sistema são equivocadamente desviados
                      para a pasta "Lixo Eletrônico". Caso você utilize um destes provedores de e-mail, certifique-se de
                      adicionar os endereços da Linkor em sua lista de "Remetentes confiáveis".
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-white mb-4">1.1 Migração de contas</h3>
              <p className="text-gray-300 mb-4">
                A Linkor se compromete a realizar a tentativa de migração de sua conta hospedada em outro servidor,
                desde que sejam contas que utilizem o painel administrativo DirectAdmin/Plesk/cPanel e não hajam
                restrições às opções de "Full Backup".
              </p>

              <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4">
                <h4 className="font-medium text-white mb-3">Limitações da migração</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• A Linkor não realiza a migração de contas de e-mail em planos de Hospedagem de Sites</li>
                  <li>• É de responsabilidade do cliente a alteração das DNS após a conclusão da migração</li>
                  <li>• Apenas a PRIMEIRA migração é gratuita</li>
                  <li>
                    • A migração é limitada a 5 contas (domínios), ao passar o limite é cobrado o valor de 25 reais por
                    conta adicional
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <Shield className="h-6 w-6 text-[#F04339] mr-3" />
              <h2 className="text-2xl font-bold text-white">2. Conteúdo</h2>
            </div>

            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-red-400 mb-4">Conteúdo Proibido</h3>
              <p className="text-gray-300 mb-4">
                Não é permitido em hipótese alguma sites de leilões, sites de IPTV, sites de rifa e jogos em servidores
                compartilhados.
              </p>
              <p className="text-gray-300">
                Todos os serviços oferecidos pela Linkor são para propósitos legais. O cliente deve concordar em isentar
                a Linkor de qualquer responsabilidade pelo uso indevido de seus serviços.
              </p>
            </div>

            <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-6">
              <h4 className="font-medium text-white mb-4">
                Exemplos de materiais inaceitáveis em servidores compartilhados:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-300 text-sm">
                <div className="space-y-1">
                  <p>• Streaming e armazenamento de arquivos de áudio/vídeo</p>
                  <p>• Conteúdo que faça apologia ou facilite a aquisição de itens ilegais</p>
                  <p>• Bots de IRC, Scripts de web-proxy e/ou de navegação anônima</p>
                  <p>• Programas sem licenças (pirateados)</p>
                  <p>• Sites e fóruns que distribuam ou divulguem cracks/cheats/warez</p>
                  <p>• Arquivos executáveis e imagens de disco</p>
                  <p>• Mirrors (espelhamentos de outros sites)</p>
                </div>
                <div className="space-y-1">
                  <p>• Repositório de dados, exclusivos serviços de banner-ad</p>
                  <p>• Servidores de afiliação, scripts de topsites</p>
                  <p>• Atividades financeiras que envolvem caução, HYIP/PIAR</p>
                  <p>• Sites de investimentos como Forex e e-Gold Exchange</p>
                  <p>• Mineração de criptomoedas</p>
                  <p>• Sites que estimulam racismo/ódio/fanatismo</p>
                  <p>• Scripts maliciosos e malware</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 - SPAM Policy */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <Mail className="h-6 w-6 text-[#F04339] mr-3" />
              <h2 className="text-2xl font-bold text-white">3. Política de tolerância zero contra SPAM</h2>
            </div>

            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6 mb-6">
              <p className="text-red-400 font-medium">
                A Linkor defende, apoia e aplica a política de TOLERÂNCIA ZERO contra o envio de e-mails em massa,
                mensagens não-solicitadas (sejam elas de qualquer espécie e para qualquer propósito) e SPAM.
              </p>
            </div>

            <div className="space-y-4 text-gray-300">
              <p>
                Mecanismos de Safelists serão considerados e tratados como SPAM. Qualquer conta que for utilizada para
                enviar SPAM será encerrada com ou sem aviso prévio.
              </p>
              <p>
                Sites que fazem anúncios e divulgações através de SPAM (Spamvertised) não podem ser hospedados em nossos
                servidores. Esta norma inclui ‒ mas não se limita a ‒ SPAM enviados via fax, e-mail, mensagens
                instantâneas ou Usenet/Newsgroups.
              </p>
              <p>
                Nenhuma organização ou entidade listada pelo ROKSO poderá fazer uso de nossos serviços. Qualquer conta
                que faça com que um dos IPs de nossos servidores sejam inseridos em uma blacklist será imediatamente
                suspensa e/ou encerrada.
              </p>
            </div>
          </section>

          {/* Section 4 - Payment Information */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <CreditCard className="h-6 w-6 text-[#F04339] mr-3" />
              <h2 className="text-2xl font-bold text-white">4. Informações sobre pagamentos</h2>
            </div>

            <p className="text-gray-300 mb-6">
              É de sua total responsabilidade manter em dia todos os seus compromissos de pagamentos, bem como o envio
              das informações que o identifiquem (quando o pagamento é realizado por métodos que exijam a comprovação).
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-400 mb-3">4.1. Pré-pago</h3>
                <p className="text-gray-300 text-sm">
                  Ao contratar nossos serviços você concorda em realizar antecipadamente o pagamento referente aos
                  serviços contratados, durante toda a vigência do plano.
                </p>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-400 mb-3">4.2. Renovação automática</h3>
                <p className="text-gray-300 text-sm">
                  Ao contratar nossos serviços você está de acordo com a renovação automática do plano por período igual
                  ao último ciclo contratado.
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-4 text-gray-300">
              <div>
                <h4 className="font-medium text-white mb-2">4.3. Pagamentos em atraso</h4>
                <p className="text-sm">
                  Contas com mais de 1 (um) dia de atraso (em relação ao vencimento original da fatura) serão
                  automaticamente suspensas. Após a quitação dos débitos a conta será reativada em até 1 dia útil
                  (mediante a comprovação de pagamento).
                </p>
              </div>

              <div>
                <h4 className="font-medium text-white mb-2">4.4. Fraudes</h4>
                <p className="text-sm">
                  É uma violação deste Acordo o uso indevido ou fraudulento de cartões de crédito, PayPal, boleto ou
                  qualquer outro método de pagamento. A Linkor pode relatar qualquer uso indevido ou fraudulento a
                  autoridades governamentais e policiais.
                </p>
              </div>

              <div>
                <h4 className="font-medium text-white mb-2">4.5. Reajustes</h4>
                <p className="text-sm">
                  A Linkor reserva-se o direito de, a qualquer momento, alterar os valores dos planos anunciados, de
                  acordo com as tendências, custos e oscilações do mercado.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 - Backups */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <Database className="h-6 w-6 text-[#F04339] mr-3" />
              <h2 className="text-2xl font-bold text-white">5. Backups (cópias de segurança)</h2>
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-6 mb-6">
              <p className="text-yellow-400 font-medium">
                Linkor NÃO se responsabiliza pelos arquivos e/ou dados armazenados na sua conta. Apesar de realizar
                backups diário, semanal e mensalmente de Hospedagem de sites e Revenda de Hospedagem, o plano não lhe dá
                garantias de recuperação da informação perdida por qualquer eventualidade.
              </p>
            </div>

            <p className="text-gray-300 mb-6">
              O uso do Serviço é por sua conta e risco. Você assume total responsabilidade pelos arquivos armazenados em
              nossos servidores, assim como por manter suas próprias cópias de segurança (backup) fora do servidor, em
              um lugar externo.
            </p>

            <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">5.1 Servidores compartilhados</h3>
              <p className="text-gray-300 text-sm mb-4">
                Para a realização de trabalhos técnicos e estritamente para a nossa segurança, a Linkor mantém uma
                rotina diária de cópias de segurança dos arquivos de servidores compartilhados, o que não representa um
                backup completo dos serviços.
              </p>
              <p className="text-gray-300 text-sm">
                Apenas as contas com as seguintes características entram na nossa rotina de armazenamento: Hospedagem de
                sites e Revenda de Hospedagem com até 50GB de armazenamento em uso e até 100.000 inodes. Contas de email
                e suas mensagens não entram na rotina de backup.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <div className="flex items-center mb-6">
              <CreditCard className="h-6 w-6 text-[#F04339] mr-3" />
              <h2 className="text-2xl font-bold text-white">6. Cancelamentos e reembolso</h2>
            </div>

            <p className="text-gray-300 mb-6">
              Os clientes podem solicitar o cancelamento de uma conta a qualquer momento, usando o Formulário de
              Cancelamento Apropriado. Apenas solicitações via formulário serão aceitas.
            </p>

            <p className="text-gray-300 mb-6">
              O reembolso é total caso o cliente esteja enquadrado e respaldado pelo CDC vigente no Brasil. Não
              oferecemos reembolso parcial ou proporcional ao tempo de serviço.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-400 mb-3">6.1 Método de recebimento</h3>
                <p className="text-gray-300 text-sm">
                  Ao solicitar o reembolso você pode selecionar o método de recebimento. O valor pode ser adicionado
                  como crédito no seu Painel Financeiro, ou você pode receber o reembolso do valor utilizando o método
                  de pagamento feito na fatura.
                </p>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-400 mb-3">6.2 Planos elegíveis para reembolso</h3>
                <p className="text-gray-300 text-sm">
                  São elegíveis para reembolso os planos compartilhados de Hospedagem de Sites MEGA, GIGA e TURBO.
                </p>
              </div>
            </div>

            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-red-400 mb-4">6.4 Casos em que não há reembolso</h3>
              <p className="text-gray-300 text-sm">
                Não haverá reembolso para Registro de Domínios, suporte avulso, serviços avulsos de instalação e taxas
                administrativas. Ao contratar um destes produtos ou serviços, o cliente afirma estar ciente e de acordo
                com esta cláusula.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <div className="flex items-center mb-6">
              <Server className="h-6 w-6 text-[#F04339] mr-3" />
              <h2 className="text-2xl font-bold text-white">7. Utilização dos recursos</h2>
            </div>

            <p className="text-gray-300 mb-6">Usuários de servidores compartilhados NÃO podem:</p>

            <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-6 mb-6">
              <div className="grid grid-cols-1 gap-3 text-gray-300 text-sm">
                <p>
                  <strong>a)</strong> Usar 25% ou mais dos recursos de processamento, memória, uso de disco, link com a
                  Internet, etc. do servidor por períodos iguais ou superiores a 120 segundos.
                </p>
                <p>
                  <strong>b)</strong> Ultrapassar o limite de 25 processos simultâneos por conta de painel.
                </p>
                <p>
                  <strong>c)</strong> Rodar aplicativos stand-alone no servidor. Isso inclui todo e qualquer tipo de
                  daemon, como por exemplo IRCd.
                </p>
                <p>
                  <strong>d)</strong> Executar em servidores compartilhados qualquer tipo de web-spyder ou indexador.
                </p>
                <p>
                  <strong>e)</strong> Executar qualquer aplicação que interaja com redes de IRC.
                </p>
                <p>
                  <strong>f)</strong> Executar qualquer aplicação bit torrent, tracker e afins.
                </p>
                <p>
                  <strong>g)</strong> Participar de qualquer atividade de compartilhamento de arquivos (file-sharing) ou
                  atividades peer-to-peer (p2p).
                </p>
                <p>
                  <strong>h)</strong> Executar qualquer tipo de servidor de jogos.
                </p>
                <p>
                  <strong>i)</strong> Hospedar quaisquer tipos de programas executáveis que possam ser ou estar
                  contaminados por vírus.
                </p>
                <p>
                  <strong>j)</strong> Agendar tarefas (cron jobs) com intervalos inferiores a 15 minutos.
                </p>
              </div>
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-400 mb-4">Inodes</h3>
              <p className="text-gray-300 text-sm">
                Cada arquivo armazenado na hospedagem conta como um (1) inode. O uso de mais de duzentos e cinquenta mil
                (250.000) inodes em qualquer conta dos planos P, M e Business da Hospedagem de Sites compartilhada, ou
                qualquer conta de Revenda, pode resultar em uma advertência. Para o plano Turbo o limite é de quinhentos
                mil (500.000) inodes.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <div className="flex items-center mb-6">
              <Database className="h-6 w-6 text-[#F04339] mr-3" />
              <h2 className="text-2xl font-bold text-white">8. Utilização de tráfego (bandwidth)</h2>
            </div>

            <p className="text-gray-300 mb-6">
              Cada plano dá direito a utilização de um determinado volume de tráfego mensal (esse volume varia de acordo
              com o plano contratado).
            </p>

            <p className="text-gray-300 mb-6">
              A utilização deste limite de tráfego deve ser igualmente distribuída dentro do mês. Sua conta deve
              encerrar o mês sem ultrapassar este limite, caso contrário ela será suspensa até que inicie o próximo mês
              ou mais recursos de tráfego sejam adquiridos ou sua conta seja migrada para um plano que ofereça mais
              recursos.
            </p>

            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
              <p className="text-blue-400 font-medium text-sm">
                <strong>Importante:</strong> Bandwidth é recurso não-cumulativo: tráfego não utilizado dentro do mês não
                podem ser transferidos para o mês seguinte.
              </p>
            </div>
          </section>

          {/* Section 9 - Uptime Guarantees */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <Clock className="h-6 w-6 text-[#F04339] mr-3" />
              <h2 className="text-2xl font-bold text-white">9. Garantias de disponibilidade (uptime)</h2>
            </div>

            <p className="text-gray-300 mb-6">
              Considerando planos de hospedagem em servidores compartilhados, a Linkor tem condições técnicas de
              oferecer e se propõe a manter um SLA (Service Level Agreement ‒ acordo de nível de serviços ou garantia de
              disponibilidade) de 99,9% por mês.
            </p>

            <div className="bg-gray-900/50 border border-gray-700 rounded-lg overflow-hidden">
              <div className="bg-gray-800 px-6 py-3 border-b border-gray-700">
                <h3 className="font-medium text-white">Disponibilidade e Desconto</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-green-400">99,5% até 99,0%</span>
                      <span className="text-white">5%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-yellow-400">98,9% até 95,0%</span>
                      <span className="text-white">10%</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-orange-400">94,9% até 90,0%</span>
                      <span className="text-white">20%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-red-400">Abaixo de 89,9%</span>
                      <span className="text-white">30%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6">
                <h4 className="font-medium text-green-400 mb-3">9.1 Como solicitar o crédito</h4>
                <p className="text-gray-300 text-sm">
                  Para solicitar uma avaliação de crédito, abra um chamado financeiro no Portal do Cliente informando
                  seu domínio principal e o tempo de downtime observado.
                </p>
              </div>

              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6">
                <h4 className="font-medium text-red-400 mb-3">9.2 Situações não cobertas</h4>
                <p className="text-gray-300 text-sm">
                  A garantia não se aplica a falhas na conexão, falhas de programação, interrupções para manutenção,
                  intervenções emergenciais, suspensão por determinação de autoridades ou planos inadequados.
                </p>
              </div>
            </div>
          </section>

          {/* Dedicated Servers Section */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-500/20 rounded-lg p-6">
              <div className="flex items-center mb-6">
                <Server className="h-6 w-6 text-purple-400 mr-3" />
                <h2 className="text-2xl font-bold text-white">Servidores Dedicados e CloudVPS</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-purple-400 mb-3">10. Servidores dedicados</h3>
                  <p className="text-gray-300 text-sm">
                    Seu servidor será instalado, configurado e entregue, em geral, em até 7 dias úteis após a
                    confirmação de pagamento. A Linkor não administrará, em hipótese alguma, servidores de sites de
                    leilões.
                  </p>
                </div>

                <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-indigo-400 mb-3">11. Servidores CloudVPS</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    O nome Cloud VPS se dá pelo fato de os servidores serem provisionados rapidamente via CloudInit,
                    contudo NÃO possuem qualquer redundância ou alta disponibilidade, se tratando de servidores VPS
                    Convencionais.
                  </p>
                  <p className="text-gray-300 text-sm">
                    O provisionamento da CloudVPS é realizado entre 60 a 120 segundos, mas pode se estender até 48 horas
                    dependendo de algum equívoco nos dados fornecidos pelo cliente.
                  </p>
                </div>
              </div>

              <div className="mt-6 bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                <h4 className="font-medium text-red-400 mb-2">Backups e Perda de Dados</h4>
                <p className="text-gray-300 text-sm">
                  A Linkor NÃO realiza backups ou cópias de segurança de Servidores Dedicados ou VPS. É sua
                  responsabilidade manter seu próprio backup ou encontrar uma solução para isso. Ao contratar nossos
                  serviços, você está de acordo em manter seu próprio backup em um lugar externo e seguro.
                </p>
              </div>
            </div>
          </section>

          {/* Final Sections */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Disposições Finais</h2>

            <div className="space-y-6">
              <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">12. Indenização</h3>
                <p className="text-gray-300 text-sm mb-4">
                  O cliente deve concordar em isentar a Linkor de todas e quaisquer reivindicações, responsabilidades,
                  perdas, ganhos e gastos (incluindo honorários de causas contra a Linkor, seus agentes, clientes,
                  escritórios e funcionários) que possam surgir ou resultar de quaisquer serviços prestados ou
                  executados.
                </p>

                <h4 className="font-medium text-white mb-3">
                  O cliente deve concordar em isentar a Linkor de todas e quaisquer responsabilidade decorrentes de:
                </h4>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li>
                    a) Qualquer dano a pessoa ou propriedade decorrente de comercialização de produtos e/ou serviços
                    divulgados ou distribuídos através dos planos contratados;
                  </li>
                  <li>
                    b) Qualquer material divulgado/distribuído pelo cliente que possa infringir leis nacionais e/ou
                    internacionais, incluindo leis de direitos autorais e propriedades intelectuais;
                  </li>
                  <li>c) Infração de Copyright;</li>
                  <li>
                    d) Qualquer produto/serviço defeituoso comercializado através dos planos hospedados em nossos
                    servidores.
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">13. Quebra de sigilo para aplicação da lei</h3>
                <p className="text-gray-300 text-sm">
                  A Linkor pode fornecer todos os dados de qualquer cliente às autoridades competentes para que essas
                  possam tomar as medidas cabíveis de acordo com a legislação em vigor. As informações sobre os dados do
                  cliente podem ser repassadas mediante solicitação de órgãos competentes, sem que o cliente esteja
                  ciente ou seja notificado. A Linkor tem o absoluto interesse em contribuir para que as leis sejam
                  sempre devidamente cumpridas.
                </p>
              </div>

              <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">14. Mudanças nos termos de serviço</h3>
                <p className="text-gray-300 text-sm">
                  A Linkor se reserva o direito de revisar suas políticas de serviços a qualquer instante, com ou sem
                  aviso prévio.
                </p>
              </div>
            </div>
          </section>

          {/* Footer Section */}
          <section className="text-center py-8 border-t border-gray-800">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-2">Do foro</h3>
              <p className="text-gray-300 text-sm">
                Para dirimir quaisquer controvérsias oriundas deste termo, as partes elegem o foro da comarca de São
                Paulo ‒ São Paulo.
              </p>
            </div>

            <div className="mb-6">
              <p className="text-gray-400 font-medium">SÃO PAULO ‒ SÃO PAULO</p>
              <p className="text-gray-400">18 DE JUNHO DE 2025.</p>
            </div>

            <div className="bg-[#F04339]/10 border border-[#F04339]/20 rounded-lg p-4 inline-block mb-8">
              <p className="text-[#F04339] font-medium">
                Ao utilizar nossos serviços, você concorda com todos os termos acima.
              </p>
            </div>

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

              <a
                href="/politica-de-privacidade"
                className="inline-flex items-center justify-center bg-gradient-to-r from-[#F04339] to-[#FF6B5B] hover:from-[#FF6B5B] hover:to-[#F04339] text-white font-medium py-3 px-6 rounded-lg transition-all"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                Política de Privacidade
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
