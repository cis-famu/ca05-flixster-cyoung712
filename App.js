import logo from './logo.svg';
import './App.css';
import MovieList from "./components/MovieList";

function App() {
  return (
      <>
        <div className="containter">
          <div className="row" id="format">
            <div className="col-12">
                <div className="flixster">
                    <h3 className="display-4 page-title text-center m-3">Flixster</h3>
                </div>
              <hr/>
              <h4>Now Playing</h4>
              <br/>
            </div>
              <MovieList />
          </div>
        </div>
      </>
  );
}

export default App;
