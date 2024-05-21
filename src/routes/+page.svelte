<script>
	import { onMount } from 'svelte';
	import PopularMovies from '../components/PopularMovies.svelte';
	import { apiData } from '../components/stores';
	import SearchMovies from '../components/SearchMovies.svelte';
	import { fly } from 'svelte/transition';
	const apiKey = import.meta.env.VITE_API_KEY;

	onMount(async () => {
		let api = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
		fetch(api)
			.then((response) => response.json())
			.then((data) => {
				//log the fetched data on the console
				//console.log(data)
				apiData.set(data.results);
			})
			.catch((error) => {
				console.log(error);
				return [];
			});
	});
</script>

<section
	data-theme="dark"
	in:fly={{ y: 50, duration: 500, delay: 500 }}
	out:fly={{ y: 50, duration: 500 }}
>
	<PopularMovies listMovies={$apiData} />
</section>
