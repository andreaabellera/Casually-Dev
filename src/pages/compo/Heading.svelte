<script>
	export let title = "Heading Title";
</script>

<div class="heading-ctr">
    <h1 class="title"> {title} </h1>
    <div class="hr"></div>
</div>

<style>
.heading-ctr{
    display: flex;
    flex-direction: column;
    margin: 8vh 0 12vh 0;
}

.title{
    font-family: 'Taviraj', serif;
    color: var(--oyster);
    text-shadow: 0.03em 0.05em 0.1em rgba(0,0,0,0.4);
    font-size: 2.5em;
    font-weight: 800;
    margin-left: 6vw;
}

.hr{
    height: 0.4em;
    width: 35vw;
    background-color: var(--denim);
    margin-top: 0.8vh;
    box-shadow: 0.03em 0.05em 0.1em rgba(0,0,0,0.4);
}
</style>