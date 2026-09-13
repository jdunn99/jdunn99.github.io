import { component$ } from "@builder.io/qwik";
import Excel from './icons/Excel'
import Wix from './icons/Wix'

interface ProjectProps {
	title: string,
	description: string,
	link?: string,
	tools?: string[]
}

interface ProjectTagProps {
	title: string	
	icon?: any
}

const test = [{title: "Excel", icon: <Excel /> }, {
	title: "Wix", icon: <Wix />
}]

const ProjectTag = component$(({title, icon, }: ProjectTagProps) => {

	return <span  class="inline-flex items-center gap-1 px-2 py-1 rounded bg-neutral-100 text-neutral-700 font-medium border border-neutral-200">
		{typeof icon !== "undefined" && icon}
		{title}
	</span>
})

export default component$(({title, description, link, tools}: ProjectProps) => {
	return (<article class="space-y-2 pb-4 border-b border-neutral-200">
          <h3 class="text-lg text-neutral-900">{title}</h3>
          <p class="text-sm leading-releaxed text-neutral-600">{description}</p>
          {link && <a href="#" class="text-sm leading-releaxed text-blue-600" target="_blank">{link}</a>}

          <div class="flex items-center gap-2 text-xs pt-2">
          	{tools && tools.map((tool) => (
	            <span key={tool} class="inline-flex items-center gap-1 px-2 py-1 rounded bg-neutral-100 text-neutral-700 font-medium border border-neutral-200">
	              {tool}
	            </span>
      		))}
          	{test.map((t) => (
          		<ProjectTag key={t.title} {...t} />
      		))}
            {/*TODO Component*/}
          </div>
        </article>)
})