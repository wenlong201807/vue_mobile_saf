<template>
  <div>
    <h1>我是共功部分大家都可以看见我滴</h1>
    <hr>
    <test-one :count="count" @func="add"></test-one>
    <hr>
    <test-two :count="count" @func="abstract"></test-two>
  </div>
</template>

<script>
import TestOne from '@/components/testvuex_one.vue'
import TestTwo from '@/components/testvuex_two.vue'

export default {
  name: 'testvuex',
  data () {
    return {
      count: 0
    }
  },
  components: {
    TestOne, TestTwo
  },
  methods: {
    add (c) {
      console.log(c)
      this.count += c
    },
    abstract (d) {
      console.log(d)
      this.count -= d
    }
  }
}
</script>
