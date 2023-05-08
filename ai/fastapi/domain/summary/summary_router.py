from fastapi import APIRouter, FastAPI
from aimodel.summary import summary

app = FastAPI()

router = APIRouter(
    prefix="/api/v2/summary",
)

@router.get("/test")
def summary_test():
    return {"message": "summary test"}

@router.get("")
def summary():
    return {"message": "summary"}

@router.get("/text")
def get_summary():
    sry = summary()
    text = sry.get_message()
    
    return {"message": text}
