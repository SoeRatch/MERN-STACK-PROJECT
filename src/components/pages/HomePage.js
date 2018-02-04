import React from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import _ from 'lodash';
import { fetchAlltitles } from '../../actions/articles';
import s from '../style/HomePage.css';

class HomePage extends React.Component{
  
  componentDidMount = () => {
    this.onInit(this.props);
  }

  onInit = (props) =>{
   props.fetchAlltitles();
  }

  render(){
     
    const { titles} = this.props;
     let count = 0;
    let count2 = 0;
    let count3 = 0;
    let count4 =0;

    return(
    	<div className={s.pfcontent}>

		        <div className={s.pfcontainer}>
		                <div className={s.pfgrid1}>
		                  {_.map(titles, title => {
		                              const mn = title.title;
		                              count += 1; 
		                              if(count<=1){
				                             return (
				                                   <div>
													  <Link to={`/article/${mn}`}>
													  	<div className={s.swiggleBox}> <section className={[s.col].join(' ')}>
				                                              <h3>{mn}</h3>
				                                              
				                                          </section>
														  <svg  x="0" y="0" width="100%" height="100%" viewBox="0 0 130 65" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
														    
														    <path d="M0.6,0.5c0,5.4,0,61.5,0,61.5s4.5,5.4,9.9,0c5.4-5.4,9.9,0,9.9,0s4.5,5.4,9.9,0c5.4-5.4,9.9,0,9.9,0
															s4.5,5.4,9.9,0c5.4-5.4,9.9,0,9.9,0s4.5,5.4,9.9,0c5.4-5.4,9.9,0,9.9,0s4.5,5.4,9.9,0c5.4-5.4,9.9,0,9.9,0s4.5,5.4,9.9,0
															c5.4-5.4,9.9,0,9.9,0s4.5,5.4,9.9,0c0,0,0-56.1,0-61.5H0.6z"/>
														  </svg>
														  </div>
														  </Link>
														</div>
				                      )} 
				                      else if(count===2){
				                             return (
				                                   <div>
													  <Link to={`/article/${mn}`}>
													  	<div className={[s.swiggleBox, s.square].join(' ')}> <section className={[s.col].join(' ')}>
				                                              <h3>{mn}</h3>
				                                              
				                                          </section>
														  </div>
														  </Link>
														</div>
				                      )} 
									return null;
				                   }

		                  )}
		              </div>
		        </div>

		        <div className={s.pfcontainer}>
	                <div className={s.pfgrid2}>
	                  {_.map(titles, title => {
	                              const mn = title.title;
	                              count2 += 1; 
	                              if(count2>2 && count2<6){
			                             return (
			                                   <div>
													  <Link to={`/article/${mn}`}>
													  	<div className={s.swiggleBox}>
					                                        <section className={[s.col].join(' ')}>
				                                              <h3>{mn}</h3>
				                                              
				                                          </section>
														  <svg  x="0" y="0" width="100%" height="100%" viewBox="0 0 130 65" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
														    
														    <path d="M0.6,0.5c0,5.4,0,61.5,0,61.5s4.5,5.4,9.9,0c5.4-5.4,9.9,0,9.9,0s4.5,5.4,9.9,0c5.4-5.4,9.9,0,9.9,0
															s4.5,5.4,9.9,0c5.4-5.4,9.9,0,9.9,0s4.5,5.4,9.9,0c5.4-5.4,9.9,0,9.9,0s4.5,5.4,9.9,0c5.4-5.4,9.9,0,9.9,0s4.5,5.4,9.9,0
															c5.4-5.4,9.9,0,9.9,0s4.5,5.4,9.9,0c0,0,0-56.1,0-61.5H0.6z"/>
														  </svg>
														  </div>
														  </Link>
														</div>
			                      )} 
								return null;
			                   }

	                  )}
	              </div>
	        </div>

	        <div className={s.pfcontainer}>
	                <div className={s.pfgrid3}>
	                  {_.map(titles, title => {
	                              const mn = title.title;
	                              count3 += 1; 	
	                              if(count3>5 && count3<8){
			                             return (
			                                   <div>
													  <Link to={`/article/${mn}`}>
													  	<div className={s.swiggleBox}>
					                                         <section className={[s.col].join(' ')}>
				                                              <h3>{mn}</h3>
				                                              
				                                          </section>
														  <svg  x="0" y="0" width="100%" height="100%" viewBox="0 0 130 65" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
														    
														    <path d="M0.6,0.5c0,5.4,0,61.5,0,61.5s4.5,5.4,9.9,0c5.4-5.4,9.9,0,9.9,0s4.5,5.4,9.9,0c5.4-5.4,9.9,0,9.9,0
															s4.5,5.4,9.9,0c5.4-5.4,9.9,0,9.9,0s4.5,5.4,9.9,0c5.4-5.4,9.9,0,9.9,0s4.5,5.4,9.9,0c5.4-5.4,9.9,0,9.9,0s4.5,5.4,9.9,0
															c5.4-5.4,9.9,0,9.9,0s4.5,5.4,9.9,0c0,0,0-56.1,0-61.5H0.6z"/>
														  </svg>
														  </div>
														  </Link>
														</div>
			                      )} 
								return null;
			                   }

	                  )}
	              </div>
	        </div>

	        <div className={s.pfcontainer}>
	                <div className={s.pfgrid4}>
	                  {_.map(titles, title => {
	                              const mn = title.title;
	                              count4 += 1; 	
	                              if(count4>7 ){
			                             return (
			                                   <div>
													  <Link to={`/article/${mn}`}>
													  	<div className={s.swiggleBox}>
				                                         <section className={[s.col].join(' ')}>
				                                              <h3>{mn}</h3>
				                                          </section>
													  <svg  x="0" y="0" width="100%" height="100%" viewBox="0 0 130 65" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
													    
													    <path d="M0.6,0.5c0,5.4,0,61.5,0,61.5s4.5,5.4,9.9,0c5.4-5.4,9.9,0,9.9,0s4.5,5.4,9.9,0c5.4-5.4,9.9,0,9.9,0
														s4.5,5.4,9.9,0c5.4-5.4,9.9,0,9.9,0s4.5,5.4,9.9,0c5.4-5.4,9.9,0,9.9,0s4.5,5.4,9.9,0c5.4-5.4,9.9,0,9.9,0s4.5,5.4,9.9,0
														c5.4-5.4,9.9,0,9.9,0s4.5,5.4,9.9,0c0,0,0-56.1,0-61.5H0.6z"/>
													  </svg>
													  </div>
													  </Link>
													</div>
			                      )} 
								return null;
			                   }

	                  )}
	              </div>
	        </div>

	    </div>

      );
  }

}


HomePage.propTypes={
   fetchAlltitles: PropTypes.func.isRequired,
   titles: PropTypes.string.isRequired
};

function mapStateToProps(state){
  return{
    titles:state.titles
  };
}

export default connect(mapStateToProps, {fetchAlltitles})(HomePage);