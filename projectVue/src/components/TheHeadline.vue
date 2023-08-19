<template>
<section>
    <h1 class="mb-14 text-8xl font-bold tracking-tighter">
        <span :class="actionClass">
            {{ actions }}
        </span>
        <br>
        for everyone</h1>
    <h2 class="text-3xl font-light">Find your next job at Bobo</h2>
</section>
</template>

<script lang="ts">
export default {
    name: "TheHeadline",
    data() {
        return {
            actions: "Build",
            interval: null as any,
        }
    },
    computed: {
        actionClass() {
            return {
                build: this.actions === 'Build',
                create: this.actions === 'Create',
                design: this.actions === 'Design',
                code: this.actions === 'Code',
            }
        }
    },
    created() {
        this.changeTitle();
    },
    beforeUnmount() {
        clearInterval(this.interval);
    },
    methods: {
        changeTitle() {
            this.interval = setInterval(() => {
                const actions = ['Build', 'Create', 'Design', 'Code'];
                const currentActionIndex = actions.indexOf(this.actions);
                const nextActionIndex = (currentActionIndex + 1) % 4;
                const nextAction = actions[nextActionIndex]
                this.actions = nextAction
            }, 2000)
        }
    }
}
</script>

<style scoped>
.build {
    color: #1a73e8;
}

.create {
    color: #34a835;
}

.design {
    color: #f9ab00;
}

.code {
    color: #d93025;
}
</style>
