import { useState } from 'react';
import { Fuel, Gauge, Star, ArrowRight, Zap, Users as UsersIcon } from 'lucide-react';

interface Vehicle {
  name: string;
  type: string;
  category: 'car' | 'motor';
  price: number;
  priceUnit: string;
  rating: number;
  reviews: number;
  seats?: number;
  fuel: string;
  transmission: string;
  image: string;
  popular?: boolean;
}

const vehicles: Vehicle[] = [
  {
    name: 'Toyota Avanza',
    type: 'MPV',
    category: 'car',
    price: 350000,
    priceUnit: '/hari',
    rating: 4.8,
    reviews: 324,
    seats: 7,
    fuel: 'Bensin',
    transmission: 'Manual',
    image: 'https://images.unsplash.com/photo-1549924231-f129b911e442?w=600&h=400&fit=crop',
    popular: true,
  },
  {
    name: 'Toyota Innova',
    type: 'SUV',
    category: 'car',
    price: 550000,
    priceUnit: '/hari',
    rating: 4.9,
    reviews: 256,
    seats: 8,
    fuel: 'Diesel',
    transmission: 'Automatic',
    image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=600&h=400&fit=crop',
    popular: true,
  },
  {
    name: 'Honda Brio',
    type: 'Hatchback',
    category: 'car',
    price: 280000,
    priceUnit: '/hari',
    rating: 4.7,
    reviews: 189,
    seats: 5,
    fuel: 'Bensin',
    transmission: 'Automatic',
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=600&h=400&fit=crop',
  },
  {
    name: 'Mitsubishi Pajero',
    type: 'SUV',
    category: 'car',
    price: 850000,
    priceUnit: '/hari',
    rating: 4.9,
    reviews: 178,
    seats: 7,
    fuel: 'Diesel',
    transmission: 'Automatic',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&h=400&fit=crop',
    popular: true,
  },
  {
    name: 'Honda HR-V',
    type: 'Crossover',
    category: 'car',
    price: 500000,
    priceUnit: '/hari',
    rating: 4.8,
    reviews: 203,
    seats: 5,
    fuel: 'Bensin',
    transmission: 'Automatic',
    image: 'https://images.unsplash.com/photo-1568844293986-8d0400bd4745?w=600&h=400&fit=crop',
  },
  {
    name: 'Daihatsu Xenia',
    type: 'MPV',
    category: 'car',
    price: 320000,
    priceUnit: '/hari',
    rating: 4.6,
    reviews: 267,
    seats: 7,
    fuel: 'Bensin',
    transmission: 'Manual',
    image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=600&h=400&fit=crop',
  },
  {
    name: 'Honda Vario 160',
    type: 'Matic',
    category: 'motor',
    price: 120000,
    priceUnit: '/hari',
    rating: 4.8,
    reviews: 412,
    fuel: 'Bensin',
    transmission: 'Automatic',
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600&h=400&fit=crop',
    popular: true,
  },
  {
    name: 'Yamaha NMAX',
    type: 'Matic',
    category: 'motor',
    price: 150000,
    priceUnit: '/hari',
    rating: 4.9,
    reviews: 356,
    fuel: 'Bensin',
    transmission: 'Automatic',
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=600&h=400&fit=crop',
    popular: true,
  },
  {
    name: 'Honda Beat',
    type: 'Matic',
    category: 'motor',
    price: 85000,
    priceUnit: '/hari',
    rating: 4.7,
    reviews: 523,
    fuel: 'Bensin',
    transmission: 'Automatic',
    image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=600&h=400&fit=crop',
  },
  {
    name: 'Yamaha Aerox',
    type: 'Matic Sport',
    category: 'motor',
    price: 170000,
    priceUnit: '/hari',
    rating: 4.8,
    reviews: 198,
    fuel: 'Bensin',
    transmission: 'Automatic',
    image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&h=400&fit=crop',
  },
  {
    name: 'Honda PCX 160',
    type: 'Matic Premium',
    category: 'motor',
    price: 180000,
    priceUnit: '/hari',
    rating: 4.9,
    reviews: 167,
    fuel: 'Bensin',
    transmission: 'Automatic',
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=600&h=400&fit=crop',
    popular: true,
  },
  {
    name: 'Kawasaki Ninja 250',
    type: 'Sport',
    category: 'motor',
    price: 250000,
    priceUnit: '/hari',
    rating: 4.8,
    reviews: 89,
    fuel: 'Bensin',
    transmission: 'Manual',
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=600&h=400&fit=crop',
  },
];

function formatPrice(price: number): string {
  return new Intl.NumberFormat('id-ID').format(price);
}

function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  return (
    <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1">
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {vehicle.popular && (
          <div className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
            <Zap className="w-3 h-3" /> Populer
          </div>
        )}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center gap-1">
          <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
          <span className="text-xs font-bold text-gray-800">{vehicle.rating}</span>
          <span className="text-xs text-gray-500">({vehicle.reviews})</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div>
            <span className="text-xs font-semibold text-orange-500 uppercase tracking-wider">{vehicle.type}</span>
            <h3 className="text-lg font-bold text-gray-900 mt-0.5">{vehicle.name}</h3>
          </div>
        </div>

        {/* Specs */}
        <div className="flex items-center gap-4 text-gray-500 text-xs mb-4">
          {vehicle.seats && (
            <span className="flex items-center gap-1">
              <UsersIcon className="w-3.5 h-3.5" /> {vehicle.seats} Kursi
            </span>
          )}
          <span className="flex items-center gap-1">
            <Fuel className="w-3.5 h-3.5" /> {vehicle.fuel}
          </span>
          <span className="flex items-center gap-1">
            <Gauge className="w-3.5 h-3.5" /> {vehicle.transmission}
          </span>
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <span className="text-xl font-bold text-gray-900">Rp {formatPrice(vehicle.price)}</span>
            <span className="text-gray-400 text-sm">{vehicle.priceUnit}</span>
          </div>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-all hover:shadow-lg hover:shadow-orange-500/25 active:scale-95 flex items-center gap-1">
            Sewa <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Vehicles() {
  const [activeTab, setActiveTab] = useState<'car' | 'motor'>('car');

  const filteredVehicles = vehicles.filter((v) => v.category === activeTab);

  return (
    <section id="kendaraan" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block bg-orange-100 text-orange-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Pilihan Kendaraan
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Temukan <span className="text-gradient">Kendaraan Ideal</span> Anda
          </h2>
          <p className="text-gray-500 text-lg">
            Pilih dari koleksi mobil dan motor terbaik kami yang selalu dalam kondisi prima.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-gray-200 rounded-2xl p-1.5">
            <button
              onClick={() => setActiveTab('car')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'car'
                  ? 'bg-white text-gray-900 shadow-md'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              🚗 Mobil
            </button>
            <button
              onClick={() => setActiveTab('motor')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'motor'
                  ? 'bg-white text-gray-900 shadow-md'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              🏍️ Motor
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVehicles.map((vehicle, i) => (
            <VehicleCard key={`${activeTab}-${i}`} vehicle={vehicle} />
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-10">
          <button className="inline-flex items-center gap-2 bg-white border-2 border-gray-200 hover:border-orange-500 text-gray-700 hover:text-orange-600 px-8 py-3.5 rounded-xl font-semibold transition-all hover:shadow-lg active:scale-95">
            Lihat Semua Kendaraan <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
