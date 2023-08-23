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

<script>
import CollapsibleAccordion from "@/components/Shared/CollapsibleAccordion.vue";
import { mapState, mapActions } from "pinia";
import { useJobsStore, UNIQUE_ORGANIZATIONS } from "@/stores/job";
import { useUserStore, ADD_SELECTED_ORGANIZATIONS } from "@/stores/user";
export default {
  name: "Organizations",
  components: { CollapsibleAccordion },
  data() {
    return {
      selectedOrganizations: [],
    };
  },
  computed: {
    ...mapState(useJobsStore, [UNIQUE_ORGANIZATIONS]),
  },
  methods: {
    ...mapActions(useUserStore, [ADD_SELECTED_ORGANIZATIONS]),
    selectOrganization() {
      this.ADD_SELECTED_ORGANIZATIONS(this.selectedOrganizations);
      this.$router.push({ name: "JobResults" });
    },
  },
};
</script>