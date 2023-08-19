<template>
    <input type="text" :value="value" class="w-full text-lg font-normal focus:outline-none" @input="handleInput" />
</template>

<script lang="ts">
export default {
    name: "TextInput",
    data() {
        return {
            value: "",

        }
    },
    methods: {
        handleInput($event: any) {
            this.value = $event.target.value
            this.$emit('handleInput', this.value)
        },
    }
}
</script>
