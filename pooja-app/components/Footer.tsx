export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p>© {new Date().getFullYear()} PujaGenie. All Rights Reserved.</p>
        <p className="text-sm mt-2">Made with ❤️ for peace, devotion & spirituality.</p>
      </div>
    </footer>
  );
}
