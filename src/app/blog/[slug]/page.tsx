import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, User, Calendar, ArrowRight, BookOpen, Share2 } from "lucide-react";
import { blogPostsData, servicesData, clinicConfig } from "@/data/clinicData";
import BookingForm from "@/components/BookingForm";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schema";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return blogPostsData.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPostsData.find((p) => p.slug === params.slug);
  if (!post) return {};

  return {
    title: `${post.title} | Align Dentofacial Clinic Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `https://aligndentofacial.in/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://aligndentofacial.in/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishDate,
      authors: [post.author.name],
    },
  };
}

export default function BlogArticlePage({ params }: Props) {
  const post = blogPostsData.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const articleSchema = generateArticleSchema(
    post.title,
    post.excerpt,
    `https://aligndentofacial.in/blog/${post.slug}`,
    post.publishDate,
    post.author.name
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://aligndentofacial.in" },
    { name: "Blog", url: "https://aligndentofacial.in/blog" },
    { name: post.title, url: `https://aligndentofacial.in/blog/${post.slug}` }
  ]);

  const relatedServices = servicesData.filter((s) =>
    post.relatedServiceSlugs.includes(s.slug)
  );

  return (
    <div className="w-full space-y-12 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Header Banner */}
      <section className="bg-navy-950 text-white pt-8 pb-16 rounded-b-[36px]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center space-x-2 text-xs text-slate-400 mb-6">
            <Link href="/" className="hover:text-teal-400">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-teal-400">Blog</Link>
            <span>/</span>
            <span className="text-teal-300 font-semibold truncate max-w-xs">{post.title}</span>
          </div>

          <span className="text-xs font-bold text-teal-400 uppercase tracking-widest block mb-2">
            {post.category}
          </span>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight mb-4">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 pt-2 border-t border-white/10">
            <div className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-teal-400" />
              <span>By {post.author.name} ({post.author.role})</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-teal-400" />
              <span>Published: {post.publishDate}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-teal-400" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Layout */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <article className="lg:col-span-8 space-y-8">
          
          {/* Table of Contents */}
          {post.toc.length > 0 && (
            <div className="bg-ivory p-6 rounded-2xl border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-navy-900 uppercase tracking-wider">
                <BookOpen className="w-4 h-4 text-teal-600" />
                <span>Table of Contents</span>
              </div>
              <ul className="space-y-1 text-xs text-slate-700 pl-6 list-disc">
                {post.toc.map((heading, i) => (
                  <li key={i}>{heading}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Article Excerpt Intro */}
          <p className="text-base text-navy-900 font-serif italic leading-relaxed bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            "{post.excerpt}"
          </p>

          {/* Content Blocks */}
          <div className="bg-white p-8 rounded-3xl shadow-soft border border-slate-100 space-y-6 text-sm text-slate-700 leading-relaxed font-sans">
            {post.contentBlocks.map((block, i) => (
              <div key={i} className="space-y-2">
                {block.heading && (
                  <h2 className="font-serif font-bold text-navy-900 text-xl pt-2">
                    {block.heading}
                  </h2>
                )}
                <p>{block.text}</p>
              </div>
            ))}
          </div>

          {/* Author Box */}
          <div className="bg-navy-900 text-white p-6 rounded-3xl shadow-elevated flex flex-col sm:flex-row items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-slate-950 text-slate-400 text-[10px] font-mono flex items-center justify-center shrink-0 border border-teal-500/40 text-center">
              [Dr. Jyoti Photo]
            </div>
            <div className="space-y-1 text-center sm:text-left">
              <div className="font-serif font-bold text-lg text-white">{post.author.name}</div>
              <div className="text-xs text-teal-300 font-semibold">{post.author.role}</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Lead specialist at Align Dentofacial Clinic, Noida. Dedicated to creating healthy, aligned smiles through evidence-based orthodontics and patient comfort.
              </p>
            </div>
          </div>

          {/* Related Services */}
          {relatedServices.length > 0 && (
            <div className="bg-white p-6 rounded-3xl shadow-soft border border-slate-100 space-y-4">
              <h3 className="font-serif font-bold text-navy-900 text-lg">
                Related Treatment Options
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {relatedServices.map((srv) => (
                  <Link
                    key={srv.id}
                    href={`/services/${srv.slug}`}
                    className="p-3.5 rounded-xl bg-teal-50 hover:bg-teal-100 border border-teal-200 text-navy-900 font-semibold flex items-center justify-between transition-colors"
                  >
                    <span>{srv.title}</span>
                    <ArrowRight className="w-4 h-4 text-teal-600" />
                  </Link>
                ))}
              </div>
            </div>
          )}

        </article>

        {/* Sidebar */}
        <div className="lg:col-span-4">
          <div className="sticky top-28">
            <BookingForm />
          </div>
        </div>
      </div>
    </div>
  );
}
