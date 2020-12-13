<template>
  <li class="nav-item nav-icon">
    <font-awesome-icon
    id="mobile-menu-icon" @click="menuOpen = true"
    icon="bars" size="lg" />
    <div v-if="menuOpen" class="mobile-menu-container">
      <div class="mobile-menu">
        <div class="mobile-menu-header">
          <span class="mobile-menu-title">Menu</span>
          <font-awesome-icon
          id="mobile-menu-close-icon" @click="menuOpen = false"
          icon="times" size="lg" />
        </div>
        <div class="mobile-menu-content">
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: 'MobileMenu',
  data() {
    return {
      menuOpen: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.mobile-menu-container {
  position: fixed;
  top: 0; left: 0;

  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .mobile-menu {
    height: 100%;
    width: 100%;

    padding: $standard-padding;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #fff;

    .mobile-menu-header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      width: 100%;

      .mobile-menu-title {
        font-size: $large-font-size;
        font-weight: 700;
        text-align: left;
      }
    }
  }
}
</style>
