"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronDown, ChevronUp, Mail, User, Menu, X, Search, Box, Server, HardDrive, Signal } from "lucide-react"
import { menuItems } from "@/config/menu-config"

const ServidoresMegaMenu = () => {
  return (
    <div className="w-full p-5 bg-gray-950 text-white rounded-lg">
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-8">
        <div>
          <div className="pl-2 opacity-80 text-xs pb-2">
            VPS
            <div className="relative w-[25px] h-[1px] bg-gradient-to-r from-[#F04339] to-[#FF6B5B]" />
          </div>
          {[
            {
              href: "/vps",
              icon: Box,
              title: "Servidores VPS",
              description: "Para quem busca liberdade",
            },
            {
              href: "#",
              icon: Box,
              title: "Servidores VDS",
              description: "Para quem busca desempenho",
            },
            {
              href: "https://app.linkor.host/store/semi-dedicado-intel",
              icon: Box,
              title: "Semi Dedicados",
              description: "Para quem busca muitos recursos",
            },
            // {
            // 	href: "/redm",
            // 	icon: Box,
            // 	title: "VPS RedM",
            // 	description: "Hospedagem de RedM.",
            // },
          ].map((item, index) => (
            <Link href={item.href} key={`1${index}${item.href}`}>
              <div className="p-2 hover:bg-[#303030] rounded-lg flex gap-2">
                <div className="">
                  <item.icon size={32} className="bg-gradient-to-r from-[#F04339] to-[#FF6B5B] p-2 rounded-lg" />
                </div>
                <div>
                  <p className="text-sm text-gray-300 font-semibold">{item.title}</p>
                  <p className="text-xs text-gray-500">{item.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Link href="">
          <div className="relative bg-gradient-to-b from-[#F04339] to-[#FF6B5B] h-52 rounded-lg">
            <div className="absolute bottom-0 p-4">
              <div className="relative mb-2">
                <Image src="logo-5.png" alt="Logo linkor" width="60" height="60" />
              </div>
              <p className="text-lg font-bold">Servidores AMD & Intel</p>
              <p>Servidores localizados em São Paulo.</p>
            </div>
          </div>
        </Link>
        <div className="">
          <div className="pl-2 opacity-80 text-xs pb-2">
            DEDICADOS
            <div className="relative w-[72px] h-[1px] bg-gradient-to-r from-[#F04339] to-[#FF6B5B]" />
          </div>
          {[
            {
              href: "#",
              icon: HardDrive,
              title: "Baremetal",
              description: "Seu próprio dedicado, não compartilha recursos com ninguém.",
            },
            {
              href: "#",
              icon: Server,
              title: "Colocation",
              description: "Hospeda seu servidor em nossa infraestrutura, totalmente gerenciada.",
            },
          ].map((item, index) => (
            <Link href={item.href} key={`2${index}${item.href}`}>
              <div className="p-2 hover:bg-[#303030] rounded-lg flex gap-2">
                <div className="">
                  <item.icon size={32} className="bg-gradient-to-r from-[#F04339] to-[#FF6B5B] p-2 rounded-lg" />
                </div>
                <div>
                  <p className="text-sm text-gray-300 font-semibold">{item.title}</p>
                  <p className="text-xs text-gray-500">{item.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="">
          <div className="pl-2 opacity-80 text-xs pb-2">
            RECURSOS
            <div className="relative w-[70px] h-[1px] bg-gradient-to-r from-[#F04339] to-[#FF6B5B]" />
          </div>
          {[
            {
              href: "https://status.linkor.host/",
              icon: Signal,
              title: "Status da Rede",
              description: "Mantenha-se informado do nosso status de rede dos servidores da Linkor.",
            },
            {
              href: "https://app.linkor.host/clientarea.php",
              icon: User,
              title: "Área do Cliente",
              description: "Acesse sua conta e gerencie seus serviços, tudo em um só lugar.",
            },
          ].map((item, index) => (
            <Link href={item.href} key={`3${index}${item.href}`}>
              <div className="p-2 hover:bg-[#303030] rounded-lg flex gap-2">
                <div className="">
                  <item.icon size={32} className="bg-gradient-to-r from-[#F04339] to-[#FF6B5B] p-2 rounded-lg" />
                </div>
                <div>
                  <p className="text-sm text-gray-300 font-semibold">{item.title}</p>
                  <p className="text-xs text-gray-500">{item.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const searchInputRef = useRef(null)
  const [scrolled, setScrolled] = useState(false)
  const [showPromo, setShowPromo] = useState(true)
  const menuButtonRefs = useRef({})

  const menuTimeout = useRef(null)
  const menuRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveMenu(null) // Fecha o menu se clicado fora
      }

      // Verifica se clicou em um botão de menu diferente
      const clickedMenuButton = Object.values(menuButtonRefs.current).find((ref) => ref && ref.contains(event.target))

      if (!clickedMenuButton) {
        setActiveMenu(null) // Fecha se não clicou em nenhum botão de menu
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleMouseEnterMenu = (menu) => {
    if (menuTimeout.current) clearTimeout(menuTimeout.current)
    setActiveMenu(menu)
  }

  const handleMouseLeaveMenu = () => {
    menuTimeout.current = setTimeout(() => {
      setActiveMenu(null)
    }, 200) // delay ajustável
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
    if (!isSearchOpen && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current?.focus()
      }, 100)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const renderActiveMenu = () => {
    if (activeMenu === "servidores") {
      return <ServidoresMegaMenu />
    }

    const activeItem = menuItems.find((item) => item.id === activeMenu)
    if (!activeItem) return null

    return (
      <div className="p-4 bg-gray-950 rounded-lg" ref={menuRef}>
        <h3 className="text-lg font-semibold mb-3">{activeItem.title}</h3>
        <div className="space-y-2">
          {activeItem.items.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href}
              className="flex items-center hover:bg-[#303030] rounded-lg p-2 transition-colors duration-150"
            >
              <div className="w-8 h-8 flex items-center justify-center rounded-md mr-3 shadow-sm">
                <subItem.icon size={32} className="bg-gradient-to-r from-[#F04339] to-[#FF6B5B] p-2 rounded-lg" />
              </div>
              <span className="font-medium text-xs">{subItem.title}</span>
              {subItem.isNew && (
                <span className="ml-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">Novo</span>
              )}
              {subItem.badge && (
                <span className="ml-2 bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full">{subItem.badge}</span>
              )}
            </Link>
          ))}
        </div>
      </div>
    )
  }

  return (
    <header
      className={`w-full bg-[#0C0C17] border-b border-[#1A1A35] sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      {/* Banner promocional */}
      {showPromo && (
        <div className="bg-indigo-600 text-white text-center py-2 text-sm relative">
          <a href="https://app.linkor.host/affiliates.php" target="_blank" rel="noopener noreferrer">
            💸 Seu saldo é de <strong>R$ 1.250,00</strong> deseja resgatar? Já pensou em receber isto sem investir? —
            Saiba mais!
          </a>

          <button
            onClick={() => setShowPromo(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
          >
            ✕
          </button>
        </div>
      )}

      {/* Top Bar */}
      <div className="bg-gray-950 py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">{/* Removido o link de parcelamento */}</div>
          <div className="flex items-center space-x-4">
            {/* Suporte */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnterMenu("suporte")}
              onMouseLeave={handleMouseLeaveMenu}
            >
              <button className="text-sm text-gray-300 hover:text-white flex items-center transition-colors duration-200">
                Suporte
                <ChevronDown className="h-4 w-4 ml-1 transition-transform duration-200" />
              </button>
              {activeMenu === "suporte" && (
                <div className="absolute z-10 right-0 mt-2 w-48 bg-[#12122B] border border-[#1A1A35] rounded-md shadow-lg">
                  <div className="py-1">
                    <Link
                      href="https://app.linkor.host/knowledgebase"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#1A1A35] hover:text-white transition-colors duration-150"
                    >
                      <Mail className="h-4 w-4 inline mr-2" /> Central de Ajuda
                    </Link>
                    <Link
                      href="https://app.linkor.host/contact.php"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#1A1A35] hover:text-white transition-colors duration-150"
                    >
                      <Mail className="h-4 w-4 inline mr-2" /> Abrir Ticket
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Minha Conta */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnterMenu("conta")}
              onMouseLeave={handleMouseLeaveMenu}
            >
              <button className="text-sm text-gray-300 hover:text-white flex items-center transition-colors duration-200">
                Minha Conta
                <ChevronDown className="h-4 w-4 ml-1 transition-transform duration-200" />
              </button>
              {activeMenu === "conta" && (
                <div className="absolute z-10 right-0 mt-2 w-48 bg-[#12122B] border border-[#1A1A35] rounded-md shadow-lg">
                  <div className="py-1">
                    <Link
                      href="https://app.linkor.host/login"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#1A1A35] hover:text-white transition-colors duration-150"
                    >
                      <User className="h-4 w-4 inline mr-2" /> Fazer login
                    </Link>
                    <Link
                      href="https://app.linkor.host/register.php"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#1A1A35] hover:text-white transition-colors duration-150"
                    >
                      <User className="h-4 w-4 inline mr-2" /> Criar nova conta
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div
        className={`bg-[#0C0C17] border-b border-[#F04339]/40 transition-all duration-300 ${scrolled ? "shadow-md" : ""}`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image src="logo-1.png" alt="Logo linkor" width="120" height="120" />
            </Link>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={toggleSearch}
                className="text-white hover:text-white focus:outline-none p-1"
                aria-label="Buscar"
              >
                <Search className="h-5 w-5" />
              </button>
              <button
                onClick={toggleMobileMenu}
                className="text-white hover:text-white focus:outline-none p-1"
                aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {menuItems.map((item) => (
                <div key={item.id} className="relative group">
                  <button
                    ref={(el) => (menuButtonRefs.current[item.id] = el)}
                    onClick={() => {
                      const newActiveMenu = item.id === activeMenu ? null : item.id
                      setActiveMenu(newActiveMenu)
                    }}
                    className={`px-3 py-2 rounded-md text-sm font-medium flex items-center transition-all duration-200 ${
                      activeMenu === item.id
                        ? "text-[#F04339] bg-white shadow-md"
                        : "text-white hover:text-white hover:bg-[#d13931]"
                    }`}
                  >
                    <item.icon className="h-4 w-4 mr-1" />
                    {item.title}
                    {activeMenu === item.id ? (
                      <ChevronUp className="h-4 w-4 ml-1" />
                    ) : (
                      <ChevronDown className="h-4 w-4 ml-1" />
                    )}
                  </button>

                  <AnimatePresence>
                    {activeMenu === item.id && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        className={`absolute ${
                          item.id === "servidores" ? "w-[700px] -translate-x-3/4 left-0" : "w-[300px] left-0"
                        } rounded-md shadow-xl z-50`}
                        style={{ top: "calc(100% + 0.5rem)" }}
                      >
                        {item.id === "servidores" ? <ServidoresMegaMenu /> : renderActiveMenu()}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* Discord */}
              <div className="relative group">
                <a
                  href="https://discord.gg/linkor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-md text-sm font-medium text-white bg-[#5865F2] hover:bg-[#4752C4] flex items-center transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 group"
                >
                  <svg className="h-4 w-4 group-hover:hidden" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                  <span className="hidden group-hover:inline ml-2">Fazer parte da comunidade</span>
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-[#121212] border-b border-gray-800"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Mobile Menu Items */}
              {menuItems.map((item) => (
                <div key={`${item.id}-mobile`} className="px-3 py-2 rounded-md text-sm font-medium text-gray-300">
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => setActiveMenu(activeMenu === `${item.id}-mobile` ? null : `${item.id}-mobile`)}
                  >
                    <div className="flex items-center">
                      <item.icon className="h-4 w-4 mr-2" />
                      {item.title}
                    </div>
                    {activeMenu === `${item.id}-mobile` ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </div>
                  <AnimatePresence>
                    {activeMenu === `${item.id}-mobile` && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="mt-2 pl-6 space-y-2 overflow-hidden"
                      >
                        {item.id === "servidores" ? (
                          <div className="py-2">
                            {/* Versão simplificada do Servidores Mega Menu para mobile */}
                            <p className="text-[11px] text-gray-400 mb-2">VPS</p>
                            <Link href="/semi-dedicado" className="block text-gray-300 hover:text-white py-2">
                              <Box className="h-4 w-4 inline mr-2 text-[#F04339]" />
                              Semi Dedicado
                            </Link>
                            <Link href="/vps-trader" className="block text-gray-300 hover:text-white py-2">
                              <Box className="h-4 w-4 inline mr-2 text-[#F04339]" />
                              VPS Trader
                            </Link>
                            <Link href="/fivem" className="block text-gray-300 hover:text-white py-2">
                              <Box className="h-4 w-4 inline mr-2 text-[#F04339]" />
                              VPS FiveM
                            </Link>
                            <Link href="/redm" className="block text-gray-300 hover:text-white py-2">
                              <Box className="h-4 w-4 inline mr-2 text-[#F04339]" />
                              VPS RedM
                            </Link>

                            <p className="text-[11px] text-gray-400 mt-4 mb-2">DEDICADOS</p>
                            <Link href="#" className="block text-gray-300 hover:text-white py-2">
                              <Box className="h-4 w-4 inline mr-2 text-[#F04339]" />
                              Baremetal
                            </Link>
                            <Link href="#" className="block text-gray-300 hover:text-white py-2">
                              <Box className="h-4 w-4 inline mr-2 text-[#F04339]" />
                              Colocation
                            </Link>
                            <p className="text-[11px] text-gray-400 mt-4 mb-2">COLOCATIONS</p>
                            <Link href="/baremetal" className="block text-gray-300 hover:text-white py-2">
                              <Box className="h-4 w-4 inline mr-2 text-[#F04339]" />
                              Baremetal
                            </Link>
                            <Link href="/colocation" className="block text-gray-300 hover:text-white py-2">
                              <Box className="h-4 w-4 inline mr-2 text-[#F04339]" />
                              Colocation
                            </Link>
                          </div>
                        ) : (
                          item.items.map((subItem, index) => (
                            <Link key={index} href={subItem.href} className="block text-gray-300 hover:text-white py-2">
                              <subItem.icon className="h-4 w-4 inline mr-2 text-[#F04339]" />
                              {subItem.title}
                            </Link>
                          ))
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* Mobile Discord Link */}
              <a
                href="https://discord.gg/linkor"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 rounded-md text-sm font-medium text-white bg-[#5865F2] hover:bg-[#4752C4] my-2 text-center"
              >
                <svg className="h-4 w-4 inline mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
                Discord
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
