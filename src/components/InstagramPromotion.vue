<template>
  <div class="instagram-promotion">
    <!-- Component must be outside Container -->
    <div class="container">
      <div class="content">
        <span v-html="$t('index.follow')"></span>
      </div>
      <div class="image">
        <img
        src="../assets/UnifyIGMockup.png"
        alt="Unify Instagram Page" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InstagramPromotion',
};
</script>

<style lang="scss" scoped>
.instagram-promotion {
  background-color: rgb(243, 243, 243);

  .container {
    display: flex;
    flex-direction: column;

    .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;

      font-size: $title-font-size;
      font-weight: 700;

      padding: $standard-padding;
    }

    .image {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      padding-top: $standard-padding;

      img {
        width: 100%;
      }
    }
  }

  @media only screen and (min-width: 750px) {
    .container {
      display: flex;
      flex-direction: row;

      .content {
        width: 50%;
        text-align: left;
      }

      .image {
        width: 50%;
      }
    }
  }
}
</style>
