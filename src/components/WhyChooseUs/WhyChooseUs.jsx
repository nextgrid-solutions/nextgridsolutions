const features = [
    {
      icon: "⚡", // Replace with actual icon or SVG
      title: "Innovative Solutions",
      description:
        "We stay ahead of industry trends to provide cutting-edge digital solutions.",
    },
    {
      icon: "✏️", // Replace with actual icon or SVG
      title: "Creative Excellence",
      description:
        "Our team of designers create visually stunning and functional experiences.",
    },
    {
      icon: "📊", // Replace with actual icon or SVG
      title: "Results-Driven",
      description:
        "We focus on delivering measurable outcomes that impact your bottom line.",
    },
  ];
  
  export default function WhyChooseUs() {
    return (
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Why Choose NextGrid Solutions
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          We combine technical expertise with creative vision to deliver solutions that drive results.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-gray-200 rounded-full p-4 text-2xl mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 max-w-xs">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  