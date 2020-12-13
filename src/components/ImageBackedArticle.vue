<template>
  <article
  :class="[{ reversed: reversed }, 'image-backed-article']">
    <div class="image">
      <img
      :src="imageUrl"
      :alt="imageAlt" />
    </div>
    <div class="content">
      <h1>
        {{ title }}
      </h1>
      <p>
        {{ paragraph }}
      </p>
    </div>
  </article>
</template>

<script>
export default {
  name: 'ImageBackedArticle',
  props: {
    title: String,
    paragraph: String,
    imageUrl: String,
    imageAlt: String,
    reversed: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.image-backed-article {
  display: flex;
  flex-direction: column;

  .content {
    p {
      width: 100%;
    }
  }

  @media only screen and (min-width: 750px) {
    flex-direction: row;

    .image {
      width: 40%;
    }

    .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 60%;
    }
  }
}

.reversed {
  text-align: left;
  flex-direction: column-reverse !important;

  @media only screen and (min-width: 750px) {
    flex-direction: row-reverse !important;
  }
}
</style>
