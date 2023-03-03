import { StudyPostType } from "@/utils/types/study";

export const StudyPostDummy: StudyPostType[] = new Array(3).fill({
  image_url: "",
  title: "디자인 잘하는 사람 모여라",
  contents: "디자인을 공유하면서 같이 성장하는 디자이너 스터디입니다!",
  hash_tag: ["컴포넌트", "피그마", "반복작업", "해시태그", "5개만"],
});
