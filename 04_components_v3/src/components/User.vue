<template>
  <p>
    このユーザーの名前は<slot>
      <!-- Slotの初期値の設定 -->
      <span style="font-weight: 900; font-size: 1.4em; color: red">John Doe</span> </slot
    >です。
  </p>
  <!-- slotを複数設定する場合はIDが必要 - Named Slot -->
  <div>
    <slot name="title"></slot>
    <slot name="content"></slot>
    <slot name="actions"></slot>
  </div>

  <div>
    <slot name="title">ユーザー</slot>
  </div>
  <div>
    <slot name="content[]">コンテンツ</slot>
  </div>
  <div>
    <slot name="actions">アクション</slot>
  </div>
</template>
