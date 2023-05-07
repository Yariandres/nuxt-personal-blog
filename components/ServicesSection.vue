<template>
  <div :class="$style['layout-verticle']">
    <h2 :class="$style['section-title']">Services</h2>
    <LayoutFlexRow>
      <div :class="$style['card']">
        <LayoutFlexColumn :gap="1.6">
          <div :class="$style['flex-row']">
            <h3 :class="$style['card-title']">Software Developement</h3>
            <svg
              width="31"
              height="15"
              viewBox="0 0 31 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.2551 1.75608C16.8832 3.397 16.91 6.06454 15.3608 7.79669L15.2006 7.96671L8.85321 14.3525C8.67939 14.5274 8.40858 14.5468 8.21325 14.4107L8.14388 14.3524L1.79977 7.96644C0.090024 6.24374 0.0622579 3.45185 1.74489 1.75603C3.42978 0.058395 6.20621 0.0863053 7.91789 1.81139C8.11239 2.00741 8.11115 2.32399 7.91513 2.51849C7.71911 2.71299 7.40253 2.71175 7.20803 2.51573C5.88434 1.18167 3.74519 1.16017 2.45471 2.46042C1.20831 3.71658 1.1838 5.77268 2.37232 7.11563L2.50937 7.26183L8.498 13.29L14.4911 7.2621C15.769 5.97377 15.8345 3.91647 14.6787 2.60328L14.5453 2.46051C13.2544 1.16015 11.1148 1.18166 9.79066 2.51577C9.59614 2.71177 9.27956 2.71297 9.08356 2.51844C8.88757 2.32392 8.88637 2.00734 9.0809 1.81134C10.7929 0.0863202 13.5697 0.0584118 15.2551 1.75608ZM24 12.0642L24.0899 12.0722C24.3231 12.1146 24.5 12.3187 24.5 12.5642C24.5 12.8403 24.2761 13.0642 24 13.0642H16L15.9101 13.0561C15.6769 13.0138 15.5 12.8096 15.5 12.5642C15.5 12.288 15.7239 12.0642 16 12.0642H24ZM28 8.29041L28.0899 8.29847C28.3231 8.3408 28.5 8.54495 28.5 8.79041C28.5 9.06655 28.2761 9.29041 28 9.29041H19L18.9101 9.28236C18.6769 9.24002 18.5 9.03587 18.5 8.79041C18.5 8.51427 18.7239 8.29041 19 8.29041H28ZM30 4.43088L30.0899 4.43893C30.3231 4.48127 30.5 4.68542 30.5 4.93088C30.5 5.20702 30.2761 5.43088 30 5.43088H22L21.9101 5.42282C21.6769 5.38049 21.5 5.17634 21.5 4.93088C21.5 4.65474 21.7239 4.43088 22 4.43088H30Z"
                fill="var(--text-color-active)"
              />
            </svg>
          </div>
          <p :class="$style['text-normal']">Custom Software Development</p>
          <p :class="$style['text-normal']">Web Application Development</p>
          <p :class="$style['text-normal']">Mobile App</p>
          <p :class="$style['text-normal']">Software Integration</p>
        </LayoutFlexColumn>
      </div>
      <div :class="$style['divider']" />
      <div :class="$style['card']">
        <LayoutFlexColumn :gap="1.6">
          <div :class="$style['flex-row']">
            <h3 :class="$style['card-title']">Body Leasing White Label Dev</h3>
            <svg
              width="36"
              height="17"
              viewBox="0 0 36 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M33.2 10.7C32.8 10.7 32.5 10.8 32.1 10.9L23.1 4.1L22.9 4L22.5 3.8C22 3.5 21.5 3.3 21 3C19.8 2.5 18.7 2.1 17.6 1.9C17.2 1.8 16.9 1.8 16.5 1.8H15.9C13.9 1.8 13.1 1.5 11.6 0.500002C11.3 0.300002 11 0.400002 10.9 0.700002C10.9 0.800002 10.8 1 10.7 1.3C10.5 2.3 10.5 3.4 10.8 4.4C11.1 5.3 11.7 6.1 12.5 6.6V6.7C12.4 7.6 12.5 8.5 13 9.5C13.6 10.5 14.5 11.3 16 11.8C16 12.4 16.2 13.1 16.6 13.9C17.5 15.3 19.1 16.2 21.6 16.2H24.2H24.3C24.5 16.2 24.7 16 24.7 15.7C24.7 15.4 24.5 15.2 24.2 15.2H21.6H21.3C19.3 15.1 18.1 14.5 17.4 13.4C17.1 13 17 12.5 16.9 12.1C17.7 12.3 18.6 12.4 19.6 12.4C19.9 12.4 20.1 12.2 20.1 11.9C20.1 11.6 19.9 11.4 19.6 11.4C16.4 11.3 14.6 10.4 13.8 9C13.5 8.4 13.3 7.7 13.4 7.1C14.5 7.6 16 7.9 17.9 8C18.2 8 18.4 7.8 18.4 7.5C18.4 7.2 18.2 7 17.9 7C14.2 6.9 12.3 5.7 11.7 4C11.5 3.3 11.5 2.6 11.6 1.9V1.8L11.7 1.9C13.2 2.7 14.2 2.9 16.5 2.9C16.8 2.9 17.1 2.9 17.4 3C18.4 3.1 19.4 3.5 20.5 4C21 4.2 21.5 4.5 21.9 4.7L22.2 4.9L22.4 5L31.1 11.6C30.7 12.1 30.4 12.7 30.4 13.3C30.4 14.7 31.6 15.9 33 15.9C34.4 15.9 35.6 14.7 35.6 13.3C35.8 11.9 34.6 10.7 33.2 10.7ZM33.2 14.9C32.3 14.9 31.6 14.2 31.6 13.3C31.6 12.4 32.3 11.7 33.2 11.7C34.1 11.7 34.8 12.4 34.8 13.3C34.8 14.2 34.1 14.9 33.2 14.9Z"
                fill="var(--text-color-red-0)"
              />
              <path
                d="M10.1 10.3C10.3 10.3 10.5 10.1 10.5 9.8C10.5 9.5 10.3 9.3 10 9.3H2.20001H2.10001C1.90001 9.3 1.70001 9.5 1.70001 9.8C1.70001 10.1 1.90001 10.3 2.20001 10.3H10.1Z"
                fill="var(--text-color-red-0)"
              />
              <path
                d="M7.9 6.7C8.1 6.7 8.3 6.5 8.3 6.2C8.3 5.9 8.1 5.7 7.8 5.7H0H-0.1C-0.3 5.7 -0.5 5.9 -0.5 6.2C-0.5 6.5 -0.3 6.7 0 6.7H7.9Z"
                fill="var(--text-color-red-0)"
              />
              <path
                d="M13 12.8H5.20001H5.10001C4.90001 12.8 4.70001 13 4.70001 13.3C4.70001 13.6 4.90001 13.8 5.20001 13.8H13H13.1C13.3 13.8 13.5 13.6 13.5 13.3C13.5 13 13.3 12.8 13 12.8Z"
                fill="var(--text-color-red-0)"
              />
            </svg>
          </div>
          <p :class="$style['text-normal']">Your team on the go</p>
          <p :class="$style['text-normal']">Developer for your clients</p>
          <p :class="$style['text-normal']">
            Filling the gap while you get pay
          </p>
          <p :class="$style['text-normal']">Focused on your clinets needs</p>
        </LayoutFlexColumn>
      </div>
      <div :class="$style['divider']" />
      <div :class="$style['card']">
        <LayoutFlexColumn :gap="1.6">
          <div :class="$style['flex-row']">
            <h3 :class="$style['card-title']">Maintanence</h3>
            <svg
              width="19"
              height="29"
              viewBox="0 0 19 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.2 19.8L17.9 19.7C15.3 19.1 12.6 19.8 10.7 21.4C10.4 21.6 10.2 21.9 10 22.1V15.4L17.5 8C18.5 7.2 19 6 19 4.7C19 3.4 18.5 2.2 17.6 1.3C16.7 0.5 15.5 0 14.2 0C12.9 0 11.7 0.5 10.7 1.4L9.5 2.6L8.3 1.4C7.4 0.5 6.1 0 4.8 0C3.5 0 2.3 0.5 1.4 1.4C0.5 2.3 0 3.5 0 4.7C0 6 0.5 7.2 1.5 8.1L9 15.5V22.2C8.8 21.9 8.5 21.7 8.3 21.5C6.4 19.8 3.7 19.2 1.1 19.8L0.8 19.9L0.7 20.2C-1.78814e-07 22.5 0.8 25 2.7 26.7C4.1 28 6 28.6 8 28.6C8.3 28.6 8.7 28.6 9 28.5V29H10V28.4C10.3 28.4 10.7 28.5 11 28.5C13 28.5 14.9 27.8 16.3 26.6C18.2 24.9 19 22.4 18.3 20.1L18.2 19.8ZM2.2 7.4C1.4 6.7 1 5.7 1 4.7C1 3.7 1.4 2.8 2.1 2.1C2.8 1.4 3.8 1 4.8 1C5.9 1 6.8 1.4 7.6 2.1L9.5 4L11.4 2.2C12.1 1.4 13.1 1 14.2 1C15.2 1 16.2 1.4 16.9 2.1C17.6 2.8 18 3.7 18 4.7C18 5.7 17.6 6.7 16.8 7.4L10 14.1V14H9V14.1L2.2 7.4ZM3.4 25.8C1.9 24.4 1.2 22.5 1.6 20.6C3.8 20.2 6 20.8 7.6 22.2C8.2 22.7 8.6 23.3 8.9 24C8.5 25.1 8.3 26.3 8.6 27.5C6.7 27.6 4.8 27 3.4 25.8ZM15.6 25.8C14.2 27 12.3 27.6 10.3 27.5C10.5 26.3 10.4 25.1 10 24C10.3 23.4 10.8 22.8 11.3 22.2C12.9 20.8 15.1 20.2 17.3 20.6C17.8 22.5 17.1 24.4 15.6 25.8Z"
                fill="var(--text-color-yellow-0)"
              />
            </svg>
          </div>
          <p :class="$style['text-normal']">
            Software Implementation & Management
          </p>
          <p :class="$style['text-normal']">Implementation and Customization</p>
          <p :class="$style['text-normal']">Data Management</p>
          <p :class="$style['text-normal']">Quality & Assurance</p>
        </LayoutFlexColumn>
      </div>
    </LayoutFlexRow>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" module>
.layout-verticle {
  padding-block: 4.8rem;
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
}

.section-title {
  font-size: 2.4rem;
  font-weight: 700;
  text-align: center;
  margin: 0;
  padding: 0;
}

.card {
  flex: 1;
  padding-block: 2.4rem;
  padding-inline: 2.6rem;
  border-radius: 1rem;

  &:hover {
    transition: all 200ms;
  }

  // not last child
  &:not(:last-child) {
    margin-inline-end: 1.6rem;
  }

  .flex-row {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    margin-inline: auto;
  }

  .card-title {
    font-size: 1.9rem;
    font-weight: 700;
    text-align: center;
    margin: 0;
    padding: 0;

    &::after {
      content: "";
      display: block;
      width: 100%;
      height: 0.5rem;
      background-color: var(--bg-dark-secondary-0);
      margin-block-start: 0.2rem;
    }
  }

  .text-normal {
    font-size: 1.6rem;
    font-weight: 400;
    margin: 0;
    padding: 0;
    text-align: center;

    &:not(:last-child) {
      margin-block-end: 1.6rem;
    }
  }
}
.divider {
  height: 15rem;
  width: 1px;
  background-color: var(--border-color-light);
}
</style>
