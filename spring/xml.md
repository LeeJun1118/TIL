# Spring XML 설정

## NameSpace

XML 요소 간의 이름에 대한 충돌을 방지해 주는 방법을 제공한다.

요소의 이름과 속성의 이름을 하나의 그룹으로 묶어주어 이름에 대한 충돌을 해결한다.

이러한 XML 네임스페이스는 URI 로 식별된다.

### XML 요소 간의 이름 충돌

XML 에서는 사용자가 직접 XML 요소의 이름을 정의한다. </br>
따라서 서로 다른 XML 문서를 통합하려 할 때 같은 이름을 가진 요소로 인해 충돌이 발생할 수 있다.

#### 예제 1

```html
<body>
    <h1>html 에서의 제목</h1>
    <p>html 에서의 단락</p>
</body>
```

#### 예제 2

```xml
<body>
    <arm>70</arm>
    <leg>110</leg>
</body>
```

위의 두 예제의 `<body>` 요소는 서로 완전히 다른 의미로 사용된다. </br>
예제 1에서는 HTML 문서의 `<body>`태그로 사용되었다. </br>
예제 2에서는 실제 몸을 의미하며, 각 신체 부위의 치수를 기록하기 위해 사용되었다.

### XML 네임스페이스

XML 에서는 접두사(prefix)를 이용하여 위와 같은 충돌을 방지한다.

#### 문법

XML 네임스페이스의 선언은 xmlns 나 xmlns: 로 시작한다. </br>
prefix 속성값에는 이름 앞에 붙게 되는 네임스페이스 접두사를 명시한다. </br>
접두사로 사용되는 URI 는 네임스페이스 식별자를 의미한다.

```xml
<요소이름 xmlns:prefix="URI"></요소이름>
```

#### 예제

첫 번째 `<body>`의 xmlns 속성은 a: 라는 접두사를 선언하고 두 번째 `<body>`의 xmlns 속성은 b: 라는 접두사를 선언한다.

```xml
<root>
    <a:body xmlns:a="https://www.w3.org/TR/html5/">
        <a:h1>html 에서의 제목</a:h1>
        <a:p>html 에서의 단락</a:p>
    </a:body>
    <b:body xmlns:b="https://codingsam.com/xml/physical/">
        <b:arm>70</b:arm>
        <b:leg>110</b:leg>
    </b:body>
</root>
```