from fastapi import APIRouter, Query
from typing import Optional

router = APIRouter()


@router.get("/skills")
async def get_skill_trends(
    category: Optional[str] = Query(None, description="직무 카테고리"),
    period: str = Query("monthly", description="집계 기간: daily | weekly | monthly"),
):
    """기술 스택별 채용 트렌드를 반환합니다."""
    return {"trends": []}


@router.get("/salary")
async def get_salary_trends(
    job_title: Optional[str] = Query(None),
):
    """직군별 연봉 트렌드를 반환합니다."""
    return {"salary_trends": []}


@router.get("/companies")
async def get_company_hiring_trends():
    """기업별 채용 현황 트렌드를 반환합니다."""
    return {"companies": []}
