<template>
  <div class="contact">
    <div class="vertical-content-flow">
      <div class="container">
        <ContactForm />
      </div>
    </div>
  </div>
</template>

<script>
import ContactForm from '@/components/ContactForm.vue';

export default {
  name: 'Contact',
  components: {
    ContactForm,
  },
};
</script>
