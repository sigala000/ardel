// pages/_app.js
import '../styles/globals.css'; // Ajoutez le chemin vers votre fichier CSS global

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
