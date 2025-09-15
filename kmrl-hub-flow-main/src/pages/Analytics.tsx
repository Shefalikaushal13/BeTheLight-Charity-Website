import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BarChart3, TrendingUp, FileText, Users, Download, Eye, Calendar, Filter } from "lucide-react";

const Analytics = () => {
  const metrics = [
    {
      title: "Total Documents",
      value: "1,247",
      change: "+12%",
      trend: "up",
      icon: FileText,
      description: "Documents in system"
    },
    {
      title: "Active Users",
      value: "89",
      change: "+8%", 
      trend: "up",
      icon: Users,
      description: "Monthly active users"
    },
    {
      title: "Downloads",
      value: "3,456",
      change: "+15%",
      trend: "up", 
      icon: Download,
      description: "Total downloads this month"
    },
    {
      title: "Page Views",
      value: "12,890",
      change: "+23%",
      trend: "up",
      icon: Eye,
      description: "Document views this month"
    }
  ];

  const storageData = [
    { type: "PDFs", size: "12.3 GB", percentage: 45, color: "bg-blue-500" },
    { type: "Images", size: "8.7 GB", percentage: 32, color: "bg-green-500" },
    { type: "Documents", size: "4.2 GB", percentage: 15, color: "bg-purple-500" },
    { type: "Others", size: "2.1 GB", percentage: 8, color: "bg-orange-500" }
  ];

  const popularDocuments = [
    { name: "Safety Guidelines 2024", views: 1245, downloads: 89 },
    { name: "Metro Construction Manual", views: 987, downloads: 67 },
    { name: "Environmental Report Q4", views: 756, downloads: 45 },
    { name: "Budget Allocation 2024", views: 654, downloads: 38 },
    { name: "Technical Specifications", views: 543, downloads: 29 }
  ];

  const departmentUsage = [
    { department: "Engineering", documents: 456, usage: 78 },
    { department: "Safety & Compliance", documents: 234, usage: 65 },
    { department: "Finance", documents: 189, usage: 92 },
    { department: "Operations", documents: 167, usage: 54 },
    { department: "Legal", documents: 123, usage: 43 }
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Analytics</h1>
            <p className="text-muted-foreground mt-2">
              Insights on document usage, storage, and user activity
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Calendar className="mr-2 h-4 w-4" />
              Date Range
            </Button>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
            <Button>Export Report</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metric) => (
            <Card key={metric.title}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{metric.title}</p>
                    <p className="text-2xl font-bold">{metric.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{metric.description}</p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <metric.icon className="h-8 w-8 text-primary" />
                    <Badge variant="secondary" className="text-green-600">
                      <TrendingUp className="mr-1 h-3 w-3" />
                      {metric.change}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Storage Usage by Type</CardTitle>
              <CardDescription>Distribution of file types in storage</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {storageData.map((item) => (
                  <div key={item.type} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                        <span className="font-medium">{item.type}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{item.size}</span>
                    </div>
                    <Progress value={item.percentage} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Department Usage</CardTitle>
              <CardDescription>Document usage by department</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {departmentUsage.map((dept) => (
                  <div key={dept.department} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{dept.department}</span>
                      <Badge variant="secondary">{dept.documents} docs</Badge>
                    </div>
                    <Progress value={dept.usage} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Popular Documents
            </CardTitle>
            <CardDescription>Most viewed and downloaded documents this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {popularDocuments.map((doc, index) => (
                <div key={doc.name} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-bold">#{index + 1}</span>
                    </div>
                    <div>
                      <p className="font-medium">{doc.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {doc.views} views • {doc.downloads} downloads
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="outline">
                      <Eye className="mr-1 h-3 w-3" />
                      {doc.views}
                    </Badge>
                    <Badge variant="secondary">
                      <Download className="mr-1 h-3 w-3" />
                      {doc.downloads}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Upload Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">89</p>
                <p className="text-sm text-muted-foreground">Documents uploaded this week</p>
                <Badge variant="secondary" className="mt-2 text-green-600">
                  +15% vs last week
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Storage Efficiency</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">73%</p>
                <p className="text-sm text-muted-foreground">Storage utilization</p>
                <Progress value={73} className="mt-3 h-2" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>User Engagement</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">94%</p>
                <p className="text-sm text-muted-foreground">Active user retention</p>
                <Badge variant="secondary" className="mt-2 text-green-600">
                  +3% this month
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Analytics;