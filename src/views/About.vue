<template>
  <div class="about">
    <ImageHeader :title="$t('navbar.about')" />
    <div class="container">
      <article>
        <h1>{{ $t('about.aboutTitle') }}</h1>
        <p v-html="$t('about.aboutContent')"></p>
      </article>
      <article>
        <h1>{{ $t('about.membersTitle') }}</h1>
        <div class="members">
          <MemberCard
          v-for="member in members"
          :key="member.name"
          :image="member.image"
          :name="member.name"
          :role="member.role"/>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
/* eslint-disable global-require */
import ImageHeader from '@/components/ImageHeader.vue';
import MemberCard from '@/components/MemberCard.vue';

export default {
  name: 'About',
  data() {
    return {
      members: [
        {
          image: require('../assets/Bertha.jpg'),
          name: this.$t('members.bertha'),
          role: this.$t('roles.chairPerson'),
        },
        {
          image: require('../assets/Cherie.jpg'),
          name: this.$t('members.cherie'),
          role: this.$t('roles.vChairPerson'),
        },
        {
          image: require('../assets/IpSumYu.jpg'),
          name: this.$t('members.sophia'),
          role: this.$t('roles.secretary'),
        },
        {
          image: require('../assets/Wayne.jpg'),
          name: this.$t('members.wayne'),
          role: this.$t('roles.treasurer'),
        },
        {
          image: require('../assets/Amy.jpg'),
          name: this.$t('members.amy'),
          role: this.$t('roles.recreation'),
        },
        {
          image: require('../assets/Joyce.jpg'),
          name: this.$t('members.joyce'),
          role: this.$t('roles.recreation'),
        },
        {
          image: require('../assets/Sameer.jpg'),
          name: this.$t('members.sameer'),
          role: this.$t('roles.genAffairs'),
        },
        {
          image: require('../assets/Julian.jpg'),
          name: this.$t('members.julian'),
          role: this.$t('roles.genAffairs'),
        },
        {
          image: require('../assets/Oscar.jpg'),
          name: this.$t('members.oscar'),
          role: this.$t('roles.arts'),
        },
        {
          image: require('../assets/Toseef.jpg'),
          name: this.$t('members.toseef'),
          role: this.$t('roles.arts'),
        },
        {
          image: require('../assets/Nicole.jpg'),
          name: this.$t('members.nicole'),
          role: this.$t('roles.academics'),
        },
        {
          image: require('../assets/Sharoz.jpg'),
          name: this.$t('members.sharoz'),
          role: this.$t('roles.sports'),
        },
      ],
    };
  },
  components: {
    ImageHeader,
    MemberCard,
  },
};
</script>

<style lang="scss">
.members {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
