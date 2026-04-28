import React from "react";

export default function WeddingWebsite() {
  const PASSWORD = "MV091926";
  const [entered, setEntered] = React.useState("");
  const [unlocked, setUnlocked] = React.useState(false);

  const sections = [
    { id: 'our-story', title: 'Our Story' },
    { id: 'details', title: 'Wedding Details' },
    { id: 'travel', title: 'Travel & Stay' },
    { id: 'guide', title: 'Island Guide' },
    { id: 'rsvp', title: 'RSVP' },
    { id: 'faq', title: 'FAQ' },
  ];

  if (!unlocked) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 font-serif">
        <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-200 text-center max-w-md w-full">
          <h1 className="text-3xl font-light mb-4">Private Wedding Website</h1>
          <p className="text-slate-600 mb-6">Please enter the password to continue.</p>
          <input
            type="password"
            value={entered}
            onChange={(e) => setEntered(e.target.value)}
            className="w-full border border-slate-300 rounded-xl px-4 py-3 mb-4"
            placeholder="Password"
          />
          <button
            onClick={() => setUnlocked(entered === PASSWORD)}
            className="w-full bg-slate-900 text-white py-3 rounded-xl uppercase tracking-wide text-sm"
          >
            Enter
          </button>
          {entered && entered !== PASSWORD && (
            <p className="text-red-500 mt-4 text-sm">Incorrect password</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-800 font-serif">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="tracking-[0.35em] uppercase text-sm text-slate-700">
            September 19, 2026
          </div>
          <div className="hidden md:flex gap-8 text-sm tracking-wide">
            {sections.map((section) => (
              <a key={section.id} href={`#${section.id}`} className="hover:text-slate-500">
                {section.title}
              </a>
            ))}
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl font-light">
          Benjamin William Salzman & Sarah Elizabeth Black
        </h1>
        <p className="mt-6 text-lg text-slate-700">
          Martha's Vineyard • Black Tie Optional • Navy & Ivory
        </p>
      </section>

      {/* Travel */}
      <section id="travel" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-light text-center mb-10">Getting to Martha's Vineyard</h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-3xl border">
            <h3 className="text-2xl mb-4">Ferry Options</h3>
            <p className="mb-4">
              Book early—especially if bringing a car, as ferry vehicle spots sell out well in advance.
            </p>

            <p className="font-semibold">Steamship Authority Ferry</p>
            <p>Woods Hole → Vineyard Haven</p>
            <a className="text-blue-600 underline" href="https://www.steamshipauthority.com" target="_blank" rel="noopener noreferrer">
              steamshipauthority.com
            </a>

            <p className="mt-4 font-semibold">High-Speed Ferry (Fastest)</p>
            <p>Woods Hole → Oak Bluffs / Vineyard Haven</p>
            <a className="text-blue-600 underline" href="https://www.hylinecruises.com" target="_blank" rel="noopener noreferrer">
              hylinecruises.com
            </a>
          </div>

          <div className="bg-white p-8 rounded-3xl border">
            <h3 className="text-2xl mb-4">Airports</h3>
            <p><strong>MVY</strong> — on-island airport</p>
            <p><strong>BOS</strong> — ~2.5–3 hrs to ferry</p>
            <p><strong>PVD</strong> — ~2 hrs to ferry</p>
          </div>
        </div>
      </section>

      {/* Island Guide */}
      <section id="guide" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-light text-center mb-10">Island Guide</h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-3xl border">
            <h3 className="text-xl mb-4">Edgartown Favorites</h3>
            <ul className="space-y-2 text-slate-700">
              <li>The Port Hunter — seafood & cocktails</li>
              <li>Alchemy — upscale seasonal dining</li>
              <li>Bettini — waterfront fine dining</li>
              <li>Espresso Love — coffee & breakfast</li>
              <li>Behind the Bookstore — cozy café</li>
              <li>Rosewater Market — café & market</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-3xl border">
            <h3 className="text-xl mb-4">Oak Bluffs Favorites</h3>
            <ul className="space-y-2 text-slate-700">
              <li>Nancy's — waterfront dining</li>
              <li>Offshore Ale — brewery & pub</li>
              <li>The Lookout — sunset cocktails</li>
              <li>Mocha Mott's — coffee staple</li>
              <li>Toccopuro Coffee — espresso bar</li>
              <li>The Ritz Café — live music bar</li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="text-center py-10 text-sm text-slate-500">
        September 19, 2026 • Martha's Vineyard
      </footer>
    </div>
  );
}

// Simple test utilities
export const __test__ = {
  validatePassword: (input) => input === "MV091926"
};
