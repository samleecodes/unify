<template>
  <Loader v-if="loading" />
  <img v-else :src=imageUrl />
</template>

<script>
import firebase from 'firebase/app';
import Loader from '@/components/Loader.vue';

export default {
  name: 'FirebaseImage',
  data() {
    return {
      loading: true,
      imageUrl: '',
    };
  },
  methods: {
    loadImage() {
      const storage = firebase.storage();
      const ref = storage.ref(this.location);
      ref.getDownloadURL().then((url) => {
        this.imageUrl = url;
        this.loading = false;
      });
    },
  },
  mounted() {
    this.loadImage();
  },
  props: {
    location: String,
  },
  components: {
    Loader,
  },
};
</script>
