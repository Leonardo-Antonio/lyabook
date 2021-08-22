<template>
  <div class="h-screen w-full bg_secundary flex flex-row-reverse">
    <div class="w-full">
      <Header />
      <div class="p-10">
        <div>
          <BtnMiMor />
        </div>

        <div class="fixed right-4 bottom-2">
          <div class="rounded-full">
            <div class="text-6xl">
              <a href="#">
                <i class="el-icon-info"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Panel />
  </div>
</template>

<script>
import Panel from '../../../components/dashboard/panel'
import Header from '../../../components/dashboard/header'
import Home from '../../../components/dashboard/admin/home'

export default {
  components: {
    Panel,
    Header,
    Home,
  },
  data() {
    return {
      asdasd: ''
    }
  }
}
</script>
