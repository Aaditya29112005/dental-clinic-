import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, User, Sparkles, Video } from "lucide-react";
import { blogPostsData } from "@/data/clinicData";
import CustomVideoPlayer from "@/components/CustomVideoPlayer";

export const metadata: Metadata = {
  title: "Dental & Orthodontic Blog | Align Dentofacial Clinic Noida",
  description: "Read expert dental articles written by Dr. Jyoti Chauhan, MDS Orthodontist. Tips on braces, clear aligners, root canals, implants, and pediatric dental care.",
  alternates: {
    canonical: "https://aligndentofacial.in/blog",
  },
};

export default function BlogListingPage() {
  return (
    <div className="w-full space-y-16 pb-16">
      {/* Hero */}
      <section className="bg-navy-950 text-white pt-8 pb-16 rounded-b-[36px]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 text-xs text-slate-400 mb-6">
            <Link href="/" className="hover:text-teal-400">Home</Link>
            <span>/</span>
            <span className="text-teal-300 font-semibold">Blog</span>
          </div>

          <span className="text-xs font-bold text-teal-400 uppercase tracking-widest block mb-2">
            Oral Health Guides
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
            Orthodontic & Dental Insights
          </h1>
          <p className="text-sm text-slate-300 mt-2 max-w-xl mx-auto">
            Evidence-based advice on smile alignment, cavity prevention, endodontics, and pediatric oral health.
          </p>
        </div>
      </section>

      {/* Featured Educational Video Reels Section */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-gradient-to-br from-navy-900 to-slate-900 text-white p-8 md:p-10 rounded-3xl shadow-soft border border-slate-800 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-4">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-400 uppercase tracking-widest">
                <Video className="w-4 h-4" />
                Featured Video Guides
              </span>
              <h2 className="font-serif text-2xl font-bold text-white mt-1">
                Visual Dental Tips & Technology Highlights
              </h2>
            </div>
            <span className="text-xs text-slate-400 bg-slate-800/80 px-3 py-1 rounded-lg border border-slate-700">
              By Dr. Jyoti Chauhan
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <CustomVideoPlayer
                src="/videos/video-tech-highlight.mp4"
                poster="/images/advanced-dental-tech.jpg"
                title="Modern Dental Technology & Precision Care"
                subtitle="Understanding intraoral scanning and apex locators."
                badge="Tech Reel"
                aspectRatio="aspect-video"
              />
            </div>
            <div className="space-y-3">
              <CustomVideoPlayer
                src="/videos/video-smile-consultation.mp4"
                poster="/images/smile-transformation-care.jpg"
                title="What to Expect in Your First Smile Assessment"
                subtitle="Step-by-step patient evaluation guide."
                badge="Patient Guide"
                aspectRatio="aspect-video"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Article Grid */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPostsData.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-3xl p-6 shadow-soft border border-slate-100 flex flex-col justify-between hover:border-teal-500/40 transition-all group"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-semibold mb-3">
                <span className="text-teal-600 bg-teal-50 px-2.5 py-1 rounded-md">
                  {post.category}
                </span>
                <span className="text-slate-400 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </span>
              </div>

              <h2 className="font-serif font-bold text-navy-900 text-xl mb-3 group-hover:text-teal-600 transition-colors leading-snug">
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h2>

              <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-6">
                {post.excerpt}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-slate-500">
                <User className="w-3.5 h-3.5 text-teal-600" />
                <span>{post.author.name}</span>
              </div>

              <Link
                href={`/blog/${post.slug}`}
                className="font-semibold text-teal-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
              >
                <span>Read Article</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
