import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Shield, AlertTriangle, CheckCircle, Lock, Eye, Users, Key, FileText } from "lucide-react";

const Security = () => {
  const securityMetrics = [
    {
      title: "Security Score",
      value: "94%",
      status: "excellent",
      icon: Shield,
      description: "Overall security rating"
    },
    {
      title: "Failed Login Attempts",
      value: "12",
      status: "warning",
      icon: AlertTriangle,
      description: "Last 24 hours"
    },
    {
      title: "Encrypted Documents", 
      value: "1,247",
      status: "good",
      icon: Lock,
      description: "All documents encrypted"
    },
    {
      title: "Active Sessions",
      value: "89",
      status: "normal",
      icon: Users,
      description: "Current user sessions"
    }
  ];

  const securityEvents = [
    {
      type: "login_attempt",
      severity: "high",
      event: "Multiple failed login attempts",
      user: "unknown@external.com",
      time: "5 minutes ago",
      status: "blocked"
    },
    {
      type: "permission_change",
      severity: "medium", 
      event: "User permissions modified",
      user: "admin@kmrl.gov.in",
      time: "2 hours ago",
      status: "completed"
    },
    {
      type: "document_access",
      severity: "low",
      event: "Sensitive document accessed",
      user: "priya.sharma@kmrl.gov.in",
      time: "4 hours ago",
      status: "authorized"
    },
    {
      type: "backup",
      severity: "info",
      event: "Automated backup completed",
      user: "system",
      time: "6 hours ago",
      status: "success"
    }
  ];

  const complianceChecks = [
    { name: "Data Encryption", status: "passed", score: 100 },
    { name: "Access Controls", status: "passed", score: 95 },
    { name: "Audit Logging", status: "passed", score: 98 },
    { name: "Backup Verification", status: "warning", score: 85 },
    { name: "Password Policy", status: "passed", score: 92 },
    { name: "Session Management", status: "failed", score: 78 }
  ];

  const accessPermissions = [
    { 
      resource: "Confidential Documents",
      users: 5,
      groups: 2,
      lastReview: "2 days ago",
      risk: "medium"
    },
    {
      resource: "Financial Reports", 
      users: 12,
      groups: 3,
      lastReview: "1 week ago",
      risk: "low"
    },
    {
      resource: "Admin Settings",
      users: 2,
      groups: 1, 
      lastReview: "1 day ago",
      risk: "high"
    },
    {
      resource: "Public Documents",
      users: 89,
      groups: 8,
      lastReview: "3 days ago", 
      risk: "low"
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "text-red-600 bg-red-50";
      case "medium":
        return "text-orange-600 bg-orange-50";
      case "low":
        return "text-blue-600 bg-blue-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "passed":
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case "warning":
        return <AlertTriangle className="h-4 w-4 text-orange-600" />;
      case "failed":
        return <AlertTriangle className="h-4 w-4 text-red-600" />;
      default:
        return <Shield className="h-4 w-4 text-gray-600" />;
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-green-100 text-green-800";
    }
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Security</h1>
            <p className="text-muted-foreground mt-2">
              Monitor security status, compliance, and access controls
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <FileText className="mr-2 h-4 w-4" />
              Security Report
            </Button>
            <Button>
              <Shield className="mr-2 h-4 w-4" />
              Run Security Scan
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {securityMetrics.map((metric) => (
            <Card key={metric.title}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{metric.title}</p>
                    <p className="text-2xl font-bold">{metric.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{metric.description}</p>
                  </div>
                  <metric.icon className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Compliance Status</CardTitle>
              <CardDescription>Security compliance check results</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {complianceChecks.map((check) => (
                  <div key={check.name} className="flex items-center justify-between p-3 rounded-lg border border-border">
                    <div className="flex items-center gap-3">
                      {getStatusIcon(check.status)}
                      <span className="font-medium">{check.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">{check.score}%</span>
                      <Progress value={check.score} className="w-16 h-2" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Access Permissions</CardTitle>
              <CardDescription>Resource access controls and reviews</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {accessPermissions.map((permission) => (
                  <div key={permission.resource} className="p-3 rounded-lg border border-border">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium">{permission.resource}</h3>
                      <Badge className={getRiskColor(permission.risk)}>
                        {permission.risk} risk
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {permission.users} users
                      </span>
                      <span>{permission.groups} groups</span>
                      <span>Reviewed {permission.lastReview}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5" />
              Security Events
            </CardTitle>
            <CardDescription>Recent security events and alerts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {securityEvents.map((event, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-border">
                  <div className="flex items-center gap-4">
                    <Badge className={getSeverityColor(event.severity)}>
                      {event.severity}
                    </Badge>
                    <div>
                      <p className="font-medium">{event.event}</p>
                      <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                        <span>User: {event.user}</span>
                        <span>•</span>
                        <span>{event.time}</span>
                      </div>
                    </div>
                  </div>
                  <Badge variant="outline" className="capitalize">
                    {event.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Key className="h-4 w-4" />
                Encryption Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <p className="text-3xl font-bold text-green-600">100%</p>
                <p className="text-sm text-muted-foreground">Documents encrypted</p>
                <p className="text-xs text-muted-foreground mt-2">AES-256 encryption</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                Threat Level
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <p className="text-3xl font-bold text-green-600">Low</p>
                <p className="text-sm text-muted-foreground">Current threat level</p>
                <p className="text-xs text-muted-foreground mt-2">No active threats detected</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-4 w-4" />
                Backup Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">Active</p>
                <p className="text-sm text-muted-foreground">Last backup: 2 hours ago</p>
                <p className="text-xs text-muted-foreground mt-2">Next backup: 22 hours</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Security;