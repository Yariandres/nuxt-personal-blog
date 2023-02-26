<template>
  <MainWrapper :bgColor="'var(--blue-1000)'">
    <div :class="$style['verticle-layout']">
      <h1 :class="$style['heading']">All Awards</h1>
      <div :class="$style['row']">
        <div :class="$style['col']">
          <div :class="$style['card']">
            <h2 :class="$style['heading']">Card item</h2>
            <div :class="$style['content']">
              <p :class="$style['text']">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, in ut vel excepturi praesentium cupiditate commodi consequuntur voluptate facere ipsum nostrum velit. Quas fugit consequuntur delectus esse pariatur facilis aspernatur?</p>
              <img :class="$style['image']" src="https://images.unsplash.com/photo-1496065187959-7f07b8353c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="fake alt text">
            </div>
          </div>
        </div>
        <div :class="$style['col']">
          <div :class="$style['card']">
            <h2 :class="$style['heading']">Card item</h2>
            <div :class="$style['content']">
              <img :class="$style['image']" src="https://images.unsplash.com/photo-1496065187959-7f07b8353c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="fake alt text">
              <p :class="$style['text']">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, in ut vel excepturi praesentium cupiditate commodi consequuntur voluptate facere ipsum nostrum velit. Quas fugit consequuntur delectus esse pariatur facilis aspernatur?</p>
            </div>
          </div>
        </div>
        <div :class="$style['col']">
          <div :class="$style['card']">
            <h2 :class="$style['heading']">Card item</h2>
            <div :class="$style['content']">
              <p :class="$style['text']">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, in ut vel excepturi praesentium cupiditate commodi consequuntur voluptate facere ipsum nostrum. Quas fugit consequuntur delectus esse pariatur facilis aspernatur?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, in ut vel excepturi praesentium cupiditate commodi consequuntur voluptate facere ipsum nostrum. Quas fugit consequuntur delectus esse pariatur facilis aspernatur?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, in ut vel excepturi praesentium cupiditate commodi consequuntur voluptate facere ipsum nostrum. Quas fugit consequuntur delectus esse pariatur facilis aspernatur?Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, in ut vel excepturi praesentium cupiditate commodi consequuntur voluptate facere ipsum nostrum. Quas fugit consequuntur delectus esse pariatur facilis aspernatur?</p>
              <img :class="$style['image']" src="https://images.unsplash.com/photo-1496065187959-7f07b8353c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="fake alt text">
            </div>
          </div>
        </div>
        <div :class="$style['col']">
          <div :class="$style['card']">
            <h2 :class="$style['heading']">Card item</h2>
            <div :class="$style['content']">
              <p :class="$style['text']">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, in ut vel excepturi praesentium cupiditate commodi consequuntur voluptate facere ipsum nostrum velit. Quas fugit consequuntur delectus esse pariatur facilis aspernatur?</p>
              <img :class="$style['image']" src="https://images.unsplash.com/photo-1496065187959-7f07b8353c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="fake alt text">
            </div>
          </div>
        </div>
        <div :class="$style['col']">
          <div :class="$style['card']">
            <h2 :class="$style['heading']">Card item</h2>
            <div :class="$style['content']">
              <img :class="$style['image']" src="https://images.unsplash.com/photo-1496065187959-7f07b8353c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="fake alt text">
              <p :class="$style['text']">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, in ut vel excepturi praesentium cupiditate commodi consequuntur voluptate facere ipsum nostrum velit. Quas fugit consequuntur delectus esse pariatur facilis aspernatur?</p>
            </div>
          </div>
          <div :class="$style['col']">
            <div :class="$style['card']">
              <h2 :class="$style['heading']">Card item</h2>
              <div :class="$style['content']">
                <p :class="$style['text']">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, in ut vel excepturi praesentium cupiditate commodi consequuntur voluptate facere ipsum nostrum. Quas fugit consequuntur delectus esse pariatur facilis aspernatur?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, in ut vel excepturi praesentium cupiditate commodi consequuntur voluptate facere ipsum nostrum. Quas fugit consequuntur delectus esse pariatur facilis aspernatur?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, in ut vel excepturi praesentium cupiditate commodi consequuntur voluptate facere ipsum nostrum. Quas fugit consequuntur delectus esse pariatur facilis aspernatur?Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, in ut vel excepturi praesentium cupiditate commodi consequuntur voluptate facere ipsum nostrum. Quas fugit consequuntur delectus esse pariatur facilis aspernatur?</p>
                <img :class="$style['image']" src="https://images.unsplash.com/photo-1496065187959-7f07b8353c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="fake alt text">
              </div>
            </div>
          </div>
        </div>
        <div :class="$style['col']">
          <div :class="$style['card']">
            <h2 :class="$style['heading']">Card item</h2>
            <div :class="$style['content']">
              <p :class="$style['text']">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, in ut vel excepturi praesentium cupiditate commodi consequuntur voluptate facere ipsum nostrum velit. Quas fugit consequuntur delectus esse pariatur facilis aspernatur?</p>
              <img :class="$style['image']" src="https://images.unsplash.com/photo-1496065187959-7f07b8353c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="fake alt text">
            </div>
          </div>
        </div>
        <div :class="$style['col']">
          <div :class="$style['card']">
            <h2 :class="$style['heading']">Card item</h2>
            <div :class="$style['content']">
              <img :class="$style['image']" src="https://images.unsplash.com/photo-1496065187959-7f07b8353c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="fake alt text">
              <p :class="$style['text']">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, in ut vel excepturi praesentium cupiditate commodi consequuntur voluptate facere ipsum nostrum velit. Quas fugit consequuntur delectus esse pariatur facilis aspernatur?</p>
            </div>
          </div>
        </div>
        <div :class="$style['col']">
          <div :class="$style['card']">
            <h2 :class="$style['heading']">Card item</h2>
            <div :class="$style['content']">
              <p :class="$style['text']">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, in ut vel excepturi praesentium cupiditate commodi consequuntur voluptate facere ipsum nostrum. Quas fugit consequuntur delectus esse pariatur facilis aspernatur?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, in ut vel excepturi praesentium cupiditate commodi consequuntur voluptate facere ipsum nostrum. Quas fugit consequuntur delectus esse pariatur facilis aspernatur?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, in ut vel excepturi praesentium cupiditate commodi consequuntur voluptate facere ipsum nostrum. Quas fugit consequuntur delectus esse pariatur facilis aspernatur?Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, in ut vel excepturi praesentium cupiditate commodi consequuntur voluptate facere ipsum nostrum. Quas fugit consequuntur delectus esse pariatur facilis aspernatur?</p>
              <img :class="$style['image']" src="https://images.unsplash.com/photo-1496065187959-7f07b8353c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="fake alt text">
            </div>
          </div>
        </div>
        <div :class="$style['col']">
          <div :class="$style['card']">
            <h2 :class="$style['heading']">Card item</h2>
            <div :class="$style['content']">
              <p :class="$style['text']">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, in ut vel excepturi praesentium cupiditate commodi consequuntur voluptate facere ipsum nostrum velit. Quas fugit consequuntur delectus esse pariatur facilis aspernatur?</p>
              <img :class="$style['image']" src="https://images.unsplash.com/photo-1496065187959-7f07b8353c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="fake alt text">
            </div>
          </div>
        </div>
        <div :class="$style['col']">
          <div :class="$style['card']">
            <h2 :class="$style['heading']">Card item</h2>
            <div :class="$style['content']">
              <img :class="$style['image']" src="https://images.unsplash.com/photo-1496065187959-7f07b8353c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="fake alt text">
              <p :class="$style['text']">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, in ut vel excepturi praesentium cupiditate commodi consequuntur voluptate facere ipsum nostrum velit. Quas fugit consequuntur delectus esse pariatur facilis aspernatur?</p>
            </div>
          </div>
          <div :class="$style['col']">
            <div :class="$style['card']">
              <h2 :class="$style['heading']">Card item</h2>
              <div :class="$style['content']">
                <p :class="$style['text']">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, in ut vel excepturi praesentium cupiditate commodi consequuntur voluptate facere ipsum nostrum. Quas fugit consequuntur delectus esse pariatur facilis aspernatur?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, in ut vel excepturi praesentium cupiditate commodi consequuntur voluptate facere ipsum nostrum. Quas fugit consequuntur delectus esse pariatur facilis aspernatur?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, in ut vel excepturi praesentium cupiditate commodi consequuntur voluptate facere ipsum nostrum. Quas fugit consequuntur delectus esse pariatur facilis aspernatur?Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, in ut vel excepturi praesentium cupiditate commodi consequuntur voluptate facere ipsum nostrum. Quas fugit consequuntur delectus esse pariatur facilis aspernatur?</p>
                <img :class="$style['image']" src="https://images.unsplash.com/photo-1496065187959-7f07b8353c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="fake alt text">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MainWrapper>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" module>
.verticle-layout {
  display: flex;
  flex-direction: column;
  gap: 3.6rem;
  .heading {
    font-size: 2.4rem;
    font-weight: 200;
    letter-spacing: 2px;
    padding-block: 1.6rem;
    color: var(--yell-200);
  }

  .row {
    // masonry grid layout
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
    grid-auto-rows: minmax(30rem, auto);
    gap: 3.6rem;

    

    .col {
      display: flex;
      flex-direction: column;
      gap: 3.6rem;
  
      .card {
        border: 1px solid rgb(60, 60, 60);
        background-color: var(--blue-800);
        border-radius: var(--radius-2);
        text-align: center;
        padding-block: 2.9rem;
        color: var(--blue-50);
        
        .content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.6rem;
          padding-inline: 1.6rem;
  
          .heading {
            font-size: 2.4rem;
            font-weight: 100;
            margin-block-end: 1.6rem;
          }
  
          .image {
            width: 100%;
            height: auto;
            border-radius: var(--radius-2);
          }
  
          .text {
            font-size: 1.6rem;
            font-weight: 100;
            text-align: left;
          }
        }
      }
    }
  }
}

</style>