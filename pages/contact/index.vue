<template>
  <div :class="$style['base-container']">
    <h1 :class="$style['heading']">Let's do it!</h1>

    <form @onsubmit.prevent="handleSubmit">
      <LayoutFlexRow>
        <BaseTextInput 
          :label="'Name'" 
          :id="'name'" 
          type="text" 
          v-model="useDetails.name"
        />

        <BaseTextInput
          :label="'Company'"
          :id="'company'"
          type="text"
          v-model="useDetails.company"
        />
      </LayoutFlexRow>

      <LayoutFlexRow>
        <BaseTextInput
          :label="'Project or Business Name'"
          :id="'project'"
          type="text"
          v-model="useDetails.project"
        />

        <BaseSelectInput
          :label="'Project type'"
          :id="'type'"
          v-model="useDetails.type"
          :options="[
            'Pay as you go',  
            'White Label Developer', 
            'Migration, Update, Refactoring', 
            'Other'
          ]"
        />

      </LayoutFlexRow>

      <LayoutFlexRow>
        <BaseTextInput
          :label="'Links/resources to look at:'"
          :id="'links'"
          type="text"
          v-model="useDetails.links"
        >
          <template #default>
            <small :class="$style['text-center']">Ex: figma, existing web app or loom video description</small>
          </template>
        </BaseTextInput>
        

        <BaseSelectInput 
          :label="'Deadline'"
          :id="'deadline'"
          v-model="useDetails.deadline"
          :options="[
            '1 month or less', 
            '1 - 3 months', 
            '3 - 6 months',
            'Help me stimate',
            'Undefined'
          ]"
        />
      </LayoutFlexRow>

      <BaseTextarea
        :label="'Project Summary & Details'"
        :id="'details'"
        v-model="useDetails.description"
        cols="30" 
        rows="10"
        placeholder="Share additional information about the project"
      />

      <p :class="$style['label-primary']">What is your budget?</p>
      <LayoutFlexRow>
        <BaseRadioInput
          type="radio"
          :label="'Hourly'"
          :id="'budget-1'"
          v-model="useDetails.budget"
          :value="0"
          name="budget"
        />

        <BaseRadioInput
          type="radio"
          :label="'5k - 10k Euros'"
          :id="'budget-2'"
          v-model="useDetails.budget"
          :value="1"
          name="budget"
        />

        <BaseRadioInput
          type="radio"
          :label="'10k - 20k Euros'"
          :id="'budget-3'"
          v-model="useDetails.budget"
          :value="2"
          name="budget"
        />

        <BaseRadioInput
          type="radio"
          :label="'20k+ Euros'"
          :id="'budget-4'"
          v-model="useDetails.budget"
          :value="3"
          name="budget"
        />
      </LayoutFlexRow>

      <div>
        <button type="submit" :class="$style['button']"></button>
      </div>
    </form>

    <pre>{{ useDetails }}</pre>
  </div>
</template>

<script setup lang="ts">


const useDetails = ref({
  name: '',
  company: '',
  project: '',
  type: '',
  links: '',
  deadline: '',
  description: '',
  budget: '',
})

const handleSubmit = () => {
  alert('submit')
}
</script>

<style lang="scss" module scoped>
.base-container {
  padding-inline: var(--space-400);
}
.heading {
  font-size: 4.8rem;
}

.text-center {
  text-align: center;
}

.label-primary {
  font-size: 1.6rem;
  font-weight: 600;
  color: inherit;
  margin: 0;
  padding: 0;
}
.button {
    border: 0;
    border: 1px solid var(--text-color-active);
    letter-spacing: 2px;
    padding: .8rem 2.5rem;
    font-size: 1.9rem;
    font-weight: 800;
    text-transform: uppercase;
    cursor: pointer;
    transition: border .5s ;

    &:before {
      content: "Send it!";
    }

    &:hover {
      border:1px solid var(--text-color-red-0);
      transition: color .5s ;
      

      &:before {
        content: "Let's gooooo!";
      }
    }

    @media screen and (max-width: 768px) {
      text-align: center;
    }
}
</style>