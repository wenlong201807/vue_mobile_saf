<template>
  <div>
    <h3>点击减少的数值：{{count}}</h3>
    <input type="button" @click="abstract_two" value="-1">

  </div>
</template>

<script>
export default {
  name: 'testvuex_two',
  props: ['count'],
  data () {
    return {

    }
  },
  methods: {
    abstract_two () {
      this.$emit('func', 5)
    }
  }
}
</script>
