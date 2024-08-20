import { supabase } from './supabase/supabaseClient';
import { mapExchangeRate, type SBExchangeRateWithCurrencies } from './supabase/mappings';

export const latestExchangeRates = supabase
	.from('exchange_rates')
	.select(
		`
    date,
    rate,
    from_currency (*),
    to_currency (*)
    `
	)
	.returns<SBExchangeRateWithCurrencies[]>()
	.then(({ data, error }) => {
		if (error || !data) {
			console.log(error);
			throw error;
		}
		return data.map(mapExchangeRate);
	});
