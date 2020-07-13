import React, { useEffect } from 'react'
import Banner from '../Organisms/Banner'
import { connect } from 'react-redux'
import store from '../../redux/store'
import { getAllCourses } from '../../redux/actionCreators'
import Card from '../Organisms/Card'

const Courses = ({ courses }) => {

  useEffect(() => {
    store.dispatch(getAllCourses())
  }, [])

  return (
    <>
      <Banner
        color="dark-color"
        image={{
          src: "https://www.compartirpalabramaestra.org/sites/default/files/me-gustan-los-profesores-que-lo-meten-en-la-pelicula.jpg",
          alt: "Banner Cursos"
        }}
        title="Nuestros cursos"
        subtitle="Comienza desde cero hoy mismo en tu camino a dominar la tecnologia "
      />
      {
        courses &&
        <main className="ed-grid m-grid-5">
          {
            courses.map(c => (
              <Card
                key={c.id}
                picture={c.picture}
                name={c.name}
                path="cursos"
                cardId={c.id}
              />
            ))
          }
        </main>
      }
    </>
  )
}

const mapStateToProps = state => ({
  courses: state.courseReducer.courses
})

export default connect(mapStateToProps, {})(Courses)
