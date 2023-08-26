<template>
  <main class="flex-auto bg-brand-gray-2 p-8">
    <ol>
      <job-listing v-for="job in displayedJobs" :key="job.id" :job="job" />
    </ol>
    <div class="mx-auto mt-8">
      <div class="flex flex-row flex-nowrap">
        <p class="flex-grow text-sm">Page : {{ currentPage }}</p>
        <div class="flex items-center justify-center">
          <router-link
            v-if="previousPage"
            :to="{ name: 'JobResults', query: { page: previousPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            >Previous</router-link
          >
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import JobListing from "@/components/JobResults/JobListing.vue";
import usePreviousAndNextPages from "@/Composables/UsePreviousAndNextPages";
import { useJobsStore } from "@/stores/job";

const jobsStore = useJobsStore();
onMounted(jobsStore.FETCH_JOBS);
const FILTERED_JOBS = computed(() => jobsStore.FILTERED_JOBS);

const route = useRoute();
const currentPage = computed(() => Number.parseInt(route.query.page || "1"));
const maxPage = computed(() => Math.ceil(FILTERED_JOBS.value.length / 10));

const { previousPage, nexPage } = usePreviousAndNextPages(currentPage, maxPage);

const displayedJobs = computed(() => {
  const pageNumber = currentPage.value;
  const firstJobIndex = (pageNumber - 1) * 10;
  const lastJobIndex = pageNumber * 10;
  return FILTERED_JOBS.value.slice(firstJobIndex, lastJobIndex);
});
</script>
