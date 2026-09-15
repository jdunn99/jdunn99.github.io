import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Project from "../components/project";
import PROJECTS from "../projects";
import { BsEnvelopeFill, BsGithub,  BsLinkedin } from "@qwikest/icons/bootstrap";

export default component$(() => {
  return (
    <main class="space-y-4 lg:col-span-8">
      <div class="border-b border-neutral-200 pb-2">
        <h2 class="text-2xl tracking-tight text-neutral-900">
          Selected Projects
        </h2>
      </div>
      {PROJECTS.map((project) => (
        <Project {...project} key={project.title} />
      ))}
      <div class="space-y-2 border-b border-neutral-200 pb-2">
        <h2 class="text-2xl tracking-tight text-neutral-900">Get in Touch</h2>
        <p class="pb-2 text-sm leading-loose text-neutral-600">
          Feel free to reach out via email, message on LinkedIn, or review my
          work on GitHub.
        </p>
        <div class="flex flex-col gap-4 text-neutral-600 text-sm">
          <a href="https://github.com/jdunn99" target="_blank" class="inline-flex items-center gap-2">
            <span class="text-blue-900 text-lg">
              <BsGithub />
            </span>
            jdunn99
          </a>
          <a href="https://linkedin.com/in/jdunn99" target="_blank" class="inline-flex items-center gap-2">
            <span class="text-blue-900 text-lg">
              <BsLinkedin />
            </span>
            jdunn99
          </a>
          <a href="mailto:jackmdunn34@gmail.com" target="_blank" class="inline-flex items-center gap-2">
            <span class="text-blue-900 text-lg">
              <BsEnvelopeFill />
            </span>
            jackmdunn34@gmail.com
          </a>
        </div>
      </div>
    </main>
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
