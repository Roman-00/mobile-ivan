<template>
	<section id="call-back-form" class="call-back-form">
		<div class="container">
			<h2 class="section__title">
				Вызвать
				<span class="section__title--bold">
					Мастера
				</span>
			</h2>

			<p class="section__description call-back-form__description">
				Оставьте свои контактные данные, мы свяжемся
				с&nbsp;вами и отправим мастера в удобное для вас время
			</p>

			<Form />
		</div>
	</section>
</template>

<script>
import Form from '~/components/Form.vue';

export default {
	name: 'CallBackForm',
	comments: {
		Form,
	},
}
</script>
