# 🎓 학원 업무 관리 시스템

효율적인 학원 업무 관리를 위한 Kanban 보드 시스템입니다.

## 🌟 주요 기능

- **Google 로그인** - 안전한 사용자 인증
- **선생님별 보드 관리** - 각 선생님마다 독립적인 업무 보드
- **업무 분류 시스템** - Mandatory, Low-hanging Fruit, Deep Infrastructure, Innovation
- **시간 추적** - 예상 시간 vs 실제 소요 시간 비교
- **타임라인 시각화** - 75일 달력으로 업무 일정 한눈에 확인
- **드래그 앤 드롭** - 직관적인 업무 상태 변경
- **반응형 디자인** - 노션 임베드 환경까지 최적화

## 🚀 배포된 사이트

### 🔴 메인 사이트 (프로덕션)
- **URL**: https://wiseup-9542e.web.app
- **용도**: 실제 운영 환경
- **업데이트**: 안정된 기능만 배포

### 🟡 테스트 사이트
- **URL**: https://wiseup-9542e--test-4stfydra.web.app
- **용도**: 새로운 기능 개발 및 테스트
- **만료**: 30일 후 자동 삭제

## 📦 배포 방법

### 1. 기본 Firebase CLI 명령어

```bash
# 메인 사이트 배포
firebase deploy --only hosting

# 테스트 채널 배포
firebase hosting:channel:deploy test --expires 30d

# 호스팅 채널 목록 확인
firebase hosting:channel:list
```

### 2. 편리한 배포 스크립트 사용

```bash
# 사용법 확인
node deploy.js

# 메인 사이트에 배포
node deploy.js live

# 테스트 환경에 배포
node deploy.js test
```

## 🛠️ 개발 환경 설정

### 1. 프로젝트 클론
```bash
git clone [repository-url]
cd my-academy-board-mvp
```

### 2. Firebase CLI 설치
```bash
npm install -g firebase-tools
```

### 3. Firebase 로그인
```bash
firebase login
```

### 4. 프로젝트 설정 확인
```bash
firebase projects:list
firebase use wiseup-9542e
```

## 🏗️ 프로젝트 구조

```
my-academy-board-mvp/
├── public/
│   └── index.html          # 메인 애플리케이션
├── firebase.json           # Firebase 호스팅 설정
├── .firebaserc            # Firebase 프로젝트 설정
├── firestore-rules.txt    # Firestore 보안 규칙
├── deploy.js              # 배포 스크립트
└── README.md              # 이 파일
```

## 🔧 기술 스택

- **Frontend**: HTML, CSS, JavaScript (Vanilla)
- **Styling**: Tailwind CSS
- **Backend**: Firebase (Firestore, Authentication, Hosting)
- **Icons**: Emoji 기반 직관적 UI

## 📋 업무 분류 체계

### 🔴 Mandatory (필수)
반드시 해야 하는 일, 안했을 때 피해가 있어 미루지 말고 빠르게 처리할 일
- 예: 매일 시험/수업 준비, 출결확인 후 부모님께 메시지 보내기

### 🟡 Low-hanging Fruit (성과 내기 쉬운 일)
낮게 맺힌 열매. 쉽고 빠르게 처리할 수 있지만 리턴은 분명한 업무들
- 예: 나머지 학습시킨 후 학부모 보고, 데일리 피드백 주기

### 🟢 Deep Infrastructure Building (구조 효율화)
만드는 데 시간이 좀 들어도 장기적 관점에서 구조를 바꾸어 반영구적 효율 개선이 되는 일들
- 예: 교재화 후 프린트 업무 없애기, LLM 활용하여 피드백 자동화

### 🟣 Innovation (혁신)
리스크가 있지만, 비전 성취를 위해 수행해볼 수 있는 새로운 시도와 개선들
- 예: 수업 시스템 변경, 새로운 교육 방법 연구, 학원 디지털 트랜스퍼

## 🎯 우선순위

```
🔴 Mandatory > 🟡 Low-hanging Fruit > 🟢 Deep Infrastructure > 🟣 Innovation
🔥 Ongoing > ⭐ Nice to have
```

## 📞 문의

프로젝트 관련 문의사항이 있으시면 언제든 연락해주세요! 