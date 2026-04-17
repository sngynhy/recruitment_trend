from fastapi import APIRouter, Query

router = APIRouter()


@router.get("/companies")
async def recommend_companies(
    resume_id: str = Query(..., description="분석된 이력서 ID"),
    top_k: int = Query(10, ge=1, le=50),
):
    """이력서 임베딩과 JD 임베딩의 코사인 유사도를 기반으로 기업을 추천합니다."""
    # TODO: sentence-transformers 임베딩 → 벡터 유사도 계산
    return {"resume_id": resume_id, "recommendations": []}
