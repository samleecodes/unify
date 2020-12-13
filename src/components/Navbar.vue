<template>
  <div class="navbar">
    <ul class="nav nav-mobile container">
      <li class="nav-item nav-brand">
        <span class="nav-brand-unify">Unify</span>
      </li>
      <LocaleChanger />
      <MobileMenu />
    </ul>
    <ul class="nav nav-desktop container">
      <li class="nav-item nav-brand">
        <router-link to="/" class="nav-brand-unify">Unify</router-link>
      </li>
      <li
      v-for="navItem in navItems"
      :key="navItem.dest"
      class="nav-item">
        <router-link :to="navItem.dest" class="nav-link">
          {{ navItem.name }}
        </router-link>
      </li>
      <LocaleChanger />
    </ul>
  </div>
</template>

<script>
import LocaleChanger from '@/components/LocaleChanger.vue';
import MobileMenu from '@/components/MobileMenu.vue';

export default {
  name: 'Navbar',
  data() {
    return {
      navItems: [
        {
          name: this.$t('navbar.about'),
          dest: '/about',
        },
        {
          name: this.$t('navbar.activities'),
          dest: '/activities',
        },
        {
          name: this.$t('navbar.welfare'),
          dest: '/welfare',
        },
        {
          name: this.$t('navbar.contact'),
          dest: '/contact',
        },
      ],
    };
  },
  components: {
    LocaleChanger,
    MobileMenu,
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  flex-direction: row;
  align-items: center;

  height: 5rem;
  width: 100%;

  position: fixed;
  top: 0; left: 0;

  background-color: #fff;
  box-shadow: 0 3px 20px 5px rgba(0, 0, 0, 0.1);

  .nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    list-style-type: none;

    padding-right: $standard-padding;
  }

  .nav-desktop {
    display: none;
  }

  .nav-item {
    padding-left: $standard-padding;
  }

  .nav-item a {
    text-decoration: none;
    color: #000;
  }

  .nav-brand {
    font-family: 'Butterfly' !important;
    font-size: $large-font-size;
    font-weight: 400;
  }

  .nav-link {
    font-size: $small-font-size;
    font-weight: 400;
  }

  .nav-seperated {
    margin-left: auto;
  }

  @media screen and (min-width: 800px) {
    .nav-mobile {
      display: none;
    }

    .nav-desktop {
      display: flex;
    }
  }
}
</style>
