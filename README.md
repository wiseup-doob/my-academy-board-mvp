# 학원 업무 관리 보드 (Academy Task Management Board)

Firebase를 사용한 웹 기반 칸반 보드 애플리케이션입니다.

## 🚀 해결된 문제점들

### 1. 인증 문제 해결
- **문제**: 사용자 인증 로직이 없어서 "로그인이 필요합니다" 오류 발생
- **해결**: 익명 인증(`signInAnonymously`) 추가

### 2. Firestore 경로 문제 해결
- **문제**: 보안 규칙과 실제 코드의 경로 불일치
- **해결**: 경로를 `users/{userId}/tasks`로 통일

### 3. 에러 처리 개선
- **문제**: Firebase 작업 실패 시 적절한 에러 메시지 없음
- **해결**: 모든 Firebase 작업에 try-catch 블록과 콘솔 로깅 추가

## 📋 필수 Firebase 설정

### 1. Firebase Authentication 설정
Firebase 콘솔에서 다음을 활성화해야 합니다:
1. **Authentication** > **Sign-in method** > **익명** 활성화

### 2. Firestore 보안 규칙 업데이트
Firebase 콘솔의 **Firestore Database** > **규칙**에서 다음 규칙을 적용:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // 사용자별 업무 데이터 접근 규칙
    match /users/{userId}/tasks/{taskId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // 사용자별 컬렉션 접근 규칙
    match /users/{userId}/{document=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## 🛠️ 배포 및 테스트

### 1. 배포
```bash
firebase deploy
```

### 2. 샘플 데이터 추가
1. `https://your-project.web.app/add-sample-data.html` 접속
2. "샘플 업무 데이터 추가" 버튼 클릭
3. 메인 앱에서 데이터 확인

### 3. 디버깅
브라우저 개발자 도구의 콘솔에서 다음 로그들을 확인할 수 있습니다:
- 익명 로그인 성공/실패
- Firestore 경로 및 로드된 문서 수
- 업무 추가/수정/삭제 작업 결과

## 📁 프로젝트 구조

```
public/
├── index.html              # 메인 애플리케이션
├── add-sample-data.html    # 테스트 데이터 추가 도구
└── ...

firestore-rules.txt         # Firestore 보안 규칙
README.md                   # 이 파일
```

## 🎯 주요 기능

- ✅ 익명 인증을 통한 자동 로그인
- ✅ 업무 추가/수정/삭제
- ✅ 드래그 앤 드롭으로 업무 상태 변경
- ✅ 마감일 관리 및 경과 표시
- ✅ 반응형 디자인
- ✅ 실시간 데이터 동기화

## 🔧 문제 해결

### "사용자 인증 정보가 없어 데이터를 로드할 수 없습니다" 오류
1. Firebase Authentication에서 익명 인증이 활성화되어 있는지 확인
2. 브라우저 콘솔에서 인증 로그 확인
3. Firestore 보안 규칙이 올바르게 설정되어 있는지 확인

### 업무 데이터가 표시되지 않는 경우
1. `add-sample-data.html`을 사용하여 테스트 데이터 추가
2. 브라우저 콘솔에서 "로드된 문서 수" 확인
3. Firestore 콘솔에서 실제 데이터 존재 여부 확인

### 업무 추가가 안 되는 경우
1. 모든 필수 필드(업무 내용, 카테고리, 그룹)가 입력되었는지 확인
2. 브라우저 콘솔에서 에러 메시지 확인
3. Firestore 보안 규칙 확인 