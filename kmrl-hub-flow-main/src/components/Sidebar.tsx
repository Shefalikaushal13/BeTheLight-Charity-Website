import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  FileText,
  FolderOpen,
  Users,
  BarChart3,
  Settings,
  Upload,
  Search,
  Tags,
  Clock,
  Shield,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SidebarProps {
  isOpen: boolean;
  onToggle?: () => void;
  className?: string;
}

const navigationItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/",
    color: "text-primary",
  },
  {
    title: "Documents",
    icon: FileText,
    href: "/documents",
    color: "text-blue-600",
  },
  {
    title: "File Manager",
    icon: FolderOpen,
    href: "/files",
    color: "text-green-600",
  },
  {
    title: "Search & Filter",
    icon: Search,
    href: "/search",
    color: "text-purple-600",
  },
  {
    title: "Upload Center",
    icon: Upload,
    href: "/upload",
    color: "text-accent",
  },
  {
    title: "Categories",
    icon: Tags,
    href: "/categories",
    color: "text-pink-600",
  },
  {
    title: "Recent Activity",
    icon: Clock,
    href: "/activity",
    color: "text-orange-600",
  },
];

const managementItems = [
  {
    title: "Users & Access",
    icon: Users,
    href: "/users",
    color: "text-cyan-600",
  },
  {
    title: "Analytics",
    icon: BarChart3,
    href: "/analytics",
    color: "text-emerald-600",
  },
  {
    title: "Security",
    icon: Shield,
    href: "/security",
    color: "text-red-600",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/settings",
    color: "text-gray-600",
  },
];

export const Sidebar = ({ isOpen, onToggle, className }: SidebarProps) => {
  return (
    <aside
      className={cn(
        "relative flex flex-col bg-surface border-r border-border shadow-soft transition-smooth",
        isOpen ? "w-64" : "w-16",
        className
      )}
    >
      {/* Toggle button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={onToggle}
        className="absolute -right-3 top-6 z-10 h-6 w-6 rounded-full border border-border bg-surface shadow-md hover:shadow-lg"
      >
        {isOpen ? (
          <ChevronLeft className="h-4 w-4" />
        ) : (
          <ChevronRight className="h-4 w-4" />
        )}
      </Button>

      <div className="flex-1 overflow-y-auto py-6">
        {/* Main Navigation */}
        <div className="px-3">
          {isOpen && (
            <h2 className="mb-4 px-3 text-sm font-semibold text-muted-foreground">
              Navigation
            </h2>
          )}
          <nav className="space-y-2">
            {navigationItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-smooth hover:bg-muted/50",
                    isActive
                      ? "bg-primary/10 text-primary shadow-sm"
                      : "text-foreground hover:text-primary"
                  )
                }
              >
                <item.icon className={cn("h-5 w-5 flex-shrink-0", item.color)} />
                {isOpen && <span>{item.title}</span>}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Management Section */}
        <div className="mt-8 px-3">
          {isOpen && (
            <h2 className="mb-4 px-3 text-sm font-semibold text-muted-foreground">
              Management
            </h2>
          )}
          <nav className="space-y-2">
            {managementItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-smooth hover:bg-muted/50",
                    isActive
                      ? "bg-primary/10 text-primary shadow-sm"
                      : "text-foreground hover:text-primary"
                  )
                }
              >
                <item.icon className={cn("h-5 w-5 flex-shrink-0", item.color)} />
                {isOpen && <span>{item.title}</span>}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>

      {/* Footer */}
      {isOpen && (
        <div className="border-t border-border p-4">
          <p className="text-xs text-muted-foreground">
            KMRL Document Management System v2.0
          </p>
        </div>
      )}
    </aside>
  );
};