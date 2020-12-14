<template>
  <div class="welfare">
    <ImageHeader :title="$t('navbar.welfare')" />
    <div class="vertical-content-flow">
      <div class="container">
        <div class="search-input-container">
          <input
          v-model="searchQuery"
          class="search-input"
          :placeholder="$t('common.search')" />
        </div>
        <Loader v-if="loading" />
        <transition-group name="list-complete">
          <WelfareItem
          v-for="welfareItem in filteredWelfareEntries"
          :welfareObject="welfareItem"
          :key="welfareItem.id" />
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
import ImageHeader from '@/components/ImageHeader.vue';
import WelfareItem from '@/components/WelfareItem.vue';
import Loader from '@/components/Loader.vue';
import firebase from 'firebase/app';

export default {
  name: 'Welfare',
  data() {
    return {
      searchQuery: '',
      welfareEntries: [],
      filteredWelfareEntries: [],
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
          this.filteredWelfareEntries = this.welfareEntries;
          this.loading = false;
        });
    },

    search() {
      if (this.searchQuery === '') {
        this.filteredWelfareEntries = this.welfareEntries;
        return;
      }

      // OMGGG!
      // Linear searching madness
      const searchedArray = [];
      this.welfareEntries.forEach((welfareItem) => {
        if (welfareItem.data().title.toLowerCase()
          .includes(this.searchQuery.toLowerCase())) {
          searchedArray.push(welfareItem);
        } else if (welfareItem.data().description.toLowerCase()
          .includes(this.searchQuery.toLowerCase())) {
          searchedArray.push(welfareItem);
        }
      });

      this.filteredWelfareEntries = searchedArray;
    },
  },
  mounted() {
    this.loadWelfareEntries();
  },
  watch: {
    searchQuery() {
      this.search();
    },
  },
};
</script>

<style lang="scss">
.search-input-container {
  padding:  $standard-padding
            $standard-padding
            $small-padding
            $standard-padding;
  width: 100%;

  .search-input {
    width: 100%;
    padding: $line-padding;
    border: 1px solid rgb(87, 87, 87);
    border-radius: 5px;
    font-size: $content-font-size;
  }
}
</style>
