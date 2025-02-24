const careLabelInfo = require("./mappingData/Carelabel-info.json");

const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: `${process.env.REACT_APP_OPENAI_API_KEY}`,
  dangerouslyAllowBrowser: true,
});

async function LabelSearchAPI(base64Image) {
  const response = await fetch("https://carewise-server.onrender.com/predict", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ image: base64Image }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data;
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
