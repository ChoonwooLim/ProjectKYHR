# 프로젝트 경영 한류 웹사이트

프로젝트 경영 한류 공식 웹사이트입니다.

## 기능

- YouTube 동영상 임베드 및 재생
- 반응형 디자인 (모바일, 태블릿, 데스크톱 지원)
- 현대적인 UI/UX 디자인

## 로컬 개발

### 필수 요구사항

- Node.js 18.0.0 이상
- npm

### 설치 및 실행

```bash
# 의존성 설치
npm install

# 서버 실행
npm start
```

서버는 `http://localhost:3000`에서 실행됩니다.

## Render.com 배포 가이드

### 1. GitHub에 코드 푸시

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-github-repo-url>
git push -u origin main
```

### 2. Render.com에서 웹 서비스 생성

1. [Render.com](https://render.com)에 로그인
2. "New +" 버튼 클릭 → "Web Service" 선택
3. GitHub 저장소 연결
4. 설정:
   - **Name**: 프로젝트경영한류 (또는 원하는 이름)
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free (또는 원하는 플랜)

### 3. 도메인 연결

1. Render 대시보드에서 생성한 서비스 선택
2. "Settings" 탭 → "Custom Domains" 섹션
3. "Add Custom Domain" 클릭
4. `프로젝트경영한류.org` 입력
5. Render에서 제공하는 DNS 레코드를 도메인 등록업체에 추가:
   - CNAME 레코드: `www` → Render 제공 URL
   - 또는 A 레코드: Render 제공 IP 주소

### 4. SSL 인증서

Render는 자동으로 Let's Encrypt SSL 인증서를 발급하여 HTTPS를 활성화합니다.

## 기술 스택

- **Backend**: Node.js, Express
- **Frontend**: HTML5, CSS3
- **Hosting**: Render.com

## 라이선스

Copyright © 2025 프로젝트 경영 한류. All rights reserved.



