import {
  FileText,
  Users,
  FolderOpen,
  TrendingUp,
  Upload,
  Download,
  Eye,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import heroImage from "@/assets/dashboard-hero.jpg";

const statsCards = [
  {
    title: "Total Documents",
    value: "12,847",
    change: "+12%",
    trend: "up",
    icon: FileText,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    title: "Active Users",
    value: "1,245",
    change: "+8%",
    trend: "up",
    icon: Users,
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    title: "Storage Used",
    value: "2.4 TB",
    change: "78%",
    trend: "neutral",
    icon: FolderOpen,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    title: "Monthly Growth",
    value: "18.2%",
    change: "+3.1%",
    trend: "up",
    icon: TrendingUp,
    color: "text-accent",
    bgColor: "bg-amber-100",
  },
];

const recentActivities = [
  {
    id: 1,
    action: "Document uploaded",
    file: "Q3_Financial_Report.pdf",
    user: "Sarah Johnson",
    time: "2 minutes ago",
    type: "upload",
  },
  {
    id: 2,
    action: "Access granted",
    file: "Project_Proposal_2024.docx",
    user: "Michael Chen",
    time: "15 minutes ago",
    type: "access",
  },
  {
    id: 3,
    action: "Document reviewed",
    file: "Safety_Guidelines.pdf",
    user: "Emily Davis",
    time: "1 hour ago",
    type: "review",
  },
  {
    id: 4,
    action: "Bulk sync completed",
    file: "SharePoint Integration",
    user: "System",
    time: "3 hours ago",
    type: "sync",
  },
];

const pendingApprovals = [
  {
    id: 1,
    title: "Budget Allocation Document",
    submitter: "Finance Team",
    priority: "high",
    daysWaiting: 2,
  },
  {
    id: 2,
    title: "New Policy Guidelines",
    submitter: "HR Department",
    priority: "medium",
    daysWaiting: 5,
  },
  {
    id: 3,
    title: "Technical Specifications",
    submitter: "Engineering Team",
    priority: "low",
    daysWaiting: 8,
  },
];

export const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-primary to-primary-light">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative px-8 py-12 text-primary-foreground">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">
              Welcome to KMRL DocHub
            </h1>
            <p className="text-lg opacity-90 mb-6">
              Centralized document management platform for seamless collaboration, 
              automated workflows, and intelligent document processing across all departments.
            </p>
            <div className="flex gap-4">
              <Button size="lg" variant="secondary">
                <Upload className="h-5 w-5 mr-2" />
                Upload Documents
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Eye className="h-5 w-5 mr-2" />
                View All Files
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsCards.map((stat) => (
          <Card key={stat.title} className="shadow-soft hover:shadow-elevated transition-smooth">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <div className="flex items-center text-xs">
                    <Badge 
                      variant={stat.trend === "up" ? "default" : "secondary"}
                      className="text-xs"
                    >
                      {stat.change}
                    </Badge>
                    <span className="ml-2 text-muted-foreground">vs last month</span>
                  </div>
                </div>
                <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <Card className="lg:col-span-2 shadow-soft">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Latest document actions and system events
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/30 transition-fast">
                  <div className="flex-shrink-0">
                    {activity.type === "upload" && (
                      <div className="p-2 bg-green-100 rounded-full">
                        <Upload className="h-4 w-4 text-green-600" />
                      </div>
                    )}
                    {activity.type === "access" && (
                      <div className="p-2 bg-blue-100 rounded-full">
                        <Eye className="h-4 w-4 text-blue-600" />
                      </div>
                    )}
                    {activity.type === "review" && (
                      <div className="p-2 bg-purple-100 rounded-full">
                        <FileText className="h-4 w-4 text-purple-600" />
                      </div>
                    )}
                    {activity.type === "sync" && (
                      <div className="p-2 bg-amber-100 rounded-full">
                        <Download className="h-4 w-4 text-amber-600" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground">
                      {activity.action}
                    </p>
                    <p className="text-sm text-muted-foreground truncate">
                      {activity.file}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">
                      {activity.user}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Pending Approvals */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-accent" />
              Pending Approvals
            </CardTitle>
            <CardDescription>
              Documents awaiting your review
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {pendingApprovals.map((item) => (
                <div key={item.id} className="p-3 border border-card-border rounded-lg hover:shadow-sm transition-fast">
                  <div className="space-y-2">
                    <div className="flex items-start justify-between">
                      <h4 className="text-sm font-medium line-clamp-2">
                        {item.title}
                      </h4>
                      <Badge 
                        variant={
                          item.priority === "high" 
                            ? "destructive" 
                            : item.priority === "medium" 
                            ? "default" 
                            : "secondary"
                        }
                        className="text-xs ml-2 flex-shrink-0"
                      >
                        {item.priority}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      By {item.submitter}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Waiting {item.daysWaiting} days
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" size="sm" className="w-full mt-4">
              View All Pending
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Storage Overview */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle>Storage Overview</CardTitle>
          <CardDescription>
            Current storage usage across different file types
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>PDF Documents</span>
                <span className="font-medium">1.2 TB</span>
              </div>
              <Progress value={65} className="h-2" />
              <p className="text-xs text-muted-foreground">65% of total storage</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Images & Scans</span>
                <span className="font-medium">0.8 TB</span>
              </div>
              <Progress value={25} className="h-2" />
              <p className="text-xs text-muted-foreground">25% of total storage</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Other Files</span>
                <span className="font-medium">0.4 TB</span>
              </div>
              <Progress value={10} className="h-2" />
              <p className="text-xs text-muted-foreground">10% of total storage</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};