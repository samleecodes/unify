<template>
  <div class="about">
    <ImageHeader :title="$t('navbar.about')" />
    <div class="container">
      <article>
        <h1>{{ $t('about.aboutTitle') }}</h1>
        <p>{{ $t('index.intro') }}</p>
      </article>
      <article>
        <h1>{{ $t('about.manifestoTitle') }}</h1>
        <img src="../assets/Manifesto.jpeg" />
        <p><a href="/Manifesto.jpeg">{{ $t('about.enlarge') }}</a></p>
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
