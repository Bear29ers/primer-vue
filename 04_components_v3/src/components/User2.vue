<template>
  <!-- 子コンポーネント側でslotタグの中に任意の名前の属性を追加し、値を設定する - slot props -->
  <slot message="ユーザー" content="コンテンツ"></slot>
  <!-- name属性はslotを識別するためのIDなので、slot propsではない -->
  <slot name="header" message="ヘッダー"></slot>
</template>
