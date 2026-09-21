import Link from "next/link";
import { ArrowLeft, Home, Calendar } from "lucide-react";

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20 text-center space-y-6">
      <div className="font-serif font-bold text-7xl text-teal-500">404</div>
      <h1 className="font-serif text-3xl font-bold text-navy-900">
        Page Not Found
      </h1>
      <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
        The page you are looking for might have been moved or updated. Let us guide you back to our dental services.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
        <Link
          href="/"
          className="px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-600 text-white font-semibold text-xs shadow-md transition-all flex items-center gap-2"
        >
          <Home className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Link>
        <Link
          href="/#book-appointment"
          className="px-6 py-3 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-semibold text-xs transition-all flex items-center gap-2"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Appointment</span>
        </Link>
      </div>
    </div>
  );
}
