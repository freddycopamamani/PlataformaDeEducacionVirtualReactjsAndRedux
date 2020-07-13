import React, { useEffect } from 'react'
import Banner from '../Organisms/Banner'
import { connect } from 'react-redux'
import store from '../../redux/store'
import { getAllSpecialities } from '../../redux/actionCreators'
import Card from '../Organisms/Card'

const Specialities = ({ specialities }) => {

  useEffect(() => {
    store.dispatch(getAllSpecialities())
  }, [])

  return (
    <>
      <Banner
        color="first-color"
        image={{
          src: "https://www.compartirpalabramaestra.org/sites/default/files/me-gustan-los-profesores-que-lo-meten-en-la-pelicula.jpg",
          alt: "Banner Especialidades"
        }}
        title="Especialidades"
        subtitle="Domina una tecnologia con las rutas de aprendizaje que te ofrecemos."
      />
      {
        specialities &&
        <main className="ed-grid m-grid-3">
          {
            specialities.map(s => (
              <Card
                key={s.id}
                picture={s.picture}
                name={s.name}
                path="especialidades"
                cardId={s.id}
              />
            ))
          }
        </main>
      }
    </>
  )
}

const mapStateToProps = state => ({
  specialities: state.specialityReducer.specialities
})

export default connect(mapStateToProps, {})(Specialities)
