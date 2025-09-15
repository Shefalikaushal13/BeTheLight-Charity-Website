import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search as SearchIcon, Filter, Calendar, FileText } from "lucide-react";

const Search = () => {
  const searchResults = [
    {
      title: "Metro Construction Guidelines.pdf",
      content: "Comprehensive guidelines for metro construction projects including safety protocols...",
      source: "SharePoint",
      date: "2024-01-15",
      type: "PDF",
      relevance: 95
    },
    {
      title: "Environmental Impact Assessment",
      content: "Detailed environmental impact analysis for the new metro line extension project...",
      source: "Email",
      date: "2024-01-12",
      type: "DOCX",
      relevance: 88
    },
    {
      title: "Budget Allocation Q1 2024",
      content: "Quarterly budget allocation and expenditure report for all metro projects...",
      source: "Google Drive",
      date: "2024-01-10",
      type: "XLSX",
      relevance: 82
    }
  ];

  const filters = [
    { label: "Document Type", options: ["PDF", "DOCX", "XLSX", "Images", "All"] },
    { label: "Source", options: ["Email", "SharePoint", "Google Drive", "WhatsApp", "All"] },
    { label: "Date Range", options: ["Today", "This Week", "This Month", "This Year", "All Time"] }
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Search & Filter</h1>
          <p className="text-muted-foreground mt-2">
            Find documents quickly with advanced search and filtering
          </p>
        </div>

        <Card>
          <CardContent className="p-6">
            <div className="flex gap-4 mb-6">
              <div className="flex-1 relative">
                <SearchIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search across all documents..." 
                  className="pl-10"
                />
              </div>
              <Button>
                <SearchIcon className="mr-2 h-4 w-4" />
                Search
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {filters.map((filter) => (
                <div key={filter.label}>
                  <label className="text-sm font-medium mb-2 block">{filter.label}</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder={`Select ${filter.label.toLowerCase()}`} />
                    </SelectTrigger>
                    <SelectContent>
                      {filter.options.map((option) => (
                        <SelectItem key={option} value={option.toLowerCase()}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Search Results</CardTitle>
            <CardDescription>
              Found {searchResults.length} documents matching your criteria
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {searchResults.map((result, index) => (
                <div key={index} className="border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-lg text-foreground">{result.title}</h3>
                    <Badge variant="secondary">{result.relevance}% match</Badge>
                  </div>
                  <p className="text-muted-foreground mb-3">{result.content}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <FileText className="h-4 w-4" />
                      <span>{result.type}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{result.date}</span>
                    </div>
                    <Badge variant="outline">{result.source}</Badge>
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

export default Search;