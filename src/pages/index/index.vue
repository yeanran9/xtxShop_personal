<script setup lang="ts">
import CustomNavbar from '@/pages/index/components/CustomNavbar.vue'
import CategoryPanel from '@/pages/index/components/CategoryPanel.vue'
import HotPanel from '@/pages/index/components/HotPanel.vue'
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/services/home'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { XtxGuessInstance } from '@/types/component'
// 请求轮播图数据
const bannerList = ref<BannerItem[]>([])
const getHomeBanner = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}
// 请求首页分类数据
const categoryList = ref<CategoryItem[]>([])
const getHomeCategory = async () => {
  const res = await getHomeCategoryAPI()
  categoryList.value = res.result
  // console.log(categoryList)
}
// 请求热门推荐板块数据
const hotList = ref<HotItem[]>([])
const getHomeHot = async () => {
  const res = await getHomeHotAPI()
  hotList.value = res.result
}

onLoad(() => {
  getHomeBanner(), getHomeCategory(), getHomeHot()
})

// 获取猜你喜欢组件实例
const guessRef = ref<XtxGuessInstance>()
// 滚动触底事件
const onScrolltolower = () => {
  // console.log("到底了~")
  guessRef.value?.getMore()
}

// 下拉刷新
const isTriggered = ref(false) // 下拉刷新状态 true开启false关闭
const onRefresherrefresh = async () => {
  isTriggered.value = true
  guessRef.value?.resetGuessData()
  await Promise.all([getHomeBanner(), getHomeCategory(), getHomeHot(), guessRef.value?.getMore()])
  isTriggered.value = false
}
</script>

<template>
  <custom-navbar></custom-navbar>
  <scroll-view
    scroll-y
    class="scroll-view"
    @scrolltolower="onScrolltolower"
    refresher-enabled
    :refresher-triggered="isTriggered"
    @refresherrefresh="onRefresherrefresh"
  >
    <XtxSwiper :list="bannerList"></XtxSwiper>
    <CategoryPanel :list="categoryList"></CategoryPanel>
    <HotPanel :list="hotList"></HotPanel>
    <XtxGuess ref="guessRef"></XtxGuess>
  </scroll-view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7d6;
  display: flex;
  flex-direction: column;
  height: 100%;
}
.scroll-view {
  flex: 1;
}
</style>
