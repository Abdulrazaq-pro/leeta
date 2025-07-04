import React from "react";

const Live = () => {
  // Image URLs for gas stations
  const stationImages = [
    "/images/gasstation3.jpg", // Total Gas
    "/images/gasstation1.jpg", // Mobil Gas
    "/images/gasstation2.jpg", // Mobil Gas
    "/images/gasstation4.jpg", // Mobil Gas
    "/images/gasstation5.jpg", // Mobil Gas
    "/images/gasstation6.jpg", // Mobil Gas
    // "https://images.unsplash.com/photo-1573662766191-066ba9570a4b?w=200&h=200&fit=crop", // Conoil Gas
    // "https://images.unsplash.com/photo-1606425271394-c3ca9aa1fc06?w=200&h=200&fit=crop", // Oando Gas
    // "https://images.unsplash.com/photo-1563506113742-3e48b8b0d7e0?w=200&h=200&fit=crop", // Petrocam Gas
    // "https://images.unsplash.com/photo-1606425271394-c3ca9aa1fc06?w=200&h=200&fit=crop", // Forte Oil
    // "https://images.unsplash.com/photo-1573662766191-066ba9570a4b?w=200&h=200&fit=crop", // NNPC Gas
  ];

  return (
    <div>
      {/* Hero Section - Dark Mode */}
      <section className="bg-[#0B1F30] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-2xl font-bold mb-4">Download the Leeta app</h3>
          
          {/* Numbered Steps - Light Mode */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { number: "01", title: "Create an account" },
              { number: "02", title: "Select gas type & quantity" },
              { number: "03", title: "Get fast delivery" }
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white text-[#0B1F30] rounded-xl p-6 flex items-start gap-4"
              >
                <div className="bg-[#FD671E] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                  {step.number}
                </div>
                <div>
                  <h4 className="font-bold">{step.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Light Mode */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Title - Dark Mode */}
          <div className="bg-[#0B1F30] text-white p-6 rounded-xl mb-8">
            <h3 className="text-2xl font-bold">Leeta has you covered</h3>
            <p className="mt-2 text-[#FD671E]">
              Need gas? Running low on cooking gas? Have a party coming up, or do you simply need reliable gas supply? 
              Download Leeta, and let's deliver safe, quality gas to your doorstep in minutes.
            </p>
          </div>

          {/* Live Orders - Light Mode */}
          <h3 className="text-2xl font-bold mb-8 text-[#0B1F30]">Live gas deliveries near you</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                status: "Driver picked up gas cylinder",
                time: "12m ago",
                description: "Your driver is on their way to deliver your gas cylinder safely",
              },
              {
                status: "Driver has arrived",
                time: "3m ago",
                description: "Your driver is at your location to deliver your gas cylinder",
              },
              {
                status: "Driver heading to gas station",
                time: "1m ago",
                description:
                  "A driver will pick up your gas cylinder from the station in less than 10 mins",
              },
            ].map((order, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-5 border-l-4 border-[#FD671E]"
              >
                <div className="flex justify-between items-start mb-3">
                  <span className="font-bold text-[#0B1F30]">{order.status}</span>
                  <span className="text-sm text-[#FD671E]">{order.time}</span>
                </div>
                <p className="text-[#0B1F30]/80 text-sm">{order.description}</p>
              </div>
            ))}
          </div>

          {/* Gas Stations - Light Mode */}
          <div className="mb-12">
            <h4 className="text-lg font-bold mb-4 text-[#0B1F30]">Gas Stations & Suppliers</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                "Total Gas - Bodija",
                "Mobil Gas Station",
                "Shell Gas - Oguntolu",
                "Conoil Gas - Ikeja",
                "Oando Gas Station",
                "Petrocam Gas Hub",
                // "Forte Oil - Egbeda",
                // "NNPC Gas - Yaba",
              ].map((station, index) => (
                <div
                  key={index}
                  className="bg-white border border-[#0B1F30]/10 rounded-lg p-4 text-center hover:border-[#FD671E] cursor-pointer transition-all"
                >
                  <div className="bg-[#0B1F30]/5 border-2 border-[#0B1F30]/10 rounded-xl w-16 h-16 mx-auto mb-2 overflow-hidden">
                    <img 
                      src={stationImages[index]} 
                      alt={station} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-sm font-medium text-[#0B1F30]">{station}</span>
                </div>
              ))}
            </div>
          </div>

          {/* About Leeta Section */}
          <div className="bg-gradient-to-r from-neutral-200 to-neutral-100 text-gray-900 p-8 rounded-xl mb-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <img 
                  src="/images/herologo.jpg" 
                  alt="Leeta gas delivery" 
                  className="rounded-lg w-full h-auto"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-3xl font-bold mb-4">About Leeta</h3>
                <p className="text-lg mb-6 text-[#FD671E]">
                  Safer and convenient way to order gas
                </p>
                <p className="text-gray-700/90 leading-relaxed">
                  Leeta makes it easy for customers to purchase gas anywhere and anytime from the convenience of homes or offices. 
                  Our platform connects you with trusted gas suppliers in your area, ensuring safe, reliable, and prompt delivery 
                  of quality gas cylinders right to your doorstep.
                </p>
              </div>
            </div>
          </div>

          {/* Map Section - Light Mode */}
          <div className="text-center">
            <p className="text-[#0B1F30]/80 mb-4">
              Click on any live location to order gas from suppliers near you
            </p>
            <div className="bg-[#0B1F30]/5 border-2 border-[#0B1F30]/10 rounded-xl w-full h-64 flex items-center justify-center text-[#0B1F30]/50 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop" 
                alt="Gas delivery map view" 
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Live;