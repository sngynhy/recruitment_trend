from fastapi import APIRouter, UploadFile, File, HTTPException

router = APIRouter()

ALLOWED_CONTENT_TYPES = {
    "application/pdf",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
}


@router.post("/upload")
async def upload_resume(file: UploadFile = File(...)):
    """이력서 파일(PDF / DOCX)을 업로드하고 파싱합니다."""
    if file.content_type not in ALLOWED_CONTENT_TYPES:
        raise HTTPException(status_code=400, detail="PDF 또는 DOCX 파일만 허용됩니다.")
    # TODO: pdfplumber / python-docx 파싱 → 텍스트 추출
    return {"filename": file.filename, "parsed": {}}


@router.post("/analyze")
async def analyze_resume(resume_id: str):
    """파싱된 이력서를 기반으로 합격 예측 점수를 반환합니다."""
    # TODO: ML 모델(XGBoost / LightGBM) 추론
    return {"resume_id": resume_id, "score": None, "feedback": []}
