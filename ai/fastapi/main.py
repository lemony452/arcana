from fastapi import FastAPI, APIRouter
from fastapi.openapi.utils import get_openapi
from fastapi.openapi.docs import get_swagger_ui_html
from starlette.middleware.cors import CORSMiddleware

from domain.summary import summary_router
from domain.chatbot import chatbot_router

app = FastAPI(title='Arcana',
            description='Arcana FastAPI',
            openapi_url='/api/v2/openapi.json')

# CORS Setting Start

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# CORS Setting End

app.include_router(summary_router.router, tags=["Summary"])
app.include_router(chatbot_router.router, tags=["Chatbot"])