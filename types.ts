export enum RoutePath {
  HOME = '#/',
  TERMS = '#/terms',
  PRIVACY = '#/privacy',
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}