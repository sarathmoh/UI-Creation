export interface TotalBalance {
  amount: number;
  currency: string;
}

export interface Income {
  id: string;
  amount: number;
  icon: "one"|"two";
  percentage: number;
}

export interface CurrencyMarkets {
  id: string;
  currency: string;
  value: number;
  currentValue: number;
  percentage: number;
  positive: boolean;
  flag: "one"|"two";
}

export interface CurrencyListItem {
  id: string;
  name: string;
  amount: number;
  date: string;
  status: string;
  logo: string;
}

export interface Card {
  id: number;
  balance: number;
  lastDigits: string;
  expiry: string;
}

export interface YourCards {
  isPremium: boolean;
  cards: Card[];
}

export interface QuickTransfers {
  id: string;
  name: string;
}

export interface DashboardItem {
  totalBalance: TotalBalance;
  income: Income[];
  currenciesMarket: CurrencyMarkets[];
  currencyList: CurrencyListItem[];
  yourCards: YourCards;
  quickTransfer: QuickTransfers[];
}
