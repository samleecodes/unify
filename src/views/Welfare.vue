<template>
  <div class="welfare">
    <ImageHeader :title="$t('navbar.welfare')" />
    <div class="vertical-content-flow">
      <div class="container">
        <Loader v-if="loading" />
        <WelfareItem
        v-for="welfareItem in welfareEntries"
        :welfareObject="welfareItem"
        :key="welfareItem.id" />
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';
import ImageHeader from '@/components/ImageHeader.vue';
import WelfareItem from '@/components/WelfareItem.vue';
import Loader from '@/components/Loader.vue';

export default {
  name: 'Welfare',
  data() {
    return {
      welfareEntries: [],
      loading: false,
    };
  },
  components: {
    ImageHeader,
    WelfareItem,
    Loader,
  },
  methods: {
    loadWelfareEntries() {
      this.loading = true;
      firebase
        .firestore()
        .collection('welfares')
        .get()
        .then((snapshot) => {
          this.welfareEntries = snapshot.docs;
          this.loading = false;
        });
    },
  },
  mounted() {
    this.loadWelfareEntries();
  },
};
</script>
