import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Budi Santoso',
    role: 'Pengusaha',
    avatar: 'BS',
    rating: 5,
    text: 'Pelayanan sangat memuaskan! Saya sewa Innova untuk perjalanan bisnis dan kondisinya sangat prima. Proses booking juga cepat, tidak sampai 15 menit sudah selesai.',
    color: 'bg-orange-500',
  },
  {
    name: 'Siti Rahayu',
    role: 'Ibu Rumah Tangga',
    avatar: 'SR',
    rating: 5,
    text: 'Sering sewa motor di sini untuk antar jemput anak sekolah. Motornya selalu dalam kondisi bagus dan bersih. Harga juga sangat terjangkau. Recommended!',
    color: 'bg-blue-500',
  },
  {
    name: 'Ahmad Fauzi',
    role: 'Traveler',
    avatar: 'AF',
    rating: 5,
    text: 'Sewa Pajero untuk trip ke Bromo dan hasilnya luar biasa. Mobilnya nyaman, bersih, dan ada layanan antar jemput. Pasti akan sewa lagi di sini!',
    color: 'bg-green-500',
  },
  {
    name: 'Dewi Lestari',
    role: 'Karyawan Swasta',
    avatar: 'DL',
    rating: 5,
    text: 'Customer service-nya sangat responsif dan ramah. Waktu mobil saya mogok di jalan, tim mereka langsung datang dalam 30 menit. Top service!',
    color: 'bg-purple-500',
  },
  {
    name: 'Rizky Pratama',
    role: 'Mahasiswa',
    avatar: 'RP',
    rating: 5,
    text: 'Sewa motor untuk keliling Bali selama liburan. Harga sangat bersahabat untuk mahasiswa. Motornya irit dan nyaman dikendarai. Mantap!',
    color: 'bg-red-500',
  },
  {
    name: 'Maya Putri',
    role: 'Event Organizer',
    avatar: 'MP',
    rating: 5,
    text: 'Sudah langganan di sini untuk kebutuhan event. Selalu tepat waktu dan kendaraannya selalu dalam kondisi terbaik. Partner yang sangat reliable!',
    color: 'bg-teal-500',
  },
];

export default function Testimonials() {
  return (
    <section id="testimoni" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block bg-orange-100 text-orange-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Testimoni
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Apa Kata <span className="text-gradient">Pelanggan Kami</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Ribuan pelanggan puas dengan layanan kami. Berikut beberapa testimoni dari mereka.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-orange-200 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">"{t.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className={`w-10 h-10 ${t.color} rounded-full flex items-center justify-center text-white text-sm font-bold`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
