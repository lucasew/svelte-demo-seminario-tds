<script lang="ts">
    let node: HTMLElement;
    let color = 'red';
    $: console.log(node);
    $: node && (node.style.backgroundColor = color);
</script>

<h1 bind:this={node}>Hello, world</h1>
<input bind:value={color}>

