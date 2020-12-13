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
          control
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
  }
}
</style>
