# 💡 Annotation

Spring Boot 는 어노테이션을 통해 Bean 을 설정하고 주입받는 것을 표준으로 한다.

- Container 에 Spring Bean 으로 등록시켜주는 Annotation

```markdown
@Bean : 개발자가 제어할 수 없는 외부 라이브러리를 Bean 으로 등록(메소드로 return 되는 객체를 Bean 으로 등록)
@Component : 개발자가 직접 제어할 수 있는 클래스(직접 만든)를 Bean 으로 등록(선언된 Class 를 Bean으 로 등록)
@Controller, @Service, @Repository 등 : @Component 를 비즈니스 레이어에 따라 명칭을 달리 지정해준 것
```
- Container 에 있는 Spring Bean 을 찾아 주입시켜주는 Annotation
```markdown
@Resource : 이름으로 참조할 Bean 을 검색하여 주입한다. (Java 표준)
@Autowired : 타입으로 참조할 Bean 을 찾아 주입힌다. (Spring 표준)
```