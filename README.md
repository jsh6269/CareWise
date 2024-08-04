# CareWise
## 목차
1. [프로젝트 소개](#프로젝트-소개)
2. [배포 링크](#배포-링크)
3. [팀원 구성](#팀원-구성)
4. [프로젝트 뷰](#프로젝트-뷰)
5. [기술 스택](#기술-스택)
6. [세부 기술](#세부-기술)

---
## 프로젝트 소개
- 2024 멋쟁이사자처럼 여름 해커톤 대회에 참가한 CareWise 팀의 레포지토리입니다.
- 1달이 채 되지 않는 해커톤 기간과 목적을 고려하여 다음과 같은 기능을 우선적으로 구현하였습니다.
- [X] 케어라벨 사진 인식 및 결과 응답
- [x] 케어라벨 그림 그리기 및 인식 결과 응답
- [x] 케어라벨 검색
- [x] 케어라벨 태그 기반 관리법 검색
- [x] 의류 관련 질문 검색
- [x] 화면 트랜지션, 로딩창 애니메이션 등 유저 인터랙티브 요소

## 팀원 구성
<table>  <tr>  <td></td> <td>최윤희(Leader)</td> <td>김시현</td> <td>장수한</td> <td>김지원</td> </tr> <tr> <td>GitHub</td> <td><a href="https://github.com/yunheeec"><img src="https://github.com/user-attachments/assets/abaacb23-9492-4aa0-b4fe-7682e00c716a" width="100"></a></td> <td><a href="https://github.com/sisihae"><img src="https://github.com/user-attachments/assets/510ccc93-0e87-4245-9bc6-fda90c55d5c8" width="100"></a></td> <td><a href="https://github.com/jsh6269"><img src="https://github.com/user-attachments/assets/cb79d5b7-9cc9-42c6-b218-3c7a2dfa853a" width="100"></a></td> <td><a href="https://github.com/jj1kim"><img src="https://avatars.githubusercontent.com/u/134778013?v=4" width="100"></a></td> </tr> </table>

## 배포 링크
- 배포링크 : https://carewise-snu.com (deprecated)
- github page로 재배포했습니다. : https://jsh6269.github.io/CareWise

## 프로젝트 뷰
- 홈 화면
  
<img src="https://github.com/user-attachments/assets/39586b9b-8252-4130-ae4c-e3812bfc3d8c" width="300">

- 케어라벨 탐색
  
<img src="https://github.com/user-attachments/assets/152482d2-adf1-4df1-bc5f-fbda1156542d" width="300"><img src="https://github.com/user-attachments/assets/78611827-390e-4a0d-93be-3af33460b184" width="300">

- 케어라벨 사진 및 그리기 인식

<img src="https://github.com/user-attachments/assets/9f9b1af7-f7c3-4c21-ac16-508516c4e434" width="300"><img src="https://github.com/user-attachments/assets/1b2f7112-c41e-4bcf-bd0b-481779c7c8cc" width="300">

- 케어라벨 소재 검색

<img src="https://github.com/user-attachments/assets/49d60421-b62c-4dbe-a659-6456c83b59df" width="300"><img src="https://github.com/user-attachments/assets/c00937c4-ed6c-495d-8eff-ee3ec50fc3e7" width="300"><img src="https://github.com/user-attachments/assets/a3e195f9-0772-45ca-9594-4018797925f5" width="300">
<img src="https://github.com/user-attachments/assets/8fe96fb4-e6c9-481b-8d11-e2d5780b9bf1" width="300"><img src="https://github.com/user-attachments/assets/6f27307f-f0b5-4cb7-b39f-eb3d6ede2ad3" width="300">

- 의류 관리법 검색

<img src="https://github.com/user-attachments/assets/f1d55d05-b6e1-49b6-81f0-ea45f17208eb" width="300"><img src="https://github.com/user-attachments/assets/10442071-f7d4-4517-bebe-5cfac8cb2345" width="300">

## 기술 스택
<img src="https://simpleicons.org/icons/html5.svg" width="50">&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://simpleicons.org/icons/css3.svg" width="50">&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://simpleicons.org/icons/javascript.svg" width="50">&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://simpleicons.org/icons/createreactapp.svg" width="50">&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://simpleicons.org/icons/amazons3.svg" width="50">&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://simpleicons.org/icons/amazonroute53.svg" width="50">

## 세부 기술
### 1. CI/CD
- CI
    - eslint와 prettier를 사용하고, husky로 자동화
    - 커밋 시에 자동으로 포맷팅이 되게 했음
    - github action을 이용해서, pr이 올라왔을 때 eslint에서 정해둔 룰에 위반하는 사항은 없는지 자동 lint-check 구현
- CD
    - main 브랜치에 병합 시 자동으로 작동
    - 동적으로 .env 파일을 생성해서 api 키 등 중요한 요소를 보호
    - 리액트를 빌드한 후 S3에 자동 업로드 → 바로 배포됨
    - cloudfront 캐시 무효화 설정을 통해 배포 이후 바로 설정이 적용되도록 함
 
### 2. 배포
- s3에 빌드된 리액트를 배포하면, s3의 정적 웹사이트 기능을 통해 자동으로 배포
- 도메인은 route53에서 구입했으며, DNS 서버도 route53을 사용
- https 인증서는 ACM에서 발급받았으며, 해당 인증서의 적용을 위해 cloudfront를 도입
    - cloudfront를 통해 캐싱을 적용함으로써 성능 개선 또한 기대 가능
    - cloudfront는 route53 뒤에 둠으로써 도메인이 resolve된 다음에 접근
 
### 3. ChatGPT API
- 첫번째 api
    - 사진을 넣으면 해당 사진에 들어있는 기호 중 정해진 데이터베이스 내에서 가장 유사한 것들을 응답
    - 사진의 경우 base64 인코딩을 해서 요청
    - 프롬프팅
        - 질의문 영어로 바꾸기
        - 정해진 데이터베이스를 따로 입력해줄 방법이 없어서, 100개에 달하는 각 기호에 대해서 일일이 그 이름과 기호가 생긴 바를 묘사해서 텍스트로 입력
        - 특히 다리미가 어떻게 생겼는지 알아듣지 못해서 프롬프팅하는데 많은 고생을 했음
- 두 번째 api
    - 옷의 종류 및 세 가지의 소재와 그 비율을 입력하면, 그 관리법 및 관리법에 해당하는 세탁 기호를 정해진 데이터베이스 내에서 응답
    - 관리법은 정제된 응답이 내려오도록 프롬프팅
    - 세탁 기호 응답은 첫번째 api와 마찬가지의 로직으로 구성
- 세 번째 api
    - 의류 관련 질문을 입력하면 그 해결 방법을 응답
    - 단순 줄글 응답
