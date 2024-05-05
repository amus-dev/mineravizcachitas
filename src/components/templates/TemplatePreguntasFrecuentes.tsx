import { getDataPage } from '@/api/page'
import VideoMP4 from '@/assets/videos/preguntas.mp4'
import VideoWebm from '@/assets/videos/preguntas.webm'
import BackToTop from '@/components/molecules/BackToTop'
import ScrollToTop from '@/components/molecules/ScrollTop'
import VideoBanner from '@/components/molecules/VideoBanner'
import Footer from '@/components/organism/Footer'
import Navbar from '@/components/organism/MenuNav'
import PrincipalInfo from '@/components/organism/PreguntasFrecuentes/PrincipalInfo'
import TodasPreguntas from '@/components/organism/PreguntasFrecuentes/TodasPreguntas'
import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'

const TemplatePreguntasFrecuentes = () => {
  const [dataFaq, setDataFaq] = useState(null)

  useEffect(() => {
    const fetchPreguntasFrecuentes = async () => {
      const result = await getDataPage('preguntas-frecuentes')
      setDataFaq(result[0].acf)
    }
    fetchPreguntasFrecuentes()
  }, [])

  return (
    <>
      <Helmet>
        <title>
          Preguntas Frecuentes sobre Minera Vizcachitas: Respuestas Claras
        </title>
        <meta
          name="description"
          content="Encuentra respuestas a tus preguntas sobre Minera Vizcachitas, desde nuestros procesos mineros hasta nuestras iniciativas de sostenibilidad y más."
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
          }/assets/images/posters/poster-video-preguntas-desktop.webp`}
          bgMobile={`${
            import.meta.env.BASE_URL
          }/assets/images/posters/poster-video-preguntas-mobile.webp`}
          title={
            <h1 className="w-full text-center text-5xl font-bold text-white lg:w-1/2 lg:text-balance lg:text-end lg:text-6xl">
              Preguntas
              <span className="text-[#E8732C]"> Frecuentes</span>
            </h1>
          }
          description="Respondemos algunas de las principales consultas surgidas de nuestros diálogos permanentes con la comunidad."
          list={false}
        />
        <section
          id="preguntas"
          className="relative bg-[url(/assets/images/backgrounds/bg-sostenibilidad.webp)] bg-contain bg-fixed lg:bg-cover"
        >
          <PrincipalInfo />
          <TodasPreguntas dataFaq={dataFaq} />
        </section>
        <BackToTop />
      </main>
      <Footer />
    </>
  )
}

export default TemplatePreguntasFrecuentes
