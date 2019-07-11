<template>
<v-dialog max-width="600px" transition="dialog-transition" v-model="dialog">
	<v-btn flat slot="activator" color="grey">
		<span>Join</span>
		<v-icon right>person_add</v-icon>
	</v-btn>
	<v-card>
		<v-card-title>
			<h2>Join us!</h2>
		</v-card-title>
		<v-card-text>
			<v-form class="px-3 form" @submit="submit" ref="form" lazy-validation>
				<v-text-field name="email" label="Email" type="email" v-model="email" prepend-icon="person" :rules="emailRules" required></v-text-field>
				<v-text-field prepend-icon="lock" name="password" label="Password" id="password" type="password" required v-model="password" :rules="passwordRules">
				</v-text-field>
			</v-form>
		</v-card-text>
		<v-card-actions class="justify-center pb-4">
			<v-btn depressed color="teal lighten-3" class="dark--text mx-0 mt-3 text-uppercase" @click="submit" :loading="loading">Sign up</v-btn>
		</v-card-actions>
	</v-card>
</v-dialog>
</template>
<script>
export default {}
</script>

<style lang="css" scoped>
</style>
