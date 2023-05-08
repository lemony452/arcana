from fastapi import APIRouter, FastAPI
from aimodel.chatbot.chatbot import chatbot

app = FastAPI()

router = APIRouter(
    prefix="/api/v2/chatbot",
)

@router.get("")
def summary(msg):
    chat = chatbot()
    response = chat.start_chat(msg)
    return {"message": response}
