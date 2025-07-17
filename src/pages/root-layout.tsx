import Maincontent from '@/shared/components/main-content'
import Sidebar from '@/shared/components/sidebar'

export default function Rootlayout({ }) {

  return (
    <div className='bg-background'>
      <Sidebar />
      <Maincontent />
    </div>

  )
}