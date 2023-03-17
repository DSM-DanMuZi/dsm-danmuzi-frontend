import { LoungeCategoryType } from "@/utils/types/lounge";
import {
  LoungeDevelop,
  LoungeUiUx,
  LoungePlanning,
  LoungeGraphic,
  LoungeIllustration,
  LoungeVideo,
  LoungeProduct,
} from "@/public/assets";

export const CategoryList: LoungeCategoryType[] = [
  { contents: "개발", image_url: LoungeDevelop },
  { contents: "UX/UI", image_url: LoungeUiUx },
  { contents: "기획", image_url: LoungePlanning },
  { contents: "그래픽", image_url: LoungeGraphic },
  { contents: "일러스트", image_url: LoungeIllustration },
  { contents: "영상/편집", image_url: LoungeVideo },
  { contents: "제품", image_url: LoungeProduct },
];
