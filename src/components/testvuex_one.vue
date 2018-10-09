<template>
  <div>
    <h3>点击增加的数值：{{count}}</h3>
    <input type="button" @click="add_one" value="+1">

  </div>
</template>

<script>
export default {
  name: 'testvuex_one',
  props: ['count'],
  data () {
    return {

    }
  },
  methods: {
    add_one () {
      this.$emit('func', 10)
    }
  }
}
</script>
