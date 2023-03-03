import { StaticImageData } from "next/image";

export interface LoungePostType {
  image_url: string;
  publisher: string;
  date: string;
  title: string;
  contents: string;
  hash_tag: string;
}

export interface LoungeCategoryType {
  contents: string;
  image_url: StaticImageData;
}
