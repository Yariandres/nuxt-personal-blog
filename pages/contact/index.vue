<template>
  <div :class="$style['base-container']">
    <h1 :class="$style['heading']">Let's do it!</h1>

    <form @onsubmit.prevent="handleSubmit">
      <LayoutRow>
        <template #left>
          <BaseTextInput/>
        </template>

        <template #right>
          <LayoutFlexColumn>
            <div>
              <label for="company">Company</label>
              <input type="text" id="company">
            </div>
          </LayoutFlexColumn>
        </template>
      </LayoutRow>

      <div>
        <label for="project">Project or Business Name</label>
        <input type="text" id="project">
      </div>

      <div>
        <label for="type">Project type</label>
        <select id="type">
          <option value="1">Pay as you go</option>
          <option value="2">White Label Developer</option>
          <option value="3">Migration, Update, Refactoring</option>
          <option value="4">Other</option>
        </select>
      </div>

      <div>
        <label for="text">Links/resources to look at: </label>
        <input type="text" id="text" />
        <p>Ex: figma, existing web app or loom video description</p>
      </div>

      <div>
        <label for="deadline">Deadline</label>
        <select id="deadline">
          <option value="1">1 month or less</option>
          <option value="2">1 - 3 months</option>
          <option value="3">3 - 6 months</option>
          <option value="4">Undefined</option>
        </select>
      </div>

      <div>
        <label for="details">Project Summary & Details</label>
        <textarea id="details" cols="30" rows="10"
          placeholder="Share additional information about the project"></textarea>
      </div>

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
  </div>
</template>

<script setup lang="ts">

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
.button {
    border:0;
    // opacity:0;
    border:1px solid var(--text-color-active);
    letter-spacing:2px;
    padding:.8rem 2.5rem;
    font-size:1.9rem;
    font-weight:800;
    text-transform:uppercase;
    cursor:pointer;
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