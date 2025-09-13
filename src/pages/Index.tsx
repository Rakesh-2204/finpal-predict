import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { FinancialOverview } from "@/components/dashboard/FinancialOverview";
import { SpendingChart } from "@/components/dashboard/SpendingChart";
import { ExpenseCategories } from "@/components/dashboard/ExpenseCategories";
import { GoalsTracker } from "@/components/dashboard/GoalsTracker";
import { BudgetAlerts } from "@/components/dashboard/BudgetAlerts";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <main className="p-6 space-y-6">
        {/* Financial Overview Cards */}
        <FinancialOverview />
        
        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Spending Chart - Takes 2 columns on large screens */}
          <SpendingChart />
          
          {/* Expense Categories */}
          <ExpenseCategories />
        </div>
        
        {/* Goals and Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <GoalsTracker />
          <BudgetAlerts />
        </div>
      </main>
    </div>
  );
};

export default Index;
