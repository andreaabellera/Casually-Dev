<script>
    /* Attributions
    Instagram icon
    <a target="_blank" href="https://icons8.com/icon/42328/instagram">Instagram</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
    Github icon
    <a target="_blank" href="https://icons8.com/icon/101795/github">GitHub</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
    Linkedin icon
    <a target="_blank" href="https://icons8.com/icon/42453/linkedin">LinkedIn</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
    Twitter icon
    <a target="_blank" href="https://icons8.com/icon/42403/twitter">Twitter</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
    Youtube icon
    <a target="_blank" href="https://icons8.com/icon/42493/youtube">YouTube</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
    Reddit icon
    <a target="_blank" href="https://icons8.com/icon/44182/reddit">Reddit</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
    */
</script>

<div class="footer-ctr" role="group" aria-label="Footer">
    <div class="footer-inner" role="contentinfo">
        <div class="footer-left">
            <div class="cp" role="note" aria-label="Copyright">
                <b>Andrea Abellera</b> © 2023 <br>
            </div>
            <div class="site-about" role="note" aria-label="Site build information">
                <img src = "https://4everland.io/ipfs/bafybeigio35caamtq4f26zhxuckrweggufjiodyzzr3gslxhkddcxznyum" alt="Footer Thumbnail" />
                <div class="site-info">
                    <p>
                        This website is <br>
                        <a href="https://github.com/andreaabellera/casuallydev"><b> OPEN SOURCE </b></a>
                    </p>
                    made in <a href="https://svelte.dev/"><b>SvelteJS</b></a><br>
                    served from <a href="https://www.netlify.com/"><b>Netlify</b></a><br>
                    powered by <a href="https://ipfs.tech/"><b>IPFS</b></a><br>
                </div>
            </div>
        </div>
        <div class="footer-right" role="list" aria-label="CasuallyDev's external social media links">
            <div class="footer-social">
                <a href="mailto:casuallyandrea@pm.me" role="listitem" aria-label="Email">
                    <img src="https://4everland.io/ipfs/bafybeidx4mk3gtvzt42vjvvrw5turwkkkudzy3ufze3as2lesmj57xpqfu" alt="Email" />
                </a>
                <a href="https://github.com/andreaabellera" role="listitem" aria-label="Github">
                    <img src="https://4everland.io/ipfs/bafybeiarmhb7kqwivorqeokim5py4kubdu7ouwn47w6yop45llogegs55e" alt="Github" />
                </a>
                <a href="https://www.linkedin.com/in/aabellera" role="listitem" aria-label="LinkedIn">
                    <img src="https://4everland.io/ipfs/bafybeid5jlfpfybb7z6ck2wko5rkirhfmdh2lmgv3oayqu74xvaxaupxku" alt="Linkedin" />
                </a>
                <a href="https://www.tiktok.com/@casuallydev" role="listitem" aria-label="Tiktok">
                    <img src="https://4everland.io/ipfs/bafybeievy4qz3re6ga334zhrsbqox7uof7hpyufful3j4zlteb3qprvife" alt="Tiktok" />
                </a>
                <a href="https://www.reddit.com/user/CosySushi/" role="listitem" aria-label="Reddit">
                    <img src="https://4everland.io/ipfs/bafybeidby7xke7qssamj7iwna4utqljf2ymlxi2spz6ly54yr3qwlkftci" alt="Reddit" />
                </a>
                <a href="https://steamcommunity.com/profiles/76561199085866000/" role="listitem" aria-label="Steam">
                    <img src="https://4everland.io/ipfs/bafybeihzhp5hecdk3ydrcdbkqdwr44hrvl5a4uog6oar2fmki6rd3npcja" alt="Steam" />
                </a>
            </div>
            <div class="ptSans thanks" role="note"> Special thanks to <a href="https://icons8.com/icon/set/social-media/dotty"> ICONS8 </a> </div>
        </div>
    </div>
</div>

<style>
    .footer-ctr {
        position: relative;
        height: max-content;
        width: 100%;
        font-family: 'Syncopate', sans-serif;
    }

    .footer-inner {
        padding: 1em;
        color: var(--ink);
        font-weight: 400;
        font-size: 0.6em;
        display: flex;
        justify-content: space-between;
    }

    .footer-left {
        display: flex;
        flex-direction: column;
        width: max-content;
        align-self: center;
    }

    .cp{
        margin: 1vh 0 2vh 0;
    }

    .site-about {
        display: flex;
    }

    .site-info {
        margin-left: 2em;
    }

    .footer-right{
        margin: 0 3em 0 2em;
        display: grid;
        grid-template-rows: 1fr auto;
        justify-items: flex-end;
        align-items: flex-end;
    }

    .footer-social {
        display: flex;
        justify-content: flex-end;
        flex-wrap: wrap;
    }

    .footer-social img{
        height: 50px;
        width: 50px;
        margin-left: 0.3em;
    }

    .footer-social img:hover{
        animation: up 0.4s ease-out;
    }

    @keyframes up{
        0%{
            transform: translateY(0);
        }
        100%{
            transform: translateY(-0.6em);
        }
    }

    @media (max-width: 600px) {
        .footer-inner div {
            margin: 0.5em 0 0.5em 0;
        }

        .footer-social{
            max-width: 130px;
        }
    }
</style>