# :pencil: Thymeleaf Tip

### Spring Security 적용했을 때
```thymeleafexpressions
<a sec:authorize="isAnonymous()" th:href="@{/user/login}">익명의 사용자일 때</a>
<a sec:authorize="isAuthenticated()" th:href="@{/user/logout}">인증된 사용자일 때</a>
<a sec:authorize="hasRole('ROLE_MEMBER')" th:href="@{/user/info}">특정 롤을 가진 사용자일 때</a>
```