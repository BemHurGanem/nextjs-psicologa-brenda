import Head from 'next/head'
import styles from '../styles/Home.module.css'
import "tailwindcss/tailwind.css";
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
  return (
    <div className="w-screen antialiased">
      <Head>
        <title>Brenda Fernanda - Psicóloga</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <header className="lg:px-16 px-6 bg-transparent flex flex-wrap items-center fixed py-2 w-full z-10">
        <div className="flex-1 flex justify-between items-center">
          <a href="">
            <Image src="/images/logo.png" className="header-logo" width={70} height={70} priority={true} />
          </a>

          {/* <label htmlFor="menu-toggle" className="pointer-cursor lg:hidden block"><svg className="fill-current text-gray-900"
          xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
          <title>menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg></label> */}
          <input className="hidden" type="checkbox" id="menu-toggle" />

          <div className="flex items-center justify-end lg:w-auto w-full" id="menu">
            <nav>
              <ul
                className="nav-items flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0 font-bold">
                <li><a className="nav-link lg:p-4 py-3 px-0 hidden md:block border-b-2 border-transparent mx-2"
                  href="#">Sobre mim</a></li>
                <li><a className="nav-link lg:p-4 py-3 px-0 block border-b-2 border-transparent mx-3 "
                  href="#">Serviços</a></li>
                {/* <li> */}
                {/* <a className="nav-link flex lg:p-4 py-3 px-0 block border-b-2 border-transparent  lg:mb-0 mb-2" */}
                {/* href="#"><FontAwesomeIcon icon={faPhoneAlt} size="sm" /> (77) 991653808</a></li> */}
                <li>
                  <a className="cta flex font-normal  py-2 px-5  block border-b-2 border-transparent bg-complementary rounded-full "
                    href="#"><FontAwesomeIcon icon={faWhatsapp} size="sm" /> Whatsapp</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>


      </header>


      <section id="hero" className="w-full bg-white flex antialiased">
        <div className="w-full md:w-3/5 relative h-full flex hero-info">
          <div className=" h-auto my-auto md:mx-auto z-10">
            <div className=" font-extrabold hero-title-margin">
              <h1 className=" hero-subtitle  color-primary inline">Olá! Sou </h1>
              <h1 className=" hero-subtitle  color-complementary inline">Brenda Fernanda </h1>
              <h1 className=" hero-subtitle color-primary md:inline ">e trabalho com</h1>
              <h1 className=" color-primary mt-4 xm:mt-9 hero-title">Psicoterapia para</h1>
              <h1 className=" color-complementary mt-1 md:inline hero-title">Crianças e </h1>
              <h1 className=" color-complementary mt-1 md:inline hero-title">Adolescentes</h1>
            </div>
            <div className="text-base xl:text-xl mt-9 xm:mt-12">
              <button className="cta bg-complementary rounded-full  px-6 py-3 hero-title-margin">
                Entre em contato
              </button>
            </div>
          </div>
          <div className="hero-img-container-mobile">
            <div className=" flex md:hidden z">
              <Image src="/images/brenda-mobile.png" className="hero-img-mobile" alt="Brenda Fernanda" width={317} height={618} priority={true} quality={100} />
            </div>
          </div>


        </div>
        <div className="w-0 md:w-2/5 h-full flex pink-background">
          <div className="w-full items-end hidden md:flex">
            <div className="mx-auto hero-img-container flex">
              <Image src="/images/brenda.png" className="hero-img" alt="Brenda Fernanda" width={317} height={618} priority={true} quality={100} />
            </div>
          </div>
        </div>

      </section>



    </div>
  )
}
