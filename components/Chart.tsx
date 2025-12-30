"use client"

import * as React from "react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

export const description = "An interactive line chart"

const chartData = [
  { date: "2025-01-01", Bitcoin: 90000, Ethereum: 2937 },
  { date: "2025-01-02", Bitcoin: 97000, Ethereum: 1800 },
  { date: "2025-01-03", Bitcoin: 67000, Ethereum: 1900 },
  { date: "2025-01-04", Bitcoin: 62000, Ethereum: 2600 },
  { date: "2025-01-05", Bitcoin: 67000, Ethereum: 2900 },
  { date: "2025-01-06", Bitcoin: 61000, Ethereum: 3400 },
  { date: "2025-01-07", Bitcoin: 65000, Ethereum: 1800 },
  { date: "2025-01-08", Bitcoin: 80000, Ethereum: 3200 },
  { date: "2025-01-09", Bitcoin: 89000, Ethereum: 1100 },
  { date: "2025-01-10", Bitcoin: 81000, Ethereum: 1900 },
  { date: "2025-01-11", Bitcoin: 77000, Ethereum: 3500 },
  { date: "2025-01-12", Bitcoin: 72000, Ethereum: 2100 },
  { date: "2025-04-13", Bitcoin: 82000, Ethereum: 3800 },
  { date: "2025-04-14", Bitcoin: 87000, Ethereum: 2200 },
  { date: "2025-04-15", Bitcoin: 80000, Ethereum: 1700 },
  { date: "2025-04-16", Bitcoin: 88000, Ethereum: 1900 },
  { date: "2025-04-17", Bitcoin: 76000, Ethereum: 3600 },
  { date: "2025-04-18", Bitcoin: 72000, Ethereum: 4100 },
  { date: "2025-04-19", Bitcoin: 67000, Ethereum: 1800 },
  { date: "2025-04-20", Bitcoin: 81000, Ethereum: 1500 },
  { date: "2025-04-21", Bitcoin: 77000, Ethereum: 2000 },
  { date: "2025-04-22", Bitcoin: 72000, Ethereum: 1700 },
  { date: "2025-04-23", Bitcoin: 67000, Ethereum: 2300 },
  { date: "2025-04-24", Bitcoin: 87000, Ethereum: 2900 },
  { date: "2025-04-25", Bitcoin: 75000, Ethereum: 2500 },
  { date: "2025-04-26", Bitcoin: 61000, Ethereum: 1300 },
  { date: "2025-04-27", Bitcoin: 65000, Ethereum: 4200 },
  { date: "2025-04-28", Bitcoin: 80000, Ethereum: 1800 },
  { date: "2025-04-29", Bitcoin: 89000, Ethereum: 2400 },
  { date: "2025-04-30", Bitcoin: 103000, Ethereum: 3800 },
  { date: "2025-05-01", Bitcoin: 75000, Ethereum: 2200 },
  { date: "2025-05-02", Bitcoin: 69000, Ethereum: 3100 },
  { date: "2025-05-03", Bitcoin: 64000, Ethereum: 1900 },
  { date: "2025-05-04", Bitcoin: 78000, Ethereum: 4200 },
  { date: "2025-05-05", Bitcoin: 87000, Ethereum: 3900 },
  { date: "2025-05-06", Bitcoin: 89000, Ethereum: 5200 },
  { date: "2025-05-07", Bitcoin: 76000, Ethereum: 3000 },
  { date: "2025-05-08", Bitcoin: 61000, Ethereum: 2100 },
  { date: "2025-05-09", Bitcoin: 65000, Ethereum: 1800 },
  { date: "2025-05-10", Bitcoin: 80000, Ethereum: 3300 },
  { date: "2025-05-11", Bitcoin: 89000, Ethereum: 2700 },
  { date: "2025-05-12", Bitcoin: 75000, Ethereum: 2400 },
  { date: "2025-05-13", Bitcoin: 77000, Ethereum: 1600 },
  { date: "2025-05-14", Bitcoin: 81000, Ethereum: 4900 },
  { date: "2025-05-15", Bitcoin: 87000, Ethereum: 3800 },
  { date: "2025-05-16", Bitcoin: 76000, Ethereum: 4000 },
  { date: "2025-05-17", Bitcoin: 99000, Ethereum: 4200 },
  { date: "2025-05-18", Bitcoin: 85000, Ethereum: 3500 },
  { date: "2025-05-19", Bitcoin: 77000, Ethereum: 1800 },
  { date: "2025-05-20", Bitcoin: 81000, Ethereum: 2300 },
  { date: "2025-05-21", Bitcoin: 82000, Ethereum: 1400 },
  { date: "2025-05-22", Bitcoin: 81000, Ethereum: 1200 },
  { date: "2025-05-23", Bitcoin: 75000, Ethereum: 2900 },
  { date: "2025-05-24", Bitcoin: 87000, Ethereum: 2200 },
  { date: "2025-05-25", Bitcoin: 89000, Ethereum: 2500 },
  { date: "2025-05-26", Bitcoin: 76000, Ethereum: 1700 },
  { date: "2025-05-27", Bitcoin: 99000, Ethereum: 4600 },  
  { date: "2025-05-28", Bitcoin: 85000, Ethereum: 1900 },
  { date: "2025-05-29", Bitcoin: 78000, Ethereum: 1300 },
  { date: "2025-05-30", Bitcoin: 72000, Ethereum: 2800 },
  { date: "2025-05-31", Bitcoin: 67000, Ethereum: 2300 },
  { date: "2025-06-01", Bitcoin: 61000, Ethereum: 2000 },
  { date: "2025-06-02", Bitcoin: 70000, Ethereum: 4100 },
  { date: "2025-06-03", Bitcoin: 65000, Ethereum: 1600 },
  { date: "2025-06-04", Bitcoin: 80000, Ethereum: 3800 },
  { date: "2025-06-05", Bitcoin: 89000, Ethereum: 1400 },
  { date: "2025-06-06", Bitcoin: 76000, Ethereum: 2500 },
  { date: "2025-06-07", Bitcoin: 99000, Ethereum: 3700 },
  { date: "2025-06-08", Bitcoin: 85000, Ethereum: 3200 },
  { date: "2025-06-09", Bitcoin: 78000, Ethereum: 4800 },
  { date: "2025-06-10", Bitcoin: 81000, Ethereum: 2000 },
  { date: "2025-06-11", Bitcoin: 92000, Ethereum: 1500 },
  { date: "2025-06-12", Bitcoin: 77000, Ethereum: 4200 },
  { date: "2025-06-13", Bitcoin: 81000, Ethereum: 1300 },
  { date: "2025-06-14", Bitcoin: 87000, Ethereum: 3800 },
  { date: "2025-06-15", Bitcoin: 89000, Ethereum: 3500 },
  { date: "2025-06-16", Bitcoin: 76000, Ethereum: 3100 },
  { date: "2025-06-17", Bitcoin: 99000, Ethereum: 5200 },
  { date: "2025-06-18", Bitcoin: 85000, Ethereum: 1700 },
  { date: "2025-06-19", Bitcoin: 78000, Ethereum: 2900 },
  { date: "2025-06-20", Bitcoin: 81000, Ethereum: 4500 },
  { date: "2025-06-21", Bitcoin: 92000, Ethereum: 2100 },
  { date: "2025-06-22", Bitcoin: 77000, Ethereum: 2700 },
  { date: "2025-06-23", Bitcoin: 81000, Ethereum: 5300 },
  { date: "2025-06-24", Bitcoin: 87000, Ethereum: 1800 },
  { date: "2025-06-25", Bitcoin: 89000, Ethereum: 1900 },
  { date: "2025-06-26", Bitcoin: 76000, Ethereum: 3800 },
  { date: "2025-06-27", Bitcoin: 99000, Ethereum: 4900 },
  { date: "2025-06-28", Bitcoin: 85000, Ethereum: 2000 },
  { date: "2025-06-29", Bitcoin: 78000, Ethereum: 1600 },
  { date: "2025-06-30", Bitcoin: 81000, Ethereum: 4000 },
]

const chartConfig = {
  views: {
    label: "Page Views",
  },
  Bitcoin: {
    label: "Bitcoin",
    color: "var(--chart-1)",
  },
  Ethereum: {
    label: "Ethereum",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function ChartLineInteractive() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("Bitcoin")

  const total = React.useMemo(
    () => ({
      Bitcoin: chartData.reduce((acc, curr) => acc + curr.Bitcoin/chartData.length, 0),
      Ethereum: chartData.reduce((acc, curr) => acc + curr.Ethereum/chartData.length, 0),
    }),
    []
  )

  return (
    <Card className="w-full py-4 sm:py-0">
      <CardHeader className="flex flex-col items-stretch border-b !p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 pb-3 sm:pb-0">
          <CardTitle>Line Chart - Interactive</CardTitle>
          <CardDescription>
           Displaying crypto value over the last 3 months
          </CardDescription>
        </div>
        <div className="flex">
          {["Bitcoin", "Ethereum"].map((key) => {
            const chart = key as keyof typeof chartConfig
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="data-[active=true]:bg-muted/50 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l sm:border-t-0 sm:border-l sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-muted-foreground text-xs">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg leading-none font-bold sm:text-3xl">
                  {total[key as keyof typeof total].toFixed(2)}
                </span>
              </button>
            )
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                  }}
                />
              }
            />
            <Line
              dataKey={activeChart}
              type="monotone"
              stroke={`var(--color-${activeChart})`}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

