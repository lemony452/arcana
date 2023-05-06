from fastapi import APIRouter

router = APIRouter(
    prefix="/api/v2/summary",
)

@router.get("/test")
def summary_test():
    return {"message": "summary test"}