// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-600 text-white flex flex-col items-center">
      {/* Header */}
      <header className="w-full p-6 flex justify-between items-center max-w-5xl bg-blue-800">
        <h1 className="text-2xl font-bold">Misfit</h1>
        <nav className="space-x-4">
          <Link href="/essays" className="hover:underline">Essays</Link>
          <Link href="/videos" className="hover:underline">Videos</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="text-center p-8 flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-4">Welcome to Misfit!</h2>
        <p className="text-xl mb-6 max-w-2xl">
          A home for athletes and fitness lovers. Unlock your full potential with motivation, training, knowledge, and connection.
        </p>
        <p className="text-lg mb-6 max-w-xl">
          Get stronger, faster, and more focused. Let’s push limits together. 💪🔥
        </p>
        <Link
          href="/essays"
          className="px-6 py-3 bg-yellow-400 text-black rounded-lg font-semibold hover:bg-yellow-300 transition"
        >
          Get Started
        </Link>
      </main>

      {/* Images */}
      <section className="flex gap-6 mt-12">
        <img
          src="https://via.placeholder.com/150"
          alt="Fitness"
          className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
        />
        <img
          src="https://via.placeholder.com/150"
          alt="Motivation"
          className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
        />
      </section>
    </div>
  );
}
