import React, { ReactNode, CSSProperties } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export const Card: React.FC<CardProps> = ({ children, className, style }) => (
  <div className={className} style={style}>{children}</div>
);

export const CardHeader: React.FC<{ children: ReactNode; className?: string }> = ({ children, className }) => (
  <div className={className}>{children}</div>
);

export const CardTitle: React.FC<{ children: ReactNode; className?: string }> = ({ children, className }) => (
  <h3 className={className}>{children}</h3>
);

export const CardContent: React.FC<{ children: ReactNode; className?: string }> = ({ children, className }) => (
  <div className={className}>{children}</div>
);
