import React from 'react'; 
import filmModel from '../MovieList.model';
import FilmLimitedIndividual from './FilmLimitedIndividual';


const FilmLimited = ({ info }) => {
    const EachFilm = info.Films.map(FilmItem => {
        const movie = new filmModel(FilmItem.id, FilmItem.title, FilmItem.whatsOnSrcset );
        return <FilmLimitedIndividual Films={movie} key={FilmItem.id} />
    });
    return (
        <div className="container">
        <div className="row">
            
        <div className="d-flex flex-wrap">

         <div className="col-12 mb-2">   
        <h3>Now showing</h3>
        </div>
              {EachFilm}
        </div>
           
        </div>
        </div>
    );
};



export default FilmLimited;





