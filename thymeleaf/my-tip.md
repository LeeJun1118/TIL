# π Thymeleaf Tip

### Spring Security μ μ©νμ λ
```thymeleafexpressions
<a sec:authorize="isAnonymous()" th:href="@{/user/login}">μ΅λͺμ μ¬μ©μμΌ λ</a>
<a sec:authorize="isAuthenticated()" th:href="@{/user/logout}">μΈμ¦λ μ¬μ©μμΌ λ</a>
<a sec:authorize="hasRole('ROLE_MEMBER')" th:href="@{/user/info}">νΉμ  λ‘€μ κ°μ§ μ¬μ©μμΌ λ</a>
```