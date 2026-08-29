<script lang="ts">
	import type { Snippet } from 'svelte';
	import camera from '$lib/assets/icons/camera.svg';
	import filmReel from '$lib/assets/icons/film-reel.svg';
	import popcorn from '$lib/assets/icons/popcorn.svg';
	import ticket from '$lib/assets/icons/ticket.svg';
	import * as m from '$lib/paraglide/messages.js';

	let { children }: { children?: Snippet } = $props();
</script>

<div class="root">
	<div class="backdrop">
		<div class="pattern">
			<div class="card-container film-reel">
				<img src={filmReel} alt={m.film_reel()} />
			</div>
			<div class="card-container popcorn">
				<img src={popcorn} alt={m.popcorn()} />
			</div>
			<div class="card-container ticket">
				<img src={ticket} alt={m.ticket()} />
			</div>
			<div class="card-container camera">
				<img src={camera} alt={m.camera()} />
			</div>
		</div>
	</div>
	<div class="content">
		{@render children?.()}
	</div>
</div>

<style>
	.root {
		height: 100%;
		position: relative;
	}

	.backdrop {
		background-color: var(--surface);
		inset: 0;
		position: absolute;
		overflow: hidden;
		z-index: -1;
	}

	.pattern {
		display: flex;
		flex-wrap: wrap;
		opacity: 4%;
		height: 100%;
		width: 100%;
	}

	.content {
		height: 100%;
	}

	.card-container {
		height: 50%;
		width: 50%;
	}

	.card-container img {
		height: 100%;
		width: 100%;
	}

	.film-reel {
		transform: scale(1) translate(0%, 0%) rotate(0.0625turn);
	}

	.popcorn {
		transform: scale(1) translate(0%, -25%) rotate(-0.0625turn);
	}

	.ticket {
		transform: scale(1) translate(-25%, 12.5%) rotate(-0.0625turn);
	}

	.camera {
		transform: scale(1) translate(12.5%, -25%) rotate(0.0625turn);
	}
</style>
