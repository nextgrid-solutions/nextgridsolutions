// app/about/page.js

export const metadata = {
    title: "About Us | NextGrid Solutions",
    description: "Learn about what we do, how we do it, and our mission at NextGrid Solutions.",
    keywords: ["NextGrid Solutions", "About Us", "Digital Solutions", "Innovation", "Creative Design"],
    openGraph: {
      title: "About Us | NextGrid Solutions",
      description: "Discover how NextGrid Solutions delivers cutting-edge, creative, and results-driven digital experiences.",
      url: "https://yourdomain.com/about",
      siteName: "NextGrid Solutions",
      locale: "en_US",
      type: "website",
    },
  };
  
  export default function AboutPage() {
    return (
      <main className="py-16 px-6 max-w-5xl mx-auto text-gray-800 mt-14">
        <h1 className="text-4xl font-bold mb-6 text-center">About NextGrid Solutions</h1>
  
        {/* What We Do */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">What We Do</h2>
          <p className="text-lg leading-relaxed">
            At NextGrid Solutions, we specialize in delivering cutting-edge digital experiences. From product design to
            scalable web applications, we help businesses transform ideas into impactful digital solutions. Whether you're
            a startup or an enterprise, we tailor our services to your unique goals.
          </p>
        </section>
  
        {/* How We Do It */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">How We Do It</h2>
          <p className="text-lg leading-relaxed">
            Our process combines technical precision with creative strategy. We begin with discovery, dive into design, and
            follow through with full-stack development. By collaborating closely with clients, we ensure every solution is
            both functional and beautiful.
          </p>
        </section>
  
        {/* Our Mission */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            Our mission is to empower organizations through technology. We strive to innovate, design with purpose, and
            deliver results that drive growth and long-term success. Excellence, transparency, and impact are at the heart
            of everything we do.
          </p>
        </section>
      </main>
    );
  }
  