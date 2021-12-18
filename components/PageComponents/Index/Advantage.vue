<template>
	<section id="advantage" class="advantage">
		<div class="container">
			<h2 class="section__title">
				Наши
				<span class="section__title--bold">
					преимущества
				</span>
			</h2>

			<p class="section__description">
				Нашим преимуществом является,
				ответственное выполнение технических
				работ, профессиональный подход к бизнес-процессам,
				оптимальная для
				клиентов ценовая политика
			</p>

			<div class="advantage-blocks">
				<div class="advantage-block">
					<gear class="advantage-block__images"/>
					<h2 class="advantage-block__title">
						Надежность
					</h2>
				</div>

				<div class="advantage-block">
					<price class="advantage-block__images"/>
					<h2 class="advantage-block__title">
						Цена-Качество
					</h2>
				</div>

				<div class="advantage-block">
					<plus class="advantage-block__images"/>
					<h2 class="advantage-block__title">
						Вакцинируйся
					</h2>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import gear from '~/assets/images/gears.svg';
import price from '~/assets/images/price.svg';
import plus from '~/assets/images/plus.svg';

export default {
	name: 'Advantage',
	components: {
		gear,
		price,
		plus,
	},
}
</script>
