<template>
	<div>
		 <input ref="calendarTrigger" type="date">
	</div>
</template>

<script>
import bulmaCalendar from "bulma-calendar";
import { store } from "../store";

export default {
  data() {
    return {
		id: this.$attrs.id,
      	date: new Date()
    }
  },
 mounted() {
    const calendar = bulmaCalendar.attach(this.$refs.calendarTrigger, {
      startDate: this.date,
    })[0]
    calendar.on('select', e => {
		this.date = e.data.startDate || null;
		this.$emit('date-updated', {date: this.date.toLocaleString(), id: this.id});
	})
  },
  computed: {
    niceDate() {
      if (this.date) {
        return this.date.toLocaleDateString()
      }
    }
  }
};
</script>
