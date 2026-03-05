export interface CurrencyConvertRequest {
  amount: number;
  from: string;
  to: string;
  format: string; //specificity API
}

export interface CurrencyConvertResponse {
  amount: number;
  base: string;
  to: string;
  rate: number;
  result: number;
}

export interface AllSupportedCurrenciesResponse {
  currencies: string[];
  count: number;
}

export interface CurrencyHistoryItem {
  date: string;
  from: string;
  to: string;
  amount: number;
  result: number;
  rate: number;
}
