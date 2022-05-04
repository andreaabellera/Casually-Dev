<script>
	export let title = "Heading Title";
</script>

<div class="heading-ctr">
    <link href="https://fonts.googleapis.com/css2?family=Taviraj:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <div class="title"> {title} </div>
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

.title::selection{
    color: var(--oysterDark);
}

.hr{
    height: 0.4em;
    width: 35vw;
    background-color: var(--denim);
    margin-top: 0.8vh;
    box-shadow: 0.03em 0.05em 0.1em rgba(0,0,0,0.4);
}
</style>