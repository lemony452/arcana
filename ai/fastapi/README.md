# README

## 해당 내용은 Clone 후 로컬에서 실행하는것을 가정합니다.  
<br />

## 목차
1. [프로젝트 설정](#프로젝트-설정)
2. [프로젝트 실행](#프로젝트-실행)


## 프로젝트 설정

1. 가상환경 생성
```shell
python -m venv ./
```

2. 가상환경 실행 (윈도우)
```shell
.\Scripts\activate

(가상환경에서 빠져나올 땐)
deactivate
```

3. 패키지 설치
```shell
pip install -r requirements.txt
```

4. 추가된 패키지 문서화
```shell
pip freeze > requirements.txt
```

## 프로젝트 실행
로컬에서 프로젝트를 실행하는 명령어
```shell
uvicorn --host=0.0.0.0 --port 18082 main:app --reload
```
- `--host=0.0.0.0` : 모든 접근 허용
- `--port 18082` : 배포할 포트 설정
- `main:app` : 실행할 앱. main은 main.py를 의미한다.
- `--reload` : 코드 변경 시 자동으로 저장되어 재시작 됨