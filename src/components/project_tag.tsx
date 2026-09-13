import { component$ } from '@builder.io/qwik'

interface ProjectTagProps {
	title: string	
	icon?: string
	href?: string
}

export default component$(({title, icon, href="#"}: ProjectTagProps) => {
	return <a href={href} class="inline-flex items-center gap-1 px-2 py-1 rounded bg-neutral-100 text-neutral-700 font-medium border border-neutral-200">
		{typeof icon !== "undefined" && icon}
		{title}
	</a>
})