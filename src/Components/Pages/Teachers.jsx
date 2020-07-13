import React, { useEffect } from 'react'
import Banner from '../Organisms/Banner'
import store from '../../redux/store'
import { getAllTeachers } from '../../redux/actionCreators';
import { connect } from "react-redux"
import Teacher from '../Organisms/Teacher';


const Teachers = ({ match, teachers }) => {

  useEffect(() => {
    store.dispatch(getAllTeachers())
  }, [match])

  return (
    <>
      <Banner
        color="third-color"
        image={{
          src: "https://www.compartirpalabramaestra.org/sites/default/files/me-gustan-los-profesores-que-lo-meten-en-la-pelicula.jpg",
          alt: "Banner Profesores"
        }}
        title="Nuestros profesores"
        subtitle="Este plantel docente está altamente calificado para guiarte en tu educación."
      />
      {
        teachers &&
        <main className="ed-grid m-grid-3 lg-grid-4 row-gap">
          {
            teachers.map(t => (
              <Teacher
                key={t.id}
                picture={t.picture}
                name={t.name}
                country={t.country}
              />
            ))
          }
        </main>
      }
    </>
  )
}

const mapStateToProps = state => ({
  teachers: state.teacherReducer.teachers
})

export default connect(mapStateToProps, {})(Teachers)
