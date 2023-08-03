import React from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Main from '../Components/Main'
import { navbar } from '../utils/router'
import Register from '../Components/Register'
import { useContext } from 'react'
import { IsCoursesContext } from '../Context/isCourses'
import { PrivateRoute } from '../Components/Private'
import { VideoIdContext } from '../Context/VideoId'
import { NextPathContext } from '../Context/NestedPath'
import { PathContext } from '../Context/Path'

const Root = () => {
  // const [nextpathState] = useContext(NextPathContext)
  // const [pathState] = useContext(PathContext)
  // const newNextpathState = nextpathState.replace(/ /ig, "%20")
  // const newpathState = pathState.replace(/ /ig, "%20")
  // const location = useLocation()
  // const { state } = location
  // const [, setIscrs] = useContext(IsCoursesContext)
  //   (
  //     location.pathname === `/my_course/${state?.name}`
  //     || location.pathname === `/my_course/${state?.name}/${pathState}`
  //     || location.pathname === `/my_course/${state?.name}/${newpathState}/${newNextpathState}`


  //   ) ? setIscrs(false)
  //   : setIscrs(true)

  return (
    <Routes>
      <Route path='/' element={<PrivateRoute />}>
        <Route exeact path={'/'} element={<Main />}>
          {navbar.map(({ url, Element, id, child, children, reg }) => {
            return !reg && (child ? <Route key={id} path={url} element={Element} >
            </Route>
              :
              <Route key={id} path={url} element={Element} />
            )
          })}

        </Route>
      </Route>
      <Route path='/account' element={<Register />}></Route>
      <Route path='*' element={<h1>Not found </h1>}></Route>
    </Routes>
  )
}

export default Root