import type { Currency, ExchangeRate } from './types';

interface APIResponse {
	success: boolean;
	timestamp: number;
	base: Currency;
	date: Date;
	rates: { [currency in Currency]: number };
}

export function getLatest(apiKey: string): Promise<ExchangeRate[]> {
	const url = `http://api.exchangeratesapi.io/v1/latest?access_key=${apiKey}`;
	return fetch(url)
		.then((res) => res.json() as unknown as APIResponse)
		.then((res) => {
			return Object.keys(res.rates).map((currency) => {
				return {
					from: res.base,
					to: currency,
					rate: res.rates[currency as Currency]
				} as ExchangeRate;
			});
		});
}
