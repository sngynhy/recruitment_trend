from fastapi import APIRouter, Query
from typing import Optional

router = APIRouter()


@router.get("/")
async def get_jobs(
    keyword: Optional[str] = Query(None, description="검색 키워드"),
    location: Optional[str] = Query(None, description="지역"),
    page: int = Query(1, ge=1),
    size: int = Query(20, ge=1, le=100),
):
    """여러 채용 사이트에서 채용공고를 통합 조회합니다."""
    # TODO: 각 채용 사이트 API 서비스 연동
    return {"jobs": [], "total": 0, "page": page, "size": size}
