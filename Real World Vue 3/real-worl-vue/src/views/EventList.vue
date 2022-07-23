<template>
  <div class="home">
    <h1>Events For Good</h1>
    <div class="lds-dual-ring" v-if="load"></div>
    <div v-else>
      <div v-for="event in events" :key="event.id">
        <EventCard :event="event" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";
import EventService from "@/services/EventService";

export default {
  name: "EventList",
  components: {
    EventCard,
  },
  data() {
    return {
      events: null,
      load: true,
    };
  },
  async created() {
    await EventService.getEvents()
      .then((response) => {
        this.load = false;
        this.events = response.data;
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
