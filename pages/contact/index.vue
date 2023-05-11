<template>
  <div :class="$style['container']">
    <div :class="$style['section']">
      <div>
        <p :class="$style['title']">- Contact</p>
        <h3 :class="$style['heading']">Tell me about your project!</h3>
      </div>
      <form @onsubmit.prevent="handleSubmit">
        <div :class="$style['wrap']">
          <div :class="$style['row']">
            <BaseTextInput
              :id="'name'"
              v-model="useDetails.name"
              :label="'Name'"
              type="text"
            />

            <BaseTextInput
              :id="'company'"
              v-model="useDetails.company"
              :label="'Company'"
              type="text"
            />
          </div>

          <div :class="$style['row']">
            <BaseTextInput
              :id="'project'"
              v-model="useDetails.project"
              :label="'Project or Business Name'"
              type="text"
            />
            <BaseSelectInput
              :id="'type'"
              v-model="useDetails.type"
              :label="'Project type'"
              :options="[
                'Pay as you go',
                'White Label Developer',
                'Migration, Update, Refactoring',
                'Other',
              ]"
            />
          </div>

          <div :class="$style['row']">
            <BaseTextInput
              :id="'links'"
              v-model="useDetails.links"
              :label="'Links/resources to look at:'"
              type="text"
            >
            </BaseTextInput>

            <BaseSelectInput
              :id="'deadline'"
              v-model="useDetails.deadline"
              :label="'Deadline'"
              :options="[
                '1 month or less',
                '1 - 3 months',
                '3 - 6 months',
                'Help me stimate',
                'Undefined',
              ]"
            />
          </div>

          <BaseTextarea
            :id="'details'"
            v-model="useDetails.description"
            :label="'Project Summary & Details'"
            cols="300"
            rows="10"
            placeholder="Share additional information about the project"
          />

          <p :class="$style['label-primary']">What is your budget?</p>

          <div :class="$style['row']">
            <BaseRadioInput
              :id="'budget-1'"
              v-model="useDetails.budget"
              type="radio"
              :label="'Hourly'"
              :value="'hourly'"
              name="budget"
            />

            <BaseRadioInput
              :id="'budget-2'"
              v-model="useDetails.budget"
              type="radio"
              :label="'5k - 10k Euros'"
              :value="'5k - 10k'"
              name="budget"
            />

            <BaseRadioInput
              :id="'budget-3'"
              v-model="useDetails.budget"
              type="radio"
              :label="'10k - 20k Euros'"
              :value="'10k - 20k'"
              name="budget"
            />

            <BaseRadioInput
              :id="'budget-4'"
              v-model="useDetails.budget"
              type="radio"
              :label="'20k+ Euros'"
              :value="'20k+'"
              name="budget"
            />
          </div>

          <div :class="$style['btn-container']">
            <button type="submit" :class="$style['button']"></button>
          </div>
        </div>
      </form>
    </div>
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
.container {
  height: 100dvh;
  width: 100dvw;
  overflow-y: scroll;
  scroll-behavior: smooth;

  .section {
    background-color: #e1faef;

    padding-inline: 100px;
    padding-block: 100px;
    display: flex;
    flex-direction: column;
    gap: 52px;

    .title {
      text-transform: uppercase;
      font-weight: 500;
      font-size: 14px;
      color: solid var(--main-color);
    }

    .heading {
      font-weight: 800;
      font-size: 40px;
      color: var(--main-color);
    }
  }

  .row {
    display: flex;
    gap: 16px;
    justify-content: space-between;
    align-items: center;
  }

  .wrap {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .heading {
    font-size: 32px;
    margin: 0;
    padding: 0;
    color: var(--main-color);
  }

  .text-center {
    text-align: center;
    color: var(--main-color);
  }

  .label-primary {
    font-size: 16px;
    font-weight: 600;
    color: var(--main-color);
    margin: 0;
    padding: 0;
  }

  .btn-container {
    display: flex;
    align-items: center;

    .button {
      background-color: #fff;
      color: var(--main-color);
      border: 0;
      border-radius: 20px;
      letter-spacing: 2px;
      padding: 10px 25px;
      font-size: 19px;
      font-weight: 800;
      text-transform: uppercase;
      cursor: pointer;
      transition: border 0.5s;
      box-shadow: -1px 9px 25px -5px rgba(0, 0, 0, 0.1);
      -webkit-box-shadow: -1px 9px 25px -5px rgba(0, 0, 0, 0.1);
      -moz-box-shadow: -1px 9px 25px -5px rgba(0, 0, 0, 0.1);

      &:before {
        content: "Send it!";
      }

      &:hover {
        transition: color 0.5s;

        &:before {
          content: "Boooom!";
        }
      }

      @media screen and (max-width: 768px) {
        text-align: center;
      }
    }
  }
}
</style>
