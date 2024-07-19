<template>
  <div>

    <div>
      <el-menu
          class="el-menu-demo"
          mode="horizontal"
          :ellipsis="false"
      >
        <el-menu-item index="0">
          <img
              style="width: 100px"
              src="/icon.png"
              alt="Element logo"
          />
        </el-menu-item>
        <div class="flex-grow"/>
        <el-menu-item index="1">Processing Center</el-menu-item>
        <el-sub-menu index="2">
          <template #title>Workspace</template>
          <el-menu-item index="2-1">item one</el-menu-item>
          <el-menu-item index="2-2">item two</el-menu-item>
          <el-menu-item index="2-3">item three</el-menu-item>
          <el-sub-menu index="2-4">
            <template #title>item four</template>
            <el-menu-item index="2-4-1">item one</el-menu-item>
            <el-menu-item index="2-4-2">item two</el-menu-item>
            <el-menu-item index="2-4-3">item three</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
      </el-menu>
    </div>
    <div style="display: flex;flex-direction: row;margin-top: 10px">
      <div>
        <el-button>
          <el-icon v-if="isCollapse" @click="isCollapse=!isCollapse">
            <DArrowRight/>
          </el-icon>
          <el-icon v-if="!isCollapse" @click="isCollapse=!isCollapse">
            <DArrowLeft/>
          </el-icon>
        </el-button>
        <el-menu
            default-active="/"
            class="el-menu-vertical-demo"
            :collapse="isCollapse"
            @open="handleOpen"
            @select="handleSelect"
            @close="handleClose"
        >
          <el-menu-item index="/">
            <el-icon>
              <House/>
            </el-icon>
            <template #title>主页</template>
          </el-menu-item>
          <el-sub-menu index="/">
            <template #title>
              <el-icon>
                <icon-menu/>
              </el-icon>
              <span>功能</span>
            </template>
            <el-menu-item-group>
              <template #title><span>组一</span></template>
              <el-menu-item index="/all">全部</el-menu-item>
              <el-menu-item index="1-2">item two</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="组二">
              <el-menu-item index="1-3">item three</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="1-4">
              <template #title><span>item four</span></template>
              <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-menu-item index="/about">
            <el-icon>
              <setting/>
            </el-icon>
            <template #title>设置</template>
          </el-menu-item>
        </el-menu>
      </div>
      <div id="content">
        <el-watermark :font="font" :content="userStore.name">
          <router-view/>
        </el-watermark>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import {reactive, ref, watch} from 'vue'
import {useRoute, useRouter} from "vue-router";
import {useUserStore} from "../stores/user.ts";
import {
  DArrowLeft,
  DArrowRight,
  House,
  Menu as IconMenu,
  Setting,
} from '@element-plus/icons-vue'

const isCollapse = ref(true)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const font = reactive({
  color: 'rgba(0, 0, 0, .15)',
})
const isDark = ref(false)
//监听是否黑夜模式
watch(
    isDark,
    () => {
      font.color = isDark.value
          ? 'rgba(255, 255, 255, .15)'
          : 'rgba(0, 0, 0, .15)'
    },
    {
      immediate: true,
    }
)

const router = useRouter()
const route = useRoute()
const activeIndex = ref('1')
const userStore = useUserStore()

// 初始化 activeIndex
const updateActiveIndex = () => {
  activeIndex.value = route.path
};
updateActiveIndex();
// 监控路由变化
watch(route, updateActiveIndex);

const handleSelect = (key: string) => {
  router.push(key);
}
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

#content {
  margin: 0;
  padding: 50px;
  flex: 1;
  text-align: center;
}

.flex-grow {
  flex-grow: 1;
}

</style>
