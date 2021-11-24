# 💥 클래스, 객체, 인스턴스

### 📑 클래스(Class)

<U>객체를 정의하는 틀 또는 설계도</U>

* 클래스 : 과자를 만드는 틀
* 객체 : 과자틀에서 만들어진 과자들

```java
public class Animal {

}
```

위 클래스는 가장 간단한 형태의 클래스이다. 클래스의 선언만 있고 내용이 없는 껍데기 뿐이지만 **객체를 만드는 기능**을 한다. <br>

### 💝️ 객체(Object)

<U>구현할 대상</U>

* 클래스의 인스턴스라고도 부르며 모든 인스턴스를 대표하는 포괄적인 의미를 갖는다.

```java
Animal cat = new Animal();
Animal dog = new Animal();
Animal horse = new Animal();
            ...
```

위와 같이 무수히 많은 객체(cat, dog, horse)들을 Animal 클래스로 만들 수 있다.

**new** 는 객체를 생성할 때 사용하는 키워드이다. 이렇게 하면 Animal 클래스의 인스턴스(instance)인 cat, 즉 Animal 의 객체가 만들어진다.

### 💑 인스턴스(instance)

<U>설계도(class)로 구현된 구체적인 실체</U>

* 특정 객체(cat)가 어떤 클래스(Animal)의 객체인지를 **관계** 위주로 설명할 때 사용된다.

```markdown
"Cat 은 인스턴스" 보다는 "Cat 은 객체"
"Cat 은 Animal 의 객체" 보다는 "Cat 은 Animal 의 인스턴스"
```