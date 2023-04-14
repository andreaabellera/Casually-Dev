<script>
    import { fly } from 'svelte/transition'
    import Heading from './compo/Heading.svelte'
    import BentoBox from './compo/BentoBox.svelte'

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

    let sampalCode = `
<div style="background-color: beige;"> \n
    Look at me I'm a text \n
</div>`

    let htmlCode = `
<div class="blossom">
  <div class="mid"></div>
</div>`

    let cssCode = `
.blossom{
  height: 20ex;
  width: 20ex;
  position: relative;

  /* Visual guide */
  background-color: white;
  border: 1px solid black;
  border-radius: 50%;
}

.mid{
  /* Defines the square */
  background-color: lightsteelblue;
  height: 30%;
  width: 30%;
  position: absolute;
  z-index: 2;
  
  /* Centers the square */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}`

</script>

{#if visible}
<div class="testlab-feat-ctr" in:fly="{{ x: -2000, duration: 800 }}" out:fly="{{ x: -200, duration: 800 }}">
    {#if !globalThis.isMobile}
        <Heading title={"TESTLAB"} />
    {/if}

    {#if visibleC}
        <div class="testlab-inner" transition:fly="{{y:100, duration: 800}}">
            <BentoBox 
                art = "swiss" 
                htmlCode = {htmlCode}
                cssCode = {cssCode}
            />
        </div>
    {/if}
</div>
{/if}

<style>
    .testlab-feat-ctr {
        height: max-content;
        width: 100%;
        display: grid;
        grid-template-rows: auto 1fr;
        margin: -8vh 0 10vh 0;
    }

    .testlab-inner {
        display: grid;
        width: 100%;
        align-items: center;
        justify-items: center;
        margin-top: -2vh;
        margin-bottom: 5vh;
    }
</style>
