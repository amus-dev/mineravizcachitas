type VideoProps = {
  videoMP4: string
  videoWEBM: string
  bgMobile: string
  title: React.ReactNode
  description: string
  list?: boolean
  poster?: string
}
import IconEconomico from '@/assets/icons/icon-economico.svg'
import IconEmpleabilidad from '@/assets/icons/icon-empleabilidad.svg'
import IconAmbiente from '@/assets/icons/icon-ambiente.svg'
import IconCalidad from '@/assets/icons/icon-calidad.svg'

const VideoBanner = ({
  videoMP4,
  videoWEBM,
  bgMobile,
  title,
  description,
  list,
  poster,
}: VideoProps) => {
  return (
    <section className='relative flex h-full w-full items-center justify-center lg:h-[100vh]'>
      <div className='absolute top-0 hidden w-full md:block'>
        <video
          autoPlay
          loop
          muted
          playsInline
          preload='metadata'
          className='h-[100vh] w-full object-cover brightness-50'
          poster={poster}
        >
          <source src={videoMP4} type='video/mp4' />
          <source src={videoWEBM} type='video/webm' />
        </video>
      </div>
      <div
        className={`lg:pt-130 bg-[url(${bgMobile})] z-10 bg-cover px-6 pt-24 md:bg-none lg:px-30 xl:px-40`}
        style={{
          backgroundImage: `${
            window.innerWidth < 768 ? `url(${bgMobile})` : ''
          }`,
        }}
      >
        <div className='mb-10 flex flex-col items-center gap-10 lg:mb-0 lg:flex-row lg:gap-20'>
          {title}
          <div className='w-full lg:w-1/2'>
            <p className=' my-4 text-pretty border-b border-t border-[#E8732D] py-4 text-center text-sm leading-normal text-white lg:my-0 lg:text-start lg:text-lg lg:leading-10'>
              {description}
            </p>
          </div>
        </div>
        {list && (
          <ul className='grid grid-cols-2 place-content-between gap-0 pt-6 md:grid-cols-4 md:gap-20 lg:pt-20'>
            <li className='mb-8 flex flex-col items-center justify-center md:mb-0'>
              <img
                className='size-16'
                src={IconEconomico}
                alt='Icono referencial a Desarrollo Económico'
              />
              <p className='pt-4 text-center text-lg text-white'>
                Desarrollo <br aria-hidden /> económico
              </p>
            </li>
            <li className='mb-8 flex flex-col items-center justify-center md:mb-0'>
              <img
                className='size-16'
                src={IconEmpleabilidad}
                alt='Icono referencial a Desarrollo Económico'
              />
              <p className='pt-4 text-center text-lg text-white'>
                Empleabilidad
              </p>
            </li>
            <li className='mb-8 flex flex-col items-center justify-center md:mb-0'>
              <img
                className='size-16'
                src={IconAmbiente}
                alt='Icono referencial a Desarrollo Económico'
              />
              <p className='pt-4 text-center text-lg text-white'>
                Medio <br aria-hidden /> Ambiente
              </p>
            </li>
            <li className='mb-8 flex flex-col items-center justify-center md:mb-0'>
              <img
                className='size-16'
                src={IconCalidad}
                alt='Icono referencial a Desarrollo Económico'
              />
              <p className='pt-4 text-center text-lg text-white'>
                Calidad de vida
              </p>
            </li>
          </ul>
        )}
      </div>
    </section>
  )
}

export default VideoBanner
