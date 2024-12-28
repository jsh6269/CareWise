const posts = [
  {
    id: 1,
    title: "흰 셔츠 목 부분 얼룩 ㅠㅠ",
    content:
      "흰 셔츠 목 부분에 생긴 얼룩이 잘 지워지지 않아요. 세탁기를 돌려도 남아있고, 표백제를 써도 효과가 별로 없네요. 혹시 효과적인 방법 아시는 분들 계신가요옹?",
    author: { username: "유니삐", profile: "yunhee" },
    like_count: 2,
    dislike_count: 0,
    created_at: "2024-02-04T07:42:50.658501Z",
    comments: [
      {
        content:
          "베이킹소다랑 식초를 섞어서 얼룩진 부분에 문질러 보세요. 몇 분 후에 따뜻한 물로 세탁하면 효과 좋습니다!",
        author: { username: "SUHAN", profile: "suhan" },
        like_count: 2,
        dislike_count: 0,
        created_at: "2024-02-04T07:42:50.658501Z",
        replies: [],
      },
      {
        content:
          "전 구연산 스프레이를 써봤는데, 목 얼룩에 정말 잘 듣더라고요. 약국에서 쉽게 살 수 있어요.",
        author: { username: "지워닝", profile: "jiwon" },
        like_count: 2,
        dislike_count: 0,
        created_at: "2024-02-04T07:42:50.658501Z",
        replies: [],
      },
    ],
  },
  {
    id: 2,
    title: "가죽 자켓은 세탁소에 꼭 맡겨야 하나요?",
    content:
      "가죽 자켓을 처음 샀는데 관리가 어렵네요. 세탁소에 맡겨야 하는 건지, 집에서도 관리할 수 있는 방법이 있는지 궁금합니다.",
    author: { username: "SUHAN", profile: "suhan" },
    like_count: 10,
    dislike_count: 0,
    created_at: "2024-02-04T07:42:50.658501Z",
    comments: [
      {
        content:
          "가죽 전용 클리너를 사용하면 집에서도 충분히 관리 가능해요. 대신 물에 닿으면 안 되니 조심하세요!",
        author: { username: "김시", profile: "defaultProfile" },
        like_count: 2,
        dislike_count: 0,
        created_at: "2024-02-04T07:42:50.658501Z",
        replies: [],
      },
      {
        content:
          "가죽은 세탁소에 맡기는 게 제일 안전합니다. 특히 얼룩이 있으면 전문 처리가 필요할 수도 있어요.",
        author: { username: "세탁소사장", profile: "defaultProfile" },
        like_count: 2,
        dislike_count: 0,
        created_at: "2024-02-04T07:42:50.658501Z",
        replies: [],
      },
    ],
  },
  {
    id: 3,
    title: "울 스웨터가 줄어들었어요... 복구 가능한가요?",
    content:
      "실수로 울 스웨터를 뜨거운 물에 빨았더니 작아졌어요. 혹시 복구할 수 있는 방법이 있을까요?",
    author: { username: "지워닝", profile: "jiwon" },
    like_count: 3,
    dislike_count: 0,
    created_at: "2024-02-04T07:42:50.658501Z",
    comments: [
      {
        content:
          "울 전용 린스를 따뜻한 물에 희석한 뒤 스웨터를 담가서 천천히 늘려보세요. 완전히 복구는 어려워도 어느 정도는 돌아옵니다!",
        author: { username: "SUHAN", profile: "suhan" },
        like_count: 2,
        dislike_count: 0,
        created_at: "2024-02-04T07:42:50.658501Z",
        replies: [],
      },
      {
        content:
          "헤어 컨디셔너로도 비슷하게 복구 가능해요. 미지근한 물에 담가서 부드럽게 늘려보세요.",
        author: { username: "유니삐", profile: "yunhee" },
        like_count: 2,
        dislike_count: 0,
        created_at: "2024-02-04T07:42:50.658501Z",
        replies: [],
      },
    ],
  },
  {
    id: 4,
    title: "겨울 코트 먼지 제거 뭐가 제일 편해?",
    content:
      "겨울 코트 입으면 먼지가 너무 많이 붙어. 특히 검은색 코트가 심각해. 롤클리너 쓰긴 하는데 너무 귀찮아ㅠ 혹시 더 간편한 방법 없을까?",
    author: { username: "김시", profile: "defaultProfile" },
    like_count: 12,
    dislike_count: 0,
    created_at: "2024-02-04T07:42:50.658501Z",
    comments: [
      {
        content:
          "정전기 방지 스프레이 뿌려봐! 먼지가 덜 붙더라고. 그리고 보풀제거기도 의외로 효과 좋아.",
        author: { username: "먼지박사", profile: "defaultProfile" },
        like_count: 2,
        dislike_count: 0,
        created_at: "2024-02-04T07:42:50.658501Z",
        replies: [],
      },
      {
        content: "에어컨 필터 청소용 미니 청소기 써봐. 먼지 엄청 잘 빨아들여!",
        author: { username: "유니삐", profile: "yunhee" },
        like_count: 2,
        dislike_count: 0,
        created_at: "2024-02-04T07:42:50.658501Z",
        replies: [],
      },
    ],
  },
  {
    id: 5,
    title: "청바지 세탁 진짜 꼭 해야 돼?",
    content:
      "청바지는 세탁 자주 하면 안 좋다고 해서 한 달째 안 빨고 있는데... 냄새가 좀 나기 시작했어ㅋㅋㅋ 이거 어쩌면 좋냐? 그냥 빨아야 하나?",
    author: { username: "유니삐", profile: "yunhee" },
    like_count: 15,
    dislike_count: 0,
    created_at: "2024-02-04T07:42:50.658501Z",
    comments: [
      {
        content:
          "냉동실에 넣어봐! 냄새랑 세균 잡는 데 도움 된대. 그래도 너무 오래되면 한번 세탁하는 게 나을 수도 있어.",
        author: { username: "지워닝", profile: "jiwon" },
        like_count: 2,
        dislike_count: 0,
        created_at: "2024-02-04T07:42:50.658501Z",
        replies: [],
      },
      {
        content:
          "전용 데님 세제 써서 미지근한 물에 살살 빨면 돼. 절대 뜨거운 물은 금지!",
        author: { username: "케어마스터", profile: "defaultProfile" },
        like_count: 2,
        dislike_count: 0,
        created_at: "2024-02-04T07:42:50.658501Z",
        replies: [],
      },
    ],
  },
  {
    id: 6,
    title: "케어라벨에 네모 박스랑 점 세 개가 있는데 이게 뭐야?",
    content:
      "세탁기에 넣으려고 케어라벨 봤는데 네모 박스 안에 점 세 개 찍혀 있더라. 검색해봐도 잘 모르겠어. 아는 사람?",
    author: { username: "지워닝", profile: "jiwon" },
    like_count: 8,
    dislike_count: 0,
    created_at: "2024-02-04T07:42:50.658501Z",
    comments: [
      {
        content:
          "그거 건조기 돌려도 된다는 뜻이야! 점 개수가 높을수록 높은 온도 건조가 가능하다는 거임.",
        author: { username: "유니삐", profile: "yunhee" },
        like_count: 2,
        dislike_count: 0,
        created_at: "2024-02-04T07:42:50.658501Z",
        replies: [],
      },
      {
        content:
          "세 개는 고온 건조 가능! 근데 그래도 민감한 옷이면 살짝 조심해서 돌리는 게 좋아.",
        author: { username: "SUHAN", profile: "suhan" },
        like_count: 2,
        dislike_count: 0,
        created_at: "2024-02-04T07:42:50.658501Z",
        replies: [],
      },
    ],
  },
  {
    id: 7,
    title: "이거 손빨래 하라는 건가??",
    content:
      "내 스웨터 라벨 보니까 빨래통 그림에 X 쳐져 있던데, 그럼 무조건 손빨래만 해야 돼? 빨래방에서 맡겨도 되나?",
    author: { username: "SUHAN", profile: "suhan" },
    like_count: 8,
    dislike_count: 0,
    created_at: "2024-02-04T07:42:50.658501Z",
    comments: [
      {
        content:
          "맞아, 그거 세탁기 금지라는 뜻임! 손빨래 하거나 드라이클리닝 맡기는 게 안전함.",
        author: { username: "빨래천재", profile: "defaultProfile" },
        like_count: 2,
        dislike_count: 0,
        created_at: "2024-02-04T07:42:50.658501Z",
        replies: [],
      },
      {
        content:
          "빨래방 맡겨도 되는데 드라이클리닝 되는지 꼭 물어봐야 해. 가끔 안 되는 소재도 있거든.",
        author: { username: "유니삐", profile: "yunhee" },
        like_count: 2,
        dislike_count: 0,
        created_at: "2024-02-04T07:42:50.658501Z",
        replies: [],
      },
    ],
  },
  {
    id: 8,
    title: "검정 티가 자꾸 빨래하면 색이 바래 ㅠㅠ",
    content:
      "검정 티 몇 번 빨았더니 엄청 흐릿해졌어... 이런 거 방지할 방법 없어? 이럴 거면 밝은 색 입는 게 나은 거 같아ㅠ",
    author: { username: "김시", profile: "defaultProfile" },
    like_count: 11,
    dislike_count: 0,
    created_at: "2024-02-04T07:42:50.658501Z",
    comments: [
      {
        content:
          "검정 옷은 뒤집어서 찬물로 세탁해야 해! 전용 세제 쓰면 색 바래는 거 좀 덜하더라.",
        author: { username: "빨래천재", profile: "defaultProfile" },
        like_count: 2,
        dislike_count: 0,
        created_at: "2024-02-04T07:42:50.658501Z",
        replies: [],
      },
      {
        content:
          "빨래 끝난 다음에 식초로 헹궈보는 것도 추천! 색 유지에 효과 있음.",
        author: { username: "유니삐", profile: "yunhee" },
        like_count: 2,
        dislike_count: 0,
        created_at: "2024-02-04T07:42:50.658501Z",
        replies: [],
      },
    ],
  },
  {
    id: 9,
    title: "나 최윤흰데 이거 좋아요 누르면 돈들어온다",
    content: "제곧내 ㅋㅋ",
    author: { username: "유니삐", profile: "yunhee" },
    like_count: 0,
    dislike_count: 15,
    created_at: "2024-02-04T07:42:50.658501Z",
    comments: [
      {
        content: "스팸 신고합니다",
        author: { username: "SUHAN", profile: "suhan" },
        like_count: 5,
        dislike_count: 5,
        created_at: "2024-02-04T07:42:50.658501Z",
        replies: [],
      },
      {
        content: "진짜 개노잼",
        author: { username: "지워닝", profile: "jiwon" },
        like_count: 5,
        dislike_count: 5,
        created_at: "2024-02-04T07:42:50.658501Z",
        replies: [
          {
            content: "ㄹㅇ ㅇㅈ",
            author: { username: "김시", profile: "defaultProfile" },
            like_count: 5,
            dislike_count: 1,
            created_at: "2024-02-04T07:42:50.658501Z",
          },
        ],
      },
    ],
  },
  {
    id: 10,
    title: "옷 정리 어떻게 해? 옷장이 터질 것 같아ㅠ",
    content:
      "옷이 점점 늘어나는데 버리긴 아깝고 옷장은 꽉 차서 답이 없다ㅋㅋ 다들 옷 정리 어떻게 해?",
    author: { username: "맥시멀리스트", profile: "default" },
    like_count: 0,
    dislike_count: 0,
    created_at: "2024-02-04T07:42:50.658501Z",
    comments: [
      {
        content:
          "일단 1년 넘게 안 입은 거는 버리거나 중고로 팔아! 그게 정리의 시작임.",
        author: { username: "미니멀리스트", profile: "default" },
        like_count: 5,
        dislike_count: 5,
        created_at: "2024-02-04T07:42:50.658501Z",
        replies: [],
      },
      {
        content:
          "요즘 옷걸이에 여러 벌 걸 수 있는 멀티 옷걸이 같은 거 팔더라. 그거 써봐. 진짜 신세계임ㅋㅋ",
        author: { username: "정리마법사", profile: "default" },
        like_count: 5,
        dislike_count: 5,
        created_at: "2024-02-04T07:42:50.658501Z",
        replies: [],
      },
    ],
  },
  {
    id: 11,
    title: "가죽 자켓 크랙 생겼는데 어쩌냐?",
    content:
      "가죽 자켓이 너무 말라서 그런지 크랙이 생겼어ㅠㅠ 이거 그냥 끝난 거야? 아니면 복구 가능?",
    author: { username: "김시", profile: "default" },
    like_count: 0,
    dislike_count: 0,
    created_at: "2024-02-04T07:42:50.658501Z",
    comments: [
      {
        content:
          "가죽 전용 오일 발라줘봐. 크랙이 심하지 않으면 어느 정도 복구될 거야. 근데 자주 관리 안 하면 더 심해질 수도 있음.",
        author: { username: "유니삐", profile: "default" },
        like_count: 5,
        dislike_count: 5,
        created_at: "2024-02-04T07:42:50.658501Z",
        replies: [],
      },
      {
        content:
          "크랙 생겼으면 가죽 복원 전문 업체 맡기는 게 안전함. 집에서 대충 했다가 더 망가질 수도 있어ㅠ",
        author: { username: "지워닝", profile: "default" },
        like_count: 5,
        dislike_count: 5,
        created_at: "2024-02-04T07:42:50.658501Z",
        replies: [],
      },
    ],
  },
  {
    id: 12,
    title: "드라이클리닝 안 맡기고 집에서 셀프 관리 가능한 옷들?",
    content:
      "드라이 맡기자니 돈 너무 나가고, 그냥 집에서 관리할 수 있는 옷은 어떤 거야? 드라이 전용이라고 써 있으면 무조건 맡겨야 돼?",
    author: { username: "지워닝", profile: "default" },
    like_count: 0,
    dislike_count: 0,
    created_at: "2024-02-04T07:42:50.658501Z",
    comments: [
      {
        content:
          "울이나 실크도 전용 세제 쓰면 집에서 가능! 근데 가죽이나 털 달린 거는 무조건 드라이 맡기는 게 안전함.",
        author: { username: "유니삐", profile: "default" },
        like_count: 5,
        dislike_count: 5,
        created_at: "2024-02-04T07:42:50.658501Z",
        replies: [],
      },
      {
        content:
          "드라이 전용이라도 손빨래로 살살 하면 되는 경우 많아. 유튜브 검색하면 꽤 도움 됨ㅋㅋ",
        author: { username: "갓수한", profile: "default" },
        like_count: 5,
        dislike_count: 5,
        created_at: "2024-02-04T07:42:50.658501Z",
        replies: [],
      },
    ],
  },
  {
    id: 13,
    title: "운동복 세탁할 때 주의할 점 뭐 있음?",
    content:
      "땀냄새 때문에 운동복 자주 빨아야 되는데, 오래 입으려면 세탁할 때 조심해야 되는 게 있을까?",
    author: { username: "갓수한", profile: "default" },
    like_count: 0,
    dislike_count: 0,
    created_at: "2024-02-04T07:42:50.658501Z",
    comments: [
      {
        content:
          "찬물 세탁 + 세제 소량만 써! 그리고 절대 건조기 돌리면 안 됨. 다 늘어나거나 망가짐.",
        author: { username: "유니삐", profile: "default" },
        like_count: 5,
        dislike_count: 5,
        created_at: "2024-02-04T07:42:50.658501Z",
        replies: [],
      },
      {
        content:
          "냄새 심하면 식초로 헹구는 것도 괜찮아. 그리고 섬유유연제는 절대 쓰지 마. 기능성 다 죽음.",
        author: { username: "김시", profile: "default" },
        like_count: 5,
        dislike_count: 5,
        created_at: "2024-02-04T07:42:50.658501Z",
        replies: [],
      },
    ],
  },
];

export default posts;
