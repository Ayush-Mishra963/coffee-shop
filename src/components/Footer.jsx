export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-6 py-10 md:px-10">
      <div className="flex flex-col items-start justify-between gap-4 border-t border-espresso-lighter pt-8 font-body text-xs text-bone-muted sm:flex-row sm:items-center">
        <span>© {new Date().getFullYear()} Hearth Coffee Roasters</span>
        <span>Riverside</span>
      </div>
    </footer>
  );
}
