<template>
  <div class="about">
    <ImageHeader :title="$t('navbar.about')" />
    <div class="container">
      <article>
        <h1>{{ $t('about.aboutTitle') }}</h1>
        <p>{{ $t('index.intro') }}</p>
      </article>
    </div>
  </div>
</template>

<script>
import ImageHeader from '@/components/ImageHeader.vue';

export default {
  name: 'About',
  components: {
    ImageHeader,
  },
};
</script>
