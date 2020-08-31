<template>
<div>
  <el-tag
  :key="tag.name"
  v-for="tag in dynamicTags"
  :closable = "tag.name !== 'home'"
  :disable-transitions="false"
  @close="handleClose(tag)" @click="changeMenu(tag)" >
  {{tag.label}}
</el-tag>
</div>
</template>
 
<script>
import { mapState } from 'vuex'

  export default {
    data() {
      return {
        // dynamicTags: [],
        inputVisible: false,
        inputValue: ''
      };
    },
    methods: {
      handleClose(tag) {
        // this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
        this.$store.commit('closeTag',tag);
      },
      changeMenu(tag) {
        this.$router.push({name: tag.name})
      }
    },
    computed: {
      ...mapState({
        dynamicTags: state => state.tab.tags
      })
    }
  }
</script>

<style scoped>
.el-tag {
  margin: 5px;
}
</style>