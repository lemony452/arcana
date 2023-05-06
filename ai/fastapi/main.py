from fastapi import FastAPI
from domain.summary import summary_router
from starlette.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS Setting Start

origins = [
    "*",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# CORS Setting End

app.include_router(summary_router.router)
