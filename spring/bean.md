# 💿 Spring Bean

참고 : [docs.spring.io](https://docs.spring.io/spring-framework/docs/4.2.x/spring-framework-reference/html/xsd-configuration.html) </br>
Spring Framework 의 **[Container](https://github.com/LeeJun1118/TIL/blob/main/spring/container.md)** 에 의해 등록, 생성, 조회,
관계설정이 되는 객체이다. 일반 Java Object 와 동일하지만 **IoC 방식으로 관리되는 Object**를 뜻한다. </br>
즉, 개발자가 직접 인스턴스를 생성하고 호출, 삭제하는 것이 아니라 항상 Spring 이 제공하는 Container 를 통해서 관리되는 인스턴스이다.

## XML 파일

- applicationContext.xml (root-context.xml)
    - Application Context 파일로 웹 애플리케이션 공통으로 사용되는 bean을 설정하는 XML 파일
    - 서로 다른 dispatcher-servlet.xml 에서 공유해야하는 bean 을 설정한다.
- dispatcher-servlet.xml (servlet-context.xml)
    - Servlet Context 파일로 필요한 상황에 맞춰 사용되는 bean 을 설정하는 XML 파일이며 일반적으로 Web 관련된 bean 을 설정한다.
    - applicationContext.xml 에 동일한 bean 이 존재하는 경우에는 dispatcher-servlet.xml 설정된 bean 이 우선적으로 적용된다.
- pom.xml
    - 메이븐 설정 파일이며 라이브러리 의존성 관리와 패키징 등 관련 설정을 구성하는 XML 파일이다.

## XML 설정

[Spring Bean 설정 예제 코드](https://github.com/LeeJun1118/spring-frame-work-test-project)

### `<beans></<beans>`

dispatcher-servlet.xml 혹은 applicationContext.xml 의 루트태그로 스프링 bean 이 사용할 라이브러리를 정의한다. `<beans>` 의 속성값은 실제 참조하는 스프링 라이브러리
버전에 따라 달라진다.

`<beas>`태그 안에 `<bean>`을 정의한다.

XML 스키마 스타일

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">

    <!-- 여기에 bean을 정의한다. -->

</beans>
```

### `<bean></bean>`

#### 속성

- class(필수) : bean 으로 등록할 클래스
- id : bean 의 이름(고유 식별자)
- name : class 에서 사용할 setter 이름
- ref : setter 에 주입할 bean(객체)의 이름
- scope : 객체의 범위 (singleton, prototype 등)
- constructor-arg : 생성 시 생성자에 전달할 인수
- property : 생성 시 `bean setter`에 전달할 인수
- lazy-init : true 를 지정하여 빈을 사용할 때 객체가 생성되도록 설정
- primary : true 를 지정하여 같은 타입의 빈이 여러개일 때 우선적으로 사용할 빈 설정
- init-method : 객체 생성 시 실행되는 함수
- destroy-method : 객체 소멸 시 호출되는 함수
- factory-method : singleton 에서 해당 클래스의 객체를 반환해주는 함수

예제

```xml

<bean id="dog" class="com.spring.Dog"></bean>
<bean id="cat" class="com.spring.Cat" scope="singleton"></bean>
<bean id="owner" class="com.spring.Owner">
<property name="message" value="Hello World!"/>
</bean>
<bean id="pet" class="com.spring.pet" init-method="..."></bean>
```