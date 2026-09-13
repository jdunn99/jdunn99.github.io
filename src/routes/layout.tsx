import { component$, Slot } from '@builder.io/qwik'

export default component$(() => {
	return (
		<>
			<div class="max-w-7xl mx-auto px-6 py-12 lg:p-16 font-serif">
				<div class="grid grid-cols-1 lg:grid-cols-12 lg:gap-16 items-start">
					<Slot />	
				</div>
			</div>
		</>
	)
})