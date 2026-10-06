import type { GoodsItem, PageResult } from './global'

/* 热门推荐 */
export type HotResult = {
  // 活动图片
  bannerPicture: string
  // id信息
  id: string
  // 子类选项
  subTypes: subTypeItem[]
  // 活动标题
  title: string
}
/** 热门推荐-子类选项 */
export type subTypeItem = {
  // 子类对应的商品集合
  goodsItems: PageResult<GoodsItem>
  // 子类id
  id: string
  // 子类标题
  title: string
}
