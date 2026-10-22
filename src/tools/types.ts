import React from 'react';

export interface ToolDefinition {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  category: 'text' | 'security' | 'developer' | 'utility';
  badge?: string;
  badgeColor?: string;
  blogSlug?: string; // Connected blog guide slug (auto-links both ways)
  component: React.ComponentType<{ onNavigate: (path: string) => void; tool: ToolDefinition }>;
}
