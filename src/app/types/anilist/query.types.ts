export type MediaQuery = {
  adultContent?: boolean;
  onList?: boolean;
  averageScore_greater?: number;
  averageScore_lesser?: number;
  genre_in?: string[];
  genre_not_in?: string[];
  format_in?: string[];
  format_not_in?: string[];
  status_in?: string[];
  status_not_in?: string[];
  id?: number;
  search?: string;
  sort?: string;
  startDate_greater?: number;
  startDate_lesser?: number;
  type?: string;
};
