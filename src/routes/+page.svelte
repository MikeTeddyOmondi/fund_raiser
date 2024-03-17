<script lang="ts">
	import { AppShell, tableMapperValues, Table, Paginator } from '@skeletonlabs/skeleton';
	import type { PaginationSettings, TableSource } from '@skeletonlabs/skeleton';

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
				<span class="badge variant-filled">Home</span>
			</div>
			<h1 class="h1">Welcome back! 👋</h1>
		</div>
		<div
			class="flex flex-row justify-between snap-x scroll-px-4 snap-mandatory scroll-smooth gap-4 overflow-x-auto px-4 py-10"
		>
			<div class="w-full">
				<a href="/" class="snap-start shrink-0 card p-4 card-hover block variant-soft min-h-full">
					<header class="card-header text-6xl">3</header>
					<section class="p-4">👣 Campaigns Engaged</section>
					<!-- <footer class="card-footer">(footer)</footer> -->
				</a>
			</div>
			<div class="w-full">
				<a href="/" class="snap-start shrink-0 card p-4 card-hover block variant-soft min-h-full">
					<header class="card-header text-6xl">23</header>
					<section class="p-4">🔥 Donations made</section>
					<!-- <footer class="card-footer">(footer)</footer> -->
				</a>
			</div>
			<div class="w-full">
				<a href="/" class="snap-start shrink-0 card p-4 card-hover block variant-soft min-h-full">
					<header class="card-header text-6xl">12,000</header>
					<section class="p-4 flex flex-col">💰 Amount Spent (KShs)</section>
					<!-- <footer class="card-footer">(footer)</footer> -->
				</a>
			</div>
		</div>

		<div class="p-4">
			<Table source={tableSimple} />
			<!-- <Paginator
				bind:settings={paginationSettings}
				showFirstLastButtons={false}
				showPreviousNextButtons={true}
			/> -->
		</div>
	</div>
</AppShell>
