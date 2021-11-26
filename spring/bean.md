# 💿 Spring Bean

Spring Framework 의 **[Container](https://github.com/LeeJun1118/TIL/blob/main/spring/container.md)** 에 의해 등록, 생성, 조회, 관계설정이 되는 객체이다. 일반 Java Object 와 동일하지만 **IoC 방식으로 관리되는 Object**를 뜻한다. </br>
즉, 개발자가 직접 인스턴스를 생성하고 호출, 삭제하는 것이 아니라 항상 Spring 이 제공하는 Container 를 통해서 관리되는 인스턴스이다.


## XML 설정

dispatcher-servlet.xml 혹은 applicationContext.xml 의 루트태그로 스프링 bean 이 사용할 라이브러리를 정의한다. `<beans>` 의 속성값은 실제 참조하는 스프링 라이브러리
버전에 따라 달라진다.