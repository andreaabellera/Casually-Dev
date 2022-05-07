<script>
	import Header from './compo/Header.svelte';
	import ChezMoi from './compo/ChezMoi.svelte';
	import Blog from './compo/Blog.svelte';
	import Journals from './compo/Journals.svelte';
	import Galerie from './compo/Galerie.svelte';
	import Revues from './compo/Revues.svelte';
	import Andrea from './compo/Andrea.svelte';
	let currNav = "nav-chezmoi";
	$: swap = currNav

	function selectNav(event) {
		currNav = event.detail.id;
	}
</script>

<div class="view">
	<Header on:selection={selectNav} />
	<div class="content">
		{#if swap === "nav-chezmoi"}
			<ChezMoi />
		{:else if swap === "nav-blog"}
			<Blog />
		{:else if swap === "nav-journals"}
			<Journals />
		{:else if swap === "nav-galerie"}
			<Galerie />
		{:else if swap === "nav-revues"}
			<Revues />
		{:else if swap === "nav-andrea"}
			<Andrea />
		{/if}
	</div>
</div>

<style>

.view{
	position: relative;
	height: max-content;
	width: inherit;
	display: grid;
}

.content{
	z-index: 2;
	margin-top: 9vh;
}

</style>