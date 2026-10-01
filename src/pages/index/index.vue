<script setup lang="ts">
import CustomNavbar from '@/pages/index/components/CustomNavbar.vue'
import CategoryPanel from '@/pages/index/components/CategoryPanel.vue'
import HotPanel from '@/pages/index/components/HotPanel.vue'
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/services/home'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
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
</script>

<template>
  <custom-navbar></custom-navbar>
  <XtxSwiper :list="bannerList"></XtxSwiper>
  <CategoryPanel :list="categoryList"></CategoryPanel>
  <HotPanel :list="hotList"></HotPanel>
  <view class="index">index</view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7d6;
}
</style>
