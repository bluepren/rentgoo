import { ArrowRight, Phone, MessageCircle } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`
          }} />

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Siap Memulai Perjalanan Anda?
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
              Booking sekarang dan dapatkan diskon 15% untuk rental pertama Anda. Promo terbatas, jangan sampai terlewat!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#kendaraan"
                className="w-full sm:w-auto bg-white text-orange-600 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition-all hover:shadow-xl active:scale-95"
              >
                Pesan Sekarang <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/6281234567890"
                className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all hover:shadow-xl active:scale-95"
              >
                <MessageCircle className="w-5 h-5" /> Chat WhatsApp
              </a>
            </div>

            <div className="mt-8 flex items-center justify-center gap-2 text-white/70">
              <Phone className="w-4 h-4" />
              <span className="text-sm">Atau hubungi: 0812-3456-7890</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
