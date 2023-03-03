export interface StudyPostType {
  image_url: string;
  title: string;
  contents: string;
  hash_tag: string[];
}

export interface StudyRankType {
  rank: string;
  rankState?: string;
  image: string;
  title: string;
  user_img: string;
  user_name: string;
  contents: string;
  tag: string[];
}
