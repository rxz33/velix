export default function Statement() {
  return (
    <section className="relative bg-white py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative text-center">
          {/* Blur Decorations */}
          <div className="absolute left-10 top-10 h-40 w-40 rounded-full bg-blue-200/30 blur-3xl" />
          <div className="absolute right-10 bottom-10 h-40 w-40 rounded-full bg-indigo-200/30 blur-3xl" />

          <div className="relative space-y-8">
            <p className="text-3xl font-medium leading-tight text-gray-900 md:text-5xl">
              Your best people know exactly how to turn an
              opportunity into an <strong>appointment</strong>.
              The problem is they can't be everywhere.
            </p>

            <p className="text-3xl font-medium leading-tight text-gray-900 md:text-5xl">
              Velix takes care of <strong>calls, SMS,</strong> and{" "}
              <strong>email</strong> before your team takes care
              of customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
