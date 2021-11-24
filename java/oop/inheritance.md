# 👪 상속

- 자식이 부모로부터 무언가를 물려받는 것.
- 기존의 클래스에 기능을 추가하거나 새로운 클래스를 정의하는 것

## 👶 자식 클래스 (Child Class)

부모 클래스의 모든 특성을 물려받아 새롭게 작성된 클래스

### 기본 문법

```java
class 자식클래스이름 extends 부모클래스이름 {
}
```

### 활용

Animal Class(부모) 를 상속하는 Dog 클래스(자식)

```java
// 부모 클래스
class Animal {
    String name;

    public void setName(String name) {
        this.name = name;
    }
}

//자식 클래스
class Dog extends Animal {
    public void sleep() {
        System.out.println(" zzzzzzzz");
    }
}

// 메인
public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.setName("poppy");
        System.out.print(dog.name);
        dog.sleep();
    }
}
```
```markdown
[결과]
poppy zzzzzzzz
```

Dog 클래스에 name 이라는 객체 변수와 setName 이라는 메소드를 만들지 않았지만 Animal 클래스를 상속 받았기 때문에 그대로 사용이 가능하다.

자식 클래스(Dog Class)에서는 부모 클래스(Animal Class)보다 더 많은 기능(sleep 메소드)을 가질 수 있다.

## Is-A 관계

Is-A 관계에 있을 때 자식 객체는 부모 클래스의 자료형인 것처럼 사용할 수 있다.

- Dog(자식 클래스) is a Animal(부모 클래스)

```java
// O
Animal dog = new Dog(); //개로 만든 객체는 동물 자료형이다.
```

- Animal is a Dag => "모든" 동물은 개가 아니기 때문에 안된다.

```java
// X
Dog dog = new Animal(); // 동물로 만든 객체는 개 자료형이다.
```

- Object Class : 자바의 모든 클래스는 Object Class 를 상속받게 되어 있다.

```java
// O
Object animal = new Animal();
Object dog = new Dog();
```

## 오버라이딩 (부모 클래스의 메소드 재정의)

부모 클래스의 메소드를 자식 클래스가 동일한 형태로 또 다시 구현하는 것

```java
class HouseDog extends Dog {
    @Override
    public void sleep() {
        System.out.print(" house dog zzzzzzzzz");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog dog = new HouseDog();
        dog.setName("poppy");
        System.out.println(dog.name);
        dog.sleep();
    }
}
```

결과 : poppy house dog zzzzzzzzz

## 오버로딩 (새로운 메소드 추가)

동일한 이름의 메소드를 생성한다. 단, 메소드의 입력 항목이 다를 경우만 가능하다.

```java
class Dog extends Animal {
    public void sleep() {
        System.out.println("zzzzzzzz");
    }
}

class HouseDog extends Dog {
    @Override
    public void sleep() {
        System.out.println(" house dog zzzzzzzzz => 오버라이드");
    }
    public void sleep(int hour){
        System.out.println("house dog " + hour + " zzzzzzzzz => 오버로딩");
    }
}

public class test {
    public static void main(String[] args) {
        Dog dog = new HouseDog();
        HouseDog houseDog = new HouseDog();

        dog.setName("Dog");
        System.out.print(dog.name);
        dog.sleep();
        // dog.sleep(3); 에러 : HouseDog 으로 만든 Dog 객체인데 Dog 에는 sleep(int) 메소드가 없다

        houseDog.setName("poppy");
        System.out.print(houseDog.name);
        houseDog.sleep();
        houseDog.sleep(3);
    }
}
```
```markdown
[결과]
Dog house dog zzzzzzzzz => 오버라이드
poppy house dog zzzzzzzzz => 오버라이드
house dog 3 zzzzzzzzz => 오버로딩
```