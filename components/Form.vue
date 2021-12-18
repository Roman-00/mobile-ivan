<template>
	<form
		id="form"
		:class="isError ? 'form-error' : ''"
		class="form"
	>
		<div class="form-group">
			<input
				id="user-name"
				v-model="postData.name"
				type="text"
				placeholder="Ваше имя"
				class="form-user-name form-group__input"
			/>
			<error-icons
				v-if="isErrorName"
			/>
			<p class="form-group__input-error-text">
				{{ textErrorName }}
			</p>
		</div>
		<div class="form-group">
			<input
				id="user-phone"
				v-model="postData.phone"
				type="tel"
				placeholder="+7___-___-__-__"
				maxlength="12"
				class="form-user-phone form-group__input"
			/>
			<error-icons
				v-if="isErrorPhone"
			/>
			<p class="form-group__input-error-text">
				{{ textErrorPhone }}
			</p>
		</div>
		<button class="form__button form-button-submit">
			Заказать мастера
		</button>
	</form>
</template>

<script>
import axios from 'axios';

import ErrorIcons from '~/assets/images/error.svg';

export default {
	name: 'Form',
	components: {
		ErrorIcons,
	},
	data() {
		return {
			postData: {
				name: null,
				phone: null,
				valuationFrom: 'Переход с мобильной версии!',
			},
			isError: false,
			isErrorName: false,
			isErrorPhone: false,
			textErrorName: '',
			textErrorPhone: '',
		}
	},
	methods: {
		/**
		 * * Отправляем данные на сервер
		 */
		async formDataSubmit() {
			await fetch('telegram.php', {
				method: 'POST',
				mode: 'cors',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(this.postData)
			});

			await axios.post('https://ivan-services-default-rtdb.asia-southeast1.firebasedatabase.app/post.json', this.postData)
				.then((response) => {
					if (response.status === 200) {
						this.resetValueInputs();
					}
				})
				.catch((error) => {
					console.log(error);
				});
		},

		/**
		 * ! Сбрасываем значения полей после успешной отправки!
		 */
		resetValueInputs() {
			this.postData.name = null;
			this.postData.phone = null;
		}
	}
}
</script>
<style lang="scss" scoped>
.form {
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;

	&__button {
		width: 100%;
		padding: 12px 0;
		font-size: 12px;
		line-height: 14px;
		background: #1f7adc;
		border: none;
		border-radius: 4px;
		color: white;
	}
}

.form-group {
	position: relative;
	width: 100%;

	&__input {
		width: 100%;
		margin-bottom: 5px;
		padding: 14px 20px;
		border: 2px solid #1f7adc;
		border-radius: 4px;
	}

	&__input-error-text {
		display: flex;
		align-items: center;
		height: 30px;
		font-size: 14px;
		color: #fb3e3e;
	}
}
</style>
