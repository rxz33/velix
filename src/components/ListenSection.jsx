import { useRef, useState } from "react";
import { Play, Pause, ArrowRight } from "lucide-react";

export default function ListenSection() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleVideo = () => {
    if (!videoRef.current) return;

    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }

    setPlaying(!playing);
  };

  return (
    <section className="bg-[#01050b] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div className="relative rounded-4xl overflow-hidden border border-white/10">

          {/* Video */}
          <div className="relative h-112.5 lg:h-150">

            <video
              ref={videoRef}
              loop
              muted
              playsInline
              poster="https://cdn.prod.website-files.com/6934eb0f21f812d6aad9b413/6939114c95393219fba5c350_wave-anim-small_poster.0000000.jpg"
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source
                src="https://cdn.prod.website-files.com/6934eb0f21f812d6aad9b413/6939114c95393219fba5c350_wave-anim-small_mp4.mp4"
                type="video/mp4"
              />
            </video>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(1,5,11,0.3)_50%,rgba(1,5,11,0.7)_70%,#01050b_100%)]" />

            {/* Play Button */}
            <button
              onClick={toggleVideo}
              className="absolute top-6 left-6 z-20 flex items-center justify-center w-14 h-14 rounded-full bg-white text-black hover:scale-105 transition"
            >
              {playing ? (
                <Pause size={22} />
              ) : (
                <Play size={22} fill="currentColor" />
              )}
            </button>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">

              <h2 className="text-white text-4xl md:text-5xl font-semibold mb-6">
                Listen to Velix
              </h2>

              <p className="max-w-2xl text-white/70 text-lg leading-relaxed mb-8">
                Velix delivers delightful and personalized conversations —
                always available, endlessly patient, and able to reason,
                predict, and act in real time.
              </p>

              <button className="group inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium">
                Get Started
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
