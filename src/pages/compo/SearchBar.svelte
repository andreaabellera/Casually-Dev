<script>
    import { createEventDispatcher } from 'svelte';

    export let placeholder = "Search.."
    let theDrink = ''

    const dispatch = createEventDispatcher()
	function drinkInput() {
		dispatch('drinkInput', { text: theDrink })
	}
</script>

<div id="search-ctr" role="region" aria-label="Search drinks">
    <input 
        type="text" 
        id="input" 
        placeholder={placeholder}
        bind:value={theDrink} 
        on:keyup={drinkInput}
        aria-label="Type keywords to dynamically filter drink review displays"
    >
</div>

<style>
    #search-ctr{
        width: 25em;
        border-radius: 0.5em;
        background-color: var(--oyster);
        box-shadow: inset 0.05em 0.1em 0.3em rgba(0,0,0,0.3);
        display: grid;
        justify-items: center;
        margin: 0 0 3vh 6vw;
    }

    input{
        padding: 3vh 0 3vh 0;
        width: 85%;
        text-align: left;
        color: rgb(132,121,121);
        background-color: rgba(0,0,0,0);
        border: 0;
        font-size: 1.9em;
        font-family: 'Cousine', serif;
    }

    input::placeholder{
        font-family: 'La Belle Aurore', cursive;
        opacity: 0.6;
    }

    input:focus{
        outline: none;
    }

    @media (max-width: 700px) {
        #search-ctr{
            width: 85vw;
        }

        input{
            font-size: 1.5em;
        }
    }


</style>