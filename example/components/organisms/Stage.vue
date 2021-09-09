<template>
  <div class="component-stage">
    <default-picture v-bind="picture" />
    <h1
      v-font="[
        $getFont('Montserrat Alternates', 700, 'normal', {selector: '.headline'}),
        $getFont('Merriweather', 300, 'italic', {selector: '.claim'})
      ]"
    >
      <span class="headline">{{ headline }}
        <!-- <span>{{ headline }}</span> -->
        <span />
      </span>
      <span class="claim">{{ claim }}</span>
    </h1>
  </div>
</template>

<script>
import DefaultPicture from 'nuxt-speedkit/components/picture';
export default {
  components: {
    DefaultPicture
  },
  props: {
    picture: { type: Object, default () { return {}; } },
    headline: { type: String, default () { return 'Headline'; } },
    claim: { type: String, default () { return 'Claim'; } }
  }
};
</script>

<style lang="postcss" scoped>
.component-stage {
  position: relative;
  height: 100vh;
  max-height: 100%;
  margin: 0;
  overflow: hidden;

  & .claim {
    display: block;
    font-size: 25px;
    line-height: 50px;
    text-transform: none;
  }

  & .headline {
    position: relative;
    display: block;
    height: 60px;

    /* font-family: sans-serif-fallback, Arial, Helvetica, sans-serif; */
    font-size: 40px;

    @media (min-width: 768px) {
      font-size: 40px;
      line-height: 80px;
    }

    & span {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      font-family: sans-serif-fallback, Arial, Helvetica, sans-serif;
      color: red;
      opacity: 0.6;
    }
  }

  & h1 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 20px 0;
    margin: 0;
    color: white;
    text-align: center;
    background: rgba(0, 0, 0, 0.4);

    @media (min-width: 768px) {
      position: absolute;
      top: 50px;
      right: 0;
      bottom: auto;
      left: auto;
      width: 400px;
    }
  }
}
</style>
