<script setup lang="ts">
import {useUserStore} from "../stores/user.ts";

const store = useUserStore()
// 直接使用 store.increment action
const increment = () => {
  store.incrementAge()
}
</script>

<template>
  <div>
    <el-button type="warning" @click="increment" plain>{{ store.age }}</el-button>
    <el-text class="mx-1" type="warning">{{ store.isAdult }}</el-text>
  </div>
</template>

<style scoped>

</style>
