<script>
	import Header from './compo/Header.svelte';
	import ChezMoi from './compo/ChezMoi.svelte';
	import Blog from './compo/Blog.svelte';
	import Journals from './compo/Journals.svelte';
	import Galerie from './compo/Galerie.svelte';
	import Revues from './compo/Revues.svelte';
	import Andrea from './compo/Andrea.svelte';
	import Footer from './compo/Footer.svelte';

	let currNav = "nav-chezmoi"
	$: swap = currNav

	function selectNav(event) {
		let theId = event.detail.id
		document.getElementsByClassName("selected")[0].classList.remove("selected")
        document.getElementById(theId).classList.add("selected")
		currNav = theId
	}

</script>

<div class="view">
	<Header on:selection={selectNav} />
	<div class="content">
		{#if swap === "nav-chezmoi"}
			<ChezMoi on:selection={selectNav}/>
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
	<Footer />
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