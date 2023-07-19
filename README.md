## 원티드 프리온보딩 인턴십 과제
### 한국임상정보 - 검색 기능 클론 코딩

## Demo
![demo2](https://github.com/es39/wanted-pre-onboarding-11th-4-9/assets/115976203/65d7aa93-0d37-4309-aeb5-dbbdcfca5f61)

## 개발기간
7월 16일(일) 12:00 ~ 7월 19일(수) 24:00

## 개발환경
- 개발언어 : TypeScript
- 스타일 : styled-components
- HTTP Client: axios
- 라우팅 : react-router-dom

## 요구사항
#### 1. 질환명 검색시 API 호출 통해서 검색어 추천 기능 구현 (검색어가 없을 시 “검색어 없음” 표출)
#### 2. API 호출별로 로컬 캐싱 구현
#### 3. 입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 전략 수립 및 실행
#### 4. API를 호출할 때 마다 console.info("calling api") 출력
#### 5. 키보드만으로 추천 검색어들로 이동 가능하도록 구현
```javascript
useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // 키보드 이벤트 처리
      if (e.key === 'ArrowUp') {
        setSearchIndex(prev => Math.max(prev - 1, -1));
      } else if (e.key === 'ArrowDown') {
        setSearchIndex(prev => Math.min(prev + 1, recommendSearch.length - 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [userInput, recommendSearch]);
```
* useEffect 를 사용하여 검색 내용이 바뀔 때 마다 실행되도록 구현
* keyboard event 를 사용하여 up키 일 때, down키 일 때로 구분하여 작성
* up키 일 때 index-1 로, down키 일 때 index+1 로 업데이트 하여 현재 해당하는 index 값을 key event에 따라 업데이트 시켜주도록 작성
