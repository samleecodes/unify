<template>
  <div class="footer">
    <div class="container">
      <div class="footer-title">
        Unify Website
      </div>
      <div class="footer-links">
        <a class="footer-link color-anchor" href="https://instagram.com/cccklc_unify">Instagram</a>
        <a class="footer-link color-anchor" href="https://www.keilong.edu.hk/">School Website</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="scss" scoped>
.footer {
  background-color: #ffffff;
  box-shadow: 0 -3px 20px 5px rgba(0, 0, 0, 0.1);

  clip-path: inset(-20px -20px 0 -20px);

  .footer-title {
    font-size: $large-font-size;
    font-weight: 700;
    padding: $standard-padding;
  }

  .footer-links {
    display: flex;
    flex-direction: column;
    padding: $standard-padding;
    padding-top: 0;

    .footer-link {
      font-size: $content-font-size;
      font-weight: 700;
      margin-bottom: $small-margin;
    }
  }
}
</style>
