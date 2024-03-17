<script lang="ts">
	import '../app.postcss';
	import { page } from '$app/stores';
	import { Modal, initializeStores } from '@skeletonlabs/skeleton';
	import { Activity, CircleHelp, Grip, HandCoins, Home, Settings } from 'lucide-svelte';
	import { AppShell, AppBar, AppRail, AppRailAnchor, AppRailTile } from '@skeletonlabs/skeleton';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	let currentTile: number = 0;

	initializeStores();
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">💰 FundMe!</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://github.com/skeletonlabs/skeleton"
					target="_blank"
					rel="noreferrer"
				>
					GitHub
				</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<!-- Hidden below Tailwind's large breakpoint -->
		<div id="sidebar-left" class="hidden lg:block border-slate-50">
			<AppRail>
				<!-- <svelte:fragment slot="lead">
					<AppRailAnchor href="/"></AppRailAnchor>
				</svelte:fragment> -->
				<!-- --- -->
				<AppRailAnchor href="/" selected={$page.url.pathname === '/'}>
					<svelte:fragment slot="lead">
						<Home />
					</svelte:fragment>
					<span>Home</span>
				</AppRailAnchor>
				<AppRailAnchor href="/campaigns" selected={$page.url.pathname === '/campaigns'}>
					<svelte:fragment slot="lead">
						<Activity />
					</svelte:fragment>
					<span>Campaigns</span>
				</AppRailAnchor>
				<AppRailAnchor href="/donations" selected={$page.url.pathname === '/donations'}>
					<svelte:fragment slot="lead">
						<HandCoins />
					</svelte:fragment>
					<span>Donations</span>
				</AppRailAnchor>
				<AppRailAnchor href="/settings" selected={$page.url.pathname === '/settings'}>
					<svelte:fragment slot="lead">
						<Settings />
					</svelte:fragment>
					<span>Settings</span>
				</AppRailAnchor>
				<!-- --- -->
				<AppRailAnchor href="/help" selected={$page.url.pathname === '/help'}>
					<svelte:fragment slot="lead">
						<CircleHelp />
					</svelte:fragment>
					<span>Help</span>
				</AppRailAnchor>
			</AppRail>
		</div>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>

<Modal />

<!-- <AppShell>...</AppShell> -->

<!-- <style>
	/* For screens smaller than 640px */
	.container {
		@apply w-full px-4;
	}

	/* For screens between 640px and 768px */
	@screen sm {
		.container {
			@apply max-w-sm mx-auto px-4;
		}
	}

	/* For screens between 768px and 1024px */
	@screen md {
		.container {
			@apply max-w-md mx-auto px-4;
		}
	}

	/* For screens between 1024px and 1280px */
	@screen lg {
		.container {
			@apply max-w-lg mx-auto px-4;
		}
	}

	/* For screens between 1280px and 1536px */
	@screen xl {
		.container {
			@apply max-w-xl mx-auto px-4;
		}
	}

	/* For screens larger than 1536px */
	@screen 2xl {
		.container {
			@apply max-w-2xl mx-auto px-4;
		}
	}
</style> -->
