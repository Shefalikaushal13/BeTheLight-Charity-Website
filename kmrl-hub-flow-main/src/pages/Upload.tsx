import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Upload as UploadIcon, FileText, Image, Archive, CheckCircle, X } from "lucide-react";

const Upload = () => {
  const uploadMethods = [
    {
      title: "Drag & Drop Files",
      description: "Drag files directly into this area",
      icon: UploadIcon,
      action: "Browse Files"
    },
    {
      title: "Email Integration",
      description: "Automatically sync from Gmail",
      icon: FileText,
      action: "Configure Email"
    },
    {
      title: "Cloud Storage",
      description: "Connect Google Drive, OneDrive",
      icon: Archive,
      action: "Connect Storage"
    },
    {
      title: "WhatsApp Documents",
      description: "Import from WhatsApp Business",
      icon: Image,
      action: "Setup WhatsApp"
    }
  ];

  const recentUploads = [
    { name: "Construction_Report.pdf", size: "3.2 MB", status: "completed", progress: 100 },
    { name: "Site_Survey.docx", size: "1.8 MB", status: "uploading", progress: 75 },
    { name: "Budget_2024.xlsx", size: "892 KB", status: "processing", progress: 45 },
    { name: "Safety_Protocol.pdf", size: "2.1 MB", status: "failed", progress: 0 }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case "failed":
        return <X className="h-4 w-4 text-red-600" />;
      default:
        return <UploadIcon className="h-4 w-4 text-primary" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-green-600";
      case "failed":
        return "text-red-600";
      case "uploading":
        return "text-blue-600";
      default:
        return "text-orange-600";
    }
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Upload Center</h1>
          <p className="text-muted-foreground mt-2">
            Upload and integrate documents from multiple sources
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {uploadMethods.map((method) => (
            <Card key={method.title} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <method.icon className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle className="text-lg">{method.title}</CardTitle>
                    <CardDescription>{method.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Button className="w-full">{method.action}</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-2 border-dashed border-muted-foreground/25 hover:border-primary/50 transition-colors">
          <CardContent className="p-12 text-center">
            <UploadIcon className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">Drop files here to upload</h3>
            <p className="text-muted-foreground mb-4">
              Support for PDF, DOC, XLS, images and more
            </p>
            <Button>Browse Files</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Uploads</CardTitle>
            <CardDescription>Track your upload progress and status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentUploads.map((upload, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-border">
                  <div className="flex items-center gap-3 flex-1">
                    {getStatusIcon(upload.status)}
                    <div className="flex-1">
                      <p className="font-medium">{upload.name}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-sm text-muted-foreground">{upload.size}</span>
                        <Badge 
                          variant="outline" 
                          className={getStatusColor(upload.status)}
                        >
                          {upload.status}
                        </Badge>
                      </div>
                      {upload.status === "uploading" && (
                        <Progress value={upload.progress} className="mt-2 h-2" />
                      )}
                    </div>
                  </div>
                  {upload.status === "completed" && (
                    <span className="text-sm text-muted-foreground">
                      {upload.progress}%
                    </span>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Upload;