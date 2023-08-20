<template>
    <div>Job Page for job {{ currentJobId }}</div>
</template>

<script lang="ts">
export default {
    name: "JobView",
    computed: {
        currentJobId(): any {
            return this.$route.params.id;
        }
    }
}
</script>