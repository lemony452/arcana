from fastapi import APIRouter, FastAPI
from aimodel.summary import summary
from pydantic import BaseModel

app = FastAPI()

router = APIRouter(
    prefix="/api/v2/summary",
)

class long_text(BaseModel):
    text: str


@router.post("")
def summary_test(text: long_text):
    # result = l_text.text[0:int(len(l_text.text) / 2)]
    result = "소녀들의 소학교 별 하나 풀이 다 멀듯이, 봅니다. 가슴속에 멀리 오는 봅니다. 추억과 별을 같이 지나고 헤일 별 거외다. 하나에 당신은 벌레는 이름자를 봅니다. 이제 봄이 겨울이 했던 가을로 마디씩 이름과, 너무나 이네들은 버리었습니다. 책상을 헤는 강아지, 듯합니다.부끄러운 하나에 멀리 거외다. 패, 같이 내 남은 있습니다. 아무 라이너 추억과 애기 하나에 때 까닭입니다."
    return {"summary": result}
