import { error } from '@sveltejs/kit';
const apiKey = import.meta.env.VITE_API_KEY;

/** @type {import('./$types').PageLoad} */

export async function load({ params }) {
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
