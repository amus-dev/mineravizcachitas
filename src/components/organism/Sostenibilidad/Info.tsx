import BtnScrollDown from '@/components/molecules/BtnScrollDown'
import Icon from '@/assets/icons/icon-ambiental-black.svg'
import Compromisos from '@/components/organism/Sostenibilidad/Compromisos'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const Info = () => {
  return (
    <section
      className='relative bg-[url(/assets/images/backgrounds/bg-sostenibilidad.webp)] bg-contain bg-fixed lg:bg-cover'
      id='sostenibilidad-info'
    >
      <BtnScrollDown section='sostenibilidad-info' />
      <div className='flex w-full flex-col items-center justify-between pt-20 lg:flex-row'>
        <div className='flex w-full flex-col items-center justify-center lg:w-[43.6%]'>
          <span className='w-fit bg-[#03773A] px-12 py-2 text-center text-sm font-bold uppercase text-white'>
            Pilares Sostenibles
          </span>
          <h2 className='mt-4 whitespace-nowrap text-4xl font-bold uppercase text-black'>
            ¿Por qué es <br /> un proyecto <br /> sostenible?
          </h2>
        </div>
        <div className='mt-14 flex w-full flex-col px-8 lg:mt-0 lg:w-[56.4%] lg:px-0'>
          <div className='flex items-center justify-start pb-10'>
            <LazyLoadImage
              src={Icon}
              className='mr-4 size-20'
              alt='Icono de compromisos para Responsabilidad Ambiental'
            />
            <div className='flex max-w-lg flex-col border-l border-[#03773A]'>
              <div className=''>
                <h3 className='pl-4 text-xl font-bold uppercase text-[#E8732C]'>
                  Responsabilidad <br />
                  Ambiental
                </h3>
              </div>
              <hr className='my-3 border-[#03773A]' />
              <p className='pl-4 text-sm text-black'>
                Vizcachitas es un proyecto minero de clase mundial, que ha
                incorporado tecnología y estándares ambientales de última
                generación, que se hace cargo de las inquietudes de la comunidad
                y cuida el uso del agua, protege el entorno y promueve la
                sustentabilidad.
              </p>
            </div>
          </div>
          <div className='flex items-center justify-start pb-10'>
            <LazyLoadImage
              src={Icon}
              className='mr-4 size-20'
              alt='Icono de compromisos para Responsabilidad Social'
            />
            <div className='flex max-w-lg flex-col border-l border-[#03773A]'>
              <div className=''>
                <h3 className='pl-4 text-xl font-bold uppercase text-[#E8732C]'>
                  Responsabilidad <br />
                  Social
                </h3>
              </div>
              <hr className='my-3 border-[#03773A]' />
              <p className='pl-4 text-sm text-black'>
                Escuchamos a las personas, sus anhelos, inquietudes y sueños,
                para co-construir juntos un proyecto que genere mejores
                condiciones de vida para los habitantes de Putaendo. Impulsamos
                una relación de largo plazo, basada en el diálogo permanente, la
                confianza y transparencia para mirar al futuro con optimismo.
                Queremos un futuro con oportunidades para Putaendo.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Compromisos />
    </section>
  )
}

export default Info
