<template>
  <div class="image-header">
    <span class="image-header-title">
      {{ title }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'ImageHeader',
  props: {
    title: String,
  },
};
</script>

<style lang="scss" scoped>
.image-header {
  height: 13rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: url('~@/assets/Clouds.jpg');
  background-size: cover;
  background-position: center;

  .image-header-title {
    font-size: $title-font-size;
    font-weight: 700;
    color: white;
  }
}
</style>
