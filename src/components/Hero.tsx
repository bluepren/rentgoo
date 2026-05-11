import { Shield, Clock, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="beranda" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <Star className="w-4 h-4 text-orange-400 fill-orange-400" />
              <span className="text-white/90 text-sm font-medium">Rating 4.9/5 — 2000+ Pelanggan Puas</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Rental <span className="text-gradient">Mobil & Motor</span> Terpercaya di Indonesia
            </h1>

            <p className="text-lg text-gray-300 max-w-lg leading-relaxed">
              Nikmati perjalanan Anda dengan kendaraan berkualitas tinggi. Harga terjangkau, proses mudah, dan layanan 24/7 untuk kenyamanan Anda.
            </p>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <Shield className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Asuransi Lengkap</p>
                  <p className="text-gray-400 text-xs">Perlindungan penuh</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <Clock className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Layanan 24/7</p>
                  <p className="text-gray-400 text-xs">Selalu siap membantu</p>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="flex gap-8 pt-4">
              <div>
                <p className="text-3xl font-bold text-white">500+</p>
                <p className="text-gray-400 text-sm">Unit Kendaraan</p>
              </div>
              <div className="w-px bg-gray-700" />
              <div>
                <p className="text-3xl font-bold text-white">15+</p>
                <p className="text-gray-400 text-sm">Kota Tersedia</p>
              </div>
              <div className="w-px bg-gray-700" />
              <div>
                <p className="text-3xl font-bold text-white">10K+</p>
                <p className="text-gray-400 text-sm">Transaksi/Bulan</p>
              </div>
            </div>
          </div>

          {/* Right - 3D Car Image */}
          <div className="relative flex items-center justify-center">
            {/* Glow effect behind car */}
            <div className="absolute w-80 h-80 bg-orange-500/20 rounded-full blur-3xl animate-float" />
            <div className="absolute w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
            
            {/* Car Image */}
            <img
              src="/images/car-3d.png"
              alt="Mobil Rental Premium"
              className="relative z-10 w-full max-w-lg lg:max-w-xl drop-shadow-2xl animate-float"
              style={{ animationDuration: '4s' }}
            />
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto">
          <path fill="white" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" />
        </svg>
      </div>
    </section>
  );
}
