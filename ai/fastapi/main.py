from fastapi import FastAPI

app = FastAPI()


@app.get("/api/v2/hello")
def hello():
    return {"message": "안녕하세요 파이보"}