import Image from "next/image";
import Contact from "@/components/contact";

export default function ContactPage() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-r from-indigo-700 to-purple-700">
        
        {/* Cosmic background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Cosmic.svg"
            alt=""
            fill
            priority
            className="object-cover opacity-40"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT TEXT */}
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-indigo-100 max-w-md">
              We’re here to help you. <br />
              Get in touch with us for any questions or support.
            </p>
          </div>

          {/* RIGHT GIRL IMAGE */}
          <div className="hidden lg:flex justify-end">
            <Image
              src="/girl.svg"
              alt="Customer support"
              width={420}
              height={520}
              priority
              className="object-contain"
            />
          </div>

        </div>
      </section>

      {/* FORM SECTION */}
      <section className="bg-[#f8f9fc] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <Contact />
        </div>
      </section>
    </main>
  );
}
