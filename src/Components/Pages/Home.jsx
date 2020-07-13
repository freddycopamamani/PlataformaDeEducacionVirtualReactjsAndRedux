import React, { useEffect } from 'react'
import Banner from '../Organisms/Banner'
import { connect } from 'react-redux'
import store from '../../redux/store'
import { getAllPosts } from '../../redux/actionCreators'
import Publication from '../Organisms/Publication'

const Home = ({ posts }) => {

  useEffect(() => {
    store.dispatch(getAllPosts())
  }, [])

  return (
    <>
      <Banner
        color="dark-color"
        image="https://edteam-media.s3.amazonaws.com/specialities/original/10322ac1-7b43-4e12-9000-0c28e04178d6.png"
        title="Bienvenido a la expericia más increible en educación online. Comienza hoy mismo a aprender"
        subtitle="Nuestro equipo ha desarrollado esta plataforma pensando en ti. Sabemos que estás buscando contenido de calidad. Aquí lo encontrás"
        home
      />
      <main className="ed-grid m-grid-3">
        <div className="l-section m-cols-2">
          <h2>Ultimas publicaciones</h2>
          {
            posts ?
              <div>
                {
                  posts.map(p =>
                    <Publication
                      title={p.title}
                      author={p.author}
                      fecha={p.fecha}
                      content={p.content}
                      key={p.id}
                    />
                  )
                }
              </div> :
              <p>No existen publicaciones en la BD</p>
          }
        </div>
        <div>
          <h3> Lista de categorías </h3>
          <ul className="data-list">
            <li><span>React.js</span></li>
            <li><span>React native</span></li>
            <li><span>Angular</span></li>
            <li><span>Vue.js</span></li>
            <li><span>HTML</span></li>
            <li><span>CSS</span></li>
          </ul>
        </div>
      </main>
    </>
  )
}

const mapStateToProps = state => ({
  posts: state.postReducer.posts
})
export default connect(mapStateToProps, {})(Home)
