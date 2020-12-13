<template>
  <div class="welfare-item">
    <div class="welfare-item-image-container">
      <FirebaseImage
      :location="welfareObject.data().imageLocation" />
    </div>
    <div class="welfare-item-content">
      <div class="welfare-item-content-title">
        {{ welfareObject.data().title }}
      </div>
      <div
      v-html="welfareObject.data().description"
      class="welfare-item-content-description">
      </div>
      <div class="welfare-item-content-cta-container">
        <LinkButton
        class="welfare-item-content-cta"
        v-for="cta in welfareObject.data().ctas"
        :key="cta.url"
        :buttonText="cta.name"
        :hrefUrl="cta.url" />
      </div>
    </div>
  </div>
</template>

<script>
import FirebaseImage from '@/components/FirebaseImage.vue';
import LinkButton from '@/components/LinkButton.vue';

export default {
  name: 'WelfareItem',
  components: {
    FirebaseImage,
    LinkButton,
  },
  props: {
    welfareObject: Object,
  },
};
</script>

<style lang="scss" scoped>
.welfare-item {
  display: flex;
  flex-direction: column;
  padding: $standard-padding;

  transition: all 1s;

  .welfare-item-image-container {
    img {
      width: 100%;
      margin-bottom: $standard-margin;
    }
  }

  .welfare-item-content {
    .welfare-item-content-title {
      font-size: $large-font-size;
      font-weight: 700;
    }

    .welfare-item-content-description {
      font-size: $content-font-size;
      font-weight: 400;
    }

    .welfare-item-content-cta-container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;

      margin-top: $standard-margin;

      .welfare-item-content-cta {
        margin: 0 $line-margin $line-margin 0;
      }
    }
  }

  @media only screen and (min-width: 750px) {
    display: flex;
    flex-direction: row;

    .welfare-item-image-container {
      width: 40%;
      margin-right: $standard-margin;
    }

    .welfare-item-content {
      width: 60%;
    }
  }
}
</style>
