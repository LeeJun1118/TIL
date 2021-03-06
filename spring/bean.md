# πΏ Spring Bean

μ°Έκ³  : [docs.spring.io](https://docs.spring.io/spring-framework/docs/4.2.x/spring-framework-reference/html/xsd-configuration.html) </br>
Spring Framework μ **[Container](https://github.com/LeeJun1118/TIL/blob/main/spring/container.md)** μ μν΄ λ±λ‘, μμ±, μ‘°ν,
κ΄κ³μ€μ μ΄ λλ κ°μ²΄μ΄λ€. μΌλ° Java Object μ λμΌνμ§λ§ **IoC λ°©μμΌλ‘ κ΄λ¦¬λλ Object**λ₯Ό λ»νλ€. </br>
μ¦, κ°λ°μκ° μ§μ  μΈμ€ν΄μ€λ₯Ό μμ±νκ³  νΈμΆ, μ­μ νλ κ²μ΄ μλλΌ ν­μ Spring μ΄ μ κ³΅νλ Container λ₯Ό ν΅ν΄μ κ΄λ¦¬λλ μΈμ€ν΄μ€μ΄λ€.

## XML νμΌ

- applicationContext.xml (root-context.xml)
    - Application Context νμΌλ‘ μΉ μ νλ¦¬μΌμ΄μ κ³΅ν΅μΌλ‘ μ¬μ©λλ beanμ μ€μ νλ XML νμΌ
    - μλ‘ λ€λ₯Έ dispatcher-servlet.xml μμ κ³΅μ ν΄μΌνλ bean μ μ€μ νλ€.
- dispatcher-servlet.xml (servlet-context.xml)
    - Servlet Context νμΌλ‘ νμν μν©μ λ§μΆ° μ¬μ©λλ bean μ μ€μ νλ XML νμΌμ΄λ©° μΌλ°μ μΌλ‘ Web κ΄λ ¨λ bean μ μ€μ νλ€.
    - applicationContext.xml μ λμΌν bean μ΄ μ‘΄μ¬νλ κ²½μ°μλ dispatcher-servlet.xml μ€μ λ bean μ΄ μ°μ μ μΌλ‘ μ μ©λλ€.
- pom.xml
    - λ©μ΄λΈ μ€μ  νμΌμ΄λ©° λΌμ΄λΈλ¬λ¦¬ μμ‘΄μ± κ΄λ¦¬μ ν¨ν€μ§ λ± κ΄λ ¨ μ€μ μ κ΅¬μ±νλ XML νμΌμ΄λ€.

## XML μ€μ 

[Spring Bean XML μ€μ  μμ  μ½λ](https://github.com/LeeJun1118/spring-frame-work-test-project)

### `<beans></<beans>`

dispatcher-servlet.xml νΉμ applicationContext.xml μ λ£¨νΈνκ·Έλ‘ μ€νλ§ bean μ΄ μ¬μ©ν  λΌμ΄λΈλ¬λ¦¬λ₯Ό μ μνλ€. `<beans>` μ μμ±κ°μ μ€μ  μ°Έμ‘°νλ μ€νλ§ λΌμ΄λΈλ¬λ¦¬
λ²μ μ λ°λΌ λ¬λΌμ§λ€.

`<beas>`νκ·Έ μμ `<bean>`μ μ μνλ€.

XML μ€ν€λ§ μ€νμΌ

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">

    <!-- μ¬κΈ°μ beanμ μ μνλ€. -->

</beans>
```

### `<bean></bean>`

#### μμ±

- class(νμ) : bean μΌλ‘ λ±λ‘ν  ν΄λμ€
- id : bean μ μ΄λ¦(κ³ μ  μλ³μ)
- name : class μμ μ¬μ©ν  setter μ΄λ¦
- ref : setter μ μ£Όμν  bean(κ°μ²΄)μ μ΄λ¦
- scope : κ°μ²΄μ λ²μ (singleton, prototype λ±)
- constructor-arg : μμ± μ μμ±μμ μ λ¬ν  μΈμ
- property : μμ± μ `bean setter`μ μ λ¬ν  μΈμ
- lazy-init : true λ₯Ό μ§μ νμ¬ λΉμ μ¬μ©ν  λ κ°μ²΄κ° μμ±λλλ‘ μ€μ 
- primary : true λ₯Ό μ§μ νμ¬ κ°μ νμμ λΉμ΄ μ¬λ¬κ°μΌ λ μ°μ μ μΌλ‘ μ¬μ©ν  λΉ μ€μ 
- init-method : κ°μ²΄ μμ± μ μ€νλλ ν¨μ
- destroy-method : κ°μ²΄ μλ©Έ μ νΈμΆλλ ν¨μ
- factory-method : singleton μμ ν΄λΉ ν΄λμ€μ κ°μ²΄λ₯Ό λ°νν΄μ£Όλ ν¨μ

μμ 

```xml
<bean id="dog" class="com.spring.Dog"></bean>
<bean id="cat" class="com.spring.Cat" scope="singleton"></bean>
<bean id="owner" class="com.spring.Owner">
<property name="message" value="Hello World!"/>
</bean>
<bean id="pet" class="com.spring.pet" init-method="..."></bean>
```