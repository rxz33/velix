export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top */}
        <div className="mb-16">
          <p className="font-semibold mb-6">As seen in</p>

          <div className="flex flex-wrap items-center gap-8 opacity-70">
            <span>TechCrunch</span>
            <span>Automotive News</span>
            <span>Dealership Guy</span>
          </div>
        </div>

        {/* Middle */}
        <div className="grid md:grid-cols-4 gap-10 mb-16">

          <div className="space-y-3">
            <a href="#">Privacy Policy</a>
            <a href="#" className="block">Terms of Service</a>
            <a href="#" className="block">Security</a>
          </div>

          <div className="space-y-3">
            <a href="#">Service</a>
            <a href="#" className="block">Sales</a>
            <a href="#" className="block">Blog</a>
            <a href="#" className="block">Case Studies</a>
          </div>

          <div className="space-y-3">
            <a href="#">Jobs</a>
            <a href="#" className="block">Login</a>
          </div>

          <div>
            <div className="border border-zinc-700 rounded-xl p-6 text-center">
              <p className="text-sm text-zinc-400">
                SOC 2 Certified
              </p>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-zinc-800 pt-8">

          <p className="text-sm text-zinc-500">
            © 2026 Velix Technologies Inc. All rights reserved.
          </p>

          <a
            href="#"
            className="mt-4 md:mt-0 text-zinc-400 hover:text-white"
          >
            LinkedIn
          </a>

        </div>

      </div>
    </footer>
  );
}
