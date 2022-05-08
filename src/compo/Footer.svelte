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