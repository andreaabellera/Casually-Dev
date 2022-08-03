<script>
	export let seasonId = "spring-1999"

    let toks = seasonId.split("-")
    let season = toks[0]
    let year = toks[1]
    let seasonColor = "#D8D9D5"
    let yearColor = "#EEEEE6"
    let stripColor = "#CDFF9B"

    if(season == 'summer'){
        stripColor = "#CDFF9B"
        seasonColor = "#D8D9D5"
        yearColor = "#EEEEE6"
    }
    if(season == 'fall'){
        stripColor = "#3C0404"
        seasonColor = "#D8D9D5"
        yearColor = "#EEEEE6"
    }
    if(season == 'winter'){
        stripColor = "#6CA6B8"
        seasonColor = "navy"
        yearColor = "darkslategrey"
    }
</script>

<link href="https://fonts.googleapis.com/css2?family=Gentium+Basic:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Gentium+Basic:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
<div class="heading-ctr">
    <div class="text" style="color:{seasonColor};">{season}</div>
    <div class="hr" style="background-color:{stripColor}"></div>
    <div class="text year" style="color:{yearColor};">{year}</div>
</div>

<style>
.heading-ctr{
    display: flex;
    flex-direction: column;
    margin: 8vh 0 12vh 0;
}

.text{
    font-family: 'Gentium Basic', serif;
    color: var(--oysterDark);
    text-shadow: 0.03em 0.05em 0.1em rgba(74, 145, 142, 0.4);
    stroke: white;
    stroke-width: 2px;
    font-size: 4.5em;
    font-weight: 500;
    margin-left: 6vw;
}

.year{
    font-size: 6em;
    margin-left: 16vw;
}

.hr{
    height: 0.6em;
    width: 30vw;
    margin-top: 0.8vh;
    box-shadow: 0.03em 0.05em 0.1em rgba(0,0,0,0.4);
}

@media (max-width: 600px) {
    .text{
        font-size: 2em;
    }

    .year{
        font-size: 2.5em;
        margin-left: 13vw;
        color: var(--oyster) !important;
    }

    .hr{
        height: 0.4em;
        width: 40vw;
    }
}
</style>