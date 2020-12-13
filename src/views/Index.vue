<template>
  <div class="index">
    <ImageHeader title="" />
    <div class="vertical-content-flow">
      <div class="container">
        <ImageBackedArticle
        :title="$t('common.slogan')"
        :paragraph="$t('index.intro')"
        :imageUrl="require('../assets/UnifyTransparent.png')"
        imageAlt="Unify Logo" />
      </div>
      <InstagramPromotion />
    </div>
  </div>
</template>

<script>
import ImageHeader from '@/components/ImageHeader.vue';
import ImageBackedArticle from '@/components/ImageBackedArticle.vue';
import InstagramPromotion from '@/components/InstagramPromotion.vue';

export default {
  name: 'Index',
  components: {
    ImageHeader,
    ImageBackedArticle,
    InstagramPromotion,
  },
};
</script>
