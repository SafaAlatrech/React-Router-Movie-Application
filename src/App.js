import { useState } from 'react';
import './App.css';
import AddMovie from './Component/AddMovie';
import MovieList from './Component/MovieList';
import Search from './Component/Search';
import { moviesData } from './Data';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Description from './Component/Description';


function App() {
  const [movies,setMovies] = useState(moviesData);
  const [searchvalue,setSearchvalue] = useState("");
  const [searchrate,setSearchrate] = useState("");
  const handleadd=(newmovie) => {
    setMovies([...movies,newmovie])
  }
  const handlesearch=(e) => {
    setSearchvalue(e.target.value)
  }

  const handlerate=(newrate) => {
    setSearchrate (newrate)
  }
  
  
  return (
    <div className="App">
      <Router>
      <Search
      searchrate={searchrate}
      handlesearch={handlesearch}
      searchvalue={searchvalue}
      handlerate ={handlerate}
      
      />
      <Switch>
      <Route exact path="/description/:name" render={(props)=> <Description {...props} movies={movies} />}/>
      <Route exact path="/" render={(props)=> <MovieList films={movies.filter(
        (movie) =>  movie.name.toLowerCase().includes(searchvalue.toLowerCase().trim() ) && movie.rating>=searchrate )}/>
      }/>
      <MovieList films={movies.filter(
        (movie) =>  movie.name.toLowerCase()
        .includes(searchvalue.toLowerCase().trim()
        ) &&
        movie.rating>=searchrate
        
        )}/>
      </Switch>
     
      </Router>
      <AddMovie handleadd={handleadd}/>
    </div>
  );
}


export default App;
