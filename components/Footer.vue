<template>
	<footer id="footer" class="footer">
		<div class="container">
			<div class="footer-content">
				<div class="footer-location">
					<location />
					Екатеринбург
				</div>

				<div class="footer-contacts">
					<a href="tel:+79221076701" class="footer-contacts__phone">
						+7 (922) 107-67-01
					</a>
					<a href="mailto:ivanservices54@gmail.com" class="footer-contacts__email">
						ivanservices54@gmail.com
					</a>
				</div>

				<p class="footer-copyright">
					© 2021 iVanService - Сервисный центр.
					<span>Все права защищены.</span>
				</p>
			</div>
		</div>
	</footer>
</template>

<script>
import location from '~/assets/images/map.svg';

export default {
	name: 'Footer',
	components: {
		location,
	},
}
</script>
