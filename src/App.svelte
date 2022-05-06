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
	<div class="linen"></div>
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
	height: inherit;
	width: inherit;
}

.linen{
	position: absolute;
	height: 700vh;
	width: 100%;
	background: url(https://ipfs.io/ipfs/bafybeibqzapb247u47mvsyh24gf6jniwab4j7snl2oixs3kqmjw3jeo5eu);
	opacity: 15%;
	background-repeat: repeat;
	z-index: 1;
}

.content{
	position: absolute;
	z-index: 2;
	margin-top: 10vh;
}

</style>