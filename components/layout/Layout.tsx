import Head from "next/head"
import { NavBar } from "../ui";

interface Props {
    children: JSX.Element | JSX.Element[];
    title?: string;
    pokemon?: string;
}

const origin = (typeof window === 'undefined') ? '': window.location.origin

export const Layout = ({children, title, pokemon}: Props) => {
  
  

  return (
    <>
    <Head>
        <title>{title ? title :' Pokemon App'}</title>
        <meta name='author' content='Hector Rodriguez' />
        <meta name="description" content={`Informacion sobre Pokemon ${title}`} />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
        <meta property="og:title" content={`Informacion sobre el pokemon ${title}`} />
        <meta property="og:description" content={`Pagina sobre ${title}`} />
        <meta property="og:image" content={`${origin}/images/banner.png`} />
    </Head>
    {/**Navbar */}
    <NavBar/>

    <main style={{
        padding: '0px 20px'
    }}>
        {children}
    </main>
    </>
  )
}
