"use client";
import React from 'react';

interface Client {
  name: string;
  logo: string;
  website: string;
}

const clients: Client[] = [
  // Row 1 (6 logos)
  { name: 'TrBakingEquipments', logo: '/assets/tr-logo.webp', website: 'https://www.trbakingequipments.com/' },
  { name: 'AVTI', logo: '/assets/avti.webp', website: 'https://avti.in.net' },
  { name: 'DSRV', logo: '/assets/dsrv.png', website: 'https://www.dsrv.in/' },
  { name: 'Gallops', logo: '/assets/gallops.png', website: 'https://gallops.co.in/' },
//   { name: 'BNP Paribas', logo: '/logos/bnp-paribas.svg', website: 'https://india.bnpparibas.com/' },
//   { name: 'HDFC Bank', logo: '/logos/hdfc-bank.svg', website: 'https://www.hdfcbank.com/' },

  // Row 2 (5 logos)
 
];

const ClientsSection = () => {
  const handleClientClick = (website: string) => {
    window.open(website, '_blank');
  };

  // Adjusting client slicing based on the visual layout of the image (6-6-6 or similar rows)
  // Let's assume a 6-6-6 structure for now to match the image closely.
  const row1Clients = clients.slice(0, 6);
  const row2Clients = clients.slice(6, 12); // Assuming Jio is the 6th in this visual row
  const row3Clients = clients.slice(12, 18); // The remaining 6 clients

  return (
    <section id="clients" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Trusted by Industry Leaders around the globe
          </h2>
        </div>

        {/* First Row of Clients (6 columns on large screens) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 lg:gap-12 mb-8 w-full">
          {row1Clients.map((client, index) => (
            <div
              key={client.name}
              onClick={() => handleClientClick(client.website)}
              className="group cursor-pointer animate-fade-in flex items-center justify-center h-32"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-center transition-all duration-300 group-hover:bg-gray-100 group-hover:shadow-lg group-hover:scale-105 rounded-xl h-full w-full">
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="max-w-full max-h-full object-contain filter grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
              {/* Removed <p> tag for client name as it's not present in the image */}
            </div>
          ))}
        </div>

        {/* Second Row of Clients (6 columns on large screens) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 lg:gap-12 mb-8 w-full">
          {row2Clients.map((client, index) => (
            <div
              key={client.name}
              onClick={() => handleClientClick(client.website)}
              className="group cursor-pointer animate-fade-in flex items-center justify-center h-32"
              style={{ animationDelay: `${(row1Clients.length + index) * 0.1}s` }}
            >
              <div className="flex items-center justify-center transition-all duration-300 group-hover:bg-gray-100 group-hover:shadow-lg group-hover:scale-105 rounded-xl h-full w-full">
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="max-w-full max-h-full object-contain filter grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Third Row of Clients (6 columns on large screens) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 lg:gap-12 w-full">
          {row3Clients.map((client, index) => (
            <div
              key={client.name}
              onClick={() => handleClientClick(client.website)}
              className="group cursor-pointer animate-fade-in flex items-center justify-center h-32"
              style={{ animationDelay: `${(row1Clients.length + row2Clients.length + index) * 0.1}s` }}
            >
              <div className="flex items-center justify-center transition-all duration-300 group-hover:bg-gray-100 group-hover:shadow-lg group-hover:scale-105 rounded-xl h-full w-full">
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="max-w-full max-h-full object-contain filter grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Removed the 'Want to join our client family?' section as it's not in the image */}
      </div>
    </section>
  );
};

export default ClientsSection;