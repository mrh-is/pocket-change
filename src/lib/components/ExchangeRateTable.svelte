<script lang="ts">
	import type { ExchangeRate } from '$lib/data/types';

	export let rates: ExchangeRate[];
</script>

<table class="table-auto">
	<thead>
		<tr>
			<th>Currency</th>
			<th>Rate</th>
			<th>From</th>
			<th>To</th>
		</tr>
	</thead>
	<tbody>
		{#each rates as rate}
			<tr>
				<td>{rate.date.toLocaleDateString()}</td>
				<td>{rate.rate}</td>
				<td>{rate.from.code}</td>
				<td>{rate.to.code}</td>
			</tr>
		{/each}
	</tbody>
</table>
