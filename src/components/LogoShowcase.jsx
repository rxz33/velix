const logos = [
  "https://cdn.prod.website-files.com/6934eb0f21f812d6aad9b413/693507e7d8acbe3f7e62f920_logo-freeman-motors.jpg",
  "https://cdn.prod.website-files.com/6934eb0f21f812d6aad9b413/69f34f64b2908cbc3d5e3529_cardinale-automotive-group-full.png",
  "https://cdn.prod.website-files.com/6934eb0f21f812d6aad9b413/693507e7eb640c186ed3b3f8_logo-alpine.jpg",
  "https://cdn.prod.website-files.com/6934eb0f21f812d6aad9b413/693507e77d8e4e94a2b5d569_088835a28bb6d33aa2d3594ba62df7fc_logo-findlay.jpg",
  "https://cdn.prod.website-files.com/6934eb0f21f812d6aad9b413/697703eb0ba322bf31e4d45e_56de761653b0e88239dbbcc8396cf9d8_price-family-dealerships.jpg",
  "https://cdn.prod.website-files.com/6934eb0f21f812d6aad9b413/693507e7839c1e8218f88bbd_logo-fifthwave.jpg",
  "https://cdn.prod.website-files.com/6934eb0f21f812d6aad9b413/693507e7f615ee91fa704a83_logo-trophy.jpg",
];

export default function LogoShowcase() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl">
        <h3 className="mb-12 text-center text-lg font-semibold text-gray-800">
          Join leading dealers at the forefront of customer communication
        </h3>

        <div className="relative overflow-hidden">
          <div className="flex w-max animate-marquee gap-20">
            {[...logos, ...logos].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt="logo"
                className="h-12 w-auto object-contain"
              />
            ))}
          </div>

          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-linear-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-linear--to-l from-white to-transparent" />
        </div>
      </div>
    </section>
  );
}
