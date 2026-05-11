import { Car, Users, MapPin, Award } from 'lucide-react';

const stats = [
  { icon: Car, value: '500+', label: 'Unit Kendaraan', color: 'text-orange-400' },
  { icon: Users, value: '10,000+', label: 'Pelanggan Aktif', color: 'text-blue-400' },
  { icon: MapPin, value: '15+', label: 'Kota Tersedia', color: 'text-green-400' },
  { icon: Award, value: '8 Tahun', label: 'Pengalaman', color: 'text-purple-400' },
];

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-orange-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="inline-flex p-4 rounded-2xl bg-white/5 border border-white/10 mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <p className="text-3xl sm:text-4xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
