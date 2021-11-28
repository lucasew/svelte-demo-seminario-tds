<script context="module">
    export async function load({fetch}) {
        return {
            props: {
                output: await (await fetch('cmd.json')).text()
            } 
        }
    }

</script>
<script>
    export let output = "";
</script>

{#each output.split('\n') as line}
<p>{line}</p>
{/each}