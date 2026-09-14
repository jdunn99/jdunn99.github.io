import { Slot, component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
      <main class="lg:col-span-8 space-y-4 prose prose-neutral lg:!m-0 lg:max-w-none">
        <Slot />
      </main>
  );
});