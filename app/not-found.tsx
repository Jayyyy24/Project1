export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-b from-mint-50 to-blush-50">
      <span className="text-8xl mb-6">🥟</span>
      <h1 className="font-bubble text-5xl font-black text-mint-950 mb-3">404</h1>
      <p className="font-bubble text-2xl font-bold text-blush-500 mb-2">Oops! Page not found.</p>
      <p className="font-sans text-base text-mint-900/70 mb-8">Looks like this momo ran away! Let&apos;s go back home.</p>
      <a href="/" className="bg-blush-500 hover:bg-blush-600 text-white font-bubble font-bold px-8 py-3 rounded-full shadow-cute-pink transition-all">
        Back to JASHU MOMOS 💚
      </a>
    </div>
  );
}
