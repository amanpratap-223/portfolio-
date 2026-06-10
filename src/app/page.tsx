"use client";

import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import { Download } from "lucide-react";
import GithubCalendarWrapper from "@/components/github-calendar";

import { SplashScreen } from "@/components/splash-scrren";
import { ChevronLeft, ChevronRight } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;



export default function Page() {
  return (
    <>
      <SplashScreen />
      <main className="flex flex-col min-h-[100dvh] space-y-10">

        <section id="hero">
          <div className="mx-auto w-full max-w-2xl space-y-8">
            <div className="gap-2 flex justify-between">
              <div className="flex-col flex flex-1 space-y-1.5">
                <BlurFadeText
                  delay={BLUR_FADE_DELAY}
                  className="text-2xl font-bold tracking-tighter sm:text-4xl xl:text-5xl"
                  yOffset={8}
                  text={`Hi Aman here`}
                />
                <BlurFadeText
                  className="max-w-[600px] md:text-xl"
                  delay={BLUR_FADE_DELAY}
                  text={DATA.description}
                />
              </div>
              <BlurFade delay={BLUR_FADE_DELAY}>
                <Avatar className="size-28 border">
                  <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                  <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>
              </BlurFade>
            </div>
          </div>
        </section>


        <section id="about">
          {/* <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade> */}

          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold tracking-tight relative inline-block">
              About
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-primary/50 to-transparent"></span>
            </h2>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <Markdown className="prose max-w-full text-pretty font-sans text-lg text-muted-foreground dark:prose-invert mt-1">
              {DATA.summary}
            </Markdown>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="flex justify-end mt-4">
              <Link href={DATA.resumeUrl} target="_blank" rel="noopener noreferrer">

                <Button
                  variant="outline"
                  className="
    group relative
    gap-2
    px-1 py-3
    mt-5
    rounded-xl

    bg-zinc-900 text-white
    dark:bg-zinc-900

    border border-white/25
    shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]

    hover:bg-zinc-800
    hover:text-white
    dark:hover:bg-zinc-800
    hover:shadow-xl
    hover:scale-[1.02]
    active:scale-[0.98]
    transition-all duration-300
    overflow-hidden
  "
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                    className="w-4 h-4 relative z-10 group-hover:rotate-3 group-hover:scale-110 transition-transform duration-300"
                  >
                    <path d="M210.78,39.25l-130.25-23A16,16,0,0,0,62,29.23l-29.75,169a16,16,0,0,0,13,18.53l130.25,23h0a16,16,0,0,0,18.54-13l29.75-169A16,16,0,0,0,210.78,39.25ZM178.26,224h0L48,201,77.75,32,208,55ZM89.34,58.42a8,8,0,0,1,9.27-6.48l83,14.65a8,8,0,0,1-1.39,15.88,8.36,8.36,0,0,1-1.4-.12l-83-14.66A8,8,0,0,1,89.34,58.42ZM83.8,89.94a8,8,0,0,1,9.27-6.49l83,14.66A8,8,0,0,1,174.67,114a7.55,7.55,0,0,1-1.41-.13l-83-14.65A8,8,0,0,1,83.8,89.94Zm-5.55,31.51A8,8,0,0,1,87.52,115L129,122.29a8,8,0,0,1-1.38,15.88,8.27,8.27,0,0,1-1.4-.12l-41.5-7.33A8,8,0,0,1,78.25,121.45Z"></path>
                  </svg>
                  <span className="relative z-10 font-medium">Resume / CV</span>
                </Button>

              </Link>
            </div>
          </BlurFade>
        </section>


        {DATA.work.length > 0 && (
          <section id="work">
            <div className="flex min-h-0 flex-col gap-y-3">
              <BlurFade delay={BLUR_FADE_DELAY * 5}>
                <div className="relative inline-block">
                  <h2 className="text-xl font-bold tracking-tight">
                    Experience
                  </h2>
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-primary/50 to-transparent" />
                </div>
              </BlurFade>

              {DATA.work.map((work, id) => (
                <BlurFade
                  key={work.company}
                  delay={BLUR_FADE_DELAY * 6 + id * 0.05}
                >
                  <ResumeCard
                    key={work.company}
                    logoUrl={work.logoUrl}
                    altText={work.company}
                    title={work.company}
                    subtitle={work.title}
                    href={work.href}
                    badges={work.badges ?? []}
                    period={`${work.start} - ${work.end ?? "Present"}`}
                    description={work.description}
                  />
                </BlurFade>
              ))}
            </div>
          </section>
        )}


        {/* Achievements Section */}
        <section id="achievements">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <div className="relative inline-block">
                <h2 className="text-xl font-bold tracking-tight">
                  Achievements
                </h2>
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-primary/50 to-transparent" />
              </div>
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY * 7.5}>
              <div className="group relative rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm p-4 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                {/* Subtle gradient accent on hover */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-amber-500/5 via-yellow-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative flex items-start gap-4">
                  {/* Trophy icon */}
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-amber-400/20 to-yellow-500/20 border border-amber-400/30">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-amber-500">
                      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                      <path d="M4 22h16" />
                      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                    </svg>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <h3 className="font-semibold text-foreground leading-tight">
                        National Hackathon 2K25
                      </h3>
                      <span className="text-xs text-muted-foreground tabular-nums whitespace-nowrap">
                        Oct 2025
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      Shivalik College of Engineering, Dehradun
                    </p>
                    <div className="mt-2">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r from-amber-500/20 to-yellow-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                        Winner
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </BlurFade>
          </div>
        </section>



        {/* <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my projects
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section> */}

        <section id="projects">
          <div className="space-y-12 w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 11}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Check out my projects
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    I&apos;ve worked on a variety of projects, Here are a few of my
                    favorites.
                  </p>
                </div>
              </div>
            </BlurFade>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
              {DATA.projects.slice(0, 4).map((project, id) => (
                <BlurFade
                  key={project.title}
                  delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                >
                  <ProjectCard
                    href={project.href}
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    dates={project.dates}
                    tags={project.technologies}
                    image={project.image}
                    video={project.video}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </div>
            <BlurFade delay={BLUR_FADE_DELAY * 13}>
              <div className="flex justify-center mt-8">
                <Link href="/projects">
                  <Button
                    variant="outline"
                    className="group relative gap-2 px-1 py-1 rounded-xl bg-zinc-900 text-white dark:bg-zinc-900 border border-white/25 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] hover:bg-zinc-800 hover:text-white dark:hover:bg-zinc-800 transition-all duration-300 overflow-hidden hover:scale-[1.02] active:scale-[0.98] hover:shadow-xl"
                  >
                    {/* Animated gradient background on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Shine effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                    <ChevronLeft className="size-4 relative z-10 group-hover:-translate-x-1 transition-transform duration-300" />
                    <span className="relative z-10 font-medium">View All</span>
                    <ChevronRight className="size-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </div>
            </BlurFade>
          </div>
        </section>



        <section id="skills">
          <div className="flex min-h-0 flex-col gap-y-4">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <h2 className="text-xl font-bold tracking-tight relative inline-block">
                Skills
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-primary/50 to-transparent"></span>
              </h2>
            </BlurFade>
            <div className="flex flex-wrap gap-2">
              {DATA.skills.map((skill, id) => (
                <BlurFade key={skill.name} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                  <Badge
                    key={skill.name}
                    className="group flex items-center gap-2 px-2 py-1.5 transition-all duration-200
             hover:-translate-y-0.5 hover:shadow-md rounded-md border-border/50"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="size-3.5 transition-transform duration-200 group-hover:scale-110"
                    />
                    <span className="capitalize text-xs font-medium">
                      {skill.name}
                    </span>
                  </Badge>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>



        <section id="github">
          <div className="flex min-h-0 flex-col gap-y-3">
            {/* <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">GitHub</h2>
          </BlurFade> */}

            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <h2 className="text-xl font-bold tracking-tight relative inline-block">
                GitHub
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-primary/50 to-transparent"></span>
              </h2>
            </BlurFade>
            <div className="w-full overflow-x-auto pt-2 pb-6">
              <BlurFade delay={BLUR_FADE_DELAY * 10}>
                <GithubCalendarWrapper />

              </BlurFade>
            </div>
          </div>
        </section>


        <section id="education">
          <div className="flex min-h-0 flex-col gap-y-3">
            {/* <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade> */}

            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <h2 className="text-xl font-bold tracking-tight relative inline-block">
                Education
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-primary/50 to-transparent"></span>
              </h2>
            </BlurFade>

            {DATA.education.map((education, id) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 8 + id * 0.05}
              >
                <ResumeCard
                  key={education.school}
                  href={education.href}
                  logoUrl={education.logoUrl}
                  altText={education.school}
                  title={education.school}
                  subtitle={education.degree}
                  period={`${education.start} - ${education.end}`}
                />
              </BlurFade>
            ))}
          </div>
        </section>


        {/* {DATA.hackathons.length > 0 && (
        <section id="hackathons">
          <div className="space-y-12 w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 13}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                    Hackathons
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    I like building things
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    During my time in university, I attended{" "}
                    {DATA.hackathons.length}+ hackathons. People from around the
                    country would come together and build incredible things in 2-3
                    days. It was eye-opening to see the endless possibilities
                    brought to life by a group of motivated and passionate
                    individuals.
                  </p>
                </div>
              </div>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 14}>
              <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
                {/* {DATA.hackathons.map((project, id) => (
                  <BlurFade
                    key={project.title + project.dates}
                    delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                  >
                    <HackathonCard
                      title={project.title}
                      description={project.description}
                      location={project.location}
                      dates={project.dates}
                      image={project.image}
                      links={project.links}
                    />
                  </BlurFade>
                ))}
              </ul>
            </BlurFade>
          </div>
        </section>
      )} */}

        <section id="contact">
          <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 16}>
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  How to reach me
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Feel free to reach out via{" "}
                  <Link
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${DATA.contact.email}`}
                    className="text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    email
                  </Link>{" "}
                  and I&apos;ll respond whenever I can.
                </p>
              </div>
            </BlurFade>
          </div>
        </section>
      </main>
    </>
  );
}