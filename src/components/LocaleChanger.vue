<template>
  <li class="nav-item nav-icon nav-seperated">
    <font-awesome-icon
    id="locale-changer-icon" @click="dialogOpen = true"
    icon="globe-asia" size="lg" />
    <div v-if="dialogOpen" class="locale-changer-container">
      <div class="locale-changer">
        <span class="locale-changer-title">
          Select your language<br/>
          選擇你的語言
        </span>
        <div class="locale-changer-control">
          <button
          @click="setLanguage('en')"
          class="locale-change-button">
            EN
          </button>
          <button
          @click="setLanguage('zh')"
          class="locale-change-button">
            中
          </button>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: 'LocaleChanger',
  data() {
    return {
      dialogOpen: false,
    };
  },
  methods: {
    setLanguage(lang) {
      localStorage.setItem('lang', lang);
      window.location.reload();
    },
  },
};
</script>

<style lang="scss" scoped>
#locale-changer-icon {
  cursor: pointer;
}

.locale-changer-container {
  position: fixed;
  top: 0; left: 0;

  height: 100vh;
  width: 100vw;

  background-color: rgba(0, 0, 0, 0.8);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .locale-changer {
    padding: $standard-padding;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #fff;

    .locale-changer-title {
      font-size: $large-font-size;
      font-weight: 700;
      margin: $standard-margin;
      text-align: center;
    }

    .locale-changer-control {
      display: flex;
      flex-direction: column;
      // margin: $standard-margin;

      .locale-change-button {
        font-size: $content-font-size;
        font-weight: 500;
        padding: 1rem 8rem;
        margin-bottom: 2rem;
        outline: none;
        border: 2px solid #000000;
        background-color: #ffffff;
        transition: all 0.5s;
        cursor: pointer;
      }

      .locale-change-button:hover {
        background-color: #5c5c5c;
        color: #ffffff;
      }
    }
  }
}
</style>
