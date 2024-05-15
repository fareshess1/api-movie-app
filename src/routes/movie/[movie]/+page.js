import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */

export async function load({ params }) {
	const apiKey = 'de7ea56acd96105cf1da010ced0122ec';
	let api = `
          https://api.themoviedb.org/3/movie/${params.movie}?api_key=${apiKey}&language=en-US
            `;
	const res = await fetch(api);
	const data = await res.json();
	if (res.ok) {
		return data;
	}
	throw error(404, 'Not found');
}
