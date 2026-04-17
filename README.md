# Recruitment Trend Analyzer

채용 트렌드 분석 · 합격 예측 · 기업 추천 플랫폼

## 프로젝트 구조

```
recruitment_trend/
├── backend/          # FastAPI (Python)
│   ├── app/
│   │   ├── api/v1/endpoints/   # jobs · trends · resume · recommendations
│   │   ├── core/               # config · DB · Celery 설정
│   │   ├── models/             # SQLAlchemy ORM 모델
│   │   ├── schemas/            # Pydantic 스키마
│   │   ├── services/           # 채용 사이트 API 통합 서비스
│   │   ├── ml/                 # 합격 예측 모델 · 임베딩
│   │   └── utils/
│   ├── requirements.txt
│   └── Dockerfile
├── frontend/         # Next.js 16 (TypeScript)
│   ├── src/
│   │   ├── app/                # App Router 페이지
│   │   ├── components/         # UI · Dashboard · Resume 컴포넌트
│   │   ├── hooks/              # React Query 훅
│   │   ├── store/              # Zustand 전역 상태
│   │   ├── types/              # 공유 TypeScript 타입
│   │   └── lib/                # axios 인스턴스 · 유틸
│   └── Dockerfile
└── docker-compose.yml
```

### 인프라

PostgreSQL — 채용공고/분석 결과 저장
Redis — 캐싱 + Celery 메시지 브로커
Docker Compose — 로컬 개발 환경 통합 실행

## 빠른 시작

```bash
# 인프라 실행 (PostgreSQL + Redis) in Project Root
docker-compose up -d postgres redis

# 백엔드
cd backend

# 환경변수 파일 생성
copy .env.example .env

# 1) 가상환경 생성 (프로젝트 내부 .venv)
python -m venv .venv
# 2) 가상환경 활성화
.\.venv\Scripts\Activate.ps1
# 3) pip 최신화 (선택)
python -m pip install --upgrade pip
# 4) requirements 설치
pip install -r requirements.txt

# 5) FastAPI 실행 > app 폴더 내 main.py 파일 내 app(FastAPI()) 함수 실행, --reload: 자동 재시작 (로컬 개발 시에만 사용)
uvicorn app.main:app --reload

# 프론트엔드
cd ..\frontend
pnpm install
pnpm dev
```

## API 문서

백엔드 실행 후 → http://localhost:8000/docs