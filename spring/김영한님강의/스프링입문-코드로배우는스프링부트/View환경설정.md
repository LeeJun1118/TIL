# View 환경 설정

## Spring Boot 가 제공하는 Welcome Page 기능

- `static/index.html` 을 올려두면 Welcome Page 기능을 제공한다.

```text
참고: 홈 화면의 기본 URL 은 `/` 이고 `@GetMapping("/")` 로 매핑한다. 
`@GetMapping("/")` 매핑이 없다면 spring boot 의 welcome page 기능에 의해 
`resources/static/index.html` 을 찾아 홈 화면을 띄워주고 
`@GetMapping("/")` 매핑이 있다면 `resources/static/index.html` 은 무시된다.
```

## 동작환경

- 컨트롤러에서 리턴 값으로 문자를 반환하면 `viewResolver`가 화면을 찾아서 처리한다.
    - 스프링 부트 템플릿 엔진 기본 viewName 매핑
    - `resources:telmplates/` + viewName + `.html`