export interface JavaTopic {
  label: string;
  /** Route path segment: /java/:slug */
  slug: string;
  /** Sidebar/section grouping, e.g. 'OOP', 'Modern Java' */
  group: string;
  description: string;
  icon: string;
}
