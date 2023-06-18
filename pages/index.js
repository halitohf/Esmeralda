import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

export default function FirstPost() {
    return (
        <>
        <Head>
            <title>Inicio Pagina </title>
            <link rel="icon" href='/images/Esme.png'/>
        </Head>
        <h1 className='title'>
          Bby <Link href="/posts/first-post">I love You 💘</Link></h1>
    <div>
      <Image
        src="/images/Dan.jpg"
        width={300}
        height={500}
        alt="Imagen"
      />
    </div>
        </>
    );
}