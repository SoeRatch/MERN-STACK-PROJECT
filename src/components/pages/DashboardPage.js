import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import _ from 'lodash';
import ConfirmEmailMessage from '../messages/ConfirmEmailMessage';
import { fetchtitles } from '../../actions/articles';
import s from '../style/DashboardPage.css';


class DashboardPage extends React.Component{
  
  componentDidMount = () => {
    this.onInit(this.props);
  }

  onInit = (props) =>{
   props.fetchtitles();
  }

  render(){
     
    const {isConfirmed, titles} = this.props;
    return(

        <div className={s.pfcontainer}>
            { !isConfirmed && <ConfirmEmailMessage />}
            <div className={s.pfcontent}>
              
                <div className={s.pfgrid}>


                  {_.map(titles, title => {
                              const mn = title.title;
                             return (
                                    <div>
                                      <Link to={`/article/${mn}`}>
                                        <div className={s.pfgriditem}>
                                          <section className={[s.col, s.left].join(' ')}>
                                              <h3>{mn}</h3>
                                              <p>This content is real. These section hover properties are REAL.</p>
                                              <div className={s.magic}><h4>{mn}</h4></div>
                                          </section>
                                        </div>
                                      </Link>  
                                    </div>
                      )}
                  )}

                </div>
              </div>
    
          
        </div>

      );
  }

}


DashboardPage.propTypes={
   fetchtitles: PropTypes.func.isRequired,
   titles: PropTypes.string.isRequired,
   isConfirmed:PropTypes.bool.isRequired
};

function mapStateToProps(state){
  return{
    isConfirmed: !!state.user.confirmed,
    titles:state.titles
  };
}

export default connect(mapStateToProps, {fetchtitles})(DashboardPage);