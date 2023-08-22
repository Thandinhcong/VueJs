<template>
  <collapsible-accordion header="organzations">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li class="h-8 w-1/2">
            <input type="checkbox" id="VueTuBe" class="mr-3" />
            <label for="VueTuBe">VueTuBe</label>
          </li>
          <li class="h-8 w-1/2">
            <input type="checkbox" id="Between Vue and Me" class="mr-3" />
            <label for="Between Vue and Me">Between Vue </label>
          </li>
          <li class="h-8 w-1/2">
            <input type="checkbox" id="VueTuBe" class="mr-3" />
            <label for="VueTuBe">VueTuBe</label>
          </li>
          <li class="h-8 w-1/2">
            <input type="checkbox" id="VueTuBe" class="mr-3" />
            <label for="VueTuBe">VueTuBe</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </collapsible-accordion>
</template>

<script>
import CollapsibleAccordion from "@/components/Shared/CollapsibleAccordion.vue";
export default {
  name: "Organizations",
  components: { CollapsibleAccordion },
};
</script>