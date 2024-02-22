export interface ProjectItems {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}
export interface Feature {
  imageUrl: string;
  title: string;
  content: string;
}
export interface featureBlock extends Feature {
  isReversed?: boolean;
}
export interface FooterColumn {
  title: string;
  links: string[];
}

