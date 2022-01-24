# 스프링 데이터 JPA

스프링 데이터 JPA 는 JPA 를 편리하게 사용하도록 도와주는 기술이다.

### 스프링 데이터 JPA 회원 리포지토리

`JpaRepository` 를 상속 받으면 스프링 데이터 JPA가 구현체를 자동으로 만들어서 스프링 빈에 등록을 해준다.

```java
public interface SpringDataJpaMemberRepository extends JpaRepository<Member, Long>, MemberRepository {
    Optional<Member> findByName(String name);
}
```

### 스프링 데이터 JPA 를 사용하도록 설정 변경

```java

@Configuration
public class SpringConfig {
    private final MemberRepository memberRepository;

    public SpringConfig(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    @Bean
    public MemberService memberService() {
        return new MemberService(memberRepository);
    }
}
```

### 참고

실무에서는 JPA와 스프링 데이터 JPA를 기본으로 사용하고, 복잡한 동적 쿼리는 Querydsl 이라는 라이브러리를 사용하면된다.

Querydsl 을 사용하면 쿼리도 자바 코드로 안전하게 작성할 수 있고, 동적 쿼리도 편리하게 작성할 수 있다.

이 조합으로 해결하기 어려운 쿼리는 JPA가 제공하는 네이티브 쿼리를 사용하거나, 앞서 학습한 스프링 JDBC Template 를 사용한다.
