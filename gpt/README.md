# README

## 원본 저장소 : https://github.com/dabit3/gpt-fine-tuning-with-nodejs.git

## 순서

1. [환경설정](#환경설정)
2. [학습 데이터 준비](#학습-데이터-준비)
3. 학습 데이터 업로드
4. Fine-tuning 시작
5. 현재 상태 확인
6. 응답 요청하여 튜닝 결과 확인
<br/>  
<br/>  

### 환경설정

```sh
npm install
```
명령어로 필요한 패키지를 다운받습니다.

그리고 해당 폴더에 .env 파일을 생성하고

```text
OPENAI_KEY=실제 api를 넣어주세요
```
API Key 값을 설정합니다.
<br/>  
<br/>  

### 학습 데이터 준비

AI 모델을 학습시킬 데이터를 준비합니다.
데이터 확장자는 jsonl로 해야하며 형식은 아래와 같습니다.
```json
{"prompt":"메이저 타로카드 22장 중에 하나를 선택해서 그 카드를 기반으로 나를 축복해줘.","completion":"너에게 The Hermit 카드의 축복을 전할게. 이 카드는 내면의 탐구와 자아 찾기, 그리고 지혜의 상징이야. 너가 자신의 내면을 발견하고, 지혜와 통찰력을 키울 수 있는 힘을 부여할거야. 너의 삶이 내면의 평화와 지혜로 가득 차 있길."}
```
준비한 데이터를 data.jsonl에 추가하거나 덮어쓰기합니다.
<br/>  
<br/>  

### 학습 데이터 업로드

```sh
node uploadFile.js
```
명령어를 터미널에서 실행하여 데이터를 업로드 합니다.
만약 준비한 데이터의 이름이 data.jsonl이 아니라면 uploadFile.js에서 다음과 같이 수정합니다.
```javascript
    uploadFile.js

        7   fs.createReadStream('./data.jsonl'),
        ->
        7   fs.createReadStream('./[데이터 이름].jsonl'),
```
정상적으로 진행됐다면 업로드 후 fileId.js가 생성되거나 내용이 변경됩니다.
<br/>  
<br/>  

### Fine-tuning 시작

createFineTune.js 파일에서 학습시킬 모델을 변경합니다.  
처음 시작한다면 `davinci`로 변경합니다.  
이미 학습시킨 모델이 있고 그 모델을 추가 학습할거라면 그 모델로 이름을 변경합니다.

```
    createFineTune.js
    
      model: 'davinci:ft-personal-2023-04-27-02-00-52'
```

> davinci가 학습 가능한 모델 중 가장 성능이 좋기 때문에 davinci를 사용합니다.

```sh
node createFineTune.js
```
명령어를 실행하여 튜닝을 실행합니다.
<br/>  
<br/>  

### 현재 상태 확인

```sh
node node listFineTunes.js
```
명령어를 사용하면 생성한 커스텀 모델들을 확인할 수 있습니다.
모델의 status가 pendding, running이면 학습이 진행중인것이며  
fail이라면 실패한것입니다.  
학습이 완료되면 status가 succeeded 로 되며  
fine_tuned_model 값이 null에서 'davinci:ft-personal-2023-04-27-03-15-48' 처럼 값이 변경됩니다.  
앞으로 api호출은 새로 생성된 모델명으로 지정하면 됩니다.  
<br/>  
<br/>  

### 응답 요청하여 튜닝 결과 확인

createCompletion.js를 수정하여 api호출할 모델과 질문, 그리고 답변 길이를 수정할 수 있습니다.  
```
      model: '호출할 GPT 모델 이름',
      prompt: '질문 내용',
      max_tokens: 토큰 길이(정수값)
```

```sh
node createCompletion.js
```
를 입력하여 응답을 요청합니다.  
아래는 응답 예시입니다.
```text
choices:  [
  {
    text: '너에게 The Strength 카드의 축복을 전할게. 이 카드는 힘, 용기, 그리고 용기와 힘의 조화를 상징해. 너에게 강인한 정신과 육체적 힘을 부여하여, 어려운 상황에도 용기를 가지고 이겨낼 수 있게 도울거야. 너의 삶이 용기와 힘으로 가득 차 있길.',
    index: 0,
    logprobs: null,
    finish_reason: 'length'
  }
]
```