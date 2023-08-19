<template>
  <form class="flex h-12 w-full items-center rounded-3xl border border-solid border-brand-gray-3">
    <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3" />
    <div class="flex flex-1 flex-nowrap h-full text-base font-light">
      <div class="relative flex h-full flex-1 items-center pr-3">
        <label class="absolute left-0 -top-10">Role</label>
        <text-input placeholder="Software engineer" @handle-input="updateRole" />
      </div>
      <span class="flex items-center h-full border-l border-r border-brand-gray-3 bg-brand-gray-2 px-3">
        in
      </span>
      <div class="relative flex h-full flex-1 items-center pl-3">
        <label class="absolute left-0 -top-10">Where?</label>
        <text-input placeholder="Los Angeles" @handle-input="updateLocation" />
      </div>

    </div>
    <action-button text="Search " type="secondary" class="rounded-r-3xl" />
  </form>
</template>

<script lang="ts">
import ActionButton from "../Shared/actionButton.vue";
import TextInput from "../Shared/TextInput.vue";
export default {
  name: "JobSearchForm",
  components: {
    ActionButton,
    TextInput,
  },
  data() {
    return {
      role: "",
      localtion: "",
    };
  },
  methods: {
    updateRole(payload: any) {
      console.log(payload);
      this.role = payload
    },
    updateLocation(payload: any) {
      this.localtion = payload
    }
  }
};
</script>
