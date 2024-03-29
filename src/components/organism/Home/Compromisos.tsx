import IconArrow from '@/assets/icons/arrow-right-bold.svg'
import IconAmbiental from '@/assets/icons/icon-ambiental-white.svg'
import IconSocial from '@/assets/icons/icon-social-white.svg'
import ImageAmbiental from '@/assets/images/compromiso-ambiental.webp'
import ImageResponsabilidad from '@/assets/images/compromiso-responsabilidad.webp'
import BtnScrollDown from '@/components/molecules/BtnScrollDown'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom'

const Compromisos = () => {
  return (
    <section
      id='compromisos'
      className='relative bg-[url(/assets/images/backgrounds/compromisos-background.webp)] bg-contain bg-fixed lg:bg-cover'
    >
      <BtnScrollDown section='compromisos' />
      <span className='block w-fit bg-[#03773A] px-4 py-2 text-sm font-bold uppercase text-white'>
        Compromisos Sostenibles
      </span>
      <div className='flex flex-col justify-center gap-10 p-10 lg:flex-row lg:gap-40'>
        <article className='max-w-xl'>
          <picture>
            <LazyLoadImage
              src={ImageAmbiental}
              alt='Imagen representativa de Responsabilidad Ambiental'
              className='aspect-[4/3] object-cover'
            />
          </picture>
          <div>
            <div className='mb-4 flex flex-row items-center gap-4 border-b border-white pt-4'>
              <LazyLoadImage
                src={IconAmbiental}
                alt='Icono de responsabilidad ambiental'
                className='w-[70px] object-[1/1]'
              />
              <h2 className='border-l border-white pl-4 text-xl font-bold  uppercase text-white lg:text-2xl lg:leading-10'>
                Responsabilidad <br aria-hidden /> Ambiental
              </h2>
            </div>
            <p className='text-balance text-white'>
              El diseño de Vizcachitas de prefactibilidad da cuenta de las mejores herramientas de innovación y tecnología disponibles, que permiten un desarrollo armónico y sostenible, que se toma en serio la protección ambiental de la V Región. El perfeccionamiento del proyecto durante la siguiente fase de factibilidad continuará buscando oportunidades de mejora para construir un proyecto de excelencia que sea un ejemplo para Chile y el mundo.
            </p>
          </div>
        </article>
        <article className='max-w-xl'>
          <picture>
            <LazyLoadImage
              src={ImageResponsabilidad}
              alt='Imagen que representa la Responsabilidad Social'
              className='aspect-[4/3] object-cover'
            />
          </picture>
          <div>
            <div className='mb-4 flex flex-row items-center gap-4 border-b border-white pt-4'>
              <LazyLoadImage
                src={IconSocial}
                alt='Icono de responsabilidad social'
                className='size-16'
              />
              <h2 className='border-l border-white pl-4 text-xl font-bold  uppercase text-white lg:text-2xl lg:leading-10'>
                Responsabilidad <br aria-hidden /> Social
              </h2>
            </div>
            <p className='text-balance text-white'>
              Se busca que los beneficios del desarrollo lleguen a los vecinos de Putaendo, San Felipe y de la Región de Valparaíso, y que sean social y ambientalmente sostenibles, además de sostenidos en el tiempo.
            </p>
          </div>
        </article>
      </div>
      <div className='relative -bottom-5 flex justify-center'>
        <Link
          to='sostenibilidad'
          unstable_viewTransition
          className='flex w-fit flex-row items-center justify-between border border-white bg-[#E8732D] px-3 text-center text-sm text-white shadow-xl transition-all duration-700 hover:bg-[#03773A] hover:shadow-stone-400'
        >
          <span>
            Ver todos los compromisos <br aria-hidden />
            sostenibles
          </span>
          <hr className='mx-4 h-[50px] w-[1px] bg-white' />
          <LazyLoadImage src={IconArrow} alt='' className='w-[16px]' />
        </Link>
      </div>
    </section>
  )
}

export default Compromisos
