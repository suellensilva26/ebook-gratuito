'use client'

const TELEGRAM_LINK = 'https://t.me/+vyNGKyTygNY1ODQx'
const WHATSAPP_LINK = 'https://chat.whatsapp.com/KPQjKZF3LfMEbH9dDo7u11?mode=ems_copy_t'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gold/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Links */}
          <div>
            <h3 className="font-bold text-gold mb-4">Links</h3>
            <ul className="space-y-2 text-gray-light">
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold text-gold mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center hover:bg-gold/30 transition-colors"
                aria-label="Instagram"
              >
                📷
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center hover:bg-gold/30 transition-colors"
                aria-label="TikTok"
              >
                🎵
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center hover:bg-gold/30 transition-colors"
                aria-label="YouTube"
              >
                ▶️
              </a>
              <a
                href={TELEGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center hover:bg-gold/30 transition-colors"
                aria-label="Telegram"
              >
                ✈️
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-green-600/20 border border-green-600/30 flex items-center justify-center hover:bg-green-600/30 transition-colors"
                aria-label="WhatsApp"
              >
                💬
              </a>
            </div>
          </div>

          {/* Info */}
          <div>
            <h3 className="font-bold text-gold mb-4">NeuroHack ENEM 2025</h3>
            <p className="text-gray-light text-sm mb-2">
              © 2025 - Todos direitos reservados
            </p>
            <p className="text-gray-light text-sm">CNPJ: [seu CNPJ]</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
