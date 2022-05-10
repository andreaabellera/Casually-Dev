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
        <div>
            <b>Andrea Abellera</b> © 2022 <br>
        </div>
        <div>
            This website is made in <b>SvelteJS</b>, served from <b>IPFS</b>, powered by <b>Fleek.co</b>
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
        font-size: 0.7em;
        display: flex;
        justify-content: space-between;
    }

    @media (max-width: 600px) {
        .footer-inner{
            flex-direction: column;
        }

        .footer-inner div {
            margin: 0.5em 0 0.5em 0;
        }
    }
</style>