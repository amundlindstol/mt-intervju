<script lang="ts">
	let result: JSON

	const submit = async (event: Event) => {
		const form = event.target as HTMLFormElement
		const data = new FormData(form)

		result = await fetch('/solution', {
			method: 'POST',
			body: data
		}).then(r => r.json())
	}
</script>

<form method="POST" on:submit|preventDefault={submit}>
	<label for="text">Find words in text</label>
	<textarea id="text" name="text"/>

	<label for="number">Find words with length</label>
	<input id="number" name="number">

	<button type="submit">Submit</button>
</form>

{#if result}
	<div role="alert" aria-labelledby="result">
		<h2 id="result">Result</h2>
		<pre>{JSON.stringify(result, null, 2)}</pre>
	</div>
{/if}