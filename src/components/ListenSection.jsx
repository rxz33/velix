import { useRef, useState } from "react";
import { ArrowRight, Pause, Play } from "lucide-react";

export default function ListenSection() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleVideo = () => {
    if (!videoRef.current) return;

    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
      return;
    }

    videoRef.current.play();
    setPlaying(true);
  };

  return (
    <section className="listen-section">
      <div className="listen-shell">
        <div className="listen-card">
          <div className="listen-media">
            <video
              ref={videoRef}
              loop
              muted
              playsInline
              poster="https://cdn.prod.website-files.com/6934eb0f21f812d6aad9b413/6939114c95393219fba5c350_wave-anim-small_poster.0000000.jpg"
              className="listen-video"
            >
              <source
                src="https://cdn.prod.website-files.com/6934eb0f21f812d6aad9b413/6939114c95393219fba5c350_wave-anim-small_mp4.mp4"
                type="video/mp4"
              />
            </video>

            <div className="listen-video-overlay" />

            <button
              type="button"
              onClick={toggleVideo}
              className="listen-play-button"
              aria-label={playing ? "Pause audio preview" : "Play audio preview"}
            >
              {playing ? <Pause size={34} /> : <Play size={34} fill="currentColor" />}
            </button>
          </div>

          <div className="listen-copy">
            <h2>Listen to Velix</h2>
            <p>
              Velix delivers delightful and personalized conversations - always
              available, endlessly patient, and able to reason, predict, and act
              in real time.
            </p>

            <a href="#" className="listen-cta">
              <span>Get started</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
