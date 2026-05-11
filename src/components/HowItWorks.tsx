import { Search, FileCheck, Car, ThumbsUp } from 'lucide-react';

const steps = [
  {
    icon: Search,
    step: '01',
    title: 'Pilih Kendaraan',
    desc: 'Jelajahi katalog kendaraan kami dan pilih mobil atau motor yang sesuai dengan kebutuhan Anda.',
    color: 'from-orange-400 to-orange-600',
  },
  {
    icon: FileCheck,
    step: '02',
    title: 'Booking & Verifikasi',
    desc: 'Isi data diri, upload KTP/SIM, dan lakukan pembayaran. Proses verifikasi cepat hanya 15 menit.',
    color: 'from-blue-400 to-blue-600',
  },
  {
    icon: Car,
    step: '03',
    title: 'Ambil Kendaraan',
    desc: 'Kendaraan diantar ke lokasi Anda atau ambil di kantor kami. Cek kondisi bersama tim kami.',
    color: 'from-purple-400 to-purple-600',
  },
  {
    icon: ThumbsUp,
    step: '04',
    title: 'Nikmati Perjalanan',
    desc: 'Gunakan kendaraan dengan nyaman. Kembalikan sesuai jadwal atau perpanjang jika diperlukan.',
    color: 'from-green-400 to-green-600',
  },
];

export default function HowItWorks() {
  return (
    <section id="cara-kerja" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block bg-orange-100 text-orange-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Cara Kerja
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Rental Mudah dalam <span className="text-gradient">4 Langkah</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Proses rental yang simpel dan transparan. Dari booking hingga jalan, semua tanpa ribet.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, i) => (
            <div key={i} className="relative group">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-gray-300 to-gray-200" />
              )}

              <div className="relative text-center space-y-4">
                {/* Step number */}
                <div className="relative inline-flex">
                  <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center text-xs font-bold text-gray-700 shadow-sm">
                    {item.step}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
