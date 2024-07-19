<script setup lang="ts">
import {useUserStore} from "../stores/user.ts";
import {login} from "../service/user.ts";

const store = useUserStore()
// 直接使用 store.increment action
const increment = () => {
  store.incrementAge()
  login({username: "张三", age: 17}).then((res) => {
    console.log(res)
  }).catch(err => {
    console.log(err)
  })
}
</script>

<template>
  <div>
    <el-button type="primary" @click="increment" plain>{{ store.age }}</el-button>
    <el-text class="mx-1" type="primary">{{ store.isAdult }}</el-text>
  </div>
</template>

<style scoped>

</style>
