import { Currency, ExchangeRate } from '../types';
import type { Tables } from './database.types';

export type SBCurrency = Tables<'currencies'>;
export type SBExchangeRate = Tables<'exchange_rates'>;
export type SBExchangeRateWithCurrencies = Omit<SBExchangeRate, 'from_currency' | 'to_currency'> & {
	from_currency: SBCurrency;
	to_currency: SBCurrency;
};

function nullableToUndefined<T>(value: T | null): T | undefined {
	if (value === null) {
		return undefined;
	} else {
		return value;
	}
}

export function mapCurrency(sbValue: SBCurrency): Currency {
	return new Currency(
		sbValue.id,
		sbValue.code,
		sbValue.name,
		sbValue.symbol,
		sbValue.minor_unit_fraction,
		sbValue.type,
		nullableToUndefined(sbValue.countries),
		nullableToUndefined(sbValue.date_of_introduction),
		nullableToUndefined(sbValue.date_of_withdrawal)
	);
}

export function mapExchangeRate(sbValue: SBExchangeRateWithCurrencies): ExchangeRate {
	return new ExchangeRate(
		new Date(sbValue.date),
		sbValue.rate,
		mapCurrency(sbValue.from_currency),
		mapCurrency(sbValue.to_currency)
	);
}
