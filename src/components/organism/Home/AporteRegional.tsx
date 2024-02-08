import RegionalCard from '@/components/molecules/Cards/RegionalCard'
import ImageDesarrollo from '@/assets/images/img-desarrollo.webp'
import ImageEmpleabilidad from '@/assets/images/img-empleabilidad.webp'
import ImageAmbiente from '@/assets/images/img-ambiente.webp'
import ImageCalidad from '@/assets/images/img-calida.webp'

const AporteRegional = () => {
  return (
    <section className='bg-white p-4 md:p-8'>
      <div className='flex flex-row items-center justify-center'>
        <hr className='w-full border-[#8B8B8B]' />
        <h2 className='w-fit whitespace-nowrap px-4 text-center text-4xl font-bold uppercase text-[#8B8B8B]'>
          Aporte Regional
        </h2>
        <hr className='w-full border-[#8B8B8B]' />
      </div>
      <div className='mt-10 grid grid-cols-1 justify-items-center gap-1 md:grid-cols-2 lg:grid-cols-4'>
        <RegionalCard
          title={`Desarrollo ${'\n'} Económico`}
          description='Se proyecta que Vizcachitas genere un aumento del 3% del PIB de la Región de Valparaíso, con oportunidades de crecimiento sostenido en el largo plazo para toda la zona.'
          image={ImageDesarrollo}
        />
        <RegionalCard
          title='Empleabilidad'
          description='Más de 5.500 puestos de trabajo en fase de construcción y 1.200 en operación, sin considerar la importante cantidad de empleos indirectos y oportunidades de negocios que se crearán con motivo de los servicios asociados a la faena.'
          image={ImageEmpleabilidad}
        />
        <RegionalCard
          title={`Medio ${'\n'} Ambiente`}
          description={`El Proyecto Vizcachitas ha tomado el compromiso de utilizar agua de mar desalinizada y no consumir agua continental para los procesos productivos mineros. ${'\n'} Asimismo, contempla el uso de depósitos de relaves espesados mezclados con el material sin mineral que se extraiga del rajo. Con relaves cuya humedad no supera el 15%, el proyecto no requiere el uso de tranques de relaves. Ello, porque la baja presencia de arcillas permite filtrar los relaves y reducir el consumo de agua del proyecto hasta en 50%, contribuyendo a la sustentabilidad ambiental del proyecto en múltiples dimensiones: mejora la estabilidad física del depósito de relaves, evitando la acumulación e infiltración del agua contenida en los relaves; y minimiza el espacio utilizado por los relaves, al reducir el volumen de agua contenido en los relaves.`}
          image={ImageAmbiente}
        />
        <RegionalCard
          title={`Calidad ${'\n'} de vida`}
          description='Más de 5.500 puestos de trabajo en fase de construcción y 1.200 en operación, sin considerar la importante cantidad de empleos indirectos y oportunidades de negocios que se crearán con motivo de los servicios asociados a la faena.'
          image={ImageCalidad}
        />
      </div>
    </section>
  )
}

export default AporteRegional
