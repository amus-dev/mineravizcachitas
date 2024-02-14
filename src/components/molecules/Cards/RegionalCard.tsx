type Props = {
  title: string
  description: string
  image: string
}
import { LazyLoadImage } from 'react-lazy-load-image-component'

const RegionalCard = ({ title, description, image }: Props) => {
  return (
    <article className='article duration-400 relative w-full  max-w-[320px] transition-all hover:shadow-xl hover:shadow-zinc-700 [&_div]:hover:opacity-100 [&_picture_img]:hover:brightness-[0.40]'>
      <picture>
        <LazyLoadImage
          src={image}
          className='duration-400 aspect-[3/4] transition-all'
          alt={`Imagen representativa de ${title}`}
        />
      </picture>
      <div className='absolute top-0 flex h-full w-full flex-col justify-between p-4 transition-opacity duration-500 lg:opacity-0'>
        <h3 className='min-h-[75px] whitespace-pre border-b border-white pb-2 text-center text-2xl font-bold uppercase text-white'>
          {title}
        </h3>
        <p className='text-balance text-start align-bottom text-sm text-white lg:text-center'>
          {description}
        </p>
      </div>
    </article>
  )
}

export default RegionalCard
