import ImageAmbiente from '@/assets/images/img-ambiente.webp'
import ImageCalidad from '@/assets/images/img-calida.webp'
import ImageDesarrollo from '@/assets/images/img-desarrollo.webp'
import ImageEmpleabilidad from '@/assets/images/img-empleabilidad.webp'
import DefaultButton from '@/components/molecules/Buttons/DefaultButton'
import RegionalCard from '@/components/molecules/Cards/RegionalCard'

const AporteRegional = () => {
  return (
    <section className='mt-20 bg-white p-4 md:p-8'>
      <div className='flex flex-row items-center justify-center'>
        <hr className='w-full border-[#8B8B8B]' />
        <h2 className='w-fit whitespace-nowrap px-4 text-center text-3xl font-bold uppercase text-[#8B8B8B] lg:text-4xl'>
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
          description={`Vizcachitas se compromete a usar agua de mar desalinizada, evitando así el uso de agua continental en sus operaciones. Además, emplea depósitos de relaves espesados combinados con material sin mineral, reduciendo el consumo de agua hasta en un 50%. Esto mejora la estabilidad del depósito, previene la acumulación de agua y minimiza el espacio utilizado por los relaves.. 
`}
          image={ImageAmbiente}
        />
        <RegionalCard
          title={`Calidad ${'\n'} de vida`}
          description='Más de 5.500 puestos de trabajo en fase de construcción y 1.200 en operación, sin considerar la importante cantidad de empleos indirectos y oportunidades de negocios que se crearán con motivo de los servicios asociados a la faena.'
          image={ImageCalidad}
        />
      </div>
      <div className='mt-10 flex w-full items-center justify-center'>
        <hr className='w-full border-[#03773A]' />
        <DefaultButton
          url='/aporte-regional'
          textFirst='Ver todos los'
          textSecond='Aportes regionales'
          backgroundColor='#03773A'
          hoverBackgroundColor='#E8732D'
          customStyle={{
            minWidth: 215,
          }}
        />
        <hr className='w-full border-[#03773A]' />
      </div>
    </section>
  )
}

export default AporteRegional
