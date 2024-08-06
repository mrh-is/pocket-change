<script lang="ts">
	import ExchangeRateTable from '$lib/components/ExchangeRateTable.svelte';
	import type { ExchangeRate } from '$lib/exchangeRates/types.js';

	export let data;
</script>

<ExchangeRateTable rates={data.rates} />
