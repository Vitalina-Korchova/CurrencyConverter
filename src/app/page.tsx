import { RateCharts } from "@/components/charts";
import { CurrencyConverter } from "@/components/currency-converter";
import Header from "@/components/header";
import { HistoryRecords } from "@/components/history-records";

export default function Home() {
  return (
    <>
      <Header />
      <CurrencyConverter />
      <RateCharts />
      <HistoryRecords />
    </>
  );
}
