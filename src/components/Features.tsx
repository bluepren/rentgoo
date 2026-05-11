import { Shield, Clock, CreditCard, Headphones, MapPin, Award } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Asuransi Lengkap',
    desc: 'Setiap kendaraan dilindungi asuransi all-risk untuk keamanan dan kenyamanan Anda.',
    color: 'bg-blue-500',
    bgColor: 'bg-blue-50',
  },
  {
    icon: CreditCard,
    title: 'Harga Transparan',
    desc: 'Tidak ada biaya tersembunyi. Harga yang Anda lihat adalah harga yang Anda bayar.',
    color: 'bg-green-500',
    bgColor: 'bg-green-50',
  },
  {
    icon: Clock,
    title: 'Proses Cepat',
    desc: 'Booking online dalam hitungan menit. Kendaraan siap diantar ke lokasi Anda.',
    color: 'bg-purple-500',
    bgColor: 'bg-purple-50',
  },
  {
    icon: Headphones,
    title: 'Support 24/7',
    desc: 'Tim customer service kami siap membantu kapan saja, di mana saja.',
    color: 'bg-orange-500',
    bgColor: 'bg-orange-50',
  },
  {
    icon: MapPin,
    title: 'Antar Jemput',
    desc: 'Layanan antar jemput kendaraan ke lokasi Anda. Praktis dan hemat waktu.',
    color: 'bg-red-500',
    bgColor: 'bg-red-50',
  },
  {
    icon: Award,
    title: 'Kendaraan Terawat',
    desc: 'Semua kendaraan di-service berkala dan dalam kondisi prima sebelum disewakan.',
    color: 'bg-teal-500',
    bgColor: 'bg-teal-50',
  },
];

export default function Features() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block bg-orange-100 text-orange-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Mengapa Memilih Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Pengalaman Rental <span className="text-gradient">Terbaik</span> untuk Anda
          </h2>
          <p className="text-gray-500 text-lg">
            Kami berkomitmen memberikan layanan rental kendaraan dengan kualitas terbaik dan harga bersaing.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group p-6 lg:p-8 bg-white border border-gray-100 rounded-2xl hover:shadow-xl hover:shadow-gray-200/50 hover:border-gray-200 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`inline-flex p-3 rounded-xl ${feature.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-6 h-6 text-white ${feature.color} rounded-lg`} style={{ padding: '2px' }} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mt-5 mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
