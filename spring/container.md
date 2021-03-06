# ๐ข Container (Spring DI Container == IoC Container)

Spring ์ Container ๋ ํ๋ก๊ทธ๋๋จธ๊ฐ ์์ฑํ ์ฝ๋์ ์ฒ๋ฆฌ๊ณผ์ ์ ์์๋ฐ์ ๋๋ฆฝ์ ์ผ๋ก ์ฒ๋ฆฌํ๋ ์กด์ฌ์ด๋ค. ์ฝ๊ฒ ๋งํ๋ฉด ๊ฐ์ฒด๊ด๋ฆฌ๋ฅผ ์ฃผ๋ก ์ํํ๋ ๊ทธ๋ฆ์ด๋ผ ํ  ์ ์๋ค.

## ๐ฎ ์ฌ์ฉํ๋ ์ด์ 

### ์์กด์ฑ ์ ์ด

๊ฐ์ฒด๋ฅผ ์ฌ์ฉํ๊ธฐ ์ํด์๋ new ์์ฑ์๋ฅผ ์ด์ฉํ๊ฑฐ๋ getter/setter ๊ธฐ๋ฅ์ ์จ์ผํ๋ค. ํ ์ดํ๋ฆฌ์ผ์ด์์๋ ์ด๋ฌํ ๊ฐ์ฒด๊ฐ ๋ฌด์ํ ๋ง์ด ์กด์ฌํ๊ณ  ์๋ก ์ฐธ์กฐํ๊ณ  ์์ ๊ฒ์ด๋ค. ๊ทธ ์ ๋๊ฐ ์ฌํ  ์๋ก ์์กด์ฑ์ด ๋๋ค๊ณ 
ํ๋ค. ์ด **์์กด์ฑ์ ๋ฎ์ถ๊ธฐ ์ํด Spring Container ๊ฐ ์ฌ์ฉ๋๋ค.**

- ์ฝ๋๊ฐ ๊น๋ํด์ง๊ณ  ์ฌ์ฉํ๊ธฐ ์ฝ๋ค.
- ์ฌ์ฌ์ฉํ๊ธฐ ์ฝ๋ค.
- ํ์คํธํ๊ธฐ ์ฝ๋ค.

## ๐ ์ข๋ฅ

### 1. BeanFactory

- **[Bean](https://github.com/LeeJun1118/TIL/blob/main/spring/bean.md)** ์ ๋ฑ๋ก, ์์ฑ, ์กฐํ(getBean())ํ๋ ์ธํฐํ์ด์ค์ด๋ค.
- ๋์์ธํจํด์ ์ผ์ข์ธ ํฉํ ๋ฆฌ ํจํด์ ๊ตฌํํ ๊ฒ์ด๋ค.
- Lazy init : ํด๋ผ์ด์ธํธ์ ์์ฒญ์ด ์์ ๋(getBean()) ๊ฐ์ฒด๋ฅผ ์์ฑํ๋ค.

### 2.ApplicationContext (extends BeanFactory)

- BeanFactory ๋ฅผ ์์ํ interface ์ด๋ค.
- BeanFactory ๊ธฐ๋ฅ์ธ์ ์ถ๊ฐ์ ์ผ๋ก AOP ์ ๊ฐ์ด ๋๊ท๋ชจ ์น ํ๋ก์ ํธ์ ํ์ํ ์ฌ๋ฌ ํ์ฅ ๊ธฐ๋ฅ๋ค์ ํฌํจํ๋ค.(์ด๋ก์ธํด Spring ํ๋ก์ ํธ์ ๋๋ถ๋ถ์ ApplicationContext ์ ํตํด Bean ์ ๊ด๋ฆฌํ๋ค.)
- Eager init : ApplicationContext ์์ฑ ์ Bean ๊ฐ์ฒด๋ฅผ ๋ชจ๋ ์์ฑํ๋ค.

## ๐ Configuration MetaData

Container ์ Bean ์ ๋ฉํ์ ๋ณด๋ฅผ ๋ฑ๋กํ๊ธฐ ์ํ ์ค์ ๋ฐฉ๋ฒ

### 1. XML ์ค์  ํ์ผ์ ํตํ ๋ฑ๋ก

ํ๋ฒ์ ์์กด ๊ด๊ณ๋ฅผ ๋ณผ ์ ์๋ค๋ ์ฅ์ ์ด ์์ง๋ง ๋๋ฌด ๋ณต์กํ๊ณ , ์์๋ณด๊ธฐ ํ๋ค๋ค.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans>
    <bean id="beanA" class="test.bean.BeanA"/>
    <bean id="beanB" class="test.bean.BeanB">
        <property name="beanA" ref="beanA"/>
    </bean>
</beans>
```

### 2. Java Config(.java ํ์ผ๊ณผ ์ด๋ธํ์ด์)์ ์ด์ฉํ ๋ฑ๋ก

์ง๊ด์ ์ด๊ณ  ๊ฐ๋์ฑ์ด ์ข๋ค.

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