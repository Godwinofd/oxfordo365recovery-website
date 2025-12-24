import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface EmpathyCardProps {
  icon: LucideIcon;
  title: string;
  delay: number;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface GalleryImage {
  id: number;
  url: string;
  alt: string;
}