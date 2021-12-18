<template>
	<section id="feedback" class="feedback">
		<div class="container">
			<h2 class="section__title feedback__title">
				<span class="section__title--bold">
					Отзывы
				</span>
				Клиентов
			</h2>

			<div class="feedback-blocks">
				<div class="feedback-block">
					<div class="feedback-block__header">
						<div class="feedback-block__header-rating">
							<rating />
							<rating />
							<rating />
						</div>
						<div class="feedback-block__header-date">
							<span>12 июня 2021</span>
						</div>
					</div>

					<div class="feedback-block__user">
						<div class="feedback-block__user-info">
							<avatar class="feedback-block__user-avatar"/>
							<h3 class="feedback-block__user-name">
								Дарья
							</h3>
						</div>
						<p class="feedback-block__user-text">
							Доброжелательный и приветливый мастер. Все
							объяснил и рассказал. Ответил на все вопросы.
							Специалист предложил все возможные
							варианты решения моей проблемы.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import rating from '~/assets/images/feedback-rating.svg';
import avatar from '~/assets/images/feedback-ava.svg';

export default {
	name: 'Feedback',
	components: {
		rating,
		avatar,
	},
}
</script>
