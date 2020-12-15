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
      <div class="footer-footer">
        <small>Version {{ versionCode }}</small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      versionCode: '1.0.2',
    };
  },
};
</script>

<style lang="scss" scoped>
.footer {
  background-color: #ffffff;

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

  .footer-footer {
    padding: 0 $standard-padding $standard-padding $standard-padding;
  }
}
</style>
