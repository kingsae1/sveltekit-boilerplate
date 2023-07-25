<script>
  // page라는 스토어에 현재 페이지에 대한 정보가 보관
  import { page } from "$app/stores";
  // +page.js load function return data
  export let data;
  // Server Side Rendering
  export const ssr = true;
</script>

<div>
  <div>{$page.url.pathname}</div>
  <div>{$page.url.search}</div>
  <div>{JSON.stringify(data)}</div>
</div>
