<script lang="ts">
	import { AppShell, tableMapperValues, Table } from '@skeletonlabs/skeleton';
	import type { TableSource } from '@skeletonlabs/skeleton';

	const sourceData = [
		{ id: 1, name: 'Hydrogen', donation: 109_999.79, campaign: 'H' },
		{ id: 2, name: 'Helium', donation: 423_122.26, campaign: 'He' },
		{ id: 3, name: 'Lithium', donation: 1_120_500.41, campaign: 'Li' },
		{ id: 4, name: 'Beryllium', donation: 9_000.02, campaign: 'Be' },
		{ id: 5, name: 'Boron', donation: 10_000.81, campaign: 'B' },
		{ id: 6, name: 'Hydrogen', donation: 109_999.79, campaign: 'H' },
		{ id: 7, name: 'Helium', donation: 423_122.26, campaign: 'He' },
		{ id: 8, name: 'Lithium', donation: 1_120_500.41, campaign: 'Li' },
		{ id: 9, name: 'Beryllium', donation: 9_000.02, campaign: 'Be' },
		{ id: 10, name: 'Boron', donation: 10_000.81, campaign: 'B' }
	];

	const tableSimple: TableSource = {
		// A list of heading labels.
		head: ['Name', 'Donation', 'Campaign'],
		// The data visibly shown in your table body UI.
		body: tableMapperValues(sourceData, ['name', 'donation', 'campaign']),
		// Optional: The data returned when interactive is enabled and a row is clicked.
		meta: tableMapperValues(sourceData, ['id', 'name', 'donation', 'campaign']),
		// Optional: A list of footer labels.
		foot: ['Total', '', '<code class="code">10 Campaigns Engaged</code>']
	};
</script>

<AppShell>
	<div class=" w-full p-4 mx-auto">
		<div class="flex flex-row justify-between">
			<div class="p-4 w-full">
				<a href="/" class="card p-4 card-hover block variant-soft">
					<header class="card-header text-6xl">3</header>
					<section class="p-4">Campaigns Engaged</section>
					<!-- <footer class="card-footer">(footer)</footer> -->
				</a>
			</div>
			<div class="p-4 w-full">
				<a href="/" class="card p-4 card-hover block variant-soft">
					<header class="card-header text-6xl">23</header>
					<section class="p-4">Donations made</section>
					<!-- <footer class="card-footer">(footer)</footer> -->
				</a>
			</div>
			<div class="p-4 w-full">
				<a href="/" class="card p-4 card-hover block variant-soft">
					<header class="card-header text-6xl">120,000</header>
					<section class="p-4">Amount Spent (KShs)</section>
					<!-- <footer class="card-footer">(footer)</footer> -->
				</a>
			</div>
		</div>

		<div class="p-4">
			<Table source={tableSimple} />
		</div>
	</div>
</AppShell>
