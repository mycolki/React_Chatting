## 진행방법1

코드를 작성하기에 앞서, 아래의 내용을 충분히 숙지하신 후 진행해 주세요.
모든 작업이 완료되면 main 브랜치로 머지하는 Pull Request를 만들고, HR 담당자 (job@kakaostyle.com)에게 알려주세요.

## 요구사항

[디자인과 스타일 가이드](https://scene.zeplin.io/project/5d527bdedd6f4cb2bffa5538) 를 보시고 채팅 앱을 구현해주세요.

> 제플린 상세 가이드는 이메일로 초대 보내드렸습니다.
> 계정 추가가 필요하신 분은 이름과 [zeplin](https://zeplin.io/) 아이디를 메일로 (job@kakaostyle.com) 보내주세요. zeplin 프로젝트 초대를 다시 전달 드리겠습니다.

### 실행환경

- nodejs 14
- iOS 13.0
- android 10

### 필수 요구사항

- 타입스크립트를 사용해 주세요.
- React 를 사용해 구현해 주세요.
  - React Native 는 사용하지 말아주세요.
  - CRA, Next.js 사용 가능합니다.
- 임의의 작업 브랜치를 만들고, 커밋을 진행해 주세요.
- 라우팅을 구현해 주세요.
  - `/list`: [채팅목록](https://scene.zeplin.io/project/5d527bdedd6f4cb2bffa5538/screen/5d527bfb82415f9b2afb4e19)
  - `/room/:room_id`: [채팅방](https://scene.zeplin.io/project/5d527bdedd6f4cb2bffa5538/screen/5d527bfca0b25b9b90224798)
- Pull Request 에 과제의 실행방법과 구현내용, 고민되었던 부분을 작성해 주세요.
- 채팅목록
  - 각 채팅목록에는 최근 전송한 메세지, 읽지 않은 메세지 갯수, 마지막 메세지 전송 시간을 표시해 주세요.
- 채팅방
  - 메세지 전송 시간은 `hh:mm` 포맷으로 보여주세요.
  - 한 사람이 1분 동안 메세지를 연속해서 보낸다면, 마지막 메세지만 전송 시간을 표시해 주세요.
  - 날짜가 바뀌면 날짜 구분선을 표시해 주세요.
  - 사진 전송 기능을 구현해 주세요.
- Ant Design, Material-UI 와 같은 UI 라이브러리 **사용은 금지합니다.**
- **API 서버 구현은 필요하지 않습니다.** 서버에 데이터를 요청해 받아오는 가상의 메소드를 만들어 사용해 주세요.

### 보너스

모든 필수 요구사항을 구현하셨나요? 아래의 보너스 항목들도 살펴봐 주세요. 보너스 항목을 구현하시면, 더욱 빠르게 결과를 알려드릴께요.

- 앱의 사용자자 경험을 높일 수 있는 애니메이션을 구현해 주세요.

| 목록 ➡️ 채팅 이동시                                                                                                         | 채팅 ➡️ 사진 추가시                                                                                                        |
| --------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| <img width="400" src="https://user-images.githubusercontent.com/286950/86428650-414b0b00-bd28-11ea-963a-8770f146138a.gif"/> | <img width="400" src="https://user-images.githubusercontent.com/286950/86428653-4314ce80-bd28-11ea-83c9-6b262c02f74c.gif"> |

- 앱의 기능의 쉽게 확인할 수 있도록 작업 브랜치의 내용을 배포하고 접근 가능한 URL 을 알려주세요.
