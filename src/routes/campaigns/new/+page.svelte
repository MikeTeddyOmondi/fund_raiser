<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import { AppShell, Step, Stepper, getModalStore } from '@skeletonlabs/skeleton';
	import { Ban } from 'lucide-svelte';

	let title = '',
		description = '',
		goalAmount = '',
		endDate = '';

	let locked: boolean = true;

	function validateDetails() {
		console.log({
			title,
			description,
			goalAmount,
			endDate
		});
	}

	function launchCampaign() {
		console.log({
			title,
			description,
			goalAmount,
			endDate
		});
	}
</script>

<AppShell>
	<div class="flex flex-col w-full p-4 mx-auto">
		<div class="flex flex-col p-4">
			<div>
				<span class="badge variant-filled">Campaigns</span>
			</div>

			<div class="flex justify-between">
				<h1 class="h1">Create a new campaign 🚀</h1>

				<a href="/campaigns" type="button" class="btn variant-filled-warning">
					<span><Ban /></span>
					<span>Cancel</span>
				</a>
			</div>
		</div>

		<div class="flex flex-col p-2 max-w-lg w-full mx-auto">
			<Stepper locked={locked} on:next={validateDetails} on:complete={launchCampaign}>
				<Step>
					<svelte:fragment slot="header">Provide Details</svelte:fragment>
					<form method="POST" action="?/createCampaign">
						<label class="label p-2">
							<span>Campaign Title</span>
							<input
								class="input"
								name="title"
								bind:value={title}
								type="text"
								placeholder="Campaign Name"
							/>
						</label>
						<label class="label p-2">
							<span>Campaign Description</span>
							<textarea
								class="textarea"
								name="description"
								bind:value={description}
								rows="5"
								placeholder="Campaign Description"
							/>
						</label>
						<label class="label p-2">
							<span>Campaign Goal Amount</span>
							<input
								class="input"
								name="goalAmount"
								bind:value={goalAmount}
								title="Amount (Kes)"
								type="number"
							/>
						</label>
						<label class="label p-2">
							<span>Campaign End Date</span>
							<input
								class="input"
								name="endDate"
								bind:value={endDate}
								title="Datetime"
								type="datetime-local"
							/>
						</label>
					</form>
				</Step>
				<Step>
					<svelte:fragment slot="header">Confirm Details</svelte:fragment>
					<div class="py-1">
						<span>Campaign Name</span>
						<pre class="pre">{title}</pre>
					</div>
					<div class="py-1">
						<span>Campaign Description</span>
						<pre class="pre">{description}</pre>
					</div>
					<div class="py-1">
						<span>Campaign Goal Amount</span>
						<pre class="pre">{goalAmount}</pre>
					</div>
					<div class="py-1">
						<span>Campaign End Date</span>
						<pre class="pre">{endDate}</pre>
					</div>
				</Step>
			</Stepper>
		</div>
	</div>
</AppShell>
