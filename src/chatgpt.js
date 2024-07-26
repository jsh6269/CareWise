const careLabelInfo = require("./mappingData/Carelabel-info.json");

const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: `${process.env.REACT_APP_OPENAI_API_KEY}`,
  dangerouslyAllowBrowser: true,
});

async function LabelSearchAPI(base64Image) {
  const stream = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: `I'll give you the information of the laundry symbols across a total of 95 rows below. Each row consists of three items and items are separated by a tab. Each item is "laundry symbol's number", "laundry symbol's description", and "shape of the laundry symbol". Now, please answer the laundry symbol number that best matches the image I provided to you. The provided image has washing symbols which are different from each other. If the provided image has multiple laundry symbols, please answer the "laundry symbol's number" of each of them.  If you're not sure of your answer, do not answer anything. Answer with only numbers and answer only one number per line. Never give unnecessary explanations. Don't say that you understand. 
1	Machine dryable.	A circle inscribed in a square
2	Not machine dryable.	A circle inscribed in a square with an X mark overlaying it
3	Machine dry at low temperature.    A circle inscribed in a square with a dot at the center
4	Machine dry at medium temperature.	  A circle inscribed in a square with two dots at the center
5	Machine dry at high temperature.	A circle inscribed in a square with three dots at the center
6	Dry in the shade.	A square with two positive oblique lines at the top left corner
7	Dry in the shade.	A sun shaped symbol with multiple positive oblique lines at the top left corner
8	Hang to dry.	A vertically long bar inside a square
9	Hang to dry in the shade.		A vertically long bar inside a square with a positive oblique line at the top left corner
10	Lay flat to dry.		A horizontally long bar inside a square
11	Lay flat to dry in the shade.		A horizontally long bar inside a square with a positive oblique line at the top left corner
12	Line dry while wet.	Three vertically long bars inside a square
13	Hang to dry.		A square with a downwardly convex curve at the upper corner
14	Hang to dry in the shade.		A square with a downwardly convex curve at the upper corner and two positive oblique lines at the top left corner
15	Hang on a hanger to dry.		A sun shaped symbol which written '옷걸이' at the center
16	Hang on a hanger to dry in the shade.	A sun shaped symbol which written '옷걸이' at the center and multiple positive oblique lines at the top left corner
17	Lay flat to dry.	A sun shaped symbol which written '뉘어서' at the center
18	Lay flat to dry in the shade.		A sun shaped symbol which written '뉘어서' at the center and multiple positive oblique lines at the top left corner
19	Gently wring out.	Three distorted circles attached together which written '약', '하', '게' inside each of them
20	Do not wring.	Three distorted circles attached together with X mark overlaying it
21	Machine washable.		A bowl shaped symbol which has a wavy line inside of it
22	Hand wash.	A bowl shaped symbol which has a wavy line and a hand-shaped symbol inside of it
23	Wash gently.	A bowl shaped symbol which has a wavy line inside of it and has a horizontal line below it
24	Wash very gently.	A bowl shaped symbol which has a wavy line inside of it and has two horizontal lines below it
25	Not machine washable.		A bowl shaped symbol which has a wavy line inside of it and X mark overlaying it
26	Wash at 30°C.	A bowl shaped symbol which has a wavy line inside of it and written '30°' inside of it
27	Wash gently at 30°C.	A bowl shaped symbol which has a wavy line inside of it and written '30°' inside of it and has a horizontal line below it
28	Wash at 40°C.		A bowl shaped symbol which has a wavy line inside of it and written '40°' inside of it
29	Wash at 50°C.		A bowl shaped symbol which has a wavy line inside of it and written '50°' inside of it
30	Wash at 60°C.		A bowl shaped symbol which has a wavy line inside of it and written '60°' inside of it
31	Wash at 70°C.		A bowl shaped symbol which has a wavy line inside of it and written '70°' inside of it
32	Wash at 80°C.		A bowl shaped symbol which has a wavy line inside of it and written '80°' inside of it
33	Wash at 90°C.		A bowl shaped symbol which has a wavy line inside of it and written '90°' inside of it
34	Wash at 95°C (Boil safe).		A bowl shaped symbol which has a wavy line inside of it and written '95°' inside of it
35	Wash at 30°C.		A bowl shaped symbol which has a wavy line inside of it and has a dot in the center of it
36	Wash at 40°C.		A bowl shaped symbol which has a wavy line inside of it and has two dots in the center of it
37	Wash at 50°C.		A bowl shaped symbol which has a wavy line inside of it and has three dots in the center of it
38	Wash at 60°C.		A bowl shaped symbol which has a wavy line inside of it and has four dots in the center of it
39	Wash at 70°C.		A bowl shaped symbol which has a wavy line inside of it and has five dots in the center of it
40	Wash at 95°C (Boil safe).		A bowl shaped symbol which has a wavy line inside of it and has six dots in the center of it
41	Hand wash.		A bowl shaped symbol which has a wavy line inside of it and written '손세탁' on a wavy line
42	Hand wash with a neutral detergent at a water temperature of 30˚C.	A bowl shaped symbol which has a wavy line inside of it and written '손세탁' on a wavy line and written '30°C 중성' below a wavy line
43	Wash at a water temperature of 30˚C.		A rectangular which has a horizontal line at the top of it and written '30°C' at the center of it
44	Wash gently at a water temperature of 30˚C.	A rectangular which has a horizontal line at the top of it and written '약 30°C' at the center of it
45	Wash gently with a neutral detergent at a water temperature of 30˚C.	A rectangular which has a horizontal line at the top of it and written '약 30°C 중성' at the center of it
46	Wash at a water temperature of 40˚C.	A rectangular which has a horizontal line at the top of it and written '40°C' at the center of it
47	Wash gently at a water temperature of 40˚C.	A rectangular which has a horizontal line at the top of it and written '약 40°C' at the center of it
48	Wash at a water temperature of 50˚C.	A rectangular which has a horizontal line at the top of it and written '50°C' at the center of it
49	Wash at a water temperature of 60˚C.	A rectangular which has a horizontal line at the top of it and written '60°C' at the center of it
50	Wash at a water temperature of 70˚C.	A rectangular which has a horizontal line at the top of it and written '70°C' at the center of it
51	Wash at a water temperature of 80˚C.	A rectangular which has a horizontal line at the top of it and written '80°C' at the center of it
52	Wash at a water temperature of 90˚C.	A rectangular which has a horizontal line at the top of it and written '90°C' at the center of it
53	Wash at a water temperature of 95˚C. (Can be boiled.)	A rectangular which has a horizontal line at the top of it and written '95°C' at the center of it
54	Ironable.	A horizontal rectangle connected with "a rotated L-shape that is flipped and rotated 90 degrees to the left" at the top right corner
55	Non-ironable.	A horizontal rectangle connected with "a rotated L-shape that is flipped and rotated 90 degrees to the left" at the top right corner and X mark overlaying it
56	Steam ironing is possible.	A horizontal rectangle connected with "a rotated L-shape that is flipped and rotated 90 degrees to the left" at the top right corner and a positive oblique line and a negative oblique line at the bottom of the center
57	Steam ironing is not possible.	A horizontal rectangle connected with "a rotated L-shape that is flipped and rotated 90 degrees to the left" at the top right corner and a positive oblique line and a negative oblique line at the bottom of the center and X mark overlaying it
58	Iron at a maximum temperature of 100˚C.	A horizontal rectangle connected with "a rotated L-shape that is flipped and rotated 90 degrees to the left" at the top right corner and a dot inside of it
59	Iron at a maximum temperature of 150˚C.	A horizontal rectangle connected with "a rotated L-shape that is flipped and rotated 90 degrees to the left" at the top right corner and two dots inside of it
60	Iron at a maximum temperature of 200˚C.	A horizontal rectangle connected with "a rotated L-shape that is flipped and rotated 90 degrees to the left" at the top right corner and three dots inside of it
61	Iron at 80-120˚C.	A horizontal rectangle connected with "a rotated L-shape that is flipped and rotated 90 degrees to the left" at the top right corner and written '80~120°C' inside of it
62	Iron at 140-160˚C.	A horizontal rectangle connected with "a rotated L-shape that is flipped and rotated 90 degrees to the left" at the top right corner and written '140~160°C' inside of it
63	Iron at 180-210˚C.	A horizontal rectangle connected with "a rotated L-shape that is flipped and rotated 90 degrees to the left" at the top right corner and written '180~210°C' inside of it
64	Iron with a cloth over the fabric.	A horizontal rectangle connected with "a rotated L-shape that is flipped and rotated 90 degrees to the left" at the top right corner and a wavy line below it
65	Iron at 80-120˚C with a cloth over the fabric.	A horizontal rectangle connected with "a rotated L-shape that is flipped and rotated 90 degrees to the left" at the top right corner and written '80~120°C' inside of it and a wavy line below it
66	Iron at 140-160˚C with a cloth over the fabric.	A horizontal rectangle connected with "a rotated L-shape that is flipped and rotated 90 degrees to the left" at the top right corner and written '140~160°C' inside of it and a wavy line below it
67	Iron at 180-210˚C with a cloth over the fabric.	A horizontal rectangle connected with "a rotated L-shape that is flipped and rotated 90 degrees to the left" at the top right corner and written '180~210°C' inside of it and a wavy line below it
68	Do not use bleach.	A triangle with an X mark overlaying it
69	Use non-chlorine bleach.	A triangle with two diagonal lines inside
70	Use chlorine bleach.	A triangle with 'CL' written inside
71	All bleaches can be used.	A blank triangle
72	Do not use bleach.	A triangle filled with black and an X mark overlaying it
73	Use oxygen bleach.	A triangle with '산소 표백' written inside
74	Do not use oxygen bleach.	A triangle with '산소 표백' inside and an X mark overlaying it
75	Use chlorine bleach.	A triangle with '염소 표백' written inside
76	Do not use chlorine bleach.	A triangle with '염소 표백' written inside and an X mark overlaying it
77	Use oxygen and chlorine bleaches.	A triangle with '염소, 산소 표백' written inside
78	Do not use oxygen or chlorine bleaches.	A triangle with '염소, 산소 표백' written inside and an X mark overlaying it
79	Dry cleaning is possible.	A blank circle.
80	Dry clean at a low temperature.	A circle with a negative oblique line at the bottom right corner.
81	Dry clean in a short period of time.	A circle with a positive oblique line at the bottom left corner.
82	Dry clean with minimal moisture.	A circle with a positive oblique line at the top left corner.
83	Dry clean without steam.	A circle with a negative oblique line at the top right corner.
84	Dry cleaning is possible.	A circle with a wavy line inside, and '드라이' written inside.
85	Dry clean at a professional service.	A circle with a wavy line inside, and '드라이' written inside, with a single line segment below the circle.
86	Dry cleaning is not possible.	A circle with a wavy line inside, and '드라이' written inside, with an X mark overlaying it.
87	Dry clean with petroleum-based solvents.	A circle with a wavy line inside, with '드라이' above the wavy line and '석유계' below the wavy line
88	Dry clean with all solvents.	A circle with an 'A' written inside.
89	Dry clean with hydrocarbon solvents.	A circle with an 'F' written inside.
90	Dry clean with perchloroethylene solvent.	A circle with a 'P' written inside.
91	Dry cleaning is not possible.	A circle with an X mark overlaying it.
92	Wet cleaning is not possible.	A circle filled with black and an X mark overlaying it.
93	Wet cleaning is possible.	A circle with a 'W' written inside.
94	Wet clean gently.	A circle with a 'W' written inside, and a single line segment below the circle.
95	Wet cleaning is not possible.	A circle with a 'W' written inside, with an X mark overlaying it.
`,
          },
          {
            type: "image_url",
            image_url: {
              url: `data:image/jpeg;base64,${base64Image}`,
              detail: "low",
            },
          },
        ],
      },
    ],
    stream: true,
    max_tokens: 500,
  });

  const listing = [];

  for await (const chunk of stream) {
    const temp = chunk.choices[0]?.delta?.content || "";
    if (temp === "" || temp === "\n") {
      continue;
    }

    let finish = 0;

    for (let key in careLabelInfo) {
      for (let insideKey in careLabelInfo[key]) {
        if (insideKey === "number") {
          if (careLabelInfo[key][insideKey] === temp) {
            listing.push(key);
            finish = 1;
            break;
          }
        }
      }
      if (finish === 1) {
        break;
      }
    }
  }

  return listing;
}

async function CareLabelSearchAPI(cloth, mat1, per1, mat2, per2, mat3, per3) {
  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: `내가 가진 ${cloth}의 재질이 ${mat1}가 ${per1}%이고, ${mat2}가 ${per2}%이고, ${mat3}가 ${per3}%이라는 사실을 알았어. ${mat2}나 ${mat3}이 "-"인 경우에는, 해당 소재는 없다는 뜻이고, "-"가 아닌 텍스트로 이루어진 소재들만 유효해. 첫번쨰로 이 옷의 적절한 세탁법, 관리법, 주의해야할 사항을 매우 꼼꼼하게 길고 자세하게 '~하세요'체로 알려줘. 두번째로 해당 옷에 많이 사용될 것 같은 세탁기호 5개를 아래의 리스트에서 번호로 뽑아서 오직 숫자로만 ", "으로 구분하여 일렬로 대답해. 첫번째, 두번째에 대한 대답을 시작할 때는 부연 설명 없이 "1.", "2."로 시작하는 문단으로 나눠서 대답해. 사용자에 대한 언급을 하지 말고, 정보만 전달해. 
            1	Machine dryable.
            2	Not machine dryable.
            3	Machine dry at low temperature.
            4	Machine dry at medium temperature.
            5	Machine dry at high temperature.
            6	Dry in the shade.
            7	Dry in the shade.
            8	Hang to dry.
            9	Hang to dry in the shade.
            10	Lay flat to dry.
            11	Lay flat to dry in the shade.
            12	Line dry while wet.
            13	Hang to dry.
            14	Hang to dry in the shade.
            15	Hang on a hanger to dry.
            16	Hang on a hanger to dry in the shade.
            17	Lay flat to dry.
            18	Lay flat to dry in the shade.
            19	Gently wring out.
            20	Do not wring.
            21	Machine washable.
            22	Hand wash.
            23	Wash gently.
            24	Wash very gently.
            25	Not machine washable.
            26	Wash at 30°C.
            27	Wash gently at 30°C.
            28	Wash at 40°C.
            29	Wash at 50°C.
            30	Wash at 60°C.
            31	Wash at 70°C.
            32	Wash at 80°C.
            33	Wash at 90°C.
            34	Wash at 95°C (Boil safe).
            35	Wash at 30°C.
            36	Wash at 40°C.
            37	Wash at 50°C.
            38	Wash at 60°C.
            39	Wash at 70°C.
            40	Wash at 95°C (Boil safe).
            41	Hand wash.
            42	Hand wash with a neutral detergent at a water temperature of 30˚C.
            43	Wash at a water temperature of 30˚C.
            44	Wash gently at a water temperature of 30˚C.
            45	Wash gently with a neutral detergent at a water temperature of 30˚C.
            46	Wash at a water temperature of 40˚C.
            47	Wash gently at a water temperature of 40˚C.
            48	Wash at a water temperature of 50˚C.
            49	Wash at a water temperature of 60˚C.
            50	Wash at a water temperature of 70˚C.
            51	Wash at a water temperature of 80˚C.
            52	Wash at a water temperature of 90˚C.
            53	Wash at a water temperature of 95˚C. (Can be boiled.)
            54	Ironable.
            55	Non-ironable.
            56	Steam ironing is possible.
            57	Steam ironing is not possible.
            58	Iron at a maximum temperature of 100˚C.
            59	Iron at a maximum temperature of 150˚C.
            60	Iron at a maximum temperature of 200˚C.
            61	Iron at 80-120˚C.
            62	Iron at 140-160˚C.
            63	Iron at 180-210˚C.
            64	Iron with a cloth over the fabric.
            65	Iron at 80-120˚C with a cloth over the fabric.
            66	Iron at 140-160˚C with a cloth over the fabric.
            67	Iron at 180-210˚C with a cloth over the fabric.
            68	Do not use bleach.
            69	Use non-chlorine bleach.
            70	Use chlorine bleach.
            71	All bleaches can be used.
            72	Do not use bleach.
            73	Use oxygen bleach.
            74	Do not use oxygen bleach.
            75	Use chlorine bleach.
            76	Do not use chlorine bleach.
            77	Use oxygen and chlorine bleaches.
            78	Do not use oxygen or chlorine bleaches.
            79	Dry cleaning is possible.
            80	Dry clean at a low temperature.
            81	Dry clean in a short period of time.
            82	Dry clean with minimal moisture.
            83	Dry clean without steam.
            84	Dry cleaning is possible.
            85	Dry clean at a professional service.
            86	Dry cleaning is not possible.
            87	Dry clean with petroleum-based solvents.
            88	Dry clean with all solvents.
            89	Dry clean with hydrocarbon solvents.
            90	Dry clean with perchloroethylene solvent.
            91	Dry cleaning is not possible.
            92	Wet cleaning is not possible.
            93	Wet cleaning is possible.
            94	Wet clean gently.
            95	Wet cleaning is not possible.`,
          },
        ],
      },
    ],
    stream: true,
    max_tokens: 1500,
  });

  let answerString = "";

  for await (const chuck of response) {
    const temp = chuck.choices[0]?.delta?.content || "";
    answerString += temp;
  }

  // 정규 표현식을 사용하여 숫자와 점으로 시작하는 각 부분을 추출합니다.
  const regex = /[12]\.\s*([\s\S]*?)(?=\n[12]\.\s|$)/g;
  const matches = [...answerString.matchAll(regex)];

  // 첫 번째 요소를 가져옵니다.
  const firstAnswer = matches[0] ? matches[0][1].trim() : "";

  // 두 번째 요소를 가져와서 처리합니다.
  const secondAnswer = matches[1] ? matches[1][1].trim() : "";
  const numbersArray = secondAnswer.split(",").map((item) => item.trim());

  let listing = [];

  for (const temp of numbersArray) {
    let finish = 0;
    for (let key in careLabelInfo) {
      for (let insideKey in careLabelInfo[key]) {
        if (insideKey === "number") {
          if (careLabelInfo[key][insideKey] === temp) {
            listing.push(key);
            finish = 1;
            break;
          }
        }
      }
      if (finish === 1) {
        break;
      }
    }
  }

  const Answer = [firstAnswer, listing];
  return Answer;
}

async function CareSearchAPI(searchText) {
  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: `${searchText}에 대한 대답을 매우 자세하고 꼼꼼하게 1200자 내외로 알려줘. 상황에 대한 부연설명이나 알겠다는 말을 하지말고, 상황에 대한 해결방안이나 답만을 제시해. 답은 '~합니다'가 아닌, '~하세요', '~어요'체로 제시해.`,
          },
        ],
      },
    ],
    stream: true,
    max_tokens: 1500,
  });

  let answerString = "";

  for await (const chuck of response) {
    const temp = chuck.choices[0]?.delta?.content || "";
    answerString += temp;
  }

  return answerString;
}

export { LabelSearchAPI, CareLabelSearchAPI, CareSearchAPI };
