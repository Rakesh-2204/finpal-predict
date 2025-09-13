import { TrendingUp, TrendingDown, DollarSign, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stats = [
  {
    title: "Total Balance",
    value: "$24,583.42",
    change: "+2.5%",
    trend: "up",
    icon: DollarSign,
  },
  {
    title: "Monthly Spending",
    value: "$3,247.89",
    change: "-8.2%",
    trend: "down",
    icon: TrendingDown,
  },
  {
    title: "Savings Goal",
    value: "68%",
    change: "+12%",
    trend: "up",
    icon: Target,
  },
  {
    title: "Investment Growth",
    value: "$1,285.33",
    change: "+15.7%",
    trend: "up",
    icon: TrendingUp,
  },
];

export const FinancialOverview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        const isPositive = stat.trend === "up";
        
        return (
          <Card 
            key={stat.title} 
            className="bg-gradient-card border-border shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <Icon className={`h-4 w-4 ${isPositive ? 'text-success' : 'text-destructive'}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className={`text-xs flex items-center ${
                isPositive ? 'text-success' : 'text-destructive'
              }`}>
                {isPositive ? (
                  <TrendingUp className="h-3 w-3 mr-1" />
                ) : (
                  <TrendingDown className="h-3 w-3 mr-1" />
                )}
                {stat.change} from last month
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};