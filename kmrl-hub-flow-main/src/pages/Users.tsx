import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Users as UsersIcon, Plus, Shield, Edit, UserX, Mail, Phone } from "lucide-react";

const Users = () => {
  const users = [
    {
      name: "Rajesh Kumar",
      email: "rajesh.kumar@kmrl.gov.in",
      role: "Administrator",
      department: "IT Operations",
      status: "active",
      lastLogin: "2 hours ago",
      permissions: ["Read", "Write", "Delete", "Admin"]
    },
    {
      name: "Priya Sharma",
      email: "priya.sharma@kmrl.gov.in", 
      role: "Document Manager",
      department: "Documentation",
      status: "active",
      lastLogin: "1 day ago",
      permissions: ["Read", "Write", "Manage"]
    },
    {
      name: "Amit Patel",
      email: "amit.patel@kmrl.gov.in",
      role: "Viewer",
      department: "Engineering",
      status: "active",
      lastLogin: "3 hours ago",
      permissions: ["Read"]
    },
    {
      name: "Meera Nair",
      email: "meera.nair@kmrl.gov.in",
      role: "Editor",
      department: "Safety & Compliance",
      status: "inactive",
      lastLogin: "1 week ago",
      permissions: ["Read", "Write"]
    }
  ];

  const roles = [
    {
      name: "Administrator",
      description: "Full system access and user management",
      users: 2,
      permissions: ["All Permissions"]
    },
    {
      name: "Document Manager", 
      description: "Manage documents and categories",
      users: 5,
      permissions: ["Read", "Write", "Manage Documents"]
    },
    {
      name: "Editor",
      description: "Edit and update documents",
      users: 12,
      permissions: ["Read", "Write"]
    },
    {
      name: "Viewer",
      description: "View-only access to documents",
      users: 28,
      permissions: ["Read"]
    }
  ];

  const getStatusColor = (status: string) => {
    return status === "active" ? "text-green-600" : "text-red-600";
  };

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case "Administrator":
        return "bg-red-100 text-red-800";
      case "Document Manager":
        return "bg-blue-100 text-blue-800";
      case "Editor":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Users & Access</h1>
            <p className="text-muted-foreground mt-2">
              Manage user accounts, roles, and permissions
            </p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add User
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Total Users", value: "47", icon: UsersIcon },
            { label: "Active Users", value: "42", icon: UsersIcon },
            { label: "Administrators", value: "2", icon: Shield },
            { label: "Pending Invites", value: "3", icon: Mail }
          ].map((stat) => (
            <Card key={stat.label}>
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <stat.icon className="h-8 w-8 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex gap-4">
          <Input placeholder="Search users..." className="max-w-md" />
          <Button variant="outline">Filter by Role</Button>
          <Button variant="outline">Export Users</Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>User Management</CardTitle>
            <CardDescription>Manage user accounts and access levels</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {users.map((user) => (
                <div key={user.email} className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarFallback>
                        {user.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{user.name}</h3>
                        <Badge className={getRoleBadgeColor(user.role)}>
                          {user.role}
                        </Badge>
                        <Badge variant="outline" className={getStatusColor(user.status)}>
                          {user.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Mail className="h-3 w-3" />
                          {user.email}
                        </span>
                        <span>{user.department}</span>
                        <span>Last login: {user.lastLogin}</span>
                      </div>
                      <div className="flex gap-1 mt-2">
                        {user.permissions.map((permission) => (
                          <Badge key={permission} variant="secondary" className="text-xs">
                            {permission}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <UserX className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Roles & Permissions</CardTitle>
            <CardDescription>Configure user roles and their permissions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {roles.map((role) => (
                <div key={role.name} className="p-4 rounded-lg border border-border">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">{role.name}</h3>
                    <Badge variant="secondary">{role.users} users</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{role.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {role.permissions.map((permission) => (
                      <Badge key={permission} variant="outline" className="text-xs">
                        {permission}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Users;