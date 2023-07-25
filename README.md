# Project structure

```
    my-project/
    ├ src/
    │ ├ lib/
    │ │ ├ server/
    │ │ │ └ [your server-only lib files]
    │ │ └ [your lib files]
    │ ├ params/
    │ │ └ [your param matchers]
    │ ├ routes/
    │ │ └ [your routes]
    │ ├ app.html
    │ ├ error.html
    │ ├ hooks.client.js
    │ └ hooks.server.js
    ├ static/
    │ └ [your static assets]
    ├ tests/
    │ └ [your tests]
    ├ package.json
    ├ svelte.config.js
    ├ tsconfig.json
    └ vite.config.js
```

## SRC
    디렉토리 src에는 프로젝트의 핵심이 포함되어 있습니다. src/routes및 를 제외한 모든 항목은 src/app.html선택 사항입니다.

### lib
    $lib별칭을 통해 가져오거나 다음을 사용하여 배포용으로 패키징 할 수 있는 라이브러리 코드(유틸리티 및 구성 요소)를 포함합니다.svelte-package
    - server서버 전용 라이브러리 코드를 포함합니다.
    - 별칭 을 사용하여 가져올 수 있습니다.
    - $lib/server. SvelteKit은 클라이언트 코드에서 이러한 항목을 가져오는 것을 방지합니다.
### params
    앱에 필요한 모든 매개변수 매처 포함

### routes
    애플리케이션의 경로를 포함합니다 . 여기에서 단일 경로 내에서만 사용되는 다른 구성 요소를 함께 배치할 수도 있습니다.

### app.html
    페이지 템플릿은 다음 자리 표시자를 포함하는 HTML 문서입니다.
    - %sveltekit.head%— 앱에 필요한 요소 및 <link>모든 콘텐츠<script><svelte:head>
    - %sveltekit.body%— 렌더링된 페이지의 마크업. 요소 를 주입한 다음 수화 프로세스에 의해 파괴되는 브라우저 확장 프로그램으로 인해 발생하는 버그를 방지하기 위해 이 <div>요소는 직접 내부가 아니라 또는 다른 요소 내부 에 있어야 합니다 . <body>SvelteKit은 그렇지 않은 경우 개발 중에 경고합니다.
    - %sveltekit.assets%— paths.assets지정된 경우 , 또는 에 대한 상대 경로paths.base
    - %sveltekit.nonce%— 사용되는 경우 수동으로 포함된 링크 및 스크립트에 대한 CSP nonce
    - %sveltekit.env.[NAME]%- 렌더링 시 (보통 ) [NAME]로 시작해야 하는 환경 변수 로 대체됩니다 . 일치하지 않는 경우 대체됩니다 .publicPrefixPUBLIC_''

### error.html
    다른 모든 것이 실패할 때 렌더링되는 페이지입니다. 다음 자리 표시자를 포함할 수 있습니다.
    - %sveltekit.status%— HTTP 상태
    - %sveltekit.error.message%— 오류 메시지

### hooks.client.js
    클라이언트 후크 포함

### hooks.server.js
    서버 후크를 포함합니다.

### service-worker.js
    귀하의 서비스 작업자를 포함합니다.

(프로젝트에 파일이 포함되어 있는지 여부 .js는 .ts프로젝트를 생성할 때 TypeScript를 사용하는지 여부에 따라 다릅니다. 이 페이지 하단의 토글을 사용하여 문서에서 JavaScript와 TypeScript 간에 전환할 수 있습니다.)


