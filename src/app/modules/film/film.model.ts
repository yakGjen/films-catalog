export interface FilmInterface {
  id: number;
  title: string;
  description: string;
  premiereDate: Date;
  picture: string | null;
  categories: string[];
}