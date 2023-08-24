<template>
  <collapsible-accordion header="Organzations">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li
            v-for="organization in UNIQUE_ORGANIZATIONS"
            :key="organization.id"
            class="h-8 w-1/2"
          >
            <input
              type="checkbox"
              v-model="selectedOrganizations"
              :value="organization"
              :id="organization"
              class="mr-3"
              @change="selectOrganization"
            />
            <label :for="organization">{{ organization }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </collapsible-accordion>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

import CollapsibleAccordion from "@/components/Shared/CollapsibleAccordion.vue";
import { useJobsStore } from "@/stores/job";
import { useUserStore } from "@/stores/user";

const selectedOrganizations = ref([]);

const jobsStore = useJobsStore();
const UNIQUE_ORGANIZATIONS = computed(() => jobsStore.UNIQUE_ORGANIZATIONS);

const userStore = useUserStore();
const router = useRouter();

const selectOrganization = () => {
  userStore.ADD_SELECTED_ORGANIZATIONS(selectedOrganizations);
  router.push({ name: "JobResults" });
};
</script>