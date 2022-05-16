<div class="cover-ctr">
    <div class="cover-inner">
        <div class="cover">
            <slot> 
                <p> No content was provided </p> 
            </slot>
        </div>
    </div>
</div>

<style>
	.cover-ctr {
        height: 14em;
		width: 10em;
        border: 0.3em solid var(--chartreuse);
        box-shadow: 0.05em 0.15em 0.5em rgba(0,0,0,0.3);
        background-image: var(--pearl);
        margin-left: 8vw;
        margin-bottom: 8vh;
        cursor: url(https://ipfs.fleek.co/ipfs/bafybeicukkuk4n3ry2m6krh5fyth6wsbekzfeldfmmldnqh7gcufs42zoi), pointer;
	}

    .cover-ctr:hover{
        animation: up 0.8s ease-out;
    }

    .cover-inner{
        height: 100%;
        width: 100%;
        display: grid;
        justify-items: center;
        align-items: center;
        box-shadow: inset 0.05em 0.1em 0.3em rgba(0,0,0,0.3);
    }

    .cover{
        height: 70%;
        width: 90%;
        color: var(--ink);
        overflow: hidden;
        display: grid;
        justify-items: center;
        align-items: center;
        text-align: center;
    }

    @media (max-width: 600px) {
        .cover-ctr{
            margin-left: 8vw;
            margin-top: 4vh;
            margin-bottom: 2vh;
        }
    }

    @keyframes up{
        0%{
            transform: translateY(0);
        }
        100%{
            transform: translateY(-0.6em);
        }
    }
</style>