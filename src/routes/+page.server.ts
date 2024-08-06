import { API_KEY } from '$env/static/private';
import { getLatest } from '$lib/exchangeRates/ExchangeRatesAPI';

export const load = async () => {
	const rates = await getLatest(API_KEY);
	return {
		rates
	};
};
