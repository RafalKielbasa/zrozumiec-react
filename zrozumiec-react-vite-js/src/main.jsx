import ReactDOM from 'react-dom/client'

import { Link } from './components/Link'

const element = (
  <>
    <h1>Nasza strona</h1>
    <main>
      <Link />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
        magnam excepturi, officiis ad fugiat quia exercitationem modi, quis
        dicta fugit quaerat totam quam voluptatum impedit assumenda sint vero
        error non!
      </p>
      <Link />
    </main>
  </>
)

ReactDOM.createRoot(document.getElementById('root')).render(element)
