import './App.css'

function App() { 

  return (
    <div>
      <div className="container">
          <header>
              <h2>
                404 NOT FOUND
              </h2>
          </header>
          <div className="content-container">
              <div class="container-img" >
                <img src="/scarecrow.png"
                alt="imagen"
                />
              </div>
          <div className="content-info">
              <h1> <strong>I have bad news  <br/> for you</strong></h1>
              <p>The page you are looking for might be removed or is
              temporarily unavailable</p>
              <button>BACK TO HOMEPAGE</button>
          </div>    
          </div>
      </div>

      <footer>
      <div className="footer">
          <p>Created by <b>Andrea Vargas - PVARGASM1</b> - devchanllenges</p>
      </div>
      </footer>
    </div>
  )
}

export default App
