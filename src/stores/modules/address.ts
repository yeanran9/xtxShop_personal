import type { AddressItem } from '@/types/address'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAddressStore = defineStore('address', () => {
  const selectedAddress = ref<AddressItem>()

  const changeSelectedAddress = (val: AddressItem) => {
    selectedAddress.value = val
  }

  // 清理store中的地址
  const clearSelectedAdress = () => {
    selectedAddress.value = undefined
  }

  return { selectedAddress, changeSelectedAddress, clearSelectedAdress }
})
