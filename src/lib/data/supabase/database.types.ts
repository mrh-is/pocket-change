export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
	public: {
		Tables: {
			currencies: {
				Row: {
					code: string;
					countries: string[] | null;
					date_of_introduction: string | null;
					date_of_withdrawal: string | null;
					id: string;
					minor_unit_fraction: number;
					name: string;
					symbol: string;
					type: string;
				};
				Insert: {
					code: string;
					countries?: string[] | null;
					date_of_introduction?: string | null;
					date_of_withdrawal?: string | null;
					id?: string;
					minor_unit_fraction: number;
					name: string;
					symbol: string;
					type: string;
				};
				Update: {
					code?: string;
					countries?: string[] | null;
					date_of_introduction?: string | null;
					date_of_withdrawal?: string | null;
					id?: string;
					minor_unit_fraction?: number;
					name?: string;
					symbol?: string;
					type?: string;
				};
				Relationships: [
					{
						foreignKeyName: 'test-currency_type_fkey';
						columns: ['type'];
						isOneToOne: false;
						referencedRelation: 'currency_types';
						referencedColumns: ['name'];
					}
				];
			};
			currency_types: {
				Row: {
					name: string;
				};
				Insert: {
					name: string;
				};
				Update: {
					name?: string;
				};
				Relationships: [];
			};
			exchange_rates: {
				Row: {
					date: string;
					from_currency: string;
					id: string;
					rate: number;
					to_currency: string;
				};
				Insert: {
					date?: string;
					from_currency: string;
					id?: string;
					rate: number;
					to_currency: string;
				};
				Update: {
					date?: string;
					from_currency?: string;
					id?: string;
					rate?: number;
					to_currency?: string;
				};
				Relationships: [
					{
						foreignKeyName: 'exchange_rates_from_currency_fkey';
						columns: ['from_currency'];
						isOneToOne: false;
						referencedRelation: 'currencies';
						referencedColumns: ['id'];
					},
					{
						foreignKeyName: 'exchange_rates_to_currency_fkey';
						columns: ['to_currency'];
						isOneToOne: false;
						referencedRelation: 'currencies';
						referencedColumns: ['id'];
					}
				];
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			[_ in never]: never;
		};
		Enums: {
			[_ in never]: never;
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
};

type PublicSchema = Database[Extract<keyof Database, 'public'>];

export type Tables<
	PublicTableNameOrOptions extends
		| keyof (PublicSchema['Tables'] & PublicSchema['Views'])
		| { schema: keyof Database },
	TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
		? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
				Database[PublicTableNameOrOptions['schema']]['Views'])
		: never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
	? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
			Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
			Row: infer R;
		}
		? R
		: never
	: PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] & PublicSchema['Views'])
		? (PublicSchema['Tables'] & PublicSchema['Views'])[PublicTableNameOrOptions] extends {
				Row: infer R;
			}
			? R
			: never
		: never;

export type TablesInsert<
	PublicTableNameOrOptions extends keyof PublicSchema['Tables'] | { schema: keyof Database },
	TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
		? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
		: never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
	? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
			Insert: infer I;
		}
		? I
		: never
	: PublicTableNameOrOptions extends keyof PublicSchema['Tables']
		? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
				Insert: infer I;
			}
			? I
			: never
		: never;

export type TablesUpdate<
	PublicTableNameOrOptions extends keyof PublicSchema['Tables'] | { schema: keyof Database },
	TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
		? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
		: never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
	? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
			Update: infer U;
		}
		? U
		: never
	: PublicTableNameOrOptions extends keyof PublicSchema['Tables']
		? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
				Update: infer U;
			}
			? U
			: never
		: never;

export type Enums<
	PublicEnumNameOrOptions extends keyof PublicSchema['Enums'] | { schema: keyof Database },
	EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
		? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
		: never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
	? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
	: PublicEnumNameOrOptions extends keyof PublicSchema['Enums']
		? PublicSchema['Enums'][PublicEnumNameOrOptions]
		: never;
