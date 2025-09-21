import React, { useState, useEffect } from 'react';

export default function AircoInstallatie() {
  const [selectedBrand, setSelectedBrand] = useState(null);

  const brands = [
    {
      id: 'mitsubishi',
      name: 'Mitsubishi',
      img: 'https://via.placeholder.com/600x400?text=Mitsubishi+Airco',
      price: '€1.600',
      description:
        'Bekend om uitstekende kwaliteit en duurzaamheid. Energiezuinig en stil in gebruik.'
    },
    {
      id: 'daikin',
      name: 'Daikin',
      img: 'https://via.placeholder.com/600x400?text=Daikin+Airco',
      price: '€1.550',
      description:
        'Daikin staat wereldwijd bekend om innovatie en betrouwbare airco’s met lange levensduur.'
    },
    {
      id: 'lg',
      name: 'LG',
      img: 'https://via.placeholder.com/600x400?text=LG+Airco',
      price: '€1.450',
      description:
        'Stijlvolle airco’s met slimme functies, eenvoudig te bedienen via app en energiezuinig.'
    }
  ];

  // close modal on Escape
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setSelectedBrand(null);
    }
    if (selectedBrand) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selectedBrand]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-blue-600 text-white py-6 shadow-lg">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Airco Installatie</h1>
          <nav className="space-x-6">
            <a href="#merken" className="hover:underline">Merken</a>
            <a href="#contact" className="hover:underline">Contact</a>
            <a href="#betaling" className="hover:underline">Betaling</a>
          </nav>
        </div>
      </header>

      {/* Hero sectie */}
      <section className="text-center py-16 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <h2 className="text-4xl font-extrabold mb-4">
          Complete airco + installatie nu tijdelijk <span className="text-yellow-200">€1500</span>!
        </h2>
        <p className="text-lg mb-6">
          Normale prijs: <span className="line-through">€2000</span>
        </p>
        <a href="#contact" className="inline-block">
          <button
            type="button"
            className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-2xl shadow-lg hover:bg-gray-200"
          >
            Vraag direct je offerte aan
          </button>
        </a>
      </section>

      {/* Merken */}
      <section id="merken" className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold text-center mb-12">Onze topmerken</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {brands.map((brand) => (
            <div
              key={brand.id}
              role="button"
              tabIndex={0}
              onClick={() => setSelectedBrand(brand)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setSelectedBrand(brand);
              }}
              className="bg-white rounded-2xl shadow-lg cursor-pointer overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <img
                src={brand.img}
                alt={`${brand.name} airco`}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-center">
                <h4 className="text-xl font-semibold mb-2">{brand.name}</h4>
                <p className="text-blue-600 font-bold">{brand.price}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-600 mt-4">Klik op een merk om meer informatie en de prijs te zien. Actieprijs geldt zolang de voorraad strekt.</p>
      </section>

      {/* Modal voor merkdetails */}
      {selectedBrand && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setSelectedBrand(null)}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="bg-white p-6 rounded-2xl max-w-lg w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end">
              <button
                aria-label="Sluiten"
                onClick={() => setSelectedBrand(null)}
                className="text-gray-500 hover:text-gray-800"
              >
                ✖
              </button>
            </div>

            <img
              src={selectedBrand.img}
              alt={`${selectedBrand.name} airco`}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />

            <h4 className="text-2xl font-bold mb-2">{selectedBrand.name}</h4>
            <p className="text-blue-600 font-bold text-xl mb-4">{selectedBrand.price}</p>
            <p className="text-gray-700 mb-6">{selectedBrand.description}</p>

            <div className="space-y-3">
              <a
                href={
                  'https://wa.me/31612345678?text=' +
                  encodeURIComponent(`Hallo CoolFix, ik wil meer info over ${selectedBrand.name} (actie).`)
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="w-full bg-green-500 text-white px-4 py-3 rounded-xl font-semibold hover:bg-green-600">
                  Contact via WhatsApp
                </button>
              </a>

              <a href="#contact">
                <button className="w-full border border-gray-300 px-4 py-3 rounded-xl">Vraag offerte (algemeen)</button>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Contact */}
      <section id="contact" className="bg-gray-100 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-6">Neem contact met ons op</h3>
          <p className="mb-4">Stuur ons eenvoudig een bericht via WhatsApp voor meer informatie of een afspraak.</p>
          <a href="https://wa.me/31612345678" target="_blank" rel="noopener noreferrer">
            <button className="bg-green-500 text-white px-6 py-3 rounded-2xl shadow-lg hover:bg-green-600">WhatsApp ons direct</button>
          </a>

          <div className="mt-8 text-left bg-white rounded-xl p-6 shadow">
            <h4 className="font-semibold mb-2">Voorwaarden betaling</h4>
            <ol className="list-decimal list-inside text-gray-700">
              <li>Aanbetaling 1/3 bij opdrachtbevestiging.</li>
              <li>Resterend bedrag na installatie en oplevering.</li>
              <li>Factuur ontvangt u per e-mail.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-8 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <p>&copy; {new Date().getFullYear()} Airco Installatie. Alle rechten voorbehouden.</p>
        </div>
      </footer>
    </div>
  );
}
