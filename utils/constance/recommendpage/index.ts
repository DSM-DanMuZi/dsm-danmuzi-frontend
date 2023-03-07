import { RecommendBookType, RecommendDeveloperType } from "@/utils/types/recommendpage";

export const RecommendBookDummy: RecommendBookType[] = new Array(3).fill({
  image_url: "",
  title: "UX 디자이너로 일하고 있습니다",
  name: "Product Designer 장석연",
  type: "디자인",
}); 

export const RecommendDeveloperDummy: RecommendDeveloperType[] = new Array(3).fill({
  image_url: "",
  name: "니꼴라스",
  text: "안녕하세요 니꼴라스,입니다.",
  type: "꿀팁",
}); 