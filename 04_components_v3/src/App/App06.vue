<script setup>
import User from './components/User.vue';
</script>

<template>
  <h1>Vue 3 入門</h1>
  <!-- <User>John Doe</User> -->
  <!-- <User> -->
  <!--   <span style="font-weight: 900; font-size: 1.4em">John Doe</span> -->
  <!-- </User> -->
  <!-- 初期値を設定した場合でも親コンポーネントでタグの間にコンテンツを挿入した場合は親コンポーネントでの設定が優先され表示される。 -->
  <!-- <User> -->
  <!--   <span style="color: blue">Jane Doe</span> -->
  <!-- </User> -->

  <User>
    <!-- <template v-slot:title><h1>ユーザー情報</h1></template> -->
    <!-- <template v-slot:content> -->
    <!--   <div> -->
    <!--     <div>John Doe</div> -->
    <!--     <div>John Doe</div> -->
    <!--   </div> -->
    <!-- </template> -->
    <!-- <template v-slot:actions><button>ユーザー追加</button></template> -->

    <!-- デフォルトのslotを明示的にv-slotを使って設定する場合 -->
    <template v-slot:default>
      <div>
        <div>John Doe</div>
        <div>John Doe</div>
      </div>
    </template>
  </User>
  <User />
  <User />
</template>
