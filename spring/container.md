# 🚢 Container (Spring DI Container == IoC Container)

Spring 의 Container 는 프로그래머가 작성한 코드의 처리과정을 위임받아 독립적으로 처리하는 존재이다. 쉽게 말하면 객체관리를 주로 수행하는 그릇이라 할 수 있다.

## 😮 사용하는 이유

### 의존성 제어

객체를 사용하기 위해서는 new 생성자를 이용하거나 getter/setter 기능을 써야한다. 한 어플리케이션에는 이러한 객체가 무수히 많이 존재하고 서로 참조하고 있을 것이다. 그 정도가 심할 수록 의존성이 높다고
한다. 이 **의존성을 낮추기 위해 Spring Container 가 사용된다.**

- 코드가 깔끔해지고 사용하기 쉽다.
- 재사용하기 쉽다.
- 테스트하기 쉽다.

## 📜 종류

### 1. BeanFactory

- **[Bean](https://github.com/LeeJun1118/TIL/blob/main/spring/bean.md)** 을 등록, 생성, 조회(getBean())하는 인터페이스이다.
- 디자인패턴의 일종인 팩토리 패턴을 구현한 것이다.
- Lazy init : 클라이언트의 요청이 있을 때(getBean()) 객체를 생성한다.

### 2.ApplicationContext (extends BeanFactory)

- BeanFactory 를 상속한 interface 이다.
- BeanFactory 기능외에 추가적으로 AOP 와 같이 대규모 웹 프로젝트에 필요한 여러 확장 기능들을 포함한다.(이로인해 Spring 프로젝트의 대부분은 ApplicationContext 을 통해 Bean 을 관리한다.)
- Eager init : ApplicationContext 생성 시 Bean 객체를 모두 생성한다.

## Configuration MetaData

Container 에 Bean 의 메타정보를 등록하기 위한 설정방법

### 1. XML 설정 파일을 통한 등록

한번에 의존 관계를 볼 수 있다는 장점이 있지만 너무 복잡하고, 알아보기 힘들다.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans>
    <bean id="beanA" class="test.bean.BeanA"/>
    <bean id="beanB" class="test.bean.BeanB">
        <property name="beanA" ref="beanA"/>
    </bean>
</beans>
```

### 2. Java Config(.java 파일과 어노테이션)을 이용한 등록

직관적이고 가독성이 좋다.

```java

@Configuration
public class WebConfig {
    @Bean(name = "beanA")
    public BeanA beanA() {
        return new BeanA();
    }

    @Bean(name = "beanB")
    public BeanB beanB(BeanA beanA) {
        BeanB beanB = new BeanB();
        beanB.setBeanA(beanA);
        return beanB;
    }
}
```