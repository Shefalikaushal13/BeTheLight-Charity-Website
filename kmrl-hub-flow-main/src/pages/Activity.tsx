import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, FileText, Upload, Download, Users, Edit, Trash2, Eye } from "lucide-react";

const Activity = () => {
  const activities = [
    {
      type: "upload",
      user: "Rajesh Kumar",
      action: "uploaded",
      item: "Metro_Phase_2_Report.pdf",
      time: "2 minutes ago",
      icon: Upload,
      color: "text-green-600"
    },
    {
      type: "view",
      user: "Priya Sharma",
      action: "viewed",
      item: "Safety_Guidelines_2024.docx",
      time: "15 minutes ago",
      icon: Eye,
      color: "text-blue-600"
    },
    {
      type: "edit",
      user: "Admin",
      action: "updated category for",
      item: "Environmental_Impact_Study.pdf",
      time: "1 hour ago",
      icon: Edit,
      color: "text-orange-600"
    },
    {
      type: "download",
      user: "Amit Patel",
      action: "downloaded",
      item: "Construction_Timeline.xlsx",
      time: "2 hours ago",
      icon: Download,
      color: "text-purple-600"
    },
    {
      type: "share",
      user: "Meera Nair",
      action: "shared",
      item: "Budget_Allocation_Q1.pdf",
      time: "3 hours ago",
      icon: Users,
      color: "text-cyan-600"
    },
    {
      type: "delete",
      user: "Admin",
      action: "deleted",
      item: "Old_Contract_Draft.docx",
      time: "4 hours ago",
      icon: Trash2,
      color: "text-red-600"
    }
  ];

  const stats = [
    { label: "Total Activities", value: "1,247", change: "+12%" },
    { label: "Documents Uploaded", value: "89", change: "+8%" },
    { label: "Downloads Today", value: "156", change: "+15%" },
    { label: "Active Users", value: "24", change: "+3%" }
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Recent Activity</h1>
          <p className="text-muted-foreground mt-2">
            Track document activities and user interactions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <Card key={stat.label}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                  <Badge variant="secondary" className="text-green-600">
                    {stat.change}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Activity Timeline
                </CardTitle>
                <CardDescription>Real-time updates on document activities</CardDescription>
              </div>
              <Button variant="outline">Export Activity Log</Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activities.map((activity, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className={`p-2 rounded-full bg-muted ${activity.color}`}>
                    <activity.icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">
                      <span className="text-primary">{activity.user}</span> {activity.action}{" "}
                      <span className="font-semibold">{activity.item}</span>
                    </p>
                    <p className="text-sm text-muted-foreground">{activity.time}</p>
                  </div>
                  <Badge variant="outline" className="capitalize">
                    {activity.type}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Most Active Users</CardTitle>
              <CardDescription>Users with highest activity this week</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {["Rajesh Kumar", "Priya Sharma", "Amit Patel", "Meera Nair"].map((user, index) => (
                  <div key={user} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-sm font-medium">{user.split(' ').map(n => n[0]).join('')}</span>
                      </div>
                      <span className="font-medium">{user}</span>
                    </div>
                    <Badge variant="secondary">{45 - index * 8} actions</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Popular Documents</CardTitle>
              <CardDescription>Most accessed documents this week</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  "Metro_Construction_Guidelines.pdf",
                  "Safety_Protocols_2024.docx", 
                  "Environmental_Report.pdf",
                  "Budget_Analysis.xlsx"
                ].map((doc, index) => (
                  <div key={doc} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium truncate">{doc}</span>
                    </div>
                    <Badge variant="outline">{87 - index * 12} views</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Activity;