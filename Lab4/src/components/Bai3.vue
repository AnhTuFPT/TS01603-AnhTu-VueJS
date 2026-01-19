<template>
  <div>
    <h1>{{ greeting }}</h1>

    <button
      :title="buttonTitle"
      @click="changeGreeting"
      class="btn btn-primary"
    >
      Click để thay đổi
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      greeting: 'Xin chào bạn!',
      buttonTitle: 'Nhấn để thay đổi lời chào'
    }
  },
  methods: {
    changeGreeting() {
      this.greeting = 'Hello World!'
      this.buttonTitle = 'Lời chào đã được cập nhật'
    }
  }
}
</script>
