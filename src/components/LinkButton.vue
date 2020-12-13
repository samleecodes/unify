<template>
  <div class="link-button">
    <a :href="hrefUrl" class="button">
      {{ buttonText }}
    </a>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    buttonText: String,
    hrefUrl: String,
  },
};
</script>

<style lang="scss" scoped>
.button {
  display: inline-block;

  background: rgb(132,88,175);
  background: linear-gradient(150deg, rgba(132,88,175,1) 0%, rgba(94,69,229,1) 100%);

  padding: $button-vertical-padding $button-horizontal-padding;

  border-radius: 50px;

  font-size: $content-font-size;
  font-weight: 700;

  color: white;
  text-decoration: none;

  cursor: pointer;
}
</style>
