<template>
  <form @submit.prevent="submitForm()" class="contact-form">
    <span class="contact-form-title">
      {{ $t('navbar.contact') }}
    </span>
    <div v-if="!submitting && !submitted" class="contact-form-controls">
      <textarea
      v-model="messageInput"
      placeholder="Your Message" />
      <button type="submit">Submit</button>
    </div>
    <div v-if="submitting">
      Submitting...
    </div>
    <div v-if="submitted">
      Submitted! We've received your message!
    </div>
  </form>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'ContactForm',
  data() {
    return {
      messageInput: '',
      submitting: false,
      submitted: false,
    };
  },
  methods: {
    submitForm() {
      this.submitting = true;
      firebase
        .firestore()
        .collection('messages')
        .add({
          message: this.messageInput,
        })
        .then(() => {
          this.submitted = true;
          this.submitting = false;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.contact-form {
  padding: $standard-padding;

  .contact-form-title {
    font-size: $title-font-size;
    font-weight: 700;
  }

  .contact-form-controls {
    margin-top: $standard-margin;
  }

  input, textarea {
    width: 100%;
  }

  textarea {
    font-family: 'Avenir', sans-serif;
    padding: $small-padding;
    font-size: $content-font-size;
    height: 12rem;
    border: 1px solid #000000;
    border-radius: 10px;
  }

  button {
    margin-top: $small-margin;

    font-family: 'Avenir', sans-serif;

    display: inline-block;

    background: rgb(132,88,175);
    background: linear-gradient(150deg, rgba(132,88,175,1) 0%, rgba(94,69,229,1) 100%);

    box-shadow: 0px 3px 10px 1px rgba(58, 4, 158, 0.6);

    padding: $button-vertical-padding $button-horizontal-padding;

    border: none;
    border-radius: 50px;

    font-size: $content-font-size;
    font-weight: 700;

    color: white;
    text-decoration: none;

    cursor: pointer;
  }
}
</style>
