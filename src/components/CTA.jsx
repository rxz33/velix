export default function CTA() {
  return (
    <section className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="border border-zinc-800 rounded-3xl p-12 md:p-20 text-center">
          
          <h2 className="text-4xl md:text-6xl font-semibold max-w-4xl mx-auto">
            Ready to bring more customers to your dealership?
          </h2>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            
            <a
              href="#"
              className="px-8 py-4 bg-white text-black rounded-full font-medium hover:scale-105 transition"
            >
              Book a demo
            </a>

            <a
              href="#"
              className="px-8 py-4 border border-zinc-700 rounded-full font-medium hover:bg-zinc-900 transition"
            >
              Talk to Velix
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}
