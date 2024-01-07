import { Link } from 'react-router-dom'
const TemplateHome = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold underline'>Home</h1>
      <Link to='/blog' unstable_viewTransition>
        Blog
      </Link>
    </div>
  )
}

export default TemplateHome
