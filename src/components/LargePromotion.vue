<template>
  <div class="large-promotion">
    <!-- <div class="large-promotion-image-container">
      <img src="../assets/Clouds.jpg" alt="Microphone">
    </div> -->
    <div class="large-promotion-content-container">
      <div class="large-promotion-content-title">
        Singcon Joint Something
      </div>
      <div class="large-promotion-content-description">
        Use the link below to be redirected to a Google Form page
        where you can sign up for the upcoming Singcon.
      </div>
      <div class="large-promotion-content-cta-container">
        <LinkButton buttonText="Sign Up" hrefUrl="https://google.com/" />
      </div>
    </div>
  </div>
</template>

<script>
import LinkButton from '@/components/LinkButton.vue';

export default {
  name: 'LargePromotion',
  components: {
    LinkButton,
  },
};
</script>

<style lang="scss" scoped>
.large-promotion {
  display: flex;
  flex-direction: column;

  background: rgb(0,0,0);
  background: linear-gradient(150deg, rgba(0,0,0,1) 0%, rgba(49,34,123,1) 100%);

  margin: $standard-margin;

  border-radius: 20px;
  overflow: hidden;

  box-shadow: 0px 3px 30px 5px rgba(39,27,98,0.67);

  @media screen and (min-width: 700px) {
    flex-direction: row;
  }

  .large-promotion-image-container {
    width: 100%;

    img {
      display: block;
      width: 100%;
      margin: auto;
    }
  }

  .large-promotion-content-container {
    width: 100%;
    color: #fff;

    padding: $standard-padding;

    .large-promotion-content-title {
      font-size: $title-font-size;
      font-weight: 700;
    }

    .large-promotion-content-description {
      font-size: $content-font-size;
      font-weight: 400;
    }

    .large-promotion-content-cta-container {
      margin: $standard-margin 0 0 0;
    }
  }
}
</style>
