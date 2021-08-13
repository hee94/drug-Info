## drug-infomation (약 정보 검색)
  
  
  #### 개발환경💻  
   <img src="https://img.shields.io/badge/-Javascript-%23ec9d93?style=flat-square&logo=JavaScript&logoColor=white"/></a>
    <img src="https://img.shields.io/badge/-PostCSS-%23d7b0f0?style=flat-square&logo=PostCSS&logoColor=white"/></a>
    <img src="https://img.shields.io/badge/-React-%23b0e9f0?style=flat-square&logo=React&logoColor=white"/></a> 
    <img src="https://img.shields.io/badge/-Firebase-%23c9f0b0?style=flat-square&logo=Firebase&logoColor=white"/></a>
    
  개발인원 ✋  : 1명
  ### 프로젝트 소개 💬   
  https://drug-info-b2789.web.app/
```
  로그인을 통해서 사용 가능한 프로젝트로, 구글과 깃허브, 아이디로 로그인이 가능하며 
  한번 로그인 한 후 로그아웃을 하기 전까지 사용자가 재로그인이 하지 않아도 됩니다.
  약의 이름을 검색하여 사용증상, 복용방법,부작용,주의사항에 대한 정보를 받아 볼 수 있으며
  횟수와 먹는시간대, 메모와 함께 간단한 정보를 저장/삭제 할 수 있습니다.
  파이어베이스를 통해 배포하였습니다.
```
![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/86425527/128625747-fde91be0-b790-429f-8a17-769550764a52.gif)

  ### 코드 🕵️
  
  **react hook / react-router**
  ```
    재사용성과 가독성이 좋으며 state관리및 라이프사이클메소드와 같은 기능들이 가능한 리액트 훅을 사용하였고, 
    로그인/회원가입/메인 3개의 페이지를 이용하기때문에 각 페이지들에 북마크추가/ 앞으로가기,뒤로가기등이 
    가능하게 하기 위해 리액트라우터를 사용하였습니다.컴포넌트 안에서는 usehistory()사용하여 로그아웃이나 로그인유지에 따른 이동을 시켰습니다.
  ```
<img width="403" alt="라우터" src="https://user-images.githubusercontent.com/86425527/128625316-36233d71-79c7-4c18-985d-d1e84780d13a.png"> <img width="301" alt="history" src="https://user-images.githubusercontent.com/86425527/128625315-6bc5883f-e381-4004-ac03-494b61545621.png">

  **firebase authentication / Realtime Database**
  ```
    로그인과 정보를 저장해둘 데이터베이스로 파이어베이스를 이용했습니다. 
  ```
  
  **Dependency Injection**
  ```
    리액트 컴포넌트 안에서 네트워크 통신이나 비지니스 로직등이 가능하게 하는건 별로 좋지 않기 때문에
    그런 기능들을 재사용성을 위해 javascript의 class로 만들어 빼 준 후 컴포넌트안에 주입해 주는 것이 좋습니다.
    그래서 파이어베이스와 API에 관련된 로직들을 따로 서비스폴더 안에 만들어 두고 index.js파일 안에서 props로 전달해 주었습니다.
    api key같은 경우도 직접적으로 보여지게 하지 않기 위해 .env파일로 숨겨주었습니다.
  ```
<img width="661" alt="di2" src="https://user-images.githubusercontent.com/86425527/128626084-76666b8d-3952-4322-a0cb-6c132c99144a.png"> <img width="557" alt="di" src="https://user-images.githubusercontent.com/86425527/128626085-de7839a6-c7c9-4236-a9ba-08cd29b3158c.png">

  **list**
  ```
    약 이름을 검색했을때 정확한 이름대신 '타이레놀' '아스피린' '파스'와 같이 종류가 많은 약을 검색했을때의 경우를 위해
    리스트를 받아 오게 했습니다. state를 검색결과의 수에 맞게 각각 업데이트 해주게 했고 list는 약이름+사진이 보여지게했습니다.
    사용자가 원하는 약을 클릭하면 그 결과를 info state에 업데이트하게 해서 약정보가 보여지게 했습니다.
  ```
  <img width="664" alt="list" src="https://user-images.githubusercontent.com/86425527/128626235-0b0a4404-d931-42e4-9197-7ef292337669.png">
  
  **Resource**
  ```
    공공데이터포털에서 제공하는 API중 '의약품개요정보(e약은요) 서비스'를 이용하였습니다.
    API를 호출하기 우해 fetch()를 이용하였습니다.
  ```
  
<hr />

### 오류와 해결 👀 

**CORS (Cross-Origin Resource Sharing)**
```
  교차 출처 리소스 공유(CORS)는 추가 HTTP 헤더를 사용하여, 한 출처에서 실행 중인 웹 애플리케이션이 
  다른 출처의 선택한 자원에 접근할 수 있는 권한을 부여하도록 브라우저에 알려주는 체제입니다.
```
api의 서버 출처와 요청한 출처가 달라서 오류가 발생했고 데이터를 받아 오지 못했다. \
검색을 통해 찾아본 결과 package.json 폴더 안에   "proxy" :"http://apis.data.go.kr/" 를 \
추가해주면 해결되는 문제였다. 
**그런데 로컬에서는 괜찮았는데 배포를 하고 나니 api요청에 계속 문제가 발생했다**
그래서 다시 열심히 검색해서 새로운 방법으로 대체했다 \
package.json 안에 있던 프록시를 지워주고 fecth()에 url에 https://cors.bridged.cc 를 붙여주는걸로 해결했다.


**사라지지 않는 체크박스**   

  카드안에서 횟수를 설정하고 저장 버튼을 누르면 카드에 약이름제외한 모든 내용들이 리셋이 되고 \
  그 다음 다시 새로운 정보를 설정하고 누르면 그 정보에 맞는 내용으로 카드가 저장되어야 하는데 \
  form.reset()을 해서 폼 자체는 리셋이 되는데 횟수는 전에 체크한것 까지 포함하여 나타났다. \
  1차 당황 후 저장버튼을 클릭했을때 체크박스 state를 비워주면 되겠다 싶어서 setCheckedInput([]); 를 설정했다. \
  이번에는 체크를 했다가 체크를 해제한 것들 때문에 다시 또 문제가 발생했다. \
  최종적으로 해결 된 방법으로 아래 코드를 완성했다.
  ```
  const TimeCheckbox = ({CheckedBox}) => {
    const onChecked =(e)=>{
        CheckedBox(e.currentTarget.checked,e.target.value) **체크가 된 상태면 true 를 체크해제면 false를 반환
        console.log(e.currentTarget.checked)
    }
  
    const CheckedBox =(checked, id)=>{
        if(druginfo){
            if (checked) { **넘겨받은 checked가 true이면
                setCheckedInput([...checkedInput,id]); ** 불변성을 위해 기존것을 복제한후 id값을 추가해서 state에 업데이트해줌
              } 
              else { ** false인 경우에는 넘겨받은 값의 value로 비교해서 state안에 값을 변경해서 업데이트해줌
                setCheckedInput(checkedInput.filter((item) => item !== id));
              }
        }else{setCheckedInput([])}
    }
  ```
  **문자열 메소드**   
   
   api로 받아온 데이터를 화면에 뿌려주고 확인하니 p태그채로 문자열이 되어서 보여지고 있었다. \
   처음엔 데이터 자체를 어떻게 해야하는가 고민을 한참 했지만 문자열 메소드를 이용해서 없애주는 편이 더 간단할것 같다고 생각했다 \
   replace() 메소드를 이용했다. 모든 p태그를 없애주기 위해 정규 표현식을 이용했다.
    
<img width="615" alt="qq" src="https://user-images.githubusercontent.com/86425527/128627660-3fc4d067-9539-48fd-a788-b9fb54b38966.png">





