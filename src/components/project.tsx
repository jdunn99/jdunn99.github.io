import { component$ } from "@builder.io/qwik";

interface ProjectProps {
	title: string;
	description: string;
	link?: string;
	github?: string;
	tools?: any[];
}

interface ProjectTagProps {
	title: string;
	icon?: any;
}

export const ProjectTag = component$(({ title, icon }: ProjectTagProps) => {
	return (
		<span class="inline-flex items-center gap-1 rounded border border-neutral-200 bg-neutral-100 px-2 py-1 text-xs font-medium text-neutral-700">
			{typeof icon !== "undefined" && icon}
			{title}
		</span>
	);
});

export default component$(
	({ title, description, link, tools, github }: ProjectProps) => {
		return (
			<article class="space-y-4 border-b border-neutral-200 pb-8">
				{typeof link !== "undefined" ? (
					<a class="text-lg text-neutral-900" href={`/projects/${link}`}>
						{title}
					</a>
				) : (
					<h3 class="text-lg text-neutral-900">{title}</h3>
				)}

				<div class="flex items-center gap-2 pt-2 text-xs">
					{typeof tools !== "undefined" &&
						tools.map((tool) => <ProjectTag key={tool.title} {...tool} />)}
				</div>
				<p class="leading-releaxed text-sm text-neutral-600">{description}</p>
				<div class="flex items-center gap-2">
					{typeof link !== "undefined" ? (
						<a
							href={`/projects/${link}`}
							class="rounded-lg bg-sky-800 p-1.5 text-sm text-white"
						>
							Read More
						</a>
					) : null}
					{typeof github !== "undefined" && (
						<a
							href={`https://github.com/jdunn99/${github}`}
							class="leading-releaxed inline-flex items-center gap-1 rounded-lg border border-neutral-300 bg-neutral-100 p-1.5 text-sm text-neutral-600"
							target="_blank"
						>
							View on GitHub{" "}
						</a>
					)}
				</div>
			</article>
		);
	},
);
