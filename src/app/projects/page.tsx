// import BlurFade from "@/components/magicui/blur-fade";
// import { ProjectCard } from "@/components/project-card";
// import { Button } from "@/components/ui/button";
// import { DATA } from "@/data/resume";
// import Link from "next/link";
// import { ArrowLeft } from "lucide-react";

// const BLUR_FADE_DELAY = 0.04;

// export default function ProjectsPage() {
//   return (
//     <main className="flex flex-col min-h-[100dvh] space-y-10 py-12">
//       <section id="projects">
//         <div className="space-y-12 w-full">
//           <BlurFade delay={BLUR_FADE_DELAY}>
//             <div className="flex flex-col items-center justify-center space-y-4 text-center">
//               <div className="space-y-2">
//                 <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
//                   All Projects
//                 </h2>
//                 <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//                 Showcasing my full range of work, from prototypes to advanced applications.
//                 </p>
//               </div>
//             </div>
//           </BlurFade>
//           <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
//             {DATA.projects.map((project, id) => (
//               <BlurFade
//                 key={project.title}
//                 delay={BLUR_FADE_DELAY * 2 + id * 0.05}
//               >
//                 <ProjectCard
//                   href={project.href}
//                   key={project.title}
//                   title={project.title}
//                   description={project.description}
//                   dates={project.dates}
//                   tags={project.technologies}
//                   image={project.image}
//                   video={project.video}
//                   links={project.links}
//                 />
//               </BlurFade>
//             ))}
//           </div>
//           <BlurFade delay={BLUR_FADE_DELAY * 2 + DATA.projects.length * 0.05}>
//             <div className="flex justify-center mt-8">
//               <Link href="/">
//                 <Button
//                   variant="outline"
//                   className="gap-2 px-6 py-3 rounded-xl bg-zinc-900 text-white dark:bg-zinc-900 border border-white/25 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] hover:bg-zinc-800 hover:text-white dark:hover:bg-zinc-800 transition-all"
//                 >
//                   <ArrowLeft className="size-4" />
//                   Back to Home
//                 </Button>
//               </Link>
//             </div>
//           </BlurFade>
//         </div>
//       </section>
//     </main>
//   );
// }



import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsPage() {
    return (
        <main className="flex flex-col min-h-[100dvh] space-y-10 py-12 relative">
            {/* Fixed Back to Home button in top right */}
            <BlurFade delay={BLUR_FADE_DELAY}>
                <div className="fixed top-2 left-4 z-50">
                    <Link href="/">
                        <Button
                            variant="ghost"
                            className="group relative gap-2 px-3 py-2 rounded-lg backdrop-blur-md bg-zinc-100/80 dark:bg-zinc-800/80 border border-border/50 shadow-lg hover:shadow-xl hover:bg-zinc-200/90 dark:hover:bg-zinc-700/90 transition-all duration-300 overflow-hidden hover:scale-[1.02] active:scale-[0.98]"
                        >
                            {/* Animated gradient background on hover */}
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Shine effect */}
                            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                            <ArrowLeft className="size-4 relative z-10 group-hover:animate-pulse group-hover:-translate-x-1 transition-transform duration-300" />
                            <span className="hidden sm:inline relative z-10 font-medium">Home</span>
                        </Button>
                    </Link>
                </div>
            </BlurFade>

            <section id="projects">
                <div className="space-y-12 w-full">
                    <BlurFade delay={BLUR_FADE_DELAY}>
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                    All Projects
                                </h2>
                                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Showcasing my full range of work, from prototypes to advanced applications.
                                </p>
                            </div>
                        </div>
                    </BlurFade>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
                        {DATA.projects.map((project, id) => (
                            <BlurFade
                                key={project.title}
                                delay={BLUR_FADE_DELAY * 2 + id * 0.05}
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
                    <BlurFade delay={BLUR_FADE_DELAY * 2 + DATA.projects.length * 0.05}>
                        <div className="flex justify-center mt-8">
                            <Link href="/">
                                {/* <Button
                  variant="outline"
                  className="gap-2 px-6 py-3 rounded-xl bg-zinc-900 text-white dark:bg-zinc-900 border border-white/25 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] hover:bg-zinc-800 hover:text-white dark:hover:bg-zinc-800 transition-all"
                >
                  <ArrowLeft className="size-4" />
                  Back to Home
                </Button> */}
                                <Button
                                    variant="outline"
                                    className="group relative gap-2 px-3 py-3 rounded-xl bg-zinc-900 text-white dark:bg-zinc-900 border border-white/25 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] hover:bg-zinc-800 hover:text-white dark:hover:bg-zinc-800 transition-all duration-300 overflow-hidden hover:scale-[1.02] active:scale-[0.98] hover:shadow-xl"
                                >
                                    {/* Animated gradient background on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    {/* Shine effect */}
                                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                                    <ArrowLeft className="size-4 relative z-10 group-hover:-translate-x-1 transition-transform duration-300" />
                                    <span className="relative z-10 font-medium">Home</span>
                                </Button>
                            </Link>
                        </div>
                    </BlurFade>
                </div>
            </section>
        </main>
    );
}



