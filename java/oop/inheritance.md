# πͺ μμ

- μμμ΄ λΆλͺ¨λ‘λΆν° λ¬΄μΈκ°λ₯Ό λ¬Όλ €λ°λ κ².
- κΈ°μ‘΄μ ν΄λμ€μ κΈ°λ₯μ μΆκ°νκ±°λ μλ‘μ΄ ν΄λμ€λ₯Ό μ μνλ κ²

## πΆ μμ ν΄λμ€ (Child Class)

λΆλͺ¨ ν΄λμ€μ λͺ¨λ  νΉμ±μ λ¬Όλ €λ°μ μλ‘­κ² μμ±λ ν΄λμ€

### κΈ°λ³Έ λ¬Έλ²

```java
class μμν΄λμ€μ΄λ¦ extends λΆλͺ¨ν΄λμ€μ΄λ¦ {
}
```

### νμ©

Animal Class(λΆλͺ¨) λ₯Ό μμνλ Dog ν΄λμ€(μμ)

```java
// λΆλͺ¨ ν΄λμ€
class Animal {
    String name;

    public void setName(String name) {
        this.name = name;
    }
}

//μμ ν΄λμ€
class Dog extends Animal {
    public void sleep() {
        System.out.println(" zzzzzzzz");
    }
}

// λ©μΈ
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
[κ²°κ³Ό]
poppy zzzzzzzz
```

Dog ν΄λμ€μ name μ΄λΌλ κ°μ²΄ λ³μμ setName μ΄λΌλ λ©μλλ₯Ό λ§λ€μ§ μμμ§λ§ Animal ν΄λμ€λ₯Ό μμ λ°μκΈ° λλ¬Έμ κ·Έλλ‘ μ¬μ©μ΄ κ°λ₯νλ€.

μμ ν΄λμ€(Dog Class)μμλ λΆλͺ¨ ν΄λμ€(Animal Class)λ³΄λ€ λ λ§μ κΈ°λ₯(sleep λ©μλ)μ κ°μ§ μ μλ€.

## Is-A κ΄κ³

Is-A κ΄κ³μ μμ λ μμ κ°μ²΄λ λΆλͺ¨ ν΄λμ€μ μλ£νμΈ κ²μ²λΌ μ¬μ©ν  μ μλ€.

- Dog(μμ ν΄λμ€) is a Animal(λΆλͺ¨ ν΄λμ€)

```java
// O
Animal dog = new Dog(); //κ°λ‘ λ§λ  κ°μ²΄λ λλ¬Ό μλ£νμ΄λ€.
```

- Animal is a Dag => "λͺ¨λ " λλ¬Όμ κ°κ° μλκΈ° λλ¬Έμ μλλ€.

```java
// X
Dog dog = new Animal(); // λλ¬Όλ‘ λ§λ  κ°μ²΄λ κ° μλ£νμ΄λ€.
```

- Object Class : μλ°μ λͺ¨λ  ν΄λμ€λ Object Class λ₯Ό μμλ°κ² λμ΄ μλ€.

```java
// O
Object animal = new Animal();
Object dog = new Dog();
```

## μ€λ²λΌμ΄λ© (λΆλͺ¨ ν΄λμ€μ λ©μλ μ¬μ μ)

λΆλͺ¨ ν΄λμ€μ λ©μλλ₯Ό μμ ν΄λμ€κ° λμΌν ννλ‘ λ λ€μ κ΅¬ννλ κ²

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

κ²°κ³Ό : poppy house dog zzzzzzzzz

## μ€λ²λ‘λ© (μλ‘μ΄ λ©μλ μΆκ°)

λμΌν μ΄λ¦μ λ©μλλ₯Ό μμ±νλ€. λ¨, λ©μλμ μλ ₯ ν­λͺ©μ΄ λ€λ₯Ό κ²½μ°λ§ κ°λ₯νλ€.

```java
class Dog extends Animal {
    public void sleep() {
        System.out.println("zzzzzzzz");
    }
}

class HouseDog extends Dog {
    @Override
    public void sleep() {
        System.out.println(" house dog zzzzzzzzz => μ€λ²λΌμ΄λ");
    }
    public void sleep(int hour){
        System.out.println("house dog " + hour + " zzzzzzzzz => μ€λ²λ‘λ©");
    }
}

public class test {
    public static void main(String[] args) {
        Dog dog = new HouseDog();
        HouseDog houseDog = new HouseDog();

        dog.setName("Dog");
        System.out.print(dog.name);
        dog.sleep();
        // dog.sleep(3); μλ¬ : HouseDog μΌλ‘ λ§λ  Dog κ°μ²΄μΈλ° Dog μλ sleep(int) λ©μλκ° μλ€

        houseDog.setName("poppy");
        System.out.print(houseDog.name);
        houseDog.sleep();
        houseDog.sleep(3);
    }
}
```
```markdown
[κ²°κ³Ό]
Dog house dog zzzzzzzzz => μ€λ²λΌμ΄λ
poppy house dog zzzzzzzzz => μ€λ²λΌμ΄λ
house dog 3 zzzzzzzzz => μ€λ²λ‘λ©
```