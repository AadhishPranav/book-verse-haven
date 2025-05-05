
export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  coverUrl: string;
  genres?: string[];
  publishedDate?: string;
  publisher?: string;
  language?: string;
  pages?: number;
  format?: string;
  fileSize?: string;
  addedDate?: string;
  isFeatured?: boolean;
  isPopular?: boolean;
  isNew?: boolean;
}
