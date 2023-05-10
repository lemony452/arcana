from fastapi import APIRouter, FastAPI
from aimodel.summary import summary
from pydantic import BaseModel
from aimodel.summary.summary import summary

app = FastAPI()

router = APIRouter(
    prefix="/api/v2/summary",
)

class long_text(BaseModel):
    text: str


@router.post("")
def summary(long_text: long_text):
    sry = summary()
    result = sry.get_message(long_text.text)

    return {"summary": result}

@router.get("")
def summary_test():
    return {"summary": "test summary!"}