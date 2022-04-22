import React from 'react'; 
import PropTypes from 'prop-types';
import MovieModel from '../MovieList.model';

const FilmLimitedIndividual = ({ Films }) => {
  
    
    return (
        <div className="col-4 mb-5"> 
            <h4>{Films.title}</h4>
            <p>  {Films.whatsOnSrcset.medium}</p>

        
        </div>
    );
};

FilmLimitedIndividual.propTypes = {
    Films: PropTypes.instanceOf(MovieModel)
}

export default FilmLimitedIndividual;
