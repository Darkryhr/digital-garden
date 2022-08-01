export interface Post {
  data: {
    title: string;
    excerpt: string;
    date: string;
    tags: string[];
    published: boolean;
    index: number;
  };
  content: string;
  slug: string;
}
