<template>
	<div>
		 <input ref="calendarTrigger" type="date" data-date-format="YYYY-MM-DD" >
	</div>
</template>

<script>
import bulmaCalendar from "bulma-calendar";
import { store } from "../store";

export default {
  data() {
    return {
		id: this.$attrs.id,
    date: this.$attrs.id == 'created_date' ? new Date().toLocaleDateString() : ''
    }
  },
 mounted() {
    const calendar = bulmaCalendar.attach(this.$refs.calendarTrigger, {
      startDate: this.date,
    })[0]
    calendar.on('select', e => {
		this.date = e.data.startDate || null;
		this.$emit('date-updated', {date: this.date, id: this.id});
	})
  }
};
</script>
