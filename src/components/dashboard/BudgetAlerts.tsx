import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, TrendingUp, CheckCircle, Info, X } from "lucide-react";

const alerts = [
  {
    id: 1,
    type: "warning",
    title: "Food spending above normal",
    description: "You've spent 15% more on dining this week. Consider meal planning to save $200 this month.",
    action: "View suggestions",
    priority: "high",
    category: "Food & Dining",
  },
  {
    id: 2,
    type: "success",
    title: "Great job on transportation!",
    description: "You're $67 under budget this month by using public transport more often.",
    action: "Keep it up",
    priority: "low",
    category: "Transportation",
  },
  {
    id: 3,
    type: "info",
    title: "Investment opportunity",
    description: "Based on your spending patterns, you could invest an extra $150 this month.",
    action: "Learn more",
    priority: "medium",
    category: "Investments",
  },
  {
    id: 4,
    type: "destructive",
    title: "Shopping budget exceeded",
    description: "You're $89 over your shopping budget. AI suggests postponing non-essential purchases.",
    action: "Review purchases",
    priority: "high",
    category: "Shopping",
  },
];

export const BudgetAlerts = () => {
  return (
    <Card className="bg-gradient-card border-border shadow-soft">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
          Smart Alerts
          <Badge variant="outline" className="text-xs">
            AI Powered
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {alerts.map((alert, index) => {
          const getIcon = () => {
            switch (alert.type) {
              case "warning":
                return <AlertTriangle className="h-4 w-4" />;
              case "success":
                return <CheckCircle className="h-4 w-4" />;
              case "info":
                return <Info className="h-4 w-4" />;
              case "destructive":
                return <AlertTriangle className="h-4 w-4" />;
              default:
                return <Info className="h-4 w-4" />;
            }
          };

          const getVariant = () => {
            switch (alert.type) {
              case "warning":
                return "default";
              case "success":
                return "default";
              case "info":
                return "default";
              case "destructive":
                return "destructive";
              default:
                return "default";
            }
          };

          return (
            <Alert 
              key={alert.id} 
              variant={getVariant()}
              className={`animate-slide-up border-l-4 ${
                alert.type === "warning" ? "border-l-warning bg-warning/5" :
                alert.type === "success" ? "border-l-success bg-success/5" :
                alert.type === "info" ? "border-l-info bg-info/5" :
                "border-l-destructive bg-destructive/5"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3 flex-1">
                  <div className={`p-1 rounded-full ${
                    alert.type === "warning" ? "text-warning" :
                    alert.type === "success" ? "text-success" :
                    alert.type === "info" ? "text-info" :
                    "text-destructive"
                  }`}>
                    {getIcon()}
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium text-foreground">{alert.title}</h4>
                      <Badge 
                        variant={alert.priority === "high" ? "destructive" : "secondary"}
                        className="text-xs"
                      >
                        {alert.priority}
                      </Badge>
                    </div>
                    <AlertDescription className="text-sm text-muted-foreground">
                      {alert.description}
                    </AlertDescription>
                    <div className="flex items-center gap-2 mt-2">
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="text-xs h-7"
                      >
                        {alert.action}
                      </Button>
                      <span className="text-xs text-muted-foreground">
                        {alert.category}
                      </span>
                    </div>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="h-6 w-6 shrink-0">
                  <X className="h-3 w-3" />
                </Button>
              </div>
            </Alert>
          );
        })}
      </CardContent>
    </Card>
  );
};