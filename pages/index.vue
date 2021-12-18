<template>
	<div>
		<Hero />
		<Advantage />
		<CallBackForm />
		<Feedback />
		<Sales />
	</div>
</template>

<script>
import Hero from '~/components/PageComponents/Index/Hero.vue';
import Advantage from '~/components/PageComponents/Index/Advantage.vue';
import CallBackForm from '~/components/PageComponents/Index/CallBackForm.vue';
import Feedback from '~/components/PageComponents/Index/Feedback.vue';
import Sales from '~/components/PageComponents/Index/Sales.vue';

export default {
	name: 'Index',
	components: {
		Hero,
		Advantage,
		CallBackForm,
		Feedback,
		Sales,
	}
}
</script>
