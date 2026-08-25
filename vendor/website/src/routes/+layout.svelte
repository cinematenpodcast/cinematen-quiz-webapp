<script lang="ts">
	import '@oddbird/popover-polyfill';
	import '@fontsource-variable/rubik';
	import '@fontsource/rubik-mono-one';

	import { onMount, type Snippet, untrack } from 'svelte';
	import { navigating, page } from '$app/state';
	import Loading from '$lib/feedback/Loading.svelte';

	let { children }: { children?: Snippet } = $props();

	let mounting = $state(true);
	let navigatingBoolean = $derived(navigating.type !== null);

	/**
	 * Starts a timer that will call the provided function after the specified milliseconds.
	 * Returns a function that can be called to clear the timer before it executes.
	 */
	const startTimer = (f: () => void, ms: number) => {
		let timer = setTimeout(f, ms);
		return () => {
			clearTimeout(timer);
		};
	};

	let longNavigating = $state(false);

	let stopTimer = $state(() => {
		// left empty for a reason
	});

	$effect(() => {
		if (navigatingBoolean) {
			untrack(() => {
				stopTimer = startTimer(() => {
					longNavigating = true;
				}, 100);
			});
		} else {
			untrack(() => {
				stopTimer();
				longNavigating = false;
			});
		}
	});

	onMount(() => {
		mounting = false;
		// load interestfor polyfill on the client
		import('interestfor');
	});
</script>

<svelte:head>
	<meta property="og:url" content={page.url.origin} />
</svelte:head>

{#if mounting || longNavigating}
	<Loading />
{:else}
	{@render children?.()}
{/if}

<style>
	/* Cinematen Cinematic Noir / Obsidian Blue — dark-only, canonical periwinkle tokens.
	   Source: Cinematen_Desing_system/tokens/colors.css. No light theme. */
	:root {
		/* surface */
		--surface: #0d1730;
		--on-surface: #e2e2e8;
		--surface-variant: #333539;
		--on-surface-variant: #c2c6d6;
		--outline: #8c909f;

		/* primary (periwinkle) */
		--primary: #adc6ff;
		--on-primary: #002e6a;
		--primary-container: #4d8eff;
		--on-primary-container: #00285d;

		/* secondary (neutral accent) */
		--secondary: #c6c6c7;
		--on-secondary: #2f3131;
		--secondary-container: #454747;
		--on-secondary-container: #b4b5b5;

		/* tertiary (neutral accent) */
		--tertiary: #c0c7d3;
		--on-tertiary: #2a313b;
		--tertiary-container: #8a919d;
		--on-tertiary-container: #232a34;

		/* fixed light/dark values (not theme-responsive) — text on colored/dark buttons */
		--palette-light: #e2e2e8;
		--palette-dark: #0a1128;

		/* Game results. Deliberately not green/red: that is the pair red-green colour
		   blindness collapses, and here colour is the only thing separating correct from
		   incorrect. These are the Okabe-Ito blue and vermillion, which stay distinct under
		   deuteranopia, protanopia and tritanopia. Unanswered stays neutral. */
		--correct: #0072b2;
		--incorrect: #d55e00;

		/* answer-button palette (8 colors, paired bg + deep) — Obsidian Blue mood,
		   spectrum retained for answer-distinguishability, no legacy accent colors used */
		--btn-bg-0: hsl(355, 70%, 40%);
		--btn-deep-0: hsl(355, 70%, 28%);
		--btn-bg-1: hsl(221, 70%, 40%);
		--btn-deep-1: hsl(221, 70%, 28%);
		--btn-bg-2: hsl(165, 55%, 28%);
		--btn-deep-2: hsl(165, 55%, 18%);
		--btn-bg-3: hsl(30, 70%, 42%);
		--btn-deep-3: hsl(30, 70%, 30%);
		--btn-bg-4: hsl(280, 55%, 38%);
		--btn-deep-4: hsl(280, 55%, 26%);
		--btn-bg-5: hsl(195, 60%, 32%);
		--btn-deep-5: hsl(195, 60%, 22%);
		--btn-bg-6: hsl(90, 45%, 35%);
		--btn-deep-6: hsl(90, 45%, 24%);
		--btn-bg-7: hsl(0, 0%, 22%);
		--btn-deep-7: hsl(0, 0%, 14%);

		color-scheme: dark;
	}

	:global(body) {
		font-family: var(--font-sans), sans-serif;
		--font-sans: 'Rubik Variable', 'Rubik', sans-serif;
		--font-display: 'Rubik Mono One', 'Rubik Variable', 'Rubik', sans-serif;
		--alternative-font: var(--font-sans);
		font-size: 16px;
		color: var(--on-surface);
	}

	:global(html) {
		background: var(--surface);
	}

	:global(.palette-0) {
		--btn-bg: var(--btn-bg-0);
		--btn-deep: var(--btn-deep-0);
	}
	:global(.palette-1) {
		--btn-bg: var(--btn-bg-1);
		--btn-deep: var(--btn-deep-1);
	}
	:global(.palette-2) {
		--btn-bg: var(--btn-bg-2);
		--btn-deep: var(--btn-deep-2);
	}
	:global(.palette-3) {
		--btn-bg: var(--btn-bg-3);
		--btn-deep: var(--btn-deep-3);
	}
	:global(.palette-4) {
		--btn-bg: var(--btn-bg-4);
		--btn-deep: var(--btn-deep-4);
	}
	:global(.palette-5) {
		--btn-bg: var(--btn-bg-5);
		--btn-deep: var(--btn-deep-5);
	}
	:global(.palette-6) {
		--btn-bg: var(--btn-bg-6);
		--btn-deep: var(--btn-deep-6);
	}
	:global(.palette-7) {
		--btn-bg: var(--btn-bg-7);
		--btn-deep: var(--btn-deep-7);
	}

	/* named (non-numbered) palettes for CTAs that aren't part of the 8-color answer set */
	:global(.palette-secondary) {
		--btn-bg: var(--secondary);
		--btn-deep: color-mix(in srgb, var(--secondary) 80%, black);
		--btn-fg: var(--on-secondary);
	}
	:global(.palette-tertiary) {
		--btn-bg: var(--tertiary);
		--btn-deep: color-mix(in srgb, var(--tertiary) 80%, black);
		--btn-fg: var(--on-tertiary);
	}
	:global(.palette-gitlab) {
		--btn-bg: #fc6d26;
		--btn-deep: #e24329;
		--btn-fg: #ffffff;
	}
	:global(.palette-slack) {
		--btn-bg: #4a154b;
		--btn-deep: #3a1039;
		--btn-fg: #ffffff;
	}
	:global(.palette-ghost) {
		--btn-bg: var(--surface);
		--btn-deep: currentcolor;
		--btn-fg: currentcolor;
	}

	:global([popover].fuiz-popover) {
		background-color: var(--surface);
		border: 1px solid var(--outline);
		border-radius: 0.7em;
		padding: 0.4em 0.7em;
		font-size: inherit;
		color: inherit;
		margin: 0;
		inset: auto;
		position-area: top;
		box-shadow:
			0 1px 2px color-mix(in srgb, var(--on-surface) 8%, transparent),
			0 4px 12px color-mix(in srgb, var(--on-surface) 12%, transparent);
	}
</style>
