"use client";

import { useSelector } from "react-redux";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { RootState } from "store/store";
import { useEffect, useState } from "react";

export function HistoryRecords() {
  const history = useSelector((state: RootState) => state.currency.history);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Card className="my-8 mx-8">
      <CardHeader>
        <CardTitle>Conversion History</CardTitle>
        <CardDescription>Your recent currency conversions</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="relative w-full overflow-x-auto">
          {loading ? (
            <div className="text-center text-muted-foreground py-6">
              Loading history...
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>From</TableHead>
                  <TableHead>To</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                  <TableHead className="text-right">Result</TableHead>
                  <TableHead className="text-right">Rate</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {history.length === 0 ? (
                  <TableRow>
                    <TableCell
                      colSpan={6}
                      className="text-center text-muted-foreground py-6"
                    >
                      No conversion history yet
                    </TableCell>
                  </TableRow>
                ) : (
                  history.map((record, index) => (
                    <TableRow key={index}>
                      <TableCell className="text-muted-foreground">
                        {record.date}
                      </TableCell>
                      <TableCell className="font-medium">
                        {record.from}
                      </TableCell>
                      <TableCell className="font-medium">{record.to}</TableCell>
                      <TableCell className="text-right font-mono">
                        {record.amount}
                      </TableCell>
                      <TableCell className="text-right font-mono">
                        {record.result}
                      </TableCell>
                      <TableCell className="text-right font-mono text-muted-foreground">
                        {record.rate}
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
