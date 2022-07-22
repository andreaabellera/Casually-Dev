<script>
    export let set = []

    if(set.length > 0) {
        console.log("Rearrange set based on ratings from greatest to least")
    }
</script>

<link href="https://fonts.googleapis.com/css2?family=Lancelot&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=La+Belle+Aurore&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Taviraj:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
<div class="cover-ctr">
    <div class="cover-inner">
        <div id="leaderboard"> LEADERBOARD </div>
        <div id="img-ctr">
            <div id="rankBadgeCtr">
                <div class="rankBadgeInner">
                    <div id="rank"> 1 </div>
                </div>
            </div>
            <div id="lbImage" style="background-image:url(https://ipfs.fleek.co/ipfs/bafybeicqnhyhzvhcj4ch27jlh4rn6bz6ndctx4kftosmbeokyzgr5ngsue);"> </div>
        </div>
        <div id="lbTitle"> Drink Title </div>
        <div id="lbDetail"> Drink Detail </div>
        <div id="lbBlurb"> Leaderboard will be coded soon! </div>
    </div>
</div>

<style>
    .cover-ctr{
        background-color: var(--bark);
        color: var(--ink);
        height: 80vh;
        width: 25em;
        display: grid;
        justify-items: center;
        align-items: center;
        box-shadow: 0.05em 0.15em 0.5em rgba(0,0,0,0.2);
        margin: 0 0 8vh 6vw;
        overflow-y: hidden;
        cursor: url(https://ipfs.fleek.co/ipfs/bafybeicuryldiwjiv5qynwnswb6qxv2lujyxvcv3oodzrbegtq247jubvm), pointer;
    }

    .cover-inner{
        height: 88%;
        width: 80%;
    }

    #leaderboard{
        width: 100%;
        text-align: center;
        font-family: 'Taviraj', serif;
        color: var(--oyster);
        text-shadow: 0.03em 0.05em 0.1em rgba(0,0,0,0.4);
        font-weight: 800;
        font-size: 1.8em;
    }

    #rankBadgeCtr{
        position: absolute;
        top: 0;
        left: -1.5em;
        height: 4em;
        width: 4em;
        border: 0.3em solid var(--chartreuse);
        box-shadow: 0.05em 0.15em 0.5em rgba(0,0,0,0.3);
        background-image: var(--pearl);
        border-radius: 50%;
    }

    .rankBadgeInner{
        height: 100%;
        width: 100%;
        display: grid;
        justify-items: center;
        align-items: center;
        box-shadow: inset 0.05em 0.1em 0.3em rgba(0,0,0,0.3);
        border-radius: 50%;
    }

    #rank{
        height: 90%;
        width: 90%;
        color: var(--mocha);
        overflow: hidden;
        display: grid;
        justify-items: center;
        align-items: center;
        text-align: center;
        font-family: 'Taviraj', serif;
        font-size: 1.8em;
        font-weight: bold;
    }

    #lbTitle{
        font-family: 'Lancelot', cursive;
        font-size: 2.4em;
    }

    #lbImage{
        height: 30vh;
        width: 100%;
        box-shadow: inset 0.05em 0.15em 0.5em rgba(0,0,0,0.2);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }

    #img-ctr {
        position: relative;
        height: 33vh;
		width: 100%;
        margin: 3vh 0 3vh 0;
        display: grid;
        justify-items: flex-end;
        align-items: flex-end;
	}

    #lbDetail{
        font-family: 'PT Sans', sans-serif;
        font-size: 1em;
        margin: 1vh 0 4vh 0.2em;
    }

    #lbBlurb{
        font-family: 'PT Sans', sans-serif;
        font-size: 1.2em;
        margin-bottom: 3em;
    }

    @media (max-width: 700px) {
        .cover-ctr{
            width: 85vw;
        }

        #lbBlurb{
            font-size: 0.8em;
        }
    }

</style>