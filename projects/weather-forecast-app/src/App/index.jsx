import './style.css'

export function App() {
  return (
    <div className="container">
      <header>
        <h1>Previsão do Tempo</h1>
        <form action="">
          <input type="text" placeholder='Nome da cidade'/>
          <button>Buscar</button>
        </form>
      </header>

      <main>
        <article>
          <section className='blockCityName'>
            <h2>Júcas Ceará</h2>
            <p>Brasil, 11/01/2023, 15:41:50</p>
          </section>

          <section className='blockCurrentTime'>
            <div className="currentTime">
              <div className="blocoDegree">
                <img src="#" alt="icon" />
                <p>25°.6</p>
                <p>
                  <span className="degreeMax">32.0°</span>
                  <span className="degreeMin">20.0°</span>
                </p>
              </div>

              <div className="blockSituation">
                <img src="#" alt="icon" />
                  <div>
                    <p>Parcialmente Sol quente</p>
                    <p>Sensação Terminal 36.2</p>
                  </div>
              </div>
            </div>
          </section>

          <section className='containerWeatherCondition'>
            {/* Component */}
          </section>

          <section className='containerWeatherForecast'>
            <ol>
              <li>Component "Map"</li>
            </ol>
          </section>
        </article>
      </main>

      <footer>
        <p>Web Developer Course - Júcas</p>
      </footer>
    </div>
  )
}
