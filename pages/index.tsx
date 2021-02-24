import Head from 'next/head'
import "tailwindcss/tailwind.css";
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import React, { useEffect, useState } from 'react';
import { ServiceCard } from '../components/ServiceCard';

export default function Home() {

  const [navbarClass, setNavbarClass] = useState(false);

  useEffect(function onFirstMount() {
    function changeNavBarOnScroll() {
      setNavbarClass(window.scrollY >= 80);
    }

    window.addEventListener("scroll", changeNavBarOnScroll);

    return () => {
      window.removeEventListener("scroll", changeNavBarOnScroll);
    }
  }, []);

  return (
    <div className="w-screen antialiased">
      <Head>
        <title>Brenda Fernanda - Psicóloga</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <header className={(navbarClass ? 'active' : '') + ' navbar lg:px-16 px-6 flex flex-wrap items-center fixed w-full z-50'}>
        <div className="flex-1 flex justify-between items-center">
          <a href="">
            <Image src="/images/logo.png" className="header-logo" width={70} height={70} priority={true} />
          </a>
          <input className="hidden" type="checkbox" id="menu-toggle" />

          <div className="flex items-center justify-end lg:w-auto w-full my-auto" id="menu">
            <nav>
              <ul
                className="nav-items flex items-center justify-between text-base text-gray-700  font-bold">
                <li><a className="nav-link lg:p-4 py-3 px-0 hidden md:block border-b-2 border-transparent mx-2"
                  href="#">Sobre mim</a></li>
                <li><a className="nav-link lg:p-4 py-3 px-0 block border-b-2 border-transparent mx-3 "
                  href="#services">Serviços</a></li>
                <li>
                  <a className="cta flex font-normal  py-3 px-5  block border-b-2 border-transparent bg-complementary rounded-full "
                    href="#"><FontAwesomeIcon icon={faWhatsapp} size="sm" /> Whatsapp</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>


      <section id="presentation" className="w-full flex antialiased">
        <div className="w-full md:w-3/5 relative h-full flex presentation-text">
          <div className=" h-auto my-auto md:mx-auto z-10">
            <div className=" font-extrabold presentation-text-margin">
              <h1 className=" presentation-subtitle  color-primary inline">Olá! Sou </h1>
              <h1 className=" presentation-subtitle  color-complementary inline">Brenda Fernanda </h1>
              <h1 className=" presentation-subtitle color-primary md:inline ">e trabalho com</h1>
              <h1 className=" color-primary mt-4 xm:mt-9 presentation-title">Psicoterapia para</h1>
              <h1 className=" color-complementary mt-1 md:inline presentation-title">Crianças e </h1>
              <h1 className=" color-complementary mt-1 md:inline presentation-title">Adolescentes</h1>
            </div>
            <div className="text-base xl:text-xl mt-9 xm:mt-12">
              <button className="cta bg-complementary rounded-full  px-6 py-3 presentation-text-margin">
                Entre em contato
              </button>
            </div>
          </div>
          <div className="presentation-img-container-mobile">
            <div className=" flex md:hidden z">
              <Image src="/images/brenda-mobile.png" className="presentation-img-mobile" alt="Brenda Fernanda" width={317} height={618} priority={true} quality={100} />
            </div>
          </div>

        </div>
        <div className="w-0 md:w-2/5 h-full flex pink-background">
          <div className="w-full items-end hidden md:flex">
            <div className="mx-auto presentation-img-container flex">
              <Image src="/images/brenda.png" className="presentation-img" alt="Brenda Fernanda" width={317} height={618} priority={true} quality={100} />
            </div>
          </div>
        </div>

      </section>

      <section id="services" className="w-full flex antialiased flex flex-col  items-center justify-center my-8 xm:my-10 my:md-12 lg:my-20">

        <div className="w-full mb-4 md:mb-16 text-center  items-center justify-center flex">
          <span className="colored-line mr-3"></span>
          <h4 className="section-title font-extrabold color-primary"> Meus Serviços</h4>
          <span className="colored-line ml-3"></span>
        </div>


        <div className="w-11/12 lg:w-9/12  xxl:w-3/5 grid grid-cols-1 md:grid-cols-3 gap-8 service-grid font-medium color-primary mb-3 md:mb-20">

          <ServiceCard title={'Atendimento\nPresencial'} image="/images/services/atendimento-presencial.png">
            <p className=" mt-9">
              Atendimento psicoterápico presencial para crianças e adolescentes, visa a restaurar a saúde mental e promover desenvolvimento saudável.
            </p>
            <div className=" mt-6">
              <p className="inline">
                Atendimentos em&nbsp;
              </p>
              <p className="inline font-bold color-complementary">
                Vitória da Conquista - BA.
               </p>
            </div>
          </ServiceCard>

          <ServiceCard title={'Atendimento\nOnline'} image="/images/services/atendimento-online.png">
            <div className=" mt-9">
              <p className="inline">
                Realizado via celular ou computador, não há necessidade de deslocamento. Atendimento a&nbsp;
            </p>
              <p className="inline font-bold color-complementary">
                crianças, adolescentes e adultos.
            </p>
            </div>
            <p className=" mt-6">
              Pode ser feito com pessoas de todo o Brasil!
            </p>
          </ServiceCard>

          <ServiceCard title={'Atendimento\nSocial'} image="/images/services/atendimento-social.png">
          <p className=" mt-9">
              Visa atender pessoas com renda mais baixa que não podem pagar o valor completo da sessão. Pode ser no formato presencial ou online.
              </p>
            <div className=" mt-6">
              <p className="inline">
                Necessário comprovar renda.
            </p>
            </div>
          </ServiceCard>

        </div>


      </section>
    </div>
  )
}
