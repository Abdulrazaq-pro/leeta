import { ArrowRight } from "lucide-react";
import React from "react";

const Blog = () => {
  return (
    <div>
      {/* <section className="py-16 bg-[#0B1F30]/5"> */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-2xl font-bold mb-8 text-[#0B1F30]">
            Latest from Leeta
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "LEETA EXPANDS TO LAGOS MAINLAND - NEW DEPOTS AVAILABLE",
                description:
                  "After months of preparation and safety checks, we're excited to bring our reliable gas delivery service to Lagos Mainland with 5 new depots!",
                cta: "Read More",
                image: "/images/blog1.jpg",
              },
              {
                title: "SAFETY FIRST - OUR NEW SMART CYLINDER TECHNOLOGY",
                description:
                  "Leeta introduces smart gas cylinders with built-in safety features including leak detection and automatic shut-off for your peace of mind.",
                cta: "Read More",
                image: "/images/blog2.jpg",
              },
              {
                title: "LEETA'S COMMITMENT TO CLEAN ENERGY IN AFRICA",
                description:
                  "How we're partnering with local communities to promote clean cooking solutions and reduce environmental impact across Nigeria.",
                cta: "Read More",
                image: "/images/blog3.jpg",
              },
            ].map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-lg mb-2 text-[#0B1F30]">
                    {post.title}
                  </h4>
                  <p className="text-[#0B1F30]/80 mb-4">{post.description}</p>
                  <button className="flex items-center text-[#FD671E] font-bold hover:text-[#0B1F30] transition-colors">
                    {post.cta} <ArrowRight className="ml-1" size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
