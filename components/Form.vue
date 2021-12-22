<template>
	<form
		id="form"
		:class="{ 'form-error' : formError }"
		class="form"
		@submit.prevent="formDataSubmit"
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
				{{ errorMessageName }}
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
				{{ errorMessagePhone }}
			</p>
		</div>
		<button class="form__button form-button-submit">
			<div v-if="isSuccess" class="form-button-image">
				<done-icons />
			</div>
			<div v-if="isError" class="form-button-image">
				<error-icons />
			</div>
			<div
				v-if="isLoading"
				class="loader"
			>
				Loading...
			</div>
			{{ textButton }}
		</button>
	</form>
</template>

<script>
import axios from 'axios';

import DoneIcons from '~/assets/images/done.svg';
import ErrorIcons from '~/assets/images/error.svg';

export default {
	name: 'Form',
	components: {
		ErrorIcons,
		DoneIcons,
	},
	data() {
		return {
			postData: {
				name: '',
				phone: '',
				valuationFrom: 'Переход с мобильной версии!',
			},
			formError: false,
			isLoading: false,
			textButton: '',
			isSuccess: false,
			isError: false,
			isErrorName: false,
			isErrorPhone: false,
			errorMessageName: '',
			errorMessagePhone: '',
		}
	},
	mounted() {
		this.textButton = 'Заказать звонок';
	},
	methods: {
		/**
		 * * Валидируем поля
		 *
		 * @return {Boolean}
		 */
		isValid() {
			this.errorMessageName = '';
			this.errorMessagePhone = '';

			if (this.postData.name === '') {
				this.formError = true;
				this.isErrorName = true;
				this.errorMessageName = 'Заполните поле Ваше имя!'
			} else {
				this.formError = false;
				this.isErrorName = false;
				this.errorMessageName = '';
			}

			if (this.postData.phone === '') {
				this.formError = true;
				this.isErrorPhone = true;
				this.errorMessagePhone = 'Заполните поле Ваш телефон!';
			} else if (this.postData.phone.length < 12) {
				this.formError = true;
				this.isErrorPhone = true;
				this.errorMessagePhone = 'Недостаточно символов в поле!';
			} else {
				this.formError = false;
				this.isErrorPhone = false;
				this.isErrorName = false;
				this.errorMessageName = '';
				this.errorMessagePhone = '';
			}

			return !this.errorMessagePhone;
		},

		/**
		 * * Отправляем данные с формы
		 */
		async formDataSubmit() {

			if (!this.isValid()) return;

			this.isLoading = true;
			this.textButton = 'Отправка данных';

			/**
			 * ! Отправляем данные в телеграм
			 */
			await fetch('telegram.php', {
				method: 'POST',
				mode: 'cors',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(this.postData)
			});

			/**
			 * ! Отправляем данные в firebase
			 */
			await axios.post('https://ivan-services-default-rtdb.asia-southeast1.firebasedatabase.app/production.json', this.postData)
				.then((response) => {
					this.isLoading = false;
					this.isSuccess = true;
					this.textButton = 'Заявка отправлена.';
				})
				.catch((error) => {
					console.log(error);
					this.isLoading = false;
					this.isError = true;
					this.textButton = 'Попробуйте снова :(';
				})
				.finally(() => {
					this.isLoading = false;
					this.resetValueInputs();
				});
		},
		/**
		 * ! Сбрасываем значения полей после успешной отправки!
		 */
		resetValueInputs() {
			setTimeout(() => {
				this.postData.name = '';
				this.postData.phone = '';
				this.isSuccess = false;
				this.textButton = 'Заказать звонок';
			}, 5000);
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
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		padding: 14px 0;
		font-size: 12px;
		line-height: 14px;
		background: #1f7adc;
		border: none;
		border-radius: 4px;
		color: white;
		cursor: pointer;
	}
}

.form-button-image {
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 15px;
	padding: 5px;
	background: #fff;
	border-radius: 100px;

	svg {
		width: 12px;
		height: 12px;
		fill: #64BD38;
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

	svg {
		position: absolute;
		top: 25%;
		right: 20px;
		transform: translateY(-25%);
	}
}

.form-error {
	.form-group {
		&__input {
			border: 2px solid #fb3e3e;
		}
	}
}
</style>
