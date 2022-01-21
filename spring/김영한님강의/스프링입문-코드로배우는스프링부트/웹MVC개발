# 웹 MVC 개발

* 회원 등록

  1. `/members/new`을 요청 받으면 해당 Controller 가 
  실행이 되며 viewResolver에 의해 template 폴더에서 찾은 members/createMemberForm 가 선택이 된다
      ```java
      @GetMapping("/members/new")
      public String createForm(){
              return"members/createMemberForm";
      }
      ```

  2. thymeleaf 엔진에 의해 랜더링이 된다.
     ```html
     <html xmlns:th="http://www.thymeleaf.org">
        <body>
           <div class="container">
              <form action="/members/new" method="post">
                 <div class="form-group">
                    <label for="name">이름</label>
                    <input type="text" id="name" name="name" placeholder="이름을 입력하세요.">
                 </div>
                 <button type="submit">등록</button>
              </form>
           </div><!--        container-->
        </body>
     </html>
     ```
  3. `<form></form>` 태그로 값을 입력할 수 있다
  4. `action="/members/new" method="post"` 해당 URL 의 POST 방식인 Controller 로 값을 보낸다.
     1. `<input>`태그의 name 속성이 key가 된다.
  5. 해당 Controller 가 호출된다.
     1. Controller 의 메소드가 실행된다.
        ```java
        @PostMapping("/members/new")
            public String create(MemberForm form) {
                Member member = new Member();
                member.setName(form.getName());
   
                memberService.join(member);
   
                return "redirect:/";
            }
        ```
     2. Spring이 setter를 통해서 input 태그의 key 인 name 에 값을 넣어준다.
        ```java
        public class MemberForm {
            private String name;
       
            public String getName() {
                return name;
            }
            public void setName(String name) {
                this.name = name;
            }
        }
        ```
     3. `return "redirect:/";` 으로 홈 화면으로 보낸다.


* 회원 목록 조회
  1. `model.addAttribute("members", members);` members 를 키로 회원 리스트를 보내준다.
    ```java
      @GetMapping("/members")
      public String list(Model model) {
      List<Member> members = memberService.findMembers();
      model.addAttribute("members", members);
      
              return "members/memberList";
          }
   ```
  2. thymeleaf 엔진이 members 를 받아서 하나씩 꺼내서 뿌려준다.
   ```html
   <tr th:each="member : ${members}">
       <td th:text="${member.id}"></td>
       <td th:text="${member.name}"></td>
   </tr>
   ```