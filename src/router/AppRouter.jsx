
import { Route, Routes } from 'react-router-dom'
import { HomePage,AboutPage,BlogPage,ContactPage,CurriculumPage,PortfolioPage, Error } from '../pages'
import style from "./AppRouter.module.css"


export const AppRouter = () => {
  return (
    <div className={style.containerContent}>
      <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/about-me' element={<AboutPage/>}/>
          <Route path='/experience' element={<CurriculumPage/>}/>
          <Route path='/portfolio' element={<PortfolioPage/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
          {/* <Route path='/blog' element={<BlogPage/>}/> */}

          <Route path='/*' element={<Error/>}/>
      </Routes>
      
  </div>
  )
}
