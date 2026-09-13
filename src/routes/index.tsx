import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Project from '../components/project'
import PROJECTS from '../projects'
import {BsLinkedin, BsGithub, BsEnvelopeFill} from '@qwikest/icons/bootstrap'

export default component$(() => {
  return (
    <>
      <aside class="lg:col-span-4 lg:sticky lg:top-12 space-y-6">
        <div class="text-center lg:text-left">
        <h1 class="text-2xl lg:text-3xl font-bold tracking-tight text-black">Jack Dunn</h1>

            <div class="flex items-center justify-center lg:justify-start gap-4 text-neutral-700 pt-2">
              <a href="https://github.com/jdunn99" target="_blank" class="text-lg">
                <BsGithub />
              </a>
              <a href="https://www.linkedin.com/in/jack-dunn-7548a920a/" target="_blank" class="text-lg">
                <BsLinkedin />
              </a>
              <a href="mailto:jackmdunn34@gmail.com" target="_blank" class="text-lg">
                <BsEnvelopeFill />
              </a>
            </div>
      </div>
        <div class="space-y-4 text-sm leading-relaxed text-neutral-600 pb-4 lg:text-left text-center">
          <p>Aspiring actuary and freelance web developer with 3+ years of professional experience in web and software development.
            Bachelor's degree in mathematics from Southern New Hampshire University</p>
            <p>Passed  SOA Exams P and FM. Currently preparing for SOA Exam SRM.</p>
          {/*<p>Something here</p>*/}

            <a href="#" class="text-lg text-blue-900">View my Resume</a>
        </div>
      </aside>
      <main class="lg:col-span-8 space-y-4">
        <div class="border-b border-neutral-200 pb-2">
          <h2 class="text-2xl tracking-tight text-neutral-900 ">Selected Projects</h2>
        </div>
        {PROJECTS.map((project) => (
          <Project {...project} key={project.title} />
        ))}
      </main>
    </>
  );
});

export const head: DocumentHead = {
  title: "Jack Dunn",
  meta: [
    {
      name: "description",
      content: "This is the portfolio for Jack Dunn",
    },
  ],
};
