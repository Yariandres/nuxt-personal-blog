<template>
  <div>
    contact form page
    <!-- <LayoutFlexColumn :gap="4.5">
      <h1 :class="$style['heading']">Let's do it!</h1>
      <form @onsubmit.prevent="handleSubmit">
        <LayoutFlexColumn :gap="3.2">

          <LayoutFlexRow :gap="1.6">
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

          <LayoutFlexRow :gap="1.6">
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

          <LayoutFlexRow :gap="1.6">
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
          <LayoutFlexRow :gap="1.6">
            <BaseRadioInput
              type="radio"
              :label="'Hourly'"
              :id="'budget-1'"
              v-model="useDetails.budget"
              :value="'hourly'"
              name="budget"
            />

            <BaseRadioInput
              type="radio"
              :label="'5k - 10k Euros'"
              :id="'budget-2'"
              v-model="useDetails.budget"
              :value="'5k - 10k'"
              name="budget"
            />

            <BaseRadioInput
              type="radio"
              :label="'10k - 20k Euros'"
              :id="'budget-3'"
              v-model="useDetails.budget"
              :value="'10k - 20k'"
              name="budget"
            />

            <BaseRadioInput
              type="radio"
              :label="'20k+ Euros'"
              :id="'budget-4'"
              v-model="useDetails.budget"
              :value="'20k+'"
              name="budget"
            />
          </LayoutFlexRow>

          <div :class="$style['btn-container']">
            <button type="submit" :class="$style['button']"></button>
          </div>
        </LayoutFlexColumn>
      </form>
  </LayoutFlexColumn> -->
  </div>
</template>

<script setup lang="ts">
// https://contactform7.com/getting-started-with-contact-form-7/
// https://css-tricks.com/headless-form-submission-with-the-wordpress-rest-api/

const useDetails = ref({
  name: "",
  company: "",
  project: "",
  type: "",
  links: "",
  deadline: "",
  description: "",
  budget: "",
});

const handleSubmit = () => {
  alert("submit");
};
</script>

<style lang="scss" module>
.base-container {
  padding-inline: var(--space-400);
}
.heading {
  font-size: 4.8rem;
  margin: 0;
  padding: 0;
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

.btn-container {
  display: flex;
  align-items: center;

  .button {
    background-color: transparent;
    color: inherit;
    border: 0;
    border: 1px solid var(--text-color-active);
    border-radius: 2rem;
    letter-spacing: 2px;
    padding: 0.8rem 2.5rem;
    font-size: 1.9rem;
    font-weight: 800;
    text-transform: uppercase;
    cursor: pointer;
    transition: border 0.5s;

    &:before {
      content: "Send it!";
    }

    &:hover {
      border: 1px solid var(--text-color-red-0);
      transition: color 0.5s;

      &:before {
        content: "Booom!";
      }
    }

    @media screen and (max-width: 768px) {
      text-align: center;
    }
  }
}
</style>
