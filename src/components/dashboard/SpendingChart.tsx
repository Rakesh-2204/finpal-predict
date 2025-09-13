import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";

const spendingData = [
  { month: 'Jan', spending: 2800, predicted: 2750 },
  { month: 'Feb', spending: 3200, predicted: 3150 },
  { month: 'Mar', spending: 2900, predicted: 3000 },
  { month: 'Apr', spending: 3400, predicted: 3300 },
  { month: 'May', spending: 3100, predicted: 3200 },
  { month: 'Jun', spending: 3247, predicted: 3400 },
  { month: 'Jul', spending: null, predicted: 3500 },
  { month: 'Aug', spending: null, predicted: 3300 },
];

export const SpendingChart = () => {
  return (
    <Card className="col-span-1 lg:col-span-2 bg-gradient-card border-border shadow-soft">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
          Spending Analysis & Predictions
          <span className="text-xs bg-info text-info-foreground px-2 py-1 rounded-full">
            AI Powered
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={spendingData}>
              <defs>
                <linearGradient id="spendingGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="predictedGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--warning))" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="hsl(var(--warning))" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.5} />
              <XAxis 
                dataKey="month" 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickFormatter={(value) => `$${value}`}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px',
                  color: 'hsl(var(--foreground))'
                }}
                formatter={(value: any, name: string) => [
                  `$${value}`, 
                  name === 'spending' ? 'Actual Spending' : 'AI Prediction'
                ]}
              />
              <Area
                type="monotone"
                dataKey="spending"
                stroke="hsl(var(--primary))"
                strokeWidth={3}
                fill="url(#spendingGradient)"
                connectNulls={false}
              />
              <Area
                type="monotone"
                dataKey="predicted"
                stroke="hsl(var(--warning))"
                strokeWidth={2}
                strokeDasharray="5 5"
                fill="url(#predictedGradient)"
                fillOpacity={0.1}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="flex items-center justify-center gap-6 mt-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-primary rounded-full"></div>
            <span className="text-muted-foreground">Actual Spending</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-warning rounded-full opacity-60"></div>
            <span className="text-muted-foreground">AI Predictions</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};