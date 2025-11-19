// components/AboutMe.tsx
"use client";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutMe() {
  const { t } = useLanguage();
  return (
    <section id="about" className="relative w-full min-h-screen flex items-center justify-center text-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{t("about.title")}</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("about.subtitle")}
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-card backdrop-blur-sm rounded-2xl p-8 border border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="h-2 w-20 bg-accent rounded"></div>
                <div className="h-2 w-28 bg-accent rounded"></div>
                <div className="h-2 w-24 bg-accent rounded"></div>
                <div className="h-2 w-32 bg-accent rounded"></div>
                <div className="h-2 w-16 bg-accent rounded"></div>
                <div className="h-2 w-24 bg-accent rounded"></div>
                <div className="h-2 w-28 bg-accent rounded"></div>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                {t("about.p1")}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t("about.p2")}
              </p>

              <div className="flex flex-wrap gap-3">
                {["React", "Next.js", "TypeScript", "Node.js", "Python", "Figma"].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full text-sm bg-accent border border-border text-accent-foreground hover:bg-accent transition">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-center relative">
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-xl overflow-hidden border border-border shadow-2xl">
                <Image src="/profile.jpeg" alt="UBER" width={320} height={320} className="object-cover w-full h-full" priority />
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute -right-6 top-6 w-24 h-24 rounded-full bg-accent blur-xl" />
                  <div className="absolute -right-10 bottom-6 w-28 h-28 rounded-full bg-accent/60 blur-2xl" />
                  <div className="absolute -right-16 bottom-24 w-20 h-20 rounded-full bg-accent/40 blur-2xl" />
                </div>
              </div>
              <div className="hidden md:flex flex-col items-center gap-2 font-black tracking-widest ml-6 select-none">
                <span className="text-6xl md:text-7xl lg:text-8xl text-muted-foreground/70">U</span>
                <span className="text-6xl md:text-7xl lg:text-8xl text-muted-foreground/70">B</span>
                <span className="text-6xl md:text-7xl lg:text-8xl text-muted-foreground/70">E</span>
                <span className="text-6xl md:text-7xl lg:text-8xl text-muted-foreground/70">R</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mt-10">
          <div className="bg-card backdrop-blur-sm p-4 rounded-lg border border-border">
            <div className="mx-auto mb-3 w-10 h-10 rounded-full bg-accent border border-border flex items-center justify-center">💻</div>
            <h3 className="font-bold text-lg mb-2 text-foreground">{t("about.feature.dev.title")}</h3>
            <p className="text-muted-foreground">{t("about.feature.dev.desc")}</p>
          </div>
          <div className="bg-card backdrop-blur-sm p-4 rounded-lg border border-border">
            <div className="mx-auto mb-3 w-10 h-10 rounded-full bg-accent border border-border flex items-center justify-center">🎨</div>
            <h3 className="font-bold text-lg mb-2 text-foreground">{t("about.feature.uiux.title")}</h3>
            <p className="text-muted-foreground">{t("about.feature.uiux.desc")}</p>
          </div>
          <div className="bg-card backdrop-blur-sm p-4 rounded-lg border border-border">
            <div className="mx-auto mb-3 w-10 h-10 rounded-full bg-accent border border-border flex items-center justify-center">✍️</div>
            <h3 className="font-bold text-lg mb-2 text-foreground">{t("about.feature.write.title")}</h3>
            <p className="text-muted-foreground">{t("about.feature.write.desc")}</p>
          </div>
          <div className="bg-card backdrop-blur-sm p-4 rounded-lg border border-border">
            <div className="mx-auto mb-3 w-10 h-10 rounded-full bg-accent border border-border flex items-center justify-center">🎵</div>
            <h3 className="font-bold text-lg mb-2 text-foreground">{t("about.feature.music.title")}</h3>
            <p className="text-muted-foreground">{t("about.feature.music.desc")}</p>
          </div>
          <div className="bg-card backdrop-blur-sm p-4 rounded-lg border border-border">
            <div className="mx-auto mb-3 w-10 h-10 rounded-full bg-accent border border-border flex items-center justify-center">🎓</div>
            <h3 className="font-bold text-lg mb-2 text-foreground">{t("about.feature.teacher.title")}</h3>
            <p className="text-muted-foreground">{t("about.feature.teacher.desc")}</p>
          </div>
          <div className="bg-card backdrop-blur-sm p-4 rounded-lg border border-border">
            <div className="mx-auto mb-3 w-10 h-10 rounded-full bg-accent border border-border flex items-center justify-center">🚀</div>
            <h3 className="font-bold text-lg mb-2 text-foreground">{t("about.feature.innovation.title")}</h3>
            <p className="text-muted-foreground">{t("about.feature.innovation.desc")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
