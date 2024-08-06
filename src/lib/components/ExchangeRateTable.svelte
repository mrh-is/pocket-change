<script lang="ts">
	import type { ExchangeRate } from '$lib/exchangeRates/types';

	export let rates: ExchangeRate[];
</script>

<table class="table-auto">
	<thead>
		<tr>
			<th>Currency</th>
			<th>Rate</th>
		</tr>
	</thead>
	<tbody>
		{#each rates as rate}
			<tr>
				<td>{rate.to}</td>
				<td>{rate.rate}</td>
			</tr>
		{/each}
	</tbody>
</table>
