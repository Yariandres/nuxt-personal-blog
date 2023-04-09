<template>
  <div :class="$style['base-container']">
    <h1 :class="$style['heading']">Let's do it!</h1>

    <form @onsubmit.prevent="handleSubmit">
      <LayoutRow>
        <template #left>
          <BaseTextInput 
            :label="'Name'" 
            :id="'name'" 
            type="text" 
            v-model="useDetails.name"
          />
        </template>

        <template #right>
          <BaseTextInput
            :label="'Company'"
            :id="'company'"
            type="text"
            v-model="useDetails.company"
          />
        </template>
      </LayoutRow>

      <LayoutRow>
        <template #left>
          <BaseTextInput
            :label="'Project or Business Name'"
            :id="'project'"
            type="text"
            v-model="useDetails.project"
          />
        </template>

        <template #right>
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
        </template>
    </LayoutRow>

    <LayoutRow>
      <template #left>
        <LayoutFlexColumn>
          <BaseTextInput
            :label="'Links/resources to look at:'"
            :id="'links'"
            type="text"
            v-model="useDetails.links"
          />
          <small :class="$style['text-center']">Ex: figma, existing web app or loom video description</small>
        </LayoutFlexColumn>
      </template>

      <template #right>
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
      </template>
    </LayoutRow>

    <BaseTextarea
      :label="'Project Summary & Details'"
      :id="'details'"
      v-model="useDetails.description"
      cols="30" 
      rows="10"
      placeholder="Share additional information about the project"
    />


      <div>
        <p>What is your budget?</p>
        <label for="budget-1">Hourly</label>
        <input type="radio" id="budget-1" name="budget" value="1">

        <label for="budget-2">5k - 10k Euros</label>
        <input type="radio" id="budget-2" name="budget" value="2">

        <label for="budget-3">10k - 20k Euros</label>
        <input type="radio" id="budget-3" name="budget" value="3">

        <label for="budget-4">20k+ Euros</label>
        <input type="radio" id="budget-4" name="budget" value="4">
      </div>

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