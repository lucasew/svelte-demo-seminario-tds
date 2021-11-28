<script lang="ts">
    let cat: Promise<string> = getCat();
    async function getCat() {
        const c = await fetch("https://api.thecatapi.com/v1/images/search")
        const data = await c.json()
        return data[0].url
    }
</script>

{#await cat}
    <p>Carregando uma surpresa...</p>
{:then url}
    <img alt="miau" src={url} />
{:catch e}
    <p color='red'>Surpresa falhou: {e.message || e}</p>
{/await}


