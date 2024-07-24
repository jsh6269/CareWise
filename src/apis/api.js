import { instance } from "./axios.js";

const stringToNumberArray = (data) => {
  // 정규식 패턴 확인
  const regex = /^(\d+)( \d+)*$/;

  if (!regex.test(data)) {
    return -1;
  }

  // 문자열을 공백으로 분할하여 배열로 변환
  const numberArray = data.split(" ").map(Number);

  // 중복 요소 제거
  const newArray = [...new Set(numberArray)];

  // 요소가 1 이상 85 이하의 자연수인지 확인
  for (const num of newArray) {
    if (num < 1 || num > 85) {
      return -1;
    }
  }

  return newArray;
};

export const getResult = async (data) => {
  const response = await instance.get("", data); // get URL 추가 필요
  if (response.status === 200) {
    const result = stringToNumberArray(response.data);
    if (result === -1) {
      console.log("invalid format");
    } else {
      return result;
    }
  } else {
    console.log("Error");
  }
};
