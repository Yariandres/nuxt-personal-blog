<template>
  <section :class="$style['container']">
    <div :class="$style['row']">
      <div :class="$style['left']">
        <div>
          <p :class="$style['title']">- blog</p>
          <h3 :class="$style['heading']">Blog & News</h3>
        </div>

        <div :class="$style['button']">
          <NuxtLink to="/portfolio">Get in touch</NuxtLink>
        </div>
      </div>

      <div :class="$style['right']">
        <div :class="$style['posts']">
          <div>
            <div :class="$style['top']">
              <div :class="$style['svg-calendar']" />
              <p :class="$style['date']">April 12, 2023</p>
            </div>

            <div :class="$style['middle']">
              <h3 :class="$style['title']">
                April 12, 2023 12 unique examples of portfolio websites
              </h3>

              <div :class="$style['action']">
                <NuxtLink to="/portfolio">Read more </NuxtLink>
                <div :class="$style['svg-arrow']"></div>
              </div>
            </div>
          </div>

          <div>
            <div :class="$style['top']">
              <div :class="$style['svg-calendar']" />
              <p :class="$style['date']">April 12, 2023</p>
            </div>

            <div :class="$style['middle']">
              <h3 :class="$style['title']">
                April 12, 2023 12 unique examples of portfolio websites
              </h3>

              <div :class="$style['action']">
                <NuxtLink to="/portfolio">Read more </NuxtLink>
                <div :class="$style['svg-arrow']"></div>
              </div>
            </div>
          </div>

          <div>
            <div :class="$style['top']">
              <div :class="$style['svg-calendar']" />
              <p :class="$style['date']">April 12, 2023</p>
            </div>

            <div :class="$style['middle']">
              <h3 :class="$style['title']">
                April 12, 2023 12 unique examples of portfolio websites
              </h3>

              <div :class="$style['action']">
                <NuxtLink to="/portfolio">Read more </NuxtLink>
                <div :class="$style['svg-arrow']"></div>
              </div>
            </div>
          </div>

          <div>
            <div :class="$style['top']">
              <div :class="$style['svg-calendar']" />
              <p :class="$style['date']">April 12, 2023</p>
            </div>

            <div :class="$style['middle']">
              <h3 :class="$style['title']">
                April 12, 2023 12 unique examples of portfolio websites
              </h3>

              <div :class="$style['action']">
                <NuxtLink to="/portfolio">Read more </NuxtLink>
                <div :class="$style['svg-arrow']"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { Post } from "~~/types/post";
import Calendar from "~/assets/img/svg/calendar.svg";
const search = ref("");

const { data: posts } = await useWordpressApi().getPosts();

const searchByTitle = (post: Post): boolean => {
  return post.title.rendered.toLowerCase().includes(search.value.toLowerCase());
};

const filteredPosts = computed((): Post[] | null | undefined => {
  if (!search.value) {
    return posts.value;
  }
  return posts.value?.filter(searchByTitle);
});
</script>

<style lang="scss" module>
.container {
  height: 100dvh;
  width: 100dvw;
  overflow-y: scroll;
  scroll-behavior: smooth;

  .row {
    padding-inline: 100px;
    padding-block: 100px;
    display: flex;
    gap: 50px;

    /* Tablet styles */
    @media only screen and (min-width: 768px) and (max-width: 1023px) {
      flex-direction: column;
    }

    @media only screen and (max-width: 767px) {
      flex-direction: column;
    }

    .left {
      flex: 4;
      display: flex;
      flex-direction: column;
      gap: 34px;
      .title {
        text-transform: uppercase;
        font-weight: 500;
        font-size: 14px;
        color: inherit;
      }

      .heading {
        font-weight: 800;
        font-size: 40px;
        color: black;
      }

      .button {
        a {
          color: inherit;
          // background-color: #130F49;
          display: inline-block;
          border: 1.5px solid #130f49;
          border-radius: 50px;
          padding: 9px 40px;
          white-space: nowrap;

          -webkit-transition: all 0.3s ease;
          -moz-transition: all 0.3s ease;
          -ms-transition: all 0.3s ease;
          -o-transition: all 0.3s ease;
          transition: all 0.3s ease;

          &:hover {
            background-color: #130f49;
            color: #fff;
          }
        }
      }
    }

    .right {
      flex: 8;
      .posts {
        display: flex;
        flex-direction: column;
        gap: 36px;
        .top {
          display: flex;
          gap: 10px;
          align-items: center;
          .svg-calendar {
            width: 18px;
            height: 18px;
            background-image: url("~/assets/img/svg/calendar.svg");
            background-repeat: no-repeat;
            background-size: contain;
          }
          .date {
            font-size: 16px;
            font-weight: 500;
          }
        }

        .middle {
          display: flex;
          justify-content: space-between;

          /* Tablet styles */
          @media only screen and (min-width: 768px) and (max-width: 1023px) {
            flex-direction: column;
          }

          @media only screen and (max-width: 767px) {
            flex-direction: column;
          }

          .title {
            flex: 6;
            font-size: 25px;
          }

          .action {
            flex: 6;
            display: flex;
            gap: 16px;
            align-items: center;
            justify-content: flex-end;

            a {
              font-weight: 500;
              font-size: 16px;
              color: inherit;
              position: relative;
              align-items: center;
              display: block;

              &:hover::before {
                content: "";
                width: 100%;
                height: 2px;
                background-color: black;
                position: absolute;
                bottom: 0;
                left: 0;
                animation: slide-in 0.3s ease-in-out forwards;
              }
            }
            .svg-arrow {
              width: 18px;
              height: 18px;
              background-image: url("~/assets/img/svg/rightArrow.svg");
              background-repeat: no-repeat;
              background-size: contain;
            }
          }
        }
      }
    }
  }

  @keyframes slide-in {
    from {
      transform: scaleX(0);
      transform-origin: left;
    }
    to {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
}
</style>

<!-- <LayoutFlexColumn :gap="2.8">
      <h1 :class="$style['title']">All posts</h1>
      <div :class="$style['flex']">
        <div :class="$style['flex-item-1']">
          <BaseTextInput
            :label="'Search by title'"
            :id="'search'"
            type="text"
            v-model="search"
          />
        </div>
      </div>

      <LayoutFlexColumn :gap="3.2">
        <ArticleCard
          v-for="post in filteredPosts" 
          :key="post.id" 
          :date="post.date
            .split('T')[0]
            .split('-')
            .reverse()
            .join('.')" 
          :title="post.title.rendered" 
          :content="post.excerpt.rendered"
          :slug="post.slug"
          >
        </ArticleCard>
      </LayoutFlexColumn>
    </LayoutFlexColumn> -->
