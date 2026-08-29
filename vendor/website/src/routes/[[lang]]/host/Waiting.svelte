<script lang="ts">
	import { getContext } from 'svelte';
	import { env } from '$env/dynamic/public';
	import PlayersList from '$lib/game/PlayersList.svelte';
	import QrCode from '$lib/game/QRCode.svelte';
	import TeamsList from '$lib/game/TeamsList.svelte';
	import Fullscreen from '$lib/layout/Fullscreen.svelte';
	import NiceBackground from '$lib/layout/NiceBackground.svelte';
	import * as m from '$lib/paraglide/messages.js';
	import { localizeHref } from '$lib/paraglide/runtime';
	import {
		type BindableGameInfo,
		HOST_TEAM_ROSTERS,
		type HostTeamRosters
	} from '$lib/question-types/host/types';
	import FancyButton from '$lib/ui/FancyButton.svelte';
	import StatedIconButton from '$lib/ui/StatedIconButton.svelte';
	import Groups3Outline from '~icons/material-symbols/groups-3-outline';
	import LockOpenRightOutline from '~icons/material-symbols/lock-open-right-outline';
	import LockOutline from '~icons/material-symbols/lock-outline';
	import PersonOutline from '~icons/material-symbols/person-outline';

	let {
		code,
		players,
		bindableGameInfo = $bindable(),
		nextDisabled = false,
		onnext,
		onlock,
		onkick
	}: {
		code: string;
		players: string[];
		bindableGameInfo: BindableGameInfo;
		nextDisabled?: boolean;
		onnext?: () => void;
		onlock?: (locked: boolean) => void;
		onkick?: (name: string) => void;
	} = $props();

	let actualUrl = $derived(env.PUBLIC_PLAY_URL + localizeHref('/play?code=' + code));

	function copy_url_to_clipboard() {
		navigator.clipboard.writeText(actualUrl);
	}

	let fullscreenElement = $state<HTMLElement>();

	// Undefined outside a live game (the component gallery), where there is no
	// socket to ask and the control simply does not appear. Gated on `formed`
	// as well, because this same screen serves the lobby, before any team exists.
	const teamRosters = getContext<HostTeamRosters | undefined>(HOST_TEAM_ROSTERS);
	const showingTeams = $derived(teamRosters?.enabled === true && teamRosters.formed);

	// `players` holds team names once teams form. The rosters carry the same
	// teams with their members, so prefer them and fall back to bare names for
	// the moment before the first reply lands.
	const displayedTeams = $derived(
		teamRosters?.list?.length ? teamRosters.list : players.map((name) => ({ name, members: [] }))
	);

	// Kept current while the screen is up: a member dropping raises no event, so
	// without this the roster silently rots in front of the room.
	$effect(() => {
		if (!showingTeams) return;
		teamRosters?.request();
		const id = setInterval(() => teamRosters?.request(), 4000);
		return () => clearInterval(id);
	});

	let copiedPopover = $state<HTMLDivElement>();
	let copyButton = $state<HTMLButtonElement>();
	let copiedTimer: ReturnType<typeof setTimeout> | undefined;

	function showCopied() {
		try {
			copiedPopover?.showPopover({ source: copyButton });
		} catch {
			/* already shown */
		}
		clearTimeout(copiedTimer);
		copiedTimer = setTimeout(() => {
			try {
				copiedPopover?.hidePopover();
			} catch {
				/* already hidden */
			}
		}, 1500);
	}
</script>

<div class="container" bind:this={fullscreenElement}>
	<NiceBackground>
		<div class="layout">
			<!-- Left column: join info, game code, QR code and the start button -->
			<div class="join-column">
				<div class="join-info">
					{m.join_at()}
					<span class="join-url">
						{env.PUBLIC_DISPLAY_PLAY_URL}{localizeHref('/play')}
					</span>
				</div>
				<div class="code-block">
					<button
						class="code-button"
						bind:this={copyButton}
						onclick={() => { copy_url_to_clipboard(); showCopied(); }}
						interestfor="hover-popover"
					>
						<div class="code-label">{m.game_code()}</div>
						<div class="code-value">{code}</div>
					</button>
					<div id="hover-popover" popover="hint" class="fuiz-popover">{m.copy_clipboard()}</div>
					<div bind:this={copiedPopover} popover="manual" class="fuiz-popover">{m.copied()}</div>
				</div>
				<div class="qr-large">
					<QrCode url={actualUrl} smallSize="min(36em, 62vw, 70vh)" />
				</div>
				<div class="start-button">
					<FancyButton onclick={onnext} disabled={nextDisabled}>
						<div class="start-label">{m.start()}</div>
					</FancyButton>
				</div>
			</div>

			<!-- Right column: controls + the list of participants -->
			<div class="players-column">
				<div class="controls">
					<div class="player-count">
						{#if showingTeams}
							<Groups3Outline title={m.team_rosters()} />
						{:else}
							<PersonOutline title={m.number_of_players()} />
						{/if}
						{players.length}
					</div>
					<StatedIconButton
						icons={[
							{ component: LockOpenRightOutline, alt: m.lock_game() },
							{ component: LockOutline, alt: m.unlock_game() }
						]}
						bind:state={bindableGameInfo.locked}
						onchange={onlock}
					/>
					<Fullscreen {fullscreenElement} />
				</div>
				<div class="players-area">
					<div class="players">
						{#if showingTeams}
							<TeamsList teams={displayedTeams} />
						{:else}
							<PlayersList
								players={players.map((n) => [n, false])}
								exactCount={players.length}
								{onkick}
							/>
						{/if}
					</div>
				</div>
			</div>
		</div>
	</NiceBackground>
</div>

<style>
	.container {
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	/* Two columns: join/QR on the left (large), participants on the right. */
	.layout {
		height: 100%;
		box-sizing: border-box;
		display: grid;
		grid-template-columns: minmax(0, 3fr) minmax(0, 1fr);
		gap: 1.5em;
		padding: 1.5em;
	}

	/* ---- Left column: join info + code + QR + start ---- */
	.join-column {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1em;
		text-align: center;
		min-height: 0;
	}

	.join-info {
		font-size: 1.5em;
		padding: 0.2em 0.4em;
	}

	.join-url {
		font-weight: bold;
	}

	.code-block {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 0.4em 0.8em;
		gap: 0.2em;
		border-radius: 0.6em;
		background: var(--surface-variant);
	}

	.code-button {
		font: inherit;
		color: inherit;
		appearance: none;
		border: none;
		background: none;
		cursor: pointer;
		text-align: center;
	}

	.code-label {
		font-size: 1.3em;
		font-weight: bold;
	}

	.code-value {
		font-size: min(6em, 14vw);
		line-height: 1em;
		text-transform: uppercase;
		font-weight: 800;
		font-family: var(--alternative-font);
	}

	.qr-large {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.start-button {
		font-size: 1.6em;
	}

	.start-label {
		padding: 0 1em;
		font-family: var(--alternative-font);
	}

	/* ---- Right column: controls + participants ---- */
	.players-column {
		display: flex;
		flex-direction: column;
		gap: 0.4em;
		min-height: 0;
	}

	.controls {
		display: flex;
		gap: 0.4em;
		align-items: center;
		font-size: 1.2em;
	}

	.player-count {
		flex: 1;
		display: flex;
		align-items: center;
		gap: 0.2em;
		font-weight: bold;
	}

	.players-area {
		flex: 1;
		min-height: 0;
		display: flex;
		align-items: flex-start;
		justify-content: center;
		overflow: auto;
	}

	.players {
		display: flex;
		justify-content: center;
		align-items: flex-start;
		flex-wrap: wrap;
		gap: 0.3em;
		padding: 0.2em;
		width: 100%;
		font-size: 1.5em;
	}

	/* Stack the two columns on narrow screens (phones). */
	@media (max-width: 800px) {
		.layout {
			grid-template-columns: 1fr;
			gap: 1em;
			padding: 0.8em;
		}

		.join-column {
			justify-content: flex-start;
			gap: 0.6em;
		}

		.code-value {
			font-size: min(4em, 18vw);
		}

		.players-area {
			min-height: 30vh;
		}

		.players {
			font-size: 1.1em;
		}
	}
</style>
