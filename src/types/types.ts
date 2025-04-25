export type issueObject = {
  cover_date: string;
  id: number;
  image: imageObject;
  issue_number: string;
  name: string;
};

export type imageObject = {
  icon_url: string;
  medium_url: string;
  screen_url: string;
  screen_large_url: string;
  small_url: string;
  super_url: string;
  thumb_url: string;
  tiny_url: string;
  original_url: string;
  image_tags: string;
};

export type replyObject = {
  error: string;
  limit: number;
  offset: number;
  number_of_page_results: number;
  number_of_total_results: number;
  status_code: number;
  results: issueObject[];
};
