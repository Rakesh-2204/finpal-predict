import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Car, Home, Utensils, Gamepad2, MoreHorizontal } from "lucide-react";

const categories = [
  {
    name: "Food & Dining",
    amount: 847.32,
    budget: 1000,
    icon: Utensils,
    color: "hsl(var(--destructive))",
    prediction: "Above average this month",
  },
  {
    name: "Transportation",
    amount: 432.18,
    budget: 500,
    icon: Car,
    color: "hsl(var(--primary))",
    prediction: "On track",
  },
  {
    name: "Shopping",
    amount: 689.45,
    budget: 800,
    icon: ShoppingCart,
    color: "hsl(var(--warning))",
    prediction: "Watch spending",
  },
  {
    name: "Housing",
    amount: 1250.00,
    budget: 1300,
    icon: Home,
    color: "hsl(var(--success))",
    prediction: "Under budget",
  },
  {
    name: "Entertainment",
    amount: 234.67,
    budget: 300,
    icon: Gamepad2,
    color: "hsl(var(--info))",
    prediction: "Good control",
  },
  {
    name: "Other",
    amount: 156.89,
    budget: 200,
    icon: MoreHorizontal,
    color: "hsl(var(--muted-foreground))",
    prediction: "Minimal impact",
  },
];

export const ExpenseCategories = () => {
  return (
    <Card className="bg-gradient-card border-border shadow-soft">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
          Expense Categories
          <Badge variant="secondary" className="text-xs">
            Auto-categorized
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {categories.map((category, index) => {
          const Icon = category.icon;
          const percentage = Math.min((category.amount / category.budget) * 100, 100);
          const isOverBudget = category.amount > category.budget;
          
          return (
            <div 
              key={category.name} 
              className="space-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div 
                    className="p-2 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${category.color}20` }}
                  >
                    <Icon 
                      className="h-4 w-4" 
                      style={{ color: category.color }}
                    />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{category.name}</p>
                    <p className="text-xs text-muted-foreground">{category.prediction}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-foreground">
                    ${category.amount.toFixed(2)}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    of ${category.budget}
                  </p>
                </div>
              </div>
              <Progress 
                value={percentage} 
                className="h-2"
                style={{
                  backgroundColor: `${category.color}20`,
                }}
              />
              {isOverBudget && (
                <p className="text-xs text-destructive font-medium">
                  ${(category.amount - category.budget).toFixed(2)} over budget
                </p>
              )}
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};