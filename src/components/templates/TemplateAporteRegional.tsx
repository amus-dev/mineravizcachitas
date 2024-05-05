import { getDataPage } from '@/api/page'
import IconReporte from '@/assets/icons/icon-report.svg'
import IconGraph from '@/assets/icons/icon-graph.svg'
import IconPeople from '@/assets/icons/icon-people.svg'
import IconPrice from '@/assets/icons/icon-price.svg'
import IconHouse from '@/assets/icons/icon-house.svg'
import VideoMP4 from '@/assets/videos/aporte.mp4'
import VideoWebm from '@/assets/videos/aporte.webm'
import BackToTop from '@/components/molecules/BackToTop'
import BtnScrollDown from '@/components/molecules/BtnScrollDown'
import ScrollToTop from '@/components/molecules/ScrollTop'
import VideoBanner from '@/components/molecules/VideoBanner'
import Beneficios from '@/components/organism/Aporte/Beneficios'
import Footer from '@/components/organism/Footer'
import Navbar from '@/components/organism/MenuNav'
import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'

const TemplateAporteRegional = () => {
  const [dataAporte, setDataAporte] = useState(null)

  useEffect(() => {
    const fetchAporteRegional = async () => {
      const result = await getDataPage('aporte-regional')
      setDataAporte(result[0].acf)
    }
    fetchAporteRegional()
  }, [])

  return (
    <>
      <Helmet>
        <title>
          Aporte Regional de Minera Vizcachitas: Impulsando el Desarrollo Local
        </title>
        <meta
          name="description"
          content="Descubre el impacto positivo de Minera Vizcachitas en la región, fomentando el desarrollo local a través de empleo, educación y proyectos comunitarios."
        />
      </Helmet>
      <ScrollToTop />
      <Navbar />
      <main>
        <VideoBanner
          videoMP4={VideoMP4}
          videoWEBM={VideoWebm}
          poster={`${
            import.meta.env.BASE_URL
          }/assets/images/posters/poster-video-aporte-desktop.webp`}
          bgMobile={`${
            import.meta.env.BASE_URL
          }/assets/images/posters/poster-video-aporte-mobile.webp`}
          title={
            <h1 className="w-full text-center text-5xl font-bold text-white lg:w-1/2 lg:text-balance lg:text-end lg:text-6xl">
              Proyecto Vizcachitas
              <span className="text-[#E8732C]"> Aporte regional</span>
            </h1>
          }
          description="Un potente impulso económico para la Región Valparaíso, a través de la generación de empleos, oportunidades para proveedores y encadenamientos productivos, y desarrollo de proyectos de responsabilidad social empresarial."
          list={false}
        />
        <section
          id="aporte"
          className="relative flex flex-col items-center bg-[#F0EFEF] px-10 pb-10 pt-20 lg:px-20"
        >
          <BtnScrollDown section="aporte" />
          <h2 className="text-center text-4xl lg:text-5xl font-bold text-black">
            ¿Por qué el proyecto es <br aria-hidden />
            <span className="text-[#E8732C]">un aporte a la región?</span>
          </h2>
          <div className="my-8 flex flex-col lg:flex-row max-w-2xl items-start lg:items-center justify-center lg:border-t border-[#009145]">
            <img
              className="size-20 lg:size-36 lg:p-6 lg:block"
              src={IconReporte}
              alt="Icono para aporte regional"
            />
            <p className="relative text-md text-pretty border-[#009145] p-1 lg:p-6 text-black lg:border-l lg:after:content-[''] after:absolute lg:after:h-[10px] lg:after:w-[10px] after:bottom-0 after:bg-[#009145] after:rounded-full after:-left-[5px]">
              El proyecto Vizcachitas generará un aumento de más del 3% en el
              PIB de la Región de Valparaíso, crecimiento que, además, será
              sostenible y con capacidad de generar prosperidad y oportunidades
              en el corto, mediano y largo plazo.
            </p>
          </div>
          <div className="block relative lg:mr-28">
            <div className="flex flex-col lg:flex-row items-start justify-center gap-1 lg:gap-8 mb-5">
              <img
                className="size-20 lg:block"
                src={IconGraph}
                alt="Icono para aporte regional"
              />
              <div>
                <p className="text-md text-pretty border-[#009145] p-1 lg:p-3 text-black border-b max-w-lg">
                  La rentabilidad social que generará el proyecto en la región
                  es{' '}
                  <strong className="text-[#E8732C]">
                    2,31 veces superior a la inversión privada (cerca de US$
                    6.400 millones).
                  </strong>
                </p>
                <div className="relative after:content-[''] after:absolute after:h-[10px] after:w-[10px] after:ml-[55.5px] after:bottom-0 after:bg-[#009145] after:rounded-full">
                  <hr className="w-[1px] h-[60px] border-l border-[#009145] ml-[60px] -top-[0px] " />
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-start justify-center gap-1 lg:gap-8 mb-5 lg:ml-[250px]">
              <img
                className="size-20 lg:block"
                src={IconPeople}
                alt="Icono para aporte regional"
              />
              <div>
                <p className="text-md text-pretty border-[#009145] p-1 lg:p-3 text-black border-b max-w-lg">
                  Vizcachitas{' '}
                  <strong className="text-[#E8732C]">
                    aumentaría en 15,6% el número de trabajadores en Putaendo,
                  </strong>{' '}
                  reduciendo en 0,2% la tasa de desocupación de la Región de
                  Valparaíso
                </p>
                <div className="relative after:content-[''] after:absolute after:h-[10px] after:w-[10px] after:ml-[55.5px] after:bottom-0 after:bg-[#009145] after:rounded-full">
                  <hr className="w-[1px] h-[60px] border-l border-[#009145] ml-[60px] -top-[0px] " />
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-start justify-center gap-1 lg:gap-8 mb-5">
              <img
                className="size-20 lg:block"
                src={IconPrice}
                alt="Icono para aporte regional"
              />
              <div>
                <p className="text-md text-pretty border-[#009145] p-1 lg:p-3 text-black border-b max-w-lg">
                  El Proyecto{' '}
                  <strong className="text-[#E8732C]">
                    permitiría disminuir la pobreza por ingresos de 9,3% en
                    Putaendo
                  </strong>{' '}
                  a 3,3%, sólo si se considera el aumento de remuneraciones
                  directas.
                </p>
                <div className="relative after:content-[''] after:absolute after:h-[10px] after:w-[10px] after:ml-[55.5px] after:bottom-0 after:bg-[#009145] after:rounded-full">
                  <hr className="w-[1px] h-[60px] border-l border-[#009145] ml-[60px] -top-[0px] " />
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-start justify-center gap-1 lg:gap-8 mb-5 lg:ml-[250px]">
              <img
                className="size-20 lg:block"
                src={IconHouse}
                alt="Icono para aporte regional"
              />
              <div>
                <p className="text-md text-pretty border-[#009145] p-1 lg:p-3 text-black border-b max-w-lg">
                  Se generará un{' '}
                  <strong className="text-[#E8732C]">
                    mayor desarrollo en una de las comunas más vulnerables de la
                    región.
                  </strong>
                </p>
                <div className="">
                  <hr className="hidden lg:block w-[1px] h-[60px] border-b border-[#009145] ml-[60px] -top-[0px] " />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <Beneficios dataAporte={dataAporte} />
        </section>
        <BackToTop />
      </main>
      <Footer />
    </>
  )
}

export default TemplateAporteRegional
