import { component$ } from "@builder.io/qwik";
import { BsGithub, BsLinkedin, BsEnvelopeFill } from '@qwikest/icons/bootstrap'


export default component$(() => {
	return <aside class="lg:col-span-4 lg:sticky lg:top-12 space-y-6">
        <div class="text-center lg:text-left">
        <a href="/" class="text-2xl lg:text-3xl font-bold tracking-tight text-black">Jack Dunn</a>

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
        <div class="space-y-4 text-sm leading-relaxed text-neutral-600 pb-8 lg:text-left text-center">
          <p>Aspiring actuary and freelance web developer with 3+ years of professional experience in web and software development.
            Bachelor's degree in mathematics from Southern New Hampshire University</p>
            <p>Passed  SOA Exams P and FM. Currently preparing for SOA Exam SRM.</p>
            <a href="/resume.pdf" target="_blank" class="text-lg text-blue-900">View my Resume</a>
        </div>
      </aside>
})
