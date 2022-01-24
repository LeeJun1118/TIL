# JPA

ORM(Object Relational Mapping) 기술 : 객체와 관계형 데이터베이스의 테이블을 매핑해주는 것

자바 표준 인터페이스로 구현은 각 업체(hibernate,eclipselink 등 구현체가 있음)마다 한다.

* JPA는 기존의 반복 코드는 물론이고, 기본적인 SQL도 JPA가 직접 만들어서 실행해준다.
* SQL과 데이터 중심의 설계에서 객체 중심의 설계로 패러다임을 전환할 수 있다.

### 라이브러리 추가

build.gradle 파일에 JPA, h2 데이터베이스 추가

```text
implementation 'org.springframework.boot:spring-boot-starter-data-jpa'
runtimeOnly 'com.h2database:h2'
```

`spring-boot-starter-data-jpa` 는 내부에 jdbc 관련 라이브러리를 포함한다. 따라서 jdbc는 제거해도 된다.

### 스프링 부트에 JPA 설정 추가

`resources/application.properties`

```text
spring.datasource.url=jdbc:h2:tcp://localhost/~/test
spring.datasource.driver-class-name=org.h2.Driver
spring.datasource.username=sa
spring.jpa.show-sql=true
spring.jpa.hibernate.ddl-auto=none
```

- `show-sql` : JPA 가 생성하는 SQL 을 출력한다.
- `ddl-auto` : JPA 는 테이블을 자동으로 생성하는 기능을 제공하는데 `none`를 사용하면 해당 기능을 끈다.
    - `create`를 사용하면 엔티티 정보를 바탕으로 테이블도 직접 생성해준다.

### Entity 매핑

- 테이블이 될 클래스에 `@Entity` 을 붙여 DB 테이블을 생성한다. 
- 해당 테이블의 PK 에 `@Id` 를 붙여 PK 를 지정한다.
  - `@GeneratedValue(strategy = GenerationType.IDENTITY)` : DB 에 값을 넣으면 DB가 ID를 자동으로 생성해준다.
- 변수에 `@Column` 을 설정하여 DB 컬럼으로 설정해준다.

### Service
서비스 계층에 트랜잭션 추가
```java
import org.springframework.transaction.annotation.Transactional
        
@Transactional
public class MemberService {}
```
스프링은 해당 클래스의 메서드를 싱행할 때 트랜잭션을 시작하고, 매서드가 정상 종료되면 트랜잭션을 커밋한다. 만약 런타임 예외가 발생하면 롤백한다.

**JPA를 통한 모든 데이터 변경은 트랜잭션 안에서 실행해야한다.**