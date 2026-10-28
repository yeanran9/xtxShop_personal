<script setup lang="ts">
import cartMain from './components/cartMain.vue'

// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
</script>

<template>
  <cartMain :safeBottom="safeAreaInsets?.bottom"></cartMain>
</template>
