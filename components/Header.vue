<template>
	<header id="header" class="header">
		<div class="container">
			<div class="menu">
				<div class="menu-header">
					<NuxtLink to="/" class="logo-link">
						<logo class="logo"/>
					</NuxtLink>

					<menu-icon class="menu-hamburger"/>
				</div>
				<div class="menu-info">
					<div class="menu-info-location">
						<location />
						Екатеринбург
					</div>

					<div class="menu-info-phone">
						<a href="tel:+79221076701" class="menu-info-phone__number">
							+7 (922) 107-67-01
						</a>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
import logo from '~/assets/images/main-logo.svg';
import MenuIcon from '~/assets/images/menu.svg';
import location from '~/assets/images/map.svg';

export default {
	name: 'Header',
	components: {
		logo,
		MenuIcon,
		location,
	}
}
</script>
