import { component$ } from "@builder.io/qwik";
import { BsArrowRight } from "@qwikest/icons/bootstrap";

interface ProjectProps {
	title: string,
	description: string,
	link?: string,
	github?: string,
	tools?: any[]
}

interface ProjectTagProps {
	title: string	
	icon?: any
}

export const ProjectTag = component$(({title, icon, }: ProjectTagProps) => {

	return <span  class="inline-flex items-center gap-1 px-2 py-1 rounded bg-neutral-100 text-neutral-700 text-sm font-medium border border-neutral-200">
		{typeof icon !== "undefined" && icon}
		{title}
	</span>
})

export default component$(({title, description, link, tools, github}: ProjectProps) => {
	return (<article class="space-y-2 pb-4 border-b border-neutral-200">
          {typeof link !== "undefined" ? <a class="text-lg text-neutral-900 underline" href={`/projects/${link}`}>{title}</a> : <h3 class="text-lg text-neutral-900">{title}</h3>}

          <p class="text-sm leading-releaxed text-neutral-600">{description}</p>
          {typeof github !== "undefined" && <a href={`https://github.com/jdunn99/${github}`} class="text-sm leading-releaxed text-blue-600 inline-flex gap-1 items-center" target="_blank">View on GitHub <BsArrowRight /></a>}
          <div class="flex items-center gap-2 text-xs pt-2">
          	{typeof tools !== "undefined" && tools.map((tool) => (
          		<ProjectTag key={tool.title} {...tool} />
      		))}
      {/*    	{test.map((t) => (
      		))}
*/}            {/*TODO Component*/}
          </div>
        </article>)
})