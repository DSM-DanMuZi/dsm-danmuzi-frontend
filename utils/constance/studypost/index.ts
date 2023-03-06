import { StudyPostType, StudyRankType } from "@/utils/types/study";

export const StudyPostDummy: StudyPostType[] = new Array(3).fill({
  image_url: "",
  title: "디자인 잘하는 사람 모여라",
  contents: "디자인을 공유하면서 같이 성장하는 디자이너 스터디입니다!",
  hash_tag: ["컴포넌트", "피그마", "반복작업", "해시태그", "5개만"],
});

export const StudyRankDummy: StudyRankType[] = new Array(3).fill({
  rank: "1",
  rankState: "",
  image: "",
  title: "디자인이 폭동을 일으키다?!?!",
  user_img: "",
  user_name: "김경호",
  contents: "와 지렸다 굉장해 엄청나",
  tag: ["해시태그", "5개만"],
});
