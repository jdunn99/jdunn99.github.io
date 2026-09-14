import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Project from '../components/project'
import PROJECTS from '../projects'

export default component$(() => {
  return (
      <main class="lg:col-span-8 space-y-4">
        <div class="border-b border-neutral-200 pb-2">
          <h2 class="text-2xl tracking-tight text-neutral-900 ">Selected Projects</h2>
        </div>
        {PROJECTS.map((project) => (
          <Project {...project} key={project.title} />
        ))}
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
