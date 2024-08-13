<script lang="ts">
	let result: JSON

	const submit = async (event: Event) => {
		const form = event.target as HTMLFormElement
		const data = new FormData(form)

		result = await fetch('/', {
			method: 'POST',
			body: data
		}).then(r => r.json())
	}
</script>

<form method="POST" on:submit|preventDefault={submit}>
	<div>
		<textarea name="text" placeholder="text"/>
	</div>
	<div>
		<input name="number" placeholder="number">
	</div>
	<div>
		<button type="submit">Submit</button>
	</div>
</form>

{#if result}
	<p>Result</p>
	<pre>{JSON.stringify(result, null, 2)}</pre>
{/if}