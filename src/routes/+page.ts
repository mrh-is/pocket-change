import { latestExchangeRates } from '$lib/data/queries';

export const load = async () => {
	const rates = await latestExchangeRates;
	return {
		rates
	};
};
