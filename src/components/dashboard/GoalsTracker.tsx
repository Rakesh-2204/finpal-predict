import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Target, Plus, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const goals = [
  {
    id: 1,
    title: "Emergency Fund",
    target: 10000,
    current: 6800,
    deadline: "Dec 2024",
    priority: "high",
    monthlyContribution: 500,
  },
  {
    id: 2,
    title: "Vacation Fund",
    target: 3000,
    current: 1250,
    deadline: "Jun 2024",
    priority: "medium",
    monthlyContribution: 300,
  },
  {
    id: 3,
    title: "Car Down Payment",
    target: 8000,
    current: 2400,
    deadline: "Oct 2024",
    priority: "high",
    monthlyContribution: 750,
  },
];

export const GoalsTracker = () => {
  return (
    <Card className="bg-gradient-card border-border shadow-soft">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            Financial Goals
          </CardTitle>
          <Button size="sm" className="bg-gradient-primary text-primary-foreground">
            <Plus className="h-4 w-4 mr-1" />
            Add Goal
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {goals.map((goal, index) => {
          const percentage = (goal.current / goal.target) * 100;
          const remaining = goal.target - goal.current;
          const monthsToGoal = Math.ceil(remaining / goal.monthlyContribution);
          
          return (
            <div 
              key={goal.id} 
              className="space-y-3 p-4 rounded-lg bg-muted/30 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-foreground">{goal.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    Target by {goal.deadline}
                  </p>
                </div>
                <div className="text-right">
                  <Badge 
                    variant={goal.priority === 'high' ? 'destructive' : 'secondary'}
                    className="text-xs"
                  >
                    {goal.priority} priority
                  </Badge>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium text-foreground">
                    ${goal.current.toLocaleString()} / ${goal.target.toLocaleString()}
                  </span>
                </div>
                <Progress value={percentage} className="h-3" />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{percentage.toFixed(1)}% complete</span>
                  <span>${remaining.toLocaleString()} remaining</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-2 border-t border-border">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <TrendingUp className="h-4 w-4 text-success" />
                  <span>
                    ${goal.monthlyContribution}/month • {monthsToGoal} months to go
                  </span>
                </div>
                {percentage >= 90 && (
                  <Badge variant="outline" className="text-success border-success">
                    Almost there!
                  </Badge>
                )}
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};