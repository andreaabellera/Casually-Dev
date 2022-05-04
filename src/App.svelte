<script>
	import Header from './compo/Header.svelte';
	import ChezMoi from './compo/ChezMoi.svelte';
	import Blog from './compo/Blog.svelte';
	import Journals from './compo/Journals.svelte';
	import Galerie from './compo/Galerie.svelte';
	import Revues from './compo/Revues.svelte';
	import Andrea from './compo/Andrea.svelte';
	let swap = 0;
</script>

<div class="view">
	<Header />
	<div class="linen"></div>
	<div class="content">
		{#if swap === 0}
			<ChezMoi />
		{:else if swap === 1}
			<Blog />
		{:else if swap === 2}
			<Journals />
		{:else if swap === 3}
			<Galerie />
		{:else if swap === 4}
			<Revues />
		{:else if swap === 5}
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