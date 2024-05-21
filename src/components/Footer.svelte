<footer class="bg-white text-gray-800 py-4 bottom-0 left-0 right-0 w-full">
	<div
		class="container mx-auto text-center flex flex-col justify-center items-center space-y-2 px-4"
	>
		<div class="flex flex-wrap items-center justify-center space-x-2">
			<span class="flex items-center space-x-1">
				Created with&nbsp;
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="w-6 h-6 fill-red-500"
				>
					<path
						d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z"
					/>
				</svg>
				&nbsp;by Fares Aboud Heswani -
			</span>
			<a
				href="https://www.linkedin.com/in/fares-aboud-heswani-479640227/"
				target="_blank"
				class="text-blue-400 flex items-center space-x-1 hover:text-blue-600"
			>
				<span>LinkedIn</span>
				<button
					class="w-10 h-10 flex items-center relative overflow-hidden justify-center rounded-full bg-white shadow-md shadow-gray-200 group transition-all duration-300"
				>
					<svg
						class="fill-gray-900 relative z-10 transition-all duration-300 group-hover:fill-white"
						xmlns="http://www.w3.org/2000/svg"
						width="28"
						height="28"
						viewBox="0 0 72 72"
						fill="none"
					>
						<path
							d="M24.7612 55.999V28.3354H15.5433V55.999H24.7621H24.7612ZM20.1542 24.5591C23.3679 24.5591 25.3687 22.4348 25.3687 19.7801C25.3086 17.065 23.3679 15 20.2153 15C17.0605 15 15 17.065 15 19.7799C15 22.4346 17.0001 24.5588 20.0938 24.5588H20.1534L20.1542 24.5591ZM29.8633 55.999H39.0805V40.5521C39.0805 39.7264 39.1406 38.8985 39.3841 38.3088C40.0502 36.6562 41.5668 34.9455 44.1138 34.9455C47.4484 34.9455 48.7831 37.4821 48.7831 41.2014V55.999H58V40.1376C58 31.6408 53.4532 27.6869 47.3887 27.6869C42.4167 27.6869 40.233 30.4589 39.0198 32.347H39.0812V28.3364H29.8638C29.9841 30.9316 29.8631 56 29.8631 56L29.8633 55.999Z"
							fill=""
						/>
					</svg>
					<div
						class="absolute top-full left-0 w-full h-full rounded-full bg-[#006699] z-0 transition-all duration-500 group-hover:top-0"
					/>
				</button>
			</a>
		</div>
		<hr class="w-full border-gray-600 my-4" />
		<div class="flex flex-col items-center space-y-2">
			<p>
				Web Development 2 by Prof. <a
					href="https://www.linkedin.com/in/laborci/"
					target="_blank"
					class="text-blue-400 hover:text-blue-600">Gergely Laborci</a
				>
			</p>
		</div>
	</div>
</footer>

<style>
	.hover-effect {
		color: inherit;
		text-decoration: none;
		transition: color 0.3s ease;
	}

	.hover-effect:hover {
		color: #007bff;
	}

	.movie-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		padding: 10px;
		border: 1px solid #ddd;
		border-radius: 8px;
		transition: transform 0.3s ease;
	}

	.movie-card:hover {
		transform: scale(1.05);
	}

	.movie-image {
		width: 100%;
		height: auto;
		border-radius: 8px;
	}

	.movie-title {
		margin-top: 10px;
		font-size: 1.2em;
		color: #333;
	}

	@media (max-width: 600px) {
		.container {
			padding: 0 10px;
		}

		.flex {
			flex-direction: column;
			align-items: center;
		}

		.space-x-2 {
			margin-bottom: 10px;
		}

		.hover-effect {
			text-align: center;
		}
	}
</style>
