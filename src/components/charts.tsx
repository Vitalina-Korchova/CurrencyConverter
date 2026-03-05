"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import usdData from "@/data/usd-uah.json";
import eurData from "@/data/eur-uah.json";
import { formatUkrainianDate } from "@/lib/utils";

const teal400 = "#2dd4bf";
const blue400 = "#60a5fa";

export function RateCharts() {
  return (
    <div className="grid gap-6 md:grid-cols-2 mt-8 mx-8">
      <Card>
        <CardHeader>
          <CardTitle>USD / UAH</CardTitle>
          <CardDescription>from 26.02.2026 to 04.03.2026</CardDescription>
        </CardHeader>

        <CardContent className="h-[220px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={usdData}>
              <CartesianGrid strokeDasharray="3 3" strokeWidth={0.3} />
              <XAxis
                dataKey="date"
                tickFormatter={formatUkrainianDate}
                interval={0}
                tick={{ fontSize: 10, dy: 8 }}
                angle={0}
                textAnchor="end"
                height={40}
              />
              <YAxis
                domain={["auto", "auto"]}
                tick={{ fontSize: 13, dx: -5 }}
              />
              <Line
                type="monotone"
                dataKey="rate"
                stroke={teal400}
                strokeWidth={3}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>EUR / UAH</CardTitle>
          <CardDescription>from 26.02.2026 to 04.03.2026</CardDescription>
        </CardHeader>

        <CardContent className="h-[220px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={eurData}>
              <CartesianGrid strokeDasharray="3 3" strokeWidth={0.3} />
              <XAxis
                dataKey="date"
                tickFormatter={formatUkrainianDate}
                interval={0}
                tick={{ fontSize: 10, dy: 8 }}
                angle={0}
                textAnchor="end"
                height={40}
              />
              <YAxis
                domain={["auto", "auto"]}
                tick={{ fontSize: 13, dx: -5 }}
              />

              <Line
                type="monotone"
                dataKey="rate"
                stroke={blue400}
                strokeWidth={3}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
