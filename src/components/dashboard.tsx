import React from 'react';
import { Card } from "@/components/ui/card";
import { 
  Users, 
  ArrowUpRight, 
  Activity, 
  DollarSign,
  Bell,
  Calendar,
  BarChart3
} from "lucide-react";
import { Header } from './header';

const Dashboard = () => {
  return (
    <>
    <div className="min-h-screen bg-purple-dark p-8 animate-fade-in ">
    <Header />
      {/* Header Section */}
      <div className="mb-8 mt-16">
        <h1 className="text-4xl font-bold text-purple-primary dark:text-purple-light mb-2">Dashboard Overview</h1>
        <p className="text-muted-foreground dark:text-purple-light/70">Welcome back! Here's what's happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Stats Cards */}
        <Card className="p-6 hover:shadow-lg transition-all duration-300 bg-purple-soft dark:bg-purple-dark/60 dark:border-purple-primary/20 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground dark:text-purple-light/70">Total Users</p>
              <h3 className="text-2xl font-bold text-foreground dark:text-white mt-1">2,543</h3>
            </div>
            <div className="h-12 w-12 bg-purple-primary/10 dark:bg-purple-primary/20 rounded-full flex items-center justify-center">
              <Users className="h-6 w-6 text-purple-primary dark:text-purple-light" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-green-500 dark:text-green-400">
            <ArrowUpRight className="h-4 w-4 mr-1" />
            <span>12% increase</span>
          </div>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-all duration-300 bg-purple-soft dark:bg-purple-dark/60 dark:border-purple-primary/20 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground dark:text-purple-light/70">Active Now</p>
              <h3 className="text-2xl font-bold text-foreground dark:text-white mt-1">143</h3>
            </div>
            <div className="h-12 w-12 bg-purple-primary/10 dark:bg-purple-primary/20 rounded-full flex items-center justify-center">
              <Activity className="h-6 w-6 text-purple-primary dark:text-purple-light" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-purple-primary dark:text-purple-light">
            <Bell className="h-4 w-4 mr-1" />
            <span>Active sessions</span>
          </div>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-all duration-300 bg-purple-soft dark:bg-purple-dark/60 dark:border-purple-primary/20 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground dark:text-purple-light/70">Revenue</p>
              <h3 className="text-2xl font-bold text-foreground dark:text-white mt-1">$12,426</h3>
            </div>
            <div className="h-12 w-12 bg-purple-primary/10 dark:bg-purple-primary/20 rounded-full flex items-center justify-center">
              <DollarSign className="h-6 w-6 text-purple-primary dark:text-purple-light" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-green-500 dark:text-green-400">
            <ArrowUpRight className="h-4 w-4 mr-1" />
            <span>8.2% increase</span>
          </div>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-all duration-300 bg-purple-soft dark:bg-purple-dark/60 dark:border-purple-primary/20 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground dark:text-purple-light/70">Growth</p>
              <h3 className="text-2xl font-bold text-foreground dark:text-white mt-1">+573</h3>
            </div>
            <div className="h-12 w-12 bg-purple-primary/10 dark:bg-purple-primary/20 rounded-full flex items-center justify-center">
              <BarChart3 className="h-6 w-6 text-purple-primary dark:text-purple-light" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-purple-primary dark:text-purple-light">
            <Calendar className="h-4 w-4 mr-1" />
            <span>This month</span>
          </div>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <Card className="p-6 bg-card dark:bg-purple-dark/40 dark:border-purple-primary/20 backdrop-blur-sm">
          <h2 className="text-xl font-semibold mb-4 text-purple-primary dark:text-purple-light">Recent Activity</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center p-3 hover:bg-purple-soft dark:hover:bg-purple-dark/60 rounded-lg transition-all duration-300">
                <div className="h-9 w-9 bg-purple-primary/10 dark:bg-purple-primary/20 rounded-full flex items-center justify-center mr-3">
                  <Activity className="h-5 w-5 text-purple-primary dark:text-purple-light" />
                </div>
                <div>
                  <p className="text-sm font-medium dark:text-white">New user registration</p>
                  <p className="text-xs text-muted-foreground dark:text-purple-light/70">2 minutes ago</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Quick Actions */}
        <Card className="p-6 bg-card dark:bg-purple-dark/40 dark:border-purple-primary/20 backdrop-blur-sm">
          <h2 className="text-xl font-semibold mb-4 text-purple-primary dark:text-purple-light">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            {['View Reports', 'Add User', 'Update Profile', 'Settings'].map((action) => (
              <button
                key={action}
                className="p-4 text-left rounded-lg hover:bg-purple-soft dark:hover:bg-purple-dark/60 transition-all duration-300"
              >
                <p className="font-medium dark:text-white">{action}</p>
                <p className="text-sm text-muted-foreground dark:text-purple-light/70">Click to proceed</p>
              </button>
            ))}
          </div>
        </Card>
      </div>
    </div>
    </>
  );
};

export default Dashboard;