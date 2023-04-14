<script>
    import { fly } from 'svelte/transition'
	import Heading from './compo/Heading.svelte'
    import Blossom from './compo/art/Blossom.svelte'
    import CharmingButton from './compo/art/CharmingButton.svelte'

    // Page transition
    let visible = false
    let id1 = setInterval(loadPage, 300)
    function loadPage() {
        visible = true
        clearInterval(id1)
    }

    // Content transition
    let visibleC = false
    let delay = 0
    let id2 = setInterval(loadContent, 500)
    function loadContent() {
        if(delay==1){
            visibleC = true
            clearInterval(id2)
        }
        else
            delay++
    }
</script>

{#if visible}
<div class="about-ctr" in:fly="{{ x: -2000, duration: 800 }}" out:fly="{{ x: -200, duration: 800 }}">
    {#if !globalThis.isMobile}
        <Heading title={"ABOUT"} />
    {/if}

    {#if visibleC}
        <div id="about-ctr-inner" transition:fly="{{y:100, duration: 800}}">
            <div id="photo-sect" class="sect">
                <div class="photo-ctr">
                    <div id="fleur1"><Blossom /></div>
                    <div id="fleur2"><Blossom color={"#CDFF9B"} height={"3em"} width={"3em"}/></div>
                    <div id="fleur3"><Blossom color={"#6CA6B8"}/></div>
                    <div class="frame">
                        <div id="photo"></div>
                    </div>
                </div>
            </div>
            <div id="info-sect" class="sect">
                <div class="info-box">
                    <div class="info-box-inner">
                        <div class="primary-text">
                            <div class="griddy-grid">
                                <div id="bigH" class="greeting">H</div>
                                <div class="greeting">ello! </div>
                                <div class="info-row griddy-text"> 
                                    My name is Andrea. Welcome to my humble space!
                                </div>
                            </div>

                            <div class="info-row"> 
                                Once upon a time, there was a girl who loved to create so many things! 
                                Art, stories, poems, puzzles, ideas brought to life with her mighty pen and paper. 
                                But neither pen or paper can bring to life an insurmountable dream - to create the things she sees inside a computer. 
                                <br><br>
                                Touching code for the first time, it was <b>not</b> love at first byte. Unable to grasp basic loops and conditionals, she quit a workshop on Python, disheartened.
                                "Can girls' brains understand programming?", she asked her instructor on a jeepney ride. "Some understand it faster than others", he thoughtfully replied. She took that moment to believe. Until.. 
                                <br><br>
                                she learned that code is just like art. It is constructive and creative, fun and fulfilling. It feels like home.
                            </div>

                            <div class="info-row"> 
                                Now, the sky is the limit for this young lady's passion and flame. One such dragon exists that begot this cave, but let's just call her, the <b>CasuallyDev</b> 🤫
                            </div>

                            <div class="info-row logos">
                                <img src="https://ipfs.io/ipfs/bafybeibmpke7psgzgwmdo32imsyzryj3ep6l2oykjzkquhg5sq47ovp7ya" alt="University of Manitoba">
                            </div>

                            <div class="info-row"> 
                                <ul>
                                    <li>CasuallyDev is a graduate of this school called University of Manitoba</li>
                                    <li>CasuallyDev loves to sing. She loves to read the Bible. She is a Christian and her life verse is Psalms 37:4. She has about 4000 KJV verses memorized by heart</li>
                                    <li>CasuallyDev is a Starbucks regular and has tasted all the drinks on the menu, including poisonous ones. She will warn you away from cursed concoctions</li>
                                    <li>Once upon a time, CasuallyDev is immature and lived off other's validation for her performance and persistence in the tech field. She is sorry for all the friends she hurt. If you have been hurt, she wants you to recover and wishes you the best 🌹</li>
                                </ul>
                            </div>

                            <div class="info-row"> 
                                <b><i>Relay a message to CasuallyDev</i></b>
                                <br>
                                Or Andrea, whichever you find comfy 🤎 Shoot me a chat through
                                <a href="https://www.linkedin.com/in/aabellera/"> LinkedIn </a> 
                                or email me at <a href="mailto:casuallyandrea@pm.me"><i>casuallyandrea@pm.me</i></a>
                            </div>
                        </div>
                        <!-- <div class="action-btns">
                            <a href="/intermission">
                                <CharmingButton text={"VIEW MY 🚲 PORTFOLIO"} />
                            </a>
                            <div id="resume" class="action-btn"> 
                                or <a href="https://ipfs.io/ipfs/bafybeih7ptrsrmnnceicfgdw73rq6shukib7owrsuz52wlrfrscqc57fzu"> Download my Résumé</a>
                            </div>
                        </div> -->
                        <div class="for-fun">
                            <div id="stamp-collection"></div>
                            <div id="drink-tier-list"></div>
                            <div id="stone-bridges"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    {/if}
</div>
{/if}

<style>
    .about-ctr {
        height: max-content;
        width: 100%;
        display: grid;
        grid-template-rows: auto 1fr;
        margin: -8vh 0 10vh 0;
    }

    #about-ctr-inner{
        display: grid;
        grid-template-columns: 50% 40%;
        position: relative;
    }

    .sect{
        display: grid;
        justify-items: center;
    }

    .photo-ctr{
        position: relative;
        width: 70%;
        height: 100%;
    }

    .info-box{
        height: max-content;
        width: 90%;
        color: var(--ink);
        background-color: var(--bark);
        box-shadow: 0.05em 0.15em 0.5em rgba(0,0,0,0.3);
        display: grid;
        justify-items: center;
        align-items: center;
        font-size: 1.1em;
        font-family: 'Taviraj', serif;
        margin-top: -3vh;
    }

    .info-box-inner{
        display:flex;
        flex-direction: column;
        height: auto;
        width: 80%;
        margin: 8vh 0 6vh 0;
        align-items: center;
    }

    #photo{
        background-image: url(https://ipfs.io/ipfs/bafybeifj2pisu4kore77t6krkqrd5yqqh2rrkbznfnksdnsmhd7eyqjvyu);
        background-size: cover;
        background-position: bottom;
        background-repeat: no-repeat;
        height: 93%;
        width: 90%;
    }

    #fleur1{
        position: absolute;
        z-index: 5;
        top: -2em;
        left: 20%;
    }

    #fleur2{
        position: absolute;
        z-index: 4;
        top: -2.75em;
        left: 30%;
    }

    #fleur3{
        position: absolute;
        z-index: 5;
        top: 30em;
        left: 65%;
    }

    .frame{
        position: absolute;
        z-index: 3;
        transform: translateX(-50%);
        left: 50%;
        display: grid;
        justify-items: center;
        align-items: center;
        width: 22em;
        height: 32em;
        background-color: var(--bark);
        box-shadow: 0.05em 0.15em 0.5em rgba(0,0,0,0.3);
    }

    #bigH{
        font-size: 7.5em;
        margin-top: -0.2em;
        grid-row: 1/3;
        grid-column: 1/2;
    }

    .greeting{
        font-family: 'Lancelot', cursive;
        font-size: 3em;
        margin-top: 1.5vh;
        color: var(--coffee);
    }

    .griddy-grid{
        display: grid;
        grid-template-columns: auto 1fr;
        grid-template-rows: auto auto;
    }

    .info-row{
        width: 100%;
        text-align: left;
        margin-bottom: 5vh;
    }

    .logos{
        display: flex;
        justify-content: center;
    }

    .logos img{
        height: 30%;
        width: 30%;
    }

    img:hover{
        animation: up 0.8s ease-out;
        cursor: url(https://ipfs.io/ipfs/bafybeicuryldiwjiv5qynwnswb6qxv2lujyxvcv3oodzrbegtq247jubvm), pointer;
    }

    .frame:hover{
        animation: upFrame 0.9s ease-out;
        cursor: url(https://ipfs.io/ipfs/bafybeicuryldiwjiv5qynwnswb6qxv2lujyxvcv3oodzrbegtq247jubvm), pointer;
    }

    /*.action-btns{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .action-btn{
        padding: 3vh 2vw 3vh 2vw;
        width: 100%;
    }*/

    /* #tour{
        border: 4px double var(--bark);
        background-color: var(--oyster);
    } */

    @keyframes up{
        0%{
            transform: translateY(0);
        }
        100%{
            transform: translateY(-0.6em);
        }
    }

    @keyframes upFrame{
        0%{
            transform: translate(-50%, 0);
        }
        40%{
            transform: translate(-50%, -0.6em);
        }
        100%{
            transform: translate(-50%, 0);
        }
    }

    @media screen and (max-width: 800px){
        #about-ctr-inner{
            grid-template-columns: 1fr;
            grid-template-rows: 88vh auto;
        }

        #bigH{
            font-size: 5.5em;
            grid-row: 1/2;
            grid-column: 1/2;
        }

        .griddy-text{
            grid-row: 2/3;
            grid-column: 1/3;
        }

        #info-sect{
            margin-top: 12vh;
        }

        .info-box{
            color: black;
            width: 100%;
            margin-top: -7vh;
        }

        .info-box-inner{
            width: 90%;
        }

        .info-row{
            margin-bottom: 8vh;
        }

        .logos img{
            height: 60%;
            width: 60%;
        }

        #fleur1{
            top: -2em;
            left: -15%;
        }

        #fleur2{
            position: absolute;
            z-index: 4;
            top: -2.75em;
            left: 15%;
        }

        #fleur3{
            position: absolute;
            z-index: 5;
            top: 30em;
            left: 87%;
        }
    }
</style>

