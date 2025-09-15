import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { FolderOpen, File, Download, Upload, MoreVertical } from "lucide-react";

const FileManager = () => {
  const folders = [
    { name: "Incoming Documents", count: 45, type: "inbox" },
    { name: "Processed Files", count: 128, type: "processed" },
    { name: "Archives", count: 89, type: "archive" },
    { name: "Shared Documents", count: 34, type: "shared" },
  ];

  const recentFiles = [
    { name: "Meeting_Minutes_2024.pdf", size: "2.4 MB", modified: "2 hours ago", type: "pdf" },
    { name: "Budget_Report_Q4.xlsx", size: "1.8 MB", modified: "4 hours ago", type: "excel" },
    { name: "Project_Proposal.docx", size: "856 KB", modified: "1 day ago", type: "word" },
    { name: "Site_Photos.zip", size: "12.3 MB", modified: "2 days ago", type: "archive" },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">File Manager</h1>
          <p className="text-muted-foreground mt-2">
            Organize and manage your document repository
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Input placeholder="Search files and folders..." className="max-w-md" />
          <Button>
            <Upload className="mr-2 h-4 w-4" />
            Upload Files
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {folders.map((folder) => (
            <Card key={folder.name} className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <FolderOpen className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="font-medium">{folder.name}</h3>
                    <p className="text-sm text-muted-foreground">{folder.count} files</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Files</CardTitle>
            <CardDescription>Recently accessed documents</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentFiles.map((file) => (
                <div key={file.name} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50">
                  <div className="flex items-center gap-3">
                    <File className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">{file.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {file.size} • Modified {file.modified}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">{file.type}</Badge>
                    <Button variant="ghost" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
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

export default FileManager;