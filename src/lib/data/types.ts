import { make, type Brand } from 'ts-brand';

type UUID = Brand<string, 'UUID'>;
export const UUID = make<UUID>();
type CalendarDate = Brand<Date, 'CalendarDate'>;
export const CalendarDate = make<CalendarDate>();
type CurrencyType = Brand<string, 'CurrencyType'>;
export const CurrencyType = make<CurrencyType>();

export class Currency {
	readonly id: UUID;
	readonly type: CurrencyType;
	readonly introduction?: CalendarDate;
	readonly withdrawal?: CalendarDate;

	constructor(
		id: string,
		public readonly code: string,
		public readonly name: string,
		public readonly symbol: string,
		public readonly subunitCount: number,
		type: string,
		public readonly countries?: string[],
		introduction?: string,
		withdrawal?: string
	) {
		this.id = UUID(id);
		this.type = CurrencyType(type);
		if (introduction) {
			this.introduction = CalendarDate(new Date(introduction));
		}
		if (withdrawal) {
			this.withdrawal = CalendarDate(new Date(withdrawal));
		}
	}
}

export class ExchangeRate {
	constructor(
		public readonly date: Date,
		public readonly rate: number,
		public readonly from: Currency,
		public readonly to: Currency
	) {}
}
