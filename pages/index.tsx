import Head from 'next/head'
import "tailwindcss/tailwind.css";
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import React, { useEffect, useState } from 'react';
import { ServiceCard } from '../components/ServiceCard';
import Instagram from "instagram-web-api"
import { InstagramFeed } from '../components/InstagramFeed';


export async function getStaticProps(context) {
  const client = new Instagram({
    username: process.env.IG_LOGIN,
    password: process.env.IG_PASS,
  })
  let posts = []
  console.log(process.env.IG_LOGIN);
  console.log(process.env.IG_USERNAME);
  try {
    await client.login()
    // request photos for a specific instagram user
    const instagram = await client.getPhotosByUsername({
      username: process.env.IG_USERNAME,
      first: 3
    })
    if (instagram["user"]["edge_owner_to_timeline_media"]["count"] > 0) {
      // if we receive timeline data back
      //  update the posts to be equal
      // to the edges that were returned from the instagram API response
      posts = instagram["user"]["edge_owner_to_timeline_media"]["edges"]
    }
  } catch (err) {
    console.log(
      "Something went wrong while fetching content from Instagram",
      err
    )
  }
  return {
    props: {
      instagramPosts: posts, // returns either [] or the edges returned from the Instagram API based on the response from the `getPhotosByUsername` API call
    },
    revalidate: 86400
  }
}


export default function Home({ instagramPosts }) {

  const [navbarClass, setNavbarClass] = useState(false);
  // console.log(instagramPosts)
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
                  href="#about">Sobre mim</a></li>
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
              <Image src="/images/brenda-mobile.png" className="presentation-img-mobile" alt="Brenda Fernanda" width={317} height={618} priority={false} quality={100} />
            </div>
          </div>

        </div>
        <div className="w-0 md:w-2/5 h-full flex pink-background">
          <div className="w-full items-end hidden md:flex">
            <div className="mx-auto presentation-img-container flex">
              <Image src="/images/brenda.png" className="presentation-img" alt="Brenda Fernanda" width={317} height={618} priority={false} quality={100} loading="eager" />
            </div>
          </div>
        </div>

      </section>

      <section id="services" className="w-full flex antialiased flex flex-col  items-center justify-center py-8 xm:py-10 my:pd-12 lg:py-20">

        <div className="w-full mb-4 md:mb-16 text-center  items-center justify-center flex">
          <span className="colored-line mr-3"></span>
          <h4 className="section-title font-extrabold color-primary"> Meus Serviços</h4>
          <span className="colored-line ml-3"></span>
        </div>


        <div className="w-11/12 lg:w-9/12  xxl:w-3/5 grid grid-cols-1 md:grid-cols-3 gap-8 service-grid font-medium color-primary mb-3 md:mb-20">

          <ServiceCard title_1={'Atendimento'} title_2={'Presencial'} image="/images/services/atendimento-presencial.png" imageAlt="Psicóloga atendendo uma criança">
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

          <ServiceCard title_1={'Atendimento'} title_2={'Online'} image="/images/services/atendimento-online.png" imageAlt="Chamada de vídeo">
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

          <ServiceCard title_1={'Atendimento'} title_2={'Social'} image="/images/services/atendimento-social.png" imageAlt="Duas pessoas conversando sentadas">
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


      <section id="about" className="w-full flex antialiased flex items-center justify-center py-8 xm:py-10 my:pd-12 lg:py-16 px-4">
        <div className="w-11/12 lg:w-9/12 xxl:w-3/5 flex">
          <div className="hidden md:flex w-2/6 items-center justify-center mr-6">
            <Image src="/images/about/brenda.png" alt="Rosto de Brenda"
              className=" w-full h-auto" width={342} height={319} quality="100"></Image>
          </div>
          <div className="flex flex-col w-full md:w-4/6 ">

            <div className="flex">
              <div className="flex md:hidden w-2/6 items-center justify-center">
                <Image src="/images/about/brenda.png" alt="Rosto de Brenda"
                  className="w-full h-auto" width={342} height={319} quality="100"></Image>
              </div>
              <div className="flex w-4/6 md:w-full items-center ml-2 md:ml-0">
                <h4 className="section-title font-extrabold color-primary">Sobre mim</h4>
              </div>

            </div>

            <div className="font-medium mt-6 text-lg">
              <p>Me chamo Brenda Fernanda, sou Psicóloga Clínica (CRP 03/21079), graduada pela Universidade Federal de Sergipe (UFS) e Mestre em Psicologia pela mesma instituição.
             </p>
              <p className=" mt-6">
                Atualmente faço formação em Gestalt-Terapia Infantojuvenil, e meu principal objetivo enquanto psicoterapeuta é promover saúde para crianças e adolescentes!
              </p>
            </div>
          </div>
        </div>

      </section>

      <section id="instagramfeed" className="w-full flex antialiased flex flex-col items-center justify-center py-8 xm:py-10 md:pd-12 lg:py-16 xxl:py-28 px-4">
        <InstagramFeed instagramPosts={instagramPosts} ></InstagramFeed>
      </section>
    </div>
  )
}