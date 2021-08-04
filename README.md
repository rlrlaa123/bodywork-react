## 프로젝트 목적 및 개요

1. bodywork119.com 페이지를 react로 변환하는 프로젝트입니다.
2. SPA로 개발하여 사용자 경험을 향상 시키고 css component library를 사용하여 사용성, 디자인 면에서 더 나은 경험을 제공하고자 합니다.
추후 효율적인 유지보수를 위해 Component 기반으로 기존 중복되는 부분들을 최소화하고 테스트 프레임워크를 적용하여 오류를 최소화하고자 합니다.
3. 기존 검색엔진 노출을 유지하기 위해 SSR이 가능하게 개발하여 배포하고자 합니다.

## Commit-Message 작성요령

1. (제목) 한줄로 무엇을 추가/수정/삭제했는지 요약
2. (본문) 무엇을 어떻게 왜 했는지에 대한 설명
3. (본문) 가독성을 위해 본문을 나누어서 설명
4. (제목&본문) 두괄식으로 강조하고 싶은 단어부터 문장을 시작

## React 개발 방식

참조: https://github.com/rlrlaa123/bodywork-react/wiki/React-Reference-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0
1. 설정 파일 만들기 (.prettierrc, jsonconfig.json)
2. 라우트 적용 (라우트 구조는 미리 설계)
3. 스타일 설정 (styled-component 방식 사용)
4. Common 컴포넌트 만들기 (components/common)
5. 리덕스 적용 (리덕스 스토어를 생성하고 Provider 컴포넌트를 통해 리덕스 적용/Ducks 패턴) (modules/)
6. UI 준비하기 (Template/Component)
    * Template은 일반 component들을 children으로 갖고 해당 component들의 layout
7. Snippet 기능을 사용해서 Template Component를 작성
8. 컴포넌트 재사용하기 (props를 통해 인자 전달받음)
    * common 컴포넌트(Button)와 같은 경우 props 인자에 따라 css를 추가 적용 하도록 설정
    * AuthForm(Login, Register)와 같은 경우 props 인자에 따라 text 밑 element등을 추가 적용 하도록 설정
