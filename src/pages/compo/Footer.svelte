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

<link href="https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&display=swap" rel="stylesheet">
<div class="footer-ctr">
    <div class="footer-inner">
        <div class="footer-left">
            <div class="cp">
                <b>Andrea Abellera</b> © 2022 <br>
            </div>
            <div class="site-about">
                <img src = "https://ipfs.fleek.co/ipfs/bafybeigio35caamtq4f26zhxuckrweggufjiodyzzr3gslxhkddcxznyum" alt="Footer Thumbnail" />
                <div class="site-info">
                    <p>
                        This website is <br>
                        <a href="https://github.com/andreaabellera/casuallydev"><b> OPEN SOURCE </b></a>
                    </p>
                    made in <a href="https://svelte.dev/"><b>SvelteJS</b></a>                 <br>
                    served from <a href="https://ipfs.io/"><b>IPFS</b></a>                    <br>
                    powered by <a href="https://fleek.co/"><b>Fleek.co</b></a>                <br>
                </div>
            </div>
        </div>
        <div class="footer-right">
            <div class="footer-social">
                <a href="https://www.instagram.com/ateawa/"><img src="https://ipfs.fleek.co/ipfs/bafybeig22agaavqyvfjbfzudd6md64qfox32bun2vrgmwcfi3cluqd4qya" alt="Instagram" /></a>
                <a href="https://github.com/andreaabellera"><img src="https://ipfs.fleek.co/ipfs/bafybeiarmhb7kqwivorqeokim5py4kubdu7ouwn47w6yop45llogegs55e" alt="Github" /></a>
                <a href="https://www.linkedin.com/in/aabellera"><img src="https://ipfs.fleek.co/ipfs/bafybeid5jlfpfybb7z6ck2wko5rkirhfmdh2lmgv3oayqu74xvaxaupxku" alt="Linkedin" /></a>
                <a href="https://www.reddit.com/user/CosySushi/"><img src="https://ipfs.fleek.co/ipfs/bafybeidby7xke7qssamj7iwna4utqljf2ymlxi2spz6ly54yr3qwlkftci" alt="Reddit" /></a>
            </div>
            <div class="ptSans thanks"> Special thanks to <a href="https://icons8.com/icon/set/social-media/dotty"> ICONS8 </a> </div>
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