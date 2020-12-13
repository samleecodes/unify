<template>
  <div id="app">
    <Navbar />
    <transition name="slide" mode="out-in">
      <router-view id="content-view"/>
    </transition>
    <Footer id="footer" />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Navbar,
    Footer,
  },
  watch: {
    // eslint-disable-next-line func-names
    $route() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');

*, *::before, *::after {
  margin: 0;
  padding: 0;

  box-sizing: border-box;
}

#app {
  font-family: 'Lato', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#content-view {
  margin-top: 5rem;
}

.slide-enter-active {
  animation: slide-in .3s;
}

.slide-leave-active {
  animation: slide-out .3s;
}

.slide-rev-enter-active {
  animation: slide-in-rev .3s;
}

.slide-rev-leave-active {
  animation: slide-out-rev .3s;
}

@keyframes slide-in {
  0% {
    opacity: 0;
    transform: translateY(100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-in-rev {
  0% {
    opacity: 0;
    transform: translateY(-100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-out {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(100px);
  }
}

@keyframes slide-out-rev {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-100px);
  }
}

.list-complete-item {
  transition: all 1s;
  display: inline-block;
  margin-right: 10px;
}

.list-complete-enter, .list-complete-leave-to
/* .list-complete-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}

.list-complete-leave-active {
  position: absolute;
}
</style>
