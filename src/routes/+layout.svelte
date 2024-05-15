<script>
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';
	import '../app.css';
	import global from '../global.css';
  </script>
  
  <svelte:head>
	<title>SyrBest - Movie DB</title>
  </svelte:head>
  
  <Nav />
  
  <slot/>
  
  <Footer />
  