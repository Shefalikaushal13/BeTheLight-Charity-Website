import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tags, Plus, Edit, Trash2, FileText } from "lucide-react";

const Categories = () => {
  const categories = [
    {
      name: "Construction Reports",
      color: "bg-blue-500",
      count: 156,
      description: "Construction progress and site reports",
      usage: 78
    },
    {
      name: "Safety Documents",
      color: "bg-red-500",
      count: 89,
      description: "Safety protocols and incident reports",
      usage: 65
    },
    {
      name: "Budget & Finance",
      color: "bg-green-500",
      count: 134,
      description: "Financial reports and budget allocations",
      usage: 92
    },
    {
      name: "Environmental",
      color: "bg-emerald-500",
      count: 67,
      description: "Environmental impact assessments",
      usage: 45
    },
    {
      name: "Legal & Compliance",
      color: "bg-purple-500",
      count: 78,
      description: "Legal documents and compliance reports",
      usage: 58
    },
    {
      name: "Technical Drawings",
      color: "bg-orange-500",
      count: 234,
      description: "Engineering drawings and schematics",
      usage: 88
    }
  ];

  const autoCategorizationRules = [
    { trigger: "Contains 'safety'", action: "Auto-tag as Safety Documents", accuracy: "95%" },
    { trigger: "From email: finance@kmrl.gov.in", action: "Auto-tag as Budget & Finance", accuracy: "98%" },
    { trigger: "File extension: .dwg", action: "Auto-tag as Technical Drawings", accuracy: "100%" },
    { trigger: "Contains 'environmental impact'", action: "Auto-tag as Environmental", accuracy: "87%" }
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Categories</h1>
            <p className="text-muted-foreground mt-2">
              Organize documents with smart categorization and tagging
            </p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Category
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => (
            <Card key={category.name} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                    <CardTitle className="text-lg">{category.name}</CardTitle>
                  </div>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Documents</span>
                    <Badge variant="secondary">{category.count}</Badge>
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Usage</span>
                      <span>{category.usage}%</span>
                    </div>
                    <Progress value={category.usage} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Tags className="h-5 w-5" />
              Auto-Categorization Rules
            </CardTitle>
            <CardDescription>
              Automatically categorize documents based on content and metadata
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {autoCategorizationRules.map((rule, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-border">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">When: {rule.trigger}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{rule.action}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="outline">{rule.accuracy}</Badge>
                    <Button variant="ghost" size="icon">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              <Plus className="mr-2 h-4 w-4" />
              Add New Rule
            </Button>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Categories;