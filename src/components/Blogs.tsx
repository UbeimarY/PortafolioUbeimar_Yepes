// components/Blogs.tsx
"use client";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Blogs() {
  const { t } = useLanguage();

  const posts = [
    {
      title: t("blogs.post1.title"),
      date: t("blogs.post1.date"),
      readTime: t("blogs.post1.readTime"),
      tags: [t("blogs.post1.tag1"), t("blogs.post1.tag2")],
      excerpt: t("blogs.post1.excerpt"),
      image: "/react18.png",
      url: "https://medium.com/@ubeimarlyepes/el-futuro-del-desarrollo-frontend-con-react-18-f3c508e8bec3",
    },
    {
      title: t("blogs.post2.title"),
      date: t("blogs.post2.date"),
      readTime: t("blogs.post2.readTime"),
      tags: [t("blogs.post2.tag1"), t("blogs.post2.tag2")],
      excerpt: t("blogs.post2.excerpt"),
      image: "/blog2.png",
      url: "https://medium.com/@ubeimarlyepes/typescript-mejores-pr%C3%A1cticas-para-proyectos-grandes-d3d345ba1ec9",
    },
    {
      title: t("blogs.post3.title"),
      date: t("blogs.post3.date"),
      readTime: t("blogs.post3.readTime"),
      tags: [t("blogs.post3.tag1"), t("blogs.post3.tag2"), t("blogs.post3.tag3")],
      excerpt: t("blogs.post3.excerpt"),
      image: "/blog3.png",
      url: "https://medium.com/@ubeimarlyepes/microservicios-con-node-js-y-docker-una-arquitectura-escalable-para-el-mundo-moderno-1806a8c6cfa9",
    },
    {
      title: t("blogs.post4.title"),
      date: t("blogs.post4.date"),
      readTime: t("blogs.post4.readTime"),
      tags: [t("blogs.post4.tag1"), t("blogs.post4.tag2")],
      excerpt: t("blogs.post4.excerpt"),
      image: "/blog4.png",
      url: "https://design-systems.hashnode.dev/design-systems-de-la-teoria-a-la-practica",
    },
  ];

  return (
    <section id="blog" className="relative w-full min-h-screen flex items-center justify-center text-foreground py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold">{t("blogs.title")}</h2>
          <p className="text-muted-foreground mt-2">{t("blogs.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article key={p.title} className="bg-card backdrop-blur-sm rounded-2xl border border-border overflow-hidden">
              <div className="relative h-40">
                <Image src={p.image} alt={p.title} fill className="object-cover" />
              </div>
              <div className="p-6 space-y-3">
                <div className="text-xs text-muted-foreground flex items-center gap-3">
                  <span>📅 {p.date}</span>
                  <span>⏱ {p.readTime}</span>
                </div>
                <h3 className="text-lg font-bold">{p.title}</h3>
                <p className="text-muted-foreground text-sm">{p.excerpt}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full text-xs bg-accent border border-border text-accent-foreground">
                      {t}
                    </span>
                  ))}
                </div>
                <a href={p.url} className="inline-block text-sm px-3 py-2 rounded-lg bg-accent border border-border hover:bg-accent transition">
                  {t("blogs.read")}
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <div className="inline-flex gap-3">
            <a href="#" className="text-sm px-4 py-2 rounded-lg bg-accent border border-border hover:bg-accent transition">
              {t("blogs.newsletter")}
            </a>
            <a href="#" className="text-sm px-4 py-2 rounded-lg bg-card border border-border hover:bg-accent transition">
              {t("blogs.viewAll")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}