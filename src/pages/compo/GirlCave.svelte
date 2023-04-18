<script>
    import GalerieFeat from './GalerieFeat.svelte';
    import ProjectFeat from './ProjectFeat.svelte';
</script>

<div class="ladycave-ctr">
    <div class="ladyCaveTitle"> The Cave </div>
    <div class="ladyCavePromos">
        <GalerieFeat 
            title={"The Queen Moves Forward"} 
            image={"https://ipfs.io/ipfs/bafybeiffcxwaruzdgafmeusex7qr3wjcdfz57wsrruzvitbqyca3mkqtvi"}
        />
        <ProjectFeat />
    </div>
    <div class="generic-ctr">
        <!-- Casually CSS Roadshow -->
        <iframe height="450" width="800" src="https://www.youtube-nocookie.com/embed/zKJXCX3J_-k" title="Casually CSS Teaser" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />

        <!-- Skits -->
        <!-- <iframe height="450" width="800" src="https://ipfs.io/ipfs/bafybeidkuxd4o6c6ojagxitfwhl4hap2mky5qnttmzw7e2txmgatmrgahe" title="The Great AI Debate" frameborder="0" allowfullscreen /> -->

        <!-- IPFS -->
        <!-- <iframe height="450" width="800" src="https://www.youtube-nocookie.com/embed/5lfjivcDNBQ" title="LibP2P and IPFS Project" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen /> -->

        <!-- Conception of Baldy -->
        <!-- <iframe height="450" width="400" src="https://ipfs.io/ipfs/bafybeiasfyuculte5cldzl4g3numniwjlfiua466vx25ot34cvcvbehdsq" title="The Conception of Baldy" frameborder="0" allowfullscreen /> -->

        <!-- Game Jam Teasers -->
        <!-- <iframe height="450" width="800" src="https://www.youtube-nocookie.com/embed/JKZDh6bA_3Y" title="Recollection Day" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
        <iframe height="450" width="800" src="https://www.youtube-nocookie.com/embed/dXBGJ2Iq1uQ" title="Farmer's Life" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
        <iframe height="450" width="800" src="https://ipfs.fleek.co/ipfs/bafybeiaflcmffan2magm7xvccpn2swfecf442zqpx6rhmagyessrtvgwse" title="Farmony" frameborder="0" allowfullscreen /> -->
    
        <!-- Delphi -->
        <!-- <iframe height="450" width="800" src="https://ipfs.fleek.co/ipfs/bafybeidvyc6vfqtds5wsuixeisisuc4s674pecok6s2ifwmfigyd6xweoi" frameborder="0" allowfullscreen title="Delphi Tech Corp Intern Afterparty" /> -->
    </div>
</div>

<style>
    .ladycave-ctr {
        height: max-content;
        width: 100%;
        display: grid;
        grid-column-gap: 6vh;
        grid-template-rows: auto 1fr;
    }

    .ladyCaveTitle{
        font-family: 'Mr De Haviland', cursive;
        font-size: 10em;
        color: var(--passione);
        text-shadow: -4px 4px var(--blossom);
        width: 100%;
        margin: 6vh 0 12vh 12vw;
    }

    .ladyCavePromos{
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
    }

    .generic-ctr{
        width: 100%;
        height: max-content;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .generic-ctr iframe{
        max-width: 100%;
        margin: 4vh 0 4vh 0;
    }

    @media (max-width: 600px) {
        .ladyCaveTitle{
            text-align: center;
            font-size: 7em;
            margin: 6vh 0 12vh 0vw;
        }
    }

</style>