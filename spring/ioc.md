# Spring Framework ([docs](https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#spring-core))

### IntelliJ에서 Spring 개발하기 - quick start : [jake님의 티스토리](https://glow153.tistory.com/25)

위 블로그를 보고 만든 초기 환경 설정만을 한 프로젝트 : [Initialize Repository](https://github.com/LeeJun1118/spring-frame-work-test-project)

---

## 일반적인 의존 관계와 의존 관계 역전

#### 참고 블로그 :  [sehun-kim.github.io](https://sehun-kim.github.io/sehun/springbean-lifecycle/)

위 블로그에 실제 코드로 제어의 역전과 일반적인 의존 관계를 구현한 예제가 있다.

### 일반적인 의존 관계

일반적인 의존 관계는 무언가 **필요한 쪽에서 필요한 객체를 만들고**, 만들어진 객체의 메소드를 **직접 호출해서 사용**한다. 여기서 각 객체는 프로그램의 흐름에 능동적으로 참여하게 된다. 이 때 모든 작업은
사용하는 쪽에서 제어한다

### IoC(Inversion of Control) - 제어의 역전

메소드나 객체의 호출과 생성 작업부터 생명주기의 관리까지 모든 객체에 대한 것을 개발자가 결정하는 것이 아니라 **외부에서 결정되는 것**을 의미한다.</br>

Spring 에서 **@Component** 어노테이션이 붙은 클래스들은 Spring의 **Container**가 알아서 **Spring Bean** 객체로 등록하고 생성한다.  </br>
이렇게 생성된 객체는 자신이 어디에 쓰일지 알지 못하고 **Container** 가 **@Autowired**라는 어노테이션이 붙은 변수의 타입(타입이 같은 Bean이 여러개라면 이름을 본다)을 보고 해당
변수에 **객체를 주입(DI : 의존성 주입)한다.**

## Container