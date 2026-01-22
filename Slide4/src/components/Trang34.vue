<template>
    <div>
        <!-- <h1>Hiển thi nội dung ở đây</h1> -->
        <h6 v-html="content" v-bind:style="styleData" v-bind:class="className"></h6>
        <h6 class="text-red" style="font-size: 5rem">{{ content }}</h6>
        <h2>:{{ message }}</h2>
        <h2 v-html="number + 5"></h2>
        <h4>{{ sayHI() }}</h4>
        <button @click="change">Change</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            content: 'xin chao cac ban 01',
            message: 'Hello Vue',
            number: 10,
            className: 'text-red',
            styleData: { fontSize: '5rem' }

        }
    },
    methods: {
        sayHI() {
            return 'day la phuong thuc'
        },
        changeContent() {
            this.message = 'Noi dung da thay doi'
        },
        change() {
            this.content = 'Da doi thanh noi dung moi'
            this.className = 'text-blue'
        }
    }
}
</script>
<style>
.text-red {
    color: red;
}

.text-blue {
    color: blue;
}
</style>