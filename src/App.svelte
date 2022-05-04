<script>
	import Header from './compo/Header.svelte';
	import ChezMoi from './compo/ChezMoi.svelte';
</script>

<div class="view">
	<Header />
	<div class="linen"></div>
	<div class="content">
		<ChezMoi />
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
	background: url(https://storageapi.fleek.co/4ce00652-7eee-4e30-ba5f-e84651fedf6e-bucket/linenTexture.jpg);
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