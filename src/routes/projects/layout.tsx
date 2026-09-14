import { Slot, component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
      <main class="lg:col-span-8  prose prose-neutral mx-auto sm:m-0 w-full">
        <Slot />
      </main>
  );
});