<template>
  <div class="activites">
    <ImageHeader :title="$t('navbar.activities')" />
    <div class="vertical-content-flow">
      <div class="container">
        <LargePromotion />
      </div>
    </div>
  </div>
</template>

<script>
import ImageHeader from '@/components/ImageHeader.vue';
import LargePromotion from '@/components/LargePromotion.vue';

export default {
  name: 'Activites',
  components: {
    ImageHeader,
    LargePromotion,
  },
};
</script>
