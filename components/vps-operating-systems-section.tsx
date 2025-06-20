"use client"

const operatingSystems = [
  { name: "Windows" },
  { name: "Linux" },
  { name: "Centos" },
  { name: "Ubuntu" },
  { name: "Fedora" },
  { name: "Debian" },
  { name: "Almalinux" },
  { name: "Rockylinux" },
]

export function VPSOperatingSystemsSection() {
  return (
    <section className="py-20 bg-[#0C0C17] w-full">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Uma gama de sistemas operacionais para você escolher
          </h2>
          <p className="text-gray-400 md:text-lg max-w-3xl mx-auto">
            Todos os nossos planos VPS permitem que você escolha seu sistema operacional preferido.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {operatingSystems.map((os, index) => (
            <div
              key={index}
              className="bg-gray-900/50 border border-gray-800/50 rounded-xl p-6 text-center hover:border-[#F04339]/30 transition-all duration-300 hover:bg-gray-800/50"
            >
              <div className="w-16 h-16 bg-gray-800/50 rounded-lg mx-auto mb-4 flex items-center justify-center">
                {/* Placeholder for OS icon - will be replaced with actual images */}
                <div className="w-8 h-8 bg-gradient-to-br from-[#F04339]/20 to-[#FF6B5B]/20 rounded"></div>
              </div>
              <h3 className="font-semibold text-white">{os.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
