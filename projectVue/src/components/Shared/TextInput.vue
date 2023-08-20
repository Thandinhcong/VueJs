<template>
    <input type="text" :value="modelValue" class="w-full text-lg font-normal focus:outline-none" @input="handleInput" />
</template>

<script lang="ts">
export default {
    name: "TextInput",
    props: {
        modelValue: {
            type: String,
            required: true
        }
    },
    methods: {
        handleInput($event: any) {
            this.$emit('update:modelValue', $event.target.value);
        },
    }
}
</script>
