<script>
    import { Link } from "svelte-routing";
    import { createEventDispatcher } from 'svelte';

    // Detect mobile
    let isMobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))

    const dispatch = createEventDispatcher();

    function selectNav() {
        let theId = this.id;
        if(this.id == "title-ctr")
            theId = "nav-chezmoi"

        dispatch("selection", {
            id: theId
        });
    }

    let toggled = false;

    function toggleNav(){
        let fixedCtr = document.getElementsByClassName("fixed-ctr")[0]
        let navCtr = document.getElementById("nav-ctr-mbl")
        let navBtn = document.getElementById("nav-btn")

        if(!toggled) {
            fixedCtr.style.height = "100vh"
            navBtn.classList.add("spinner")

            let width = 0
            navCtr.style.display = "flex"
            let id = setInterval(frame, 20);
            function frame() {
                if(width < 8.3){
                    width += 0.3
                    navCtr.style.width = `${width}em`
                }
                else{
                    navCtr.style.width = "8.3em"
                    toggled = true
                    navBtn.classList.remove("spinner")
                    clearInterval(id)
                }
            }
        }
        else{
            navBtn.classList.add("spinner")

            let width = 8.3
            let id = setInterval(frame, 20);
            function frame() {
                if(width > 0){
                    width -= 0.3
                    navCtr.style.width = `${width}em`
                }
                else{
                    navCtr.style.display = "none"
                    toggled = false
                    navBtn.classList.remove("spinner")
                    clearInterval(id)
                }
            }
        }
    }
</script>

<link href="https://fonts.googleapis.com/css2?family=Mr+De+Haviland&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Gentium+Basic:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&display=swap" rel="stylesheet">

<span class="spinner"></span>
<div id="title-ctr" class="title-container" on:click={selectNav}>
    <div class="qtrlex"> Quaintrellex </div>
    <div class="tagline"> Bonne nouvelle journée </div>
</div>
<div class="fixed-ctr">
    {#if isMobile}
        <div id="nav-btn" on:click={toggleNav}>
            <div class="nav-btn-inner">
                <div class="round" /><div class="round" /><div class="round" />
            </div>
        </div>
        <div id="nav-ctr-mbl" class="nav-container">
            <div id="nav-array-mbl" class="gentiumBasic">
                <Link to="/">
                    <div id="nav-chezmoi" class="nav selected" on:click={selectNav}> 
                        <section></section>
                        <span> chez moi </span> 
                    </div>
                </Link>

                <Link to="blog">
                    <div id="nav-blog" class="nav" on:click={selectNav}> 
                        <section></section>
                        <span> blog </span> 
                    </div>
                </Link>

                <Link to="galerie">
                    <div id="nav-galerie" class="nav" on:click={selectNav}> 
                        <section></section>
                        <span> galerie </span> 
                    </div>
                </Link>

                <Link to="journals">
                    <div id="nav-journals" class="nav" on:click={selectNav}> 
                        <section></section>
                        <span> journals </span> 
                    </div>
                </Link>

                <Link to="revues">
                    <div id="nav-revues" class="nav" on:click={selectNav}> 
                        <section></section>
                        <span> revues </span> 
                    </div>
                </Link>

                <Link to="andrea">
                    <div id="nav-andrea" class="nav" on:click={selectNav}> 
                        <section></section>
                        <span> andrea </span>  
                    </div>
                </Link>
            </div>
        </div>
    {:else}
        <div id="nav-ctr" class="nav-container">
            <div class="nav-array gentiumBasic">
                <Link to="/">
                    <div id="nav-chezmoi" class="nav selected" on:click={selectNav}> 
                        <section></section>
                        <span> chez moi </span> 
                    </div>
                </Link>

                <Link to="blog">
                    <div id="nav-blog" class="nav" on:click={selectNav}> 
                        <section></section>
                        <span> blog </span> 
                    </div>
                </Link>

                <Link to="galerie">
                    <div id="nav-galerie" class="nav" on:click={selectNav}> 
                        <section></section>
                        <span> galerie </span> 
                    </div>
                </Link>

                <Link to="journals">
                    <div id="nav-journals" class="nav" on:click={selectNav}> 
                        <section></section>
                        <span> journals </span> 
                    </div>
                </Link>

                <Link to="revues">
                    <div id="nav-revues" class="nav" on:click={selectNav}> 
                        <section></section>
                        <span> revues </span> 
                    </div>
                </Link>

                <Link to="andrea">
                    <div id="nav-andrea" class="nav" on:click={selectNav}> 
                        <section></section>
                        <span> andrea </span>  
                    </div>
                </Link>
            </div>
            <div class="ribbon">
                <!-- <div class="bow"></div> -->
                <div class="string"></div>
            </div>
        </div>
    {/if}
</div>

<style>
    .fixed-ctr{
        position: fixed;
        z-index: 20;
        display: flex;
        right: 0;
        cursor: pointer;
    }

    .title-container{
        position: relative;
        z-index: 8;
        display: flex;
        flex-direction: column;
        width: 60%;
    }

    .qtrlex{
        font-family: 'Mr De Haviland', cursive;
        font-size: 5.5em;
        color: var(--coffee);
        padding: 1vh 0 0 2vw;
    }

    .tagline{
        color: var(--mocha);
        font-family: 'Gentium Basic', serif;
        font-size: 0.9em;
        margin-left: 4.5vw;
        width: 100%;
        transform: translateY(-2.2em);
    }

    #nav-btn{
        z-index: 11;
        height: 4em;
        width: 4em;
        border-radius: 50%;
        border: 0.3em solid var(--denim);
        box-shadow: 0.05em 0.15em 0.5em rgba(0,0,0,0.3);
        margin: 15px 15px 0 0;
        overflow: hidden;
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
        background-image: var(--pearl);
    }

    .round{
        height: 0.5em;
        width: 0.5em;
        border-radius: 50%;
        background-color: var(--ink);
    }

    .nav-container{
        position: relative;
        height: 8em;
        width: 50vw;
        display: grid;
        grid-template-rows: 30% 1fr;
    }

    #nav-ctr-mbl{
        height: 100%;
        width: 8.3em;
        display: none;
        flex-direction: column;
        align-items: flex-end;
        background-image: linear-gradient(270deg, var(--linen) 10%, rgba(255,255,255,0));
    }

    .nav-array{
        z-index: 9;
        display: grid;
        grid-template-columns: 20% 16% 16% 16% 16% 16%;
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

    #nav-array-mbl .selected{
        transform: scale(0.5);
        opacity: 100%;
    }

    .nav{
        cursor: pointer;
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
        background-image: url(https://ipfs.fleek.co/ipfs/bafybeigkiyocbout26eshome3yvbq7pb2ybif5afsy6u4h56tidkidtvhi);
    }

    #nav-blog section{
        background-image: url(https://ipfs.fleek.co/ipfs/bafybeic7uxidilpwenka7pkc6ze3ubbtzt75geqbs62jhi4pxfaiaxqs3y);
    }

    #nav-galerie section{
        background-image: url(https://ipfs.fleek.co/ipfs/bafybeicbzg74h32pofcjhlldhfzr5eyuizxmvnizlfffoxnhkybatwu5bq);
    }

    #nav-journals section{
        background-image: url(https://ipfs.fleek.co/ipfs/bafybeiemaommpsincjhizl2ppv26rnbcgxavmrhvhjxr5wr5o6xetqhifm);
    }

    #nav-revues section{
        background-image: url(https://ipfs.fleek.co/ipfs/bafybeihnlbqpr3shznqunbsqh73quw2qwgltvlyftqnayzg3nvv36553xy);
    }

    #nav-andrea section{
        background-image: url(https://ipfs.fleek.co/ipfs/bafybeidfxeswhhjzirsa7pbjflifmd3knt6wy3cu5isxf2mrq7inzdhpl4);
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

    .nav-array div:nth-of-type(1):hover, .nav-array div:nth-of-type(1).selected{
        transform: rotateZ(5deg);
    }

    .nav-array div:nth-of-type(2):hover, .nav-array div:nth-of-type(2).selected{
        transform: rotateZ(-6deg);
    }

    .nav-array div:nth-of-type(3):hover, .nav-array div:nth-of-type(3).selected{
        transform: rotateZ(-3deg);
    }

    .nav-array div:nth-of-type(4):hover, .nav-array div:nth-of-type(4).selected{
        transform: rotateZ(6deg);
    }
    .nav-array div:nth-of-type(5):hover, .nav-array div:nth-of-type(5).selected{
        transform: rotateZ(-4deg);
    }

    .ribbon{
        position: relative;
        height: 100%;
        width: 100%;
    }

    /* .bow{
        position: absolute;
        height: 5em;
        width: 5em;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        background-color: var(--denim);
    } */

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

    @media (max-width: 600px) {
        .nav-container{
            display: none;
        }

        .tagline{
            margin-left: 13vw;
        }
    }

</style>