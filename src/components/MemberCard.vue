<template>
  <div class="member-card">
    <div class="member-card-image-container">
      <img :src="image" alt="Member Image">
    </div>
    <div class="member-card-content">
      <div class="member-card-content-name">
        {{ name }}
      </div>
      <div class="member-card-content-role">
        {{ role }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MemberCard',
  props: {
    image: String,
    name: String,
    role: String,
  },
};
</script>

<style lang="scss" scoped>
.member-card {
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  border-radius: 10px;

  padding: $standard-padding;

  width: 100%;

  margin-bottom: $standard-margin;

  @media only screen and (min-width: 815px) {
    display: flex;
    flex-direction: row;

    width: 48%;

    .member-card-image-container {
      margin-bottom: 0 !important;

      img {
        margin: 0 !important;
      }
    }

    .member-card-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: $standard-margin;
    }
  }

  .member-card-image-container {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      object-fit: cover;
      width: 150px;
      height: 150px;
      border-radius: 50%;
    }

    margin-bottom: $standard-margin;
  }

  .member-card-content {
    .member-card-content-name {
      font-size: $content-font-size;
      font-weight: 700;
    }

    .member-card-content-role {
      font-size: $content-font-size;
      font-weight: 400;
    }
  }
}
</style>
