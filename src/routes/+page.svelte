<script lang="ts">
	import ExchangeRateTable from '$lib/components/ExchangeRateTable.svelte';

	export let data;
</script>

<ExchangeRateTable rates={data.rates} />
