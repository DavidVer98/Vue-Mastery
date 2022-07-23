<template>
  <div class="lds-dual-ring" v-if="load"></div>
  <div v-else>
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>
<script>
import EventService from "@/services/EventService";
export default {
  props: ["id"],
  data() {
    return {
      event: null,
      load: true,
    };
  },
  // fetch event (by id) and set local data
  async created() {
    await EventService.getEvent(this.id)
      .then((response) => {
        this.load = false;
        this.event = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
<style scoped>
.lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 34px;
  height: 34px;
  margin: 8px;
  margin-top: 50px;
  border-radius: 50%;
  border: 6px solid rgb(0, 0, 0);
  border-color: rgb(0, 0, 0) transparent rgb(23, 21, 21) transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
