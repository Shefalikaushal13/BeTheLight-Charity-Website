import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Search, 
  Filter, 
  Download, 
  Eye, 
  Edit,
  Calendar,
  User,
  Tag
} from "lucide-react";

const documentTypes = [
  { name: "All Documents", count: 12847, color: "bg-primary" },
  { name: "PDF Files", count: 8432, color: "bg-red-500" },
  { name: "Word Documents", count: 2341, color: "bg-blue-500" },
  { name: "Excel Files", count: 1876, color: "bg-green-500" },
  { name: "PowerPoint", count: 198, color: "bg-orange-500" },
];

const recentDocuments = [
  {
    id: 1,
    name: "Q3 Financial Report 2024.pdf",
    type: "PDF",
    size: "2.4 MB",
    uploadedBy: "Sarah Johnson",
    uploadedDate: "2024-01-15",
    department: "Finance",
    tags: ["financial", "quarterly", "report"],
    status: "approved"
  },
  {
    id: 2,
    name: "Project Proposal - Metro Expansion.docx",
    type: "Word",
    size: "1.8 MB", 
    uploadedBy: "Michael Chen",
    uploadedDate: "2024-01-14",
    department: "Engineering",
    tags: ["project", "metro", "expansion"],
    status: "pending"
  },
  {
    id: 3,
    name: "Safety Guidelines Update.pdf",
    type: "PDF",
    size: "3.2 MB",
    uploadedBy: "Emily Davis",
    uploadedDate: "2024-01-13",
    department: "Safety",
    tags: ["safety", "guidelines", "update"],
    status: "approved"
  },
  {
    id: 4,
    name: "Employee Handbook 2024.pdf", 
    type: "PDF",
    size: "5.1 MB",
    uploadedBy: "HR Department",
    uploadedDate: "2024-01-12",
    department: "Human Resources",
    tags: ["hr", "handbook", "policy"],
    status: "approved"
  },
];

const Documents = () => {
  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold">Documents</h1>
            <p className="text-muted-foreground">
              Manage and organize all your documents in one place
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button>
              <FileText className="h-4 w-4 mr-2" />
              Add Document
            </Button>
          </div>
        </div>

        {/* Search and Filters */}
        <Card className="shadow-soft">
          <CardContent className="p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search documents by name, content, tags, or department..."
                  className="pl-9"
                />
              </div>
              <Button variant="secondary">Advanced Search</Button>
            </div>
          </CardContent>
        </Card>

        {/* Document Type Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {documentTypes.map((type) => (
            <Card key={type.name} className="shadow-soft hover:shadow-elevated transition-smooth cursor-pointer">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className={`h-3 w-3 rounded-full ${type.color}`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{type.name}</p>
                    <p className="text-lg font-bold">{type.count.toLocaleString()}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Documents List */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle>Recent Documents</CardTitle>
            <CardDescription>
              Latest documents uploaded and modified across all departments
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentDocuments.map((doc) => (
                <div
                  key={doc.id}
                  className="flex items-center gap-4 p-4 border border-card-border rounded-lg hover:shadow-sm transition-fast"
                >
                  <div className="flex-shrink-0">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0 space-y-2">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium truncate">{doc.name}</h3>
                      <Badge 
                        variant={doc.status === "approved" ? "default" : "secondary"}
                        className="text-xs"
                      >
                        {doc.status}
                      </Badge>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {doc.uploadedBy}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(doc.uploadedDate).toLocaleDateString()}
                      </div>
                      <div className="hidden md:flex items-center gap-1">
                        <Tag className="h-3 w-3" />
                        {doc.department}
                      </div>
                      <span className="hidden md:inline">
                        {doc.size}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {doc.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-center">
              <Button variant="outline">Load More Documents</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Documents;