import React, { ReactNode } from "react";

interface TabsProps {
  children: ReactNode;
  className?: string;
  defaultValue?: string;
}

interface TabsTriggerProps {
  children: ReactNode;
  value: string;
  className?: string;
}

interface TabsContentProps {
  children: ReactNode;
  value: string;
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({ children, className }) => (
  <div className={className}>{children}</div>
);

export const TabsList: React.FC<{ children: ReactNode; className?: string }> = ({ children, className }) => (
  <div className={className}>{children}</div>
);

export const TabsTrigger: React.FC<TabsTriggerProps> = ({ children, value, className }) => (
  <button className={className} data-value={value}>{children}</button>
);

export const TabsContent: React.FC<TabsContentProps> = ({ children, value, className }) => (
  <div className={className} data-value={value}>{children}</div>
);
