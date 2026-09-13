import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <aside class="lg:col-span-4 lg:sticky lg:top-12 space-y-6">
        <h1 class="text-2xl lg:text-3xl font-bold tracking-tight text-black">Jack Dunn</h1>
        <div class="space-y-4 text-sm leading-relaxed text-neutral-600">
          <p>Freelance web developer with 3+ years of professional experience in web and software development.
            Bachelor's degree in mathematics from Southern New Hampshire University</p>
          {/*<p>Something here</p>*/}

          <div class="flex items-center gap-4">
            <a href="#">GH</a>
            <a href="#">LI</a>
          </div>
        </div>
      </aside>
      <main class="lg:col-span-8 space-y-4">
        <div class="border-b border-neutral-200 pb-2">
          <h2 class="text-2xl tracking-tight text-neutral-900 ">Selected Projects</h2>
          {/*TODO: Convert to component*/}
        </div>
        <article class="space-y-2 pb-4 border-b border-neutral-200">
          <h3 class="text-lg text-neutral-900">Data Encrpytion Standard (DES) in Excel VBA</h3>
          <p class="text-sm leading-releaxed text-neutral-600">Project description</p>
          <a href="#" class="text-sm leading-releaxed text-blue-600" target="_blank">GitHub</a>

          <div class="flex items-center gap-2 text-xs pt-2">
            {/*TODO Component*/}
            <span class="inline-flex items-center gap-1 px-2 py-1 rounded bg-neutral-100 text-neutral-700 font-medium border border-neutral-200">
              Excel
            </span>
          </div>
        </article>
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
