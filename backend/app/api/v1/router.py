from fastapi import APIRouter

from app.api.v1.endpoints import jobs, trends, resume, recommendations

api_router = APIRouter()

api_router.include_router(jobs.router, prefix="/jobs", tags=["채용공고"])
api_router.include_router(trends.router, prefix="/trends", tags=["채용 트렌드"])
api_router.include_router(resume.router, prefix="/resume", tags=["이력서 분석"])
api_router.include_router(recommendations.router, prefix="/recommendations", tags=["기업 추천"])
