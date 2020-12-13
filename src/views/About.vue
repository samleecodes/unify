<template>
  <div class="about">
    <ImageHeader :title="$t('navbar.about')" />
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
