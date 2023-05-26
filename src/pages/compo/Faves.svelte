<script>
    let faves = [
        { category:"color", icon:"bafybeiezbfpqzphj2a4welsvyiloqyvzymejgtsz5gs2opt54pm5wjilsm", value: "Yellow" },
        { category:"drink", icon:"bafybeihbiekt7m7cg46kv2zmapz7xm53xsacev5hm7gjvunu2pwuyyd3xi", value: "Coffee/Tea"  },
        { category:"language", icon:"bafybeihnjykkitmigdj6o7vlcymk4ei62vofvshkkbxzs5k3uegefzn5ca", value: "Javascript"  },
        { category:"music", icon:"bafybeibcljv7azxjs7sshclm6h2ujorbvuroz7d34ixmqhbycbpfkcz43q", value: "Classical"  }
    ]
</script>

<div id="faves-ctr">
    <h3 class="laBelleAurore xx-large"> Favorites </h3>
    <div id="fave-array" class={globalThis.isMobile ? 'mbl-override':''}>
        {#each faves as fave}
            <div class="fave-bar">
                <div class="orb-ctr">
                    <div class="orb"><img src="https://ipfs.io/ipfs/{fave.icon}" alt="{fave.value} icon"/></div>
                </div>
                <div class="fave-text gentiumBasic">
                    <h4 class="small">{fave.category}</h4>
                    <p class="large">{fave.value}</p>
                </div>
            </div>
        {/each}
    </div>
</div>

<style>
    #faves-ctr{
        height: max-content;
        min-height: 30vh;
        width: 100%;
        display: grid;
        justify-items: center;
        align-items: center;
    }

    #faves-ctr h3{
        color: var(--mocha);
        font-weight: 400;
        margin: 6vh 0 2vh 0;
    }

    #fave-array{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto auto;
        grid-column-gap: 10%;
        grid-row-gap: 2em;
    }

    .mbl-override{
        display: flex !important;
        justify-content: space-evenly !important;
        flex-wrap: wrap !important;
    }

    .fave-bar{
        display: flex;
        align-items: center;
    }

    .fave-bar:hover{
        filter: brightness(1.05);
        transition: 0.7s ease-out;
    }

    .orb-ctr{
        width: 4em;
        height: 4em;
        border-radius: 50%;
        box-shadow: 0.05em 0.15em 0.5em rgba(0,0,0,0.3);
        border: 4px double burlywood;
        background: khaki;
        z-index: 2;
    }

    .orb{
        height: inherit;
        width: inherit;
        overflow: hidden;
        border-radius: 50%;
        box-shadow: inset 2px 5px 8px rgba(0,0,0,0.5);
        background: radial-gradient(#ffe76c, #e0b022 60%, var(--mocha));
        display: grid;
        justify-items: center;
        align-items: center;
    }

    .orb img{
        height: 80%;
        width: 80%;
    }

    .fave-text{
        z-index: 1;
        background: var(--bark);
        padding: 0.4em 1em 0.4em 2em;
        transform: translateX(-1em);
        box-shadow: 0.05em 0.15em 0.5em rgba(0,0,0,0.3);
    }

    .fave-text h4{
        margin: 0;
        color: var(--coffee);
    }

    .fave-text p{
        margin: 0;
        color: var(--mocha);
    }

    @media screen and (max-width: 1000px){
        #faves-ctr{
            width: 90%;
        }

        #faves-ctr h3{
            font-size: 180%;
        }

        #fave-array{
            display: flex;
            justify-content: space-evenly;
            flex-wrap: wrap;
        }

        .fave-text{
            font-size: 70%;
        }

        .orb-ctr{
            height: 3em;
            width: 3em;
        }
    }
</style>