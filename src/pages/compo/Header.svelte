<script>
    let toggled = false;

    function changeSelect(){
        let currSelected = document.getElementsByClassName("selected")[0]
        currSelected.classList.remove("selected")
        this.classList.add("selected")
    }

    function toggleNav(){
        let fixedCtr = document.getElementsByClassName("fixed-ctr")[0]
        let navCtr = document.getElementById("nav-ctr-mbl")
        let navBtn = document.getElementById("nav-btn")

        if(!toggled) {
            fixedCtr.style.height = "100vh"
            navBtn.classList.add("spinner")

            let width = 0
            navCtr.style.display = "flex"
            let id = setInterval(frame, 10);
            function frame() {
                if(width < 8.3){
                    width += 0.3
                    navCtr.style.width = `${width}em`
                }
                else{
                    navCtr.style.width = "8.3em"
                    navCtr.style.boxShadow = "-0.2em 0 0.5em 0.5em rgba(0,0,0,0.2)"
                    toggled = true
                    navBtn.classList.remove("spinner")
                    clearInterval(id)
                }
            }
        }
        else{
            navBtn.classList.add("spinner")

            let width = 8.3
            let id = setInterval(frame, 10);
            navCtr.style.boxShadow = "none"
            function frame() {
                if(width > 0){
                    width -= 0.3
                    navCtr.style.width = `${width}em`
                }
                else{
                    navCtr.style.display = "none"
                    toggled = false
                    navBtn.classList.remove("spinner")
                    fixedCtr.style.height = "0vh"
                    clearInterval(id)
                }
            }
        }
    }
</script>

<span class="spinner"></span>
<div id="title-ctr" class="title-container" role="banner" aria-label="CasuallyDev decorative banner">
    <div class="casuallydev"> CasuallyDev </div>
    <div class="tagline"> Bonne nouvelle journée </div>
</div>
<div class="fixed-ctr">
        <div id="nav-btn" on:click={toggleNav} aria-label="Toggle on/off site navigation links for mobile">
            <div class="nav-btn-inner">
                <div class="round" /><div class="round" /><div class="round" />
            </div>
        </div>
        <div id="nav-ctr-mbl" class="nav-container" role="navigation" aria-label="Site navigation links for mobile">
            <div id="nav-array-mbl" class="gentiumBasic">
                <a href="/" aria-label="Home">
                    <div id="nav-chezmoi" class="nav" on:click={changeSelect}> 
                        <section></section>
                        <span> chez moi </span> 
                    </div>
                </a>

                <a href="/blog" aria-label="Blogs">
                    <div id="nav-blog" class="nav" on:click={changeSelect}> 
                        <section></section>
                        <span> blog </span> 
                    </div>
                </a>
                
                <a href="/galerie" aria-label="Art Gallery">
                    <div id="nav-galerie" class="nav" on:click={changeSelect}> 
                        <section></section>
                        <span> galerie </span> 
                    </div>
                </a>
                

                <a href="/archive" aria-label="Blog Archive">
                    <div id="nav-archive" class="nav" on:click={changeSelect}> 
                        <section></section>
                        <span> archive </span> 
                    </div>
                </a>

                <a href="/resources" aria-label="Dev Resources">
                    <div id="nav-resources" class="nav" on:click={changeSelect}> 
                        <section></section>
                        <span> resources </span> 
                    </div>
                </a>
                

                <a href="/revues" aria-label="Drink Reviews">
                    <div id="nav-revues" class="nav" on:click={changeSelect}> 
                        <section></section>
                        <span> revues </span> 
                    </div>
                </a>

                <a href="/andrea" aria-label="About CasuallyDev">
                    <div id="nav-andrea" class="nav" on:click={changeSelect}> 
                        <section></section>
                        <span> andrea </span>  
                    </div>
                </a>
                
            </div>
        </div>
        <div id="nav-ctr" class="nav-container" role="navigation" aria-label="Site navigation links for desktop">
            <div class="nav-array gentiumBasic">
                <a href="/" aria-label="Home">
                    <div id="nav-chezmoi" class="nav" on:click={changeSelect}> 
                        <section></section>
                        <span> chez moi </span> 
                    </div>
                </a>

                <a href="/blog" aria-label="Blogs">
                    <div id="nav-blog" class="nav" on:click={changeSelect}> 
                        <section></section>
                        <span> blog </span> 
                    </div>
                </a>
                

                <a href="/galerie" aria-label="Art Gallery">
                    <div id="nav-galerie" class="nav" on:click={changeSelect}> 
                        <section></section>
                        <span> galerie </span> 
                    </div>
                </a>
                

                <a href="/archive" aria-label="Blog Archives">
                    <div id="nav-archive" class="nav" on:click={changeSelect}> 
                        <section></section>
                        <span> archive </span> 
                    </div>
                </a>

                <a href="/resources" aria-label="Dev Resources">
                    <div id="nav-resources" class="nav" on:click={changeSelect}> 
                        <section></section>
                        <span> resources </span> 
                    </div>
                </a>

                <a href="/revues" aria-label="Drink Reviews">
                    <div id="nav-revues" class="nav" on:click={changeSelect}> 
                        <section></section>
                        <span> revues </span> 
                    </div>
                </a>

                <a href="/andrea" aria-label="About CasuallyDev">
                    <div id="nav-andrea" class="nav" on:click={changeSelect}> 
                        <section></section>
                        <span> andrea </span>  
                    </div>
                </a>
                
            </div>
            <div class="ribbon">
                <div class="string"></div>
            </div>
        </div>

    <!-- Apply menubar selection class by URL -->
    <span class="selected"></span>
    <script>
        let theUrl = window.location.href
        let toks = theUrl.split("/")
        if(toks.includes("blog") || toks.includes("epics"))
            document.getElementById("nav-blog").classList.add("selected")
        else if(toks.includes("archive"))
            document.getElementById("nav-archive").classList.add("selected")
        else if(toks.includes("resources"))
            document.getElementById("nav-resources").classList.add("selected")
        else if(toks.includes("galerie"))
            document.getElementById("nav-galerie").classList.add("selected")
        else if(toks.includes("laruelle") || toks.includes("intermission") || toks.includes("resume"))
            document.getElementById("nav-andrea").classList.add("selected")
        else{
            let navId = toks[toks.length - 1]
            if(navId.length > 0)
                document.getElementById("nav-" + navId).classList.add("selected")
            else
                document.getElementById("nav-chezmoi").classList.add("selected")
        }

        // Adjust icons on mobile
        if(globalThis.isMobile){
            let navs = document.querySelectorAll(".nav")
            for(let nav of navs){
                nav.style.transform = "scale(0.8) translateY(-8px)"
            }
        }
    </script>
</div>

<style>
    .fixed-ctr{
        position: fixed;
        z-index: 20;
        height: auto;
        display: flex;
        right: 0;
        cursor: url(https://dweb.link/ipfs/bafybeicuryldiwjiv5qynwnswb6qxv2lujyxvcv3oodzrbegtq247jubvm), pointer;
    }

    .title-container{
        position: relative;
        z-index: 8;
        display: flex;
        flex-direction: column;
        width: 60%;
    }

    .casuallydev{
        font-family: 'Mr De Haviland', cursive;
        font-size: 5.5em;
        color: var(--coffee);
        padding: 1vh 0 0 2vw;
    }

    .tagline{
        color: var(--mocha);
        font-family: 'Gentium Basic', serif;
        font-size: 0.9em;
        width: 100%;
        transform: translateY(-2.2em);
        margin-left: 2.5vw;
    }

    #nav-btn{
        z-index: 11;
        height: 4em;
        width: 4em;
        border-radius: 50%;
        border: 0.3em solid var(--bark);
        box-shadow: 0.05em 0.15em 0.5em rgba(0,0,0,0.3);
        margin: 15px 25px 0 0;
        overflow: hidden;
        display: none;
    }

    .nav-btn-inner{
        height: 100%;
        width: 100%;
        border-radius: 50%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        box-shadow: inset 0.05em 0.05em 0.2em rgba(0,0,0,0.3);
        color: var(--ink);
        background-color: rgba(221,192,148,0.85);
    }

    .round{
        height: 0.5em;
        width: 0.5em;
        border-radius: 50%;
        opacity: 0.5;
    }

    .round:nth-of-type(1){
        background-color: var(--chartreuse);
    }

    .round:nth-of-type(2){
        background-color: var(--passione);
    }

    .round:nth-of-type(3){
        background-color: var(--denim);
    }

    .nav-container{
        position: relative;
        height: 8em;
        width: 60vw;
        display: grid;
        grid-template-rows: 30% 1fr;
    }

    #nav-ctr-mbl{
        height: 100%;
        width: 8.3em;
        display: none;
        flex-direction: column;
        align-items: center;
        transform: translateX(3vw);
        /* background-image: linear-gradient(270deg, var(--linen) 10%, rgba(255,255,255,0)); */
        background: rgb(230, 200, 157);
    }

    .nav-array{
        z-index: 9;
        display: grid;
        grid-template-columns: 17% 13% 13% 13% 13% 13% 15%;
        justify-items: center;
        height: 4.2em;
        font-size: 1.3em;
        background-image: linear-gradient(270deg, var(--linen) 5%, rgba(255,255,255,0));
        mix-blend-mode: difference;
    }

    #nav-array-mbl{
        grid-template-rows: 20% 16% 16% 16% 16% 16%;
        height: 16vh;
    }

    #nav-array-mbl .nav{
        opacity: 50%;
    }

    .nav{
        cursor: url(https://dweb.link/ipfs/bafybeicuryldiwjiv5qynwnswb6qxv2lujyxvcv3oodzrbegtq247jubvm), pointer;
        background-image: radial-gradient(rgba(0,0,0,0));
        color: var(--ink);
        display: grid;
        grid-template-rows: 1fr 20%;
        height: 80%;
        width: 100%;
    }

    .nav section{
        height: 100%;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }

    #nav-chezmoi section{
        background-image: url(https://dweb.link/ipfs/bafybeigkiyocbout26eshome3yvbq7pb2ybif5afsy6u4h56tidkidtvhi);
    }

    #nav-blog section{
        background-image: url(https://dweb.link/ipfs/bafybeic7uxidilpwenka7pkc6ze3ubbtzt75geqbs62jhi4pxfaiaxqs3y);
    }

    #nav-galerie section{
        background-image: url(https://dweb.link/ipfs/bafybeicbzg74h32pofcjhlldhfzr5eyuizxmvnizlfffoxnhkybatwu5bq);
    }

    #nav-archive section{
        background-image: url(https://dweb.link/ipfs/bafybeiemaommpsincjhizl2ppv26rnbcgxavmrhvhjxr5wr5o6xetqhifm);
    }

    #nav-resources section{
        background-image: url(https://dweb.link/ipfs/bafybeig2afgdlpkc3end3mhmnrl23itdyoofsk3dmbpyf4rznzpwgotbbq);
    }

    #nav-revues section{
        background-image: url(https://dweb.link/ipfs/bafybeihnlbqpr3shznqunbsqh73quw2qwgltvlyftqnayzg3nvv36553xy);
    }

    #nav-andrea section{
        background-image: url(https://dweb.link/ipfs/bafybeidfxeswhhjzirsa7pbjflifmd3knt6wy3cu5isxf2mrq7inzdhpl4);
    }

    .nav span{
        width: 100%;
        text-align: center;
    }

    .nav:hover{
        font-weight: 600;
        font-size: 120%;
        transition: 0.2s ease-in-out;
        animation: mark 0.4s ease-in-out;
    }

    .spinner{
        animation: spinner 0.6s ease-in-out;
    }

    @keyframes spinner{
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }

    @keyframes mark{
        0%{
            background-image: radial-gradient(circle, var(--mocha) 5%, rgba(0,0,0,0) 5%, rgba(0,0,0,0));
        }
        15%{
            background-image: radial-gradient(circle, var(--mocha) 10%, rgba(0,0,0,0) 10%, rgba(0,0,0,0));
        }
        30%{
            background-image: radial-gradient(circle, var(--mocha) 20%, rgba(0,0,0,0) 20%, rgba(0,0,0,0));
        }
        45%{
            background-image: radial-gradient(circle, var(--mocha) 30%, rgba(0,0,0,0) 30%, rgba(0,0,0,0));
        }
        60%{
            background-image: radial-gradient(circle, var(--mocha) 20%, rgba(0,0,0,0) 20%, rgba(0,0,0,0));
        }
        75%{
            background-image: radial-gradient(circle, var(--mocha) 10%, rgba(0,0,0,0) 10%, rgba(0,0,0,0));
        }
        90%{
            background-image: radial-gradient(circle, var(--mocha) 5%, rgba(0,0,0,0) 5%, rgba(0,0,0,0));
        }
    }

    .nav-array #nav-chezmoi:hover{
        transform: rotateZ(5deg);
    }

    .nav-array #nav-blog:hover{
        transform: rotateZ(-6deg);
    }

    .nav-array #nav-galerie:hover{
        transform: rotateZ(-3deg);
    }

    .nav-array #nav-archive:hover{
        transform: rotateZ(6deg);
    }

    .nav-array #nav-resources:hover{
        transform: rotateZ(-2deg);
    }

    .nav-array #nav-revues:hover{
        transform: rotateZ(-4deg);
    }

    .ribbon{
        position: relative;
        height: 100%;
        width: 100%;
    }

    .string{
        position: absolute;
        height: 0.4em;
        width: 100%;
        background-color: var(--denim);
        margin-top: 0.8vh;
        box-shadow: 0.03em 0.05em 0.1em rgba(0,0,0,0.4);
        right: 0;
        top: 50%;
        transform: translateY(-50%);
    }

    .selected{
        font-weight: 600;
        font-size: 120%;
    }

    @media (max-width: 1250px) {
        .nav-container{
            width: 60vw;
        }
    }

    @media (max-width: 800px) {
        .casuallydev{
            font-size: 4.5em;
        }

        .tagline{
            font-size: 0.7em;
            width: 100%;
            transform: translateY(-2em);
            margin-left: 4vw;
        }

        #nav-btn{
            display: block;
        }

        .nav-container{
            display: none;
        }

        .selected{
            transform: scale(0.5);
            opacity: 100%;
        }
    }

</style>