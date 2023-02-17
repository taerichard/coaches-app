<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>${{ hourlyRate }}/hour</h4>
    <div>
      <span v-for="area in areas" :key="area">{{ area }}</span>
    </div>
    <div class="actions">
      <route-link :to="coachContactLink">Contact</route-link>
      <route-link :to="coachDetailLink">View Details</route-link>
    </div>
  </li>
</template>

<script>
export default {
  props: ['id', 'firstName', 'lastName', 'hourlyRate', 'areas'],
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    },

    coachContactLink() {
      // coaches/id/contact
      //   return `/coaches${this.id}/contact`;
      return `${this.$route.path}/${this.id}/contact`;
    },

    coachDetailLink() {
      // coaches/id
      console.log(this.$route.path);
      //   return `/coaches/${this.id}`;
      return `${this.$route.path}/${this.id}`;
    },
  },
};
</script>
<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
