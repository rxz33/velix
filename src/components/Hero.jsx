import { ArrowRight, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#020817] text-white min-h-screen">
      <div className="absolute inset-0 bg-linear-to-br from-[#000911] via-[#081B40] to-[#002A8A]" />

      <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-20">
        <div className="flex flex-col items-center text-center">
          <a
            href="#"
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-sm"
          >
            <div className="h-2 w-2 rounded-full bg-green-400" />
            <span className="text-sm text-gray-300">
              Announcing our $6M seed round
            </span>
          </a>

          <h1 className="max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
            Bring more{" "}
            <span className="whitespace-nowrap">
              customers in
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg text-gray-300 md:text-xl">
            Use AI to answer customers any time,
            across any channel the way your best
            dealership employee would.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button className="flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-medium text-black">
              Book more appointments
              <ArrowRight size={18} />
            </button>

            <button className="flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 font-medium backdrop-blur-md">
              <Phone size={18} />
              Talk to Velix
            </button>
          </div>

          <div className="mt-20">
            <img
              src="https://cdn.prod.website-files.com/6934eb0f21f812d6aad9b413/693a4e14954a6fea2dd2c986_f34c2a3d798300aed269bd96f86cde39_Frame%20617.png"
              alt="Dashboard"
              className="mx-auto w-full max-w-6xl rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
