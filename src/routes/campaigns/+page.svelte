<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import { CirclePlus, Rocket } from 'lucide-svelte';
	import { getModalStore } from '@skeletonlabs/skeleton';
	import { AppShell, tableMapperValues, Table, type ModalSettings } from '@skeletonlabs/skeleton';
	import type { PaginationSettings, TableSource } from '@skeletonlabs/skeleton';
	// import FullScreenModal from '$lib/components/FullScreenModal.svelte';

	// // Props
	// /** Exposes parent props to this component. */
	// export let parent: SvelteComponent;

	// const modalStore = getModalStore();

	// const modal: ModalSettings = {
	// 	type: 'component',
	// 	component: typeof FullScreenModal,
	// 	title: 'Launch Campaign',
	// 	body: 'Setup a new campaign and start receiving funds from your community.'
	// 	// image: 'https://i.imgur.com/WOgTG96.gif'
	// };

	// // Notes: Use `w-screen h-screen` to fit the visible canvas size.
	// const cBase = 'bg-surface-100-800-token w-screen h-screen p-4 flex justify-center items-center';

	const sourceData = [
		{ id: 1, name: 'Hydrogen', donations: 109_999.79, campaign: 'H' },
		{ id: 2, name: 'Helium', donations: 423_122.26, campaign: 'He' },
		{ id: 3, name: 'Lithium', donations: 1_120_500.41, campaign: 'Li' },
		{ id: 4, name: 'Beryllium', donations: 9_000.02, campaign: 'Be' },
		{ id: 5, name: 'Boron', donations: 10_000.81, campaign: 'B' },
		{ id: 6, name: 'Hydrogen', donations: 109_999.79, campaign: 'H' },
		{ id: 7, name: 'Helium', donations: 423_122.26, campaign: 'He' },
		{ id: 8, name: 'Lithium', donations: 1_120_500.41, campaign: 'Li' },
		{ id: 9, name: 'Beryllium', donations: 9_000.02, campaign: 'Be' },
		{ id: 10, name: 'Boron', donations: 10_000.81, campaign: 'B' }
	];

	// let paginationSettings = {
	// 	page: 0,
	// 	limit: 5,
	// 	size: sourceData.length,
	// 	amounts: [1, 2, 5, 10]
	// } satisfies PaginationSettings;

	// $: paginationSettings.size = sourceData.length;
	// $: paginatedSource = sourceData.slice(
	// 	paginationSettings.page * paginationSettings.limit,
	// 	paginationSettings.page * paginationSettings.limit + paginationSettings.limit
	// );

	const tableSimple: TableSource = {
		// A list of heading labels.
		head: ['Name', 'Donations', 'Campaign'],
		// The data visibly shown in your table body UI.
		body: tableMapperValues(sourceData, ['name', 'donations', 'campaign']),
		// Optional: The data returned when interactive is enabled and a row is clicked.
		meta: tableMapperValues(sourceData, ['id', 'name', 'donations', 'campaign']),
		// Optional: A list of footer labels.
		foot: ['Total', '', '<code class="code">10 Campaigns Engaged</code>']
	};
</script>

<AppShell>
	<div class="flex flex-col w-full p-4 mx-auto">
		<div class="flex flex-col p-4">
			<div>
				<span class="badge variant-filled">Campaigns</span>
			</div>

			<div class="flex justify-between">
				<h1 class="h1">Manage campaigns! 📋</h1>

				<a href="/campaigns/new" type="button" class="btn variant-filled">
					<span><Rocket /></span>
					<span>Launch Campaign</span>
				</a>
			</div>
		</div>

		<div class="p-4">
			<Table source={tableSimple} />
		</div>
	</div>
</AppShell>
