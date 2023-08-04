<script>
    import GalerieFeat from './GalerieFeat.svelte';
    import ProjectFeat from './ProjectFeat.svelte';
</script>

<div class="ladycave-ctr" role="article" aria-label="Homepage promotions and readings">
    <div class="ladyCaveTitle"> The Cave </div>
    <div class="ladyCavePromos" aria-label="Promotional links">
        <GalerieFeat 
            title={"The Queen Moves Forward"} 
            image={"https://4everland.io/ipfs/bafybeiffcxwaruzdgafmeusex7qr3wjcdfz57wsrruzvitbqyca3mkqtvi"}
        />

        <div id="midnote">
            <a class="gentiumBasic x-large" href="https://www.instagram.com/aviagulcas/">
                Stumble by my<br>art Instagram
            </a>
        </div>

        <ProjectFeat />
    </div>
    <div class="contentible">
        <div class="contentible-inner" role="document" aria-label="Featured readings and content">
            <!-- Casually CSS -->
            <div id="quotes">
                <div class="quote slightLarge">
                    <p>"CSS art for fun? What an elegant way to say you're a psycopath"</p>
                    <p>- reddit user</p>
                </div>
                <div class="quote slightLarge">
                    <p>"You're a madman and I love it"</p>
                    <p>- reddit user too</p>
                </div>
            </div>
            <br>
            
            I make CSS art and publish them open-source <a href="/blog/introducing-casually-css">through my passion project</a>, <b>Casually CSS</b>. These cute characters can be imported with one line of code through a standalone script or npm.
            My video below is recorded HTML updating in real time. 
            <a href="https://casuallyroadshow.on.fleek.co/">You can watch it live here!</a> <span class="small"><i>(desktop-viewing recommended)</i></span>
            <br><br>
            
            <iframe style="width:100%;" height="500" src="https://www.youtube-nocookie.com/embed/zKJXCX3J_-k" title="Casually CSS Teaser" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
            <br><br>
            
            <!-- IPFS -->
            Wondering why I have a slight obsession with IPFS? I worked with it for a freeform project in university. Here's <a href="https://github.com/andreaabellera/DesCentral-Apps">DesCentral Apps, the project prototypes</a> in my summary vid below!
            <br><br>
            
            <iframe style="width:100%;" height="500" src="https://www.youtube-nocookie.com/embed/5lfjivcDNBQ" title="LibP2P and IPFS Project" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen/>    
            <br><br>
            
            <!-- CasuallyDev Reels -->
            I have a Tiktok where I share small snippets of my creative adventures and coding shenanigans! 💐 I'm not very active there so I may take a while to respond.
            <br><br>

            <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@casuallydev" data-unique-id="casuallydev" data-embed-type="creator" style="max-width: 780px; min-width: 288px;" > <section> <a target="_blank" href="https://www.tiktok.com/@casuallydev?refer=creator_embed">@casuallydev</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>
            <br><br>
            
            <!-- Delphi -->
            My dream of working as a programmer came true in the summer of 2021. This is a tribute to <a href="https://delphitechcorp.com/">Delphi Technology Corp</a>. This feature is on my own accord, not sponsored, because I'm certainly grateful for my time with them! <br><br>
            I worked with <a href="https://vrcity.ca/">VRCity</a>, a VR platform and curriculum gearing teens and young adults for a career in aviation - whether as a pilot, aircraft maintenance engineer, or anything in-between. Here's a vid of life as a dev intern! Also featuring my fellow dev homies.
            <br><br>
            
            <video controls style="width:100%;" height="500" aria-label="Life as a Delphi Tech Dev" poster="https://4everland.io/ipfs/bafybeicqp5pku4c2qifv7sc5jseapvq2orr5d2ykne7subapic47ne3b7u">
                <source src="https://brown-fuzzy-mole-747.mypinata.cloud/ipfs/bafybeidvyc6vfqtds5wsuixeisisuc4s674pecok6s2ifwmfigyd6xweoi" type="video/mp4">
                <track src="/captions/delphiInternAfterparty.vtt" label="English" kind="captions" srclang="en-us" default>
                <p>
                    Your browser doesn't support HTML video. Here is a <a href="https://ipfs.fleek.co/ipfs/bafybeidvyc6vfqtds5wsuixeisisuc4s674pecok6s2ifwmfigyd6xweoi">link to the video</a> instead.
                </p>
            </video>
            <br><br>

        </div>
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
        margin: 6vh 0 0 12vw;
    }

    .ladyCavePromos{
        width: 100%;
        height: 200vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        transform: scale(0.75);
    }

    .contentible{
        width: 100%;
        display: grid;
        justify-items: center;
    }

    .contentible-inner {
        height: max-content;
        width: 90%;
        max-width: 900px;
        font-family: 'PT Sans', sans-serif;
        color: black;
        font-size: 1.1em;
        line-height: 2em;
    }

    #midnote{
        width: 100%;
        display: grid;
        justify-items: center;
        transform:translateY(-3em);
        line-height: 300%;
    }

    #midnote a{
        width: max-content;
        border: 2px solid var(--chartreuse);
        border-top-left-radius: 70%;
        border-top-right-radius: 90%;
        border-bottom-left-radius: 100%;
        border-bottom-right-radius: 70%;
        text-align:center;
    }

    #quotes{
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: 50% 50%;
        justify-items: center;
    }

    .quote{
        background-color: var(--bark);
        padding: 0.5em 1em 0.5em 1em;
        width: 70%;
        max-width: 500px;
        font-family: 'Gentium Basic', serif;
        font-style: italic;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-top: -10vh;
        box-shadow: 0.05em 0.15em 0.5em rgba(0,0,0,0.2);
    }

    .quote p:nth-child(2){
        text-align: right;
    }

    @media (max-width: 900px) {
        .ladyCavePromos{
            transform: none;
        }

        #quotes{
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .quote{
            margin-top: 4vh;
        }

        iframe{
            height: 250px;
        }

        video{
            height: 200px;
        }
    }

    @media (max-width: 600px) {
        .ladyCaveTitle{
            text-align: center;
            font-size: 7em;
            margin: 6vh 0 12vh 0vw;
        }
    }

</style>