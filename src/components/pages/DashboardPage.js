import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import _ from 'lodash';
import ConfirmEmailMessage from '../messages/ConfirmEmailMessage';
import { fetchtitles} from '../../actions/articles';
import { saveName, saveAddress, saveDescription, fetchuserdetails } from '../../actions/users';
import s from '../style/DashboardPage.css';

class DashboardPage extends React.Component{

   state={
            data:{
                    name:'',
                    address:'',
                    description:''
                  },
            namestate: false,
            addressstate: false,
            descriptionstate: false
    }

     componentDidMount = () => {
    this.onInit(this.props);
  }

  onInit = (props) =>{
   props.fetchtitles();
   props.fetchuserdetails();
  }

     ondataChange = e => this.setState({data:{
        ...this.state.data,
        [e.target.name]:e.target.value,

        }
      });

     onNameSubmit =() =>{
              const dat = this.state.data.name;
              this.props.saveName(dat);
              this.setState({
                ...this.state,
                namestate: false
                });              
      };

      onAddressSubmit =() =>{
              const dat = this.state.data.address;
              this.props.saveAddress(dat); 
              this.setState({
                ...this.state,
                addressstate: false
                });              
      };

      onDescriptionSubmit =() =>{
              const dat = this.state.data.description;
              this.props.saveDescription(dat);
              this.setState({
                ...this.state,
                descriptionstate: false
                });               
      };
  
    

      changenamestate=()=>{
        this.setState({
        ...this.state,
        namestate:true
        });
      }

       changeaddressstate=()=>{
           this.setState({
            ...this.state,
            addressstate:true
            });
      }

      changedescriptionstate=()=>{
           this.setState({
            ...this.state,
            descriptionstate:true
            });
      }
 

  render(){
     
    const {isConfirmed, titles, username,userdetaile} = this.props;
    const data = this.state.data;
    const namestate = this.state.namestate;
    const addressstate = this.state.addressstate;
    const descriptionstate = this.state.descriptionstate;
    return(

        <div>
            <div className={s.lefthouse}>
              { !isConfirmed && <ConfirmEmailMessage />}

                    <div className={s.superdiv}><div className={s.subdiv}>Name :</div> 
                                                { namestate? 
                                                  <div className={s.inpbut}>
                                                    <input 
                                                      className={s.inputed}
                                                      type="text" 
                                                      id="name"
                                                      name="name"
                                                      value={data.name}
                                                      onChange={this.ondataChange} />
                                                    <div 
                                                      onClick={this.onNameSubmit} 
                                                      role="button" tabIndex={0} 
                                                      className={s.inlinebutton}> 
                                                          <i className="fa fa-floppy-o" /> 
                                                    </div>
                                            </div>:
                                            <div>
                                            <div className={s.inlinediv}>{userdetaile.name}</div><div onClick={this.changenamestate} role="button" tabIndex={0} className={s.inlinebutton2}><i className="fa fa-pencil-square-o" /></div>
                                            
                                            </div>
                                }
                    </div>
                    <div className={s.superdiv}> <div className={s.subdiv}>UserName : </div> 
                                                  
                                                <div>
                                                  <div className={s.inlinediv}>{username} </div> 
                                                </div>
                                               
                    </div>
                    <div className={s.superdiv}> <div className={s.subdiv}>From : </div>{ addressstate ? <div className={s.inpbut}><input
                                                        className={s.inputed} 
                                                        type="text" 
                                                        id="address"
                                                        name="address"
                                                        value={data.address}
                                                        onChange={this.ondataChange} />
                                                      <div onClick={this.onAddressSubmit} role="button" tabIndex={0} className={s.inlinebutton} > <i className="fa fa-floppy-o" /> </div>
                                                </div>:
                                            <div>
                                              <div className={s.inlinediv}>{userdetaile.address}</div><div onClick={this.changeaddressstate} role="button" tabIndex={0} className={s.inlinebutton2}><i className="fa fa-pencil-square-o" /></div>
                                                  
                                            </div>
                                }
                    </div>
                      <div className={s.superdiv}><div className={s.subdiv}>About Me : </div>{ descriptionstate? <div className={s.inpbut}><textarea 
                                                                  className={s.inputed}
                                                                  type="text" 
                                                                  id="description"
                                                                  name="description"
                                                                  value={data.description}
                                                                  onChange={this.ondataChange} />
                                                              <div onClick={this.onDescriptionSubmit} role="button" tabIndex={0} className={s.inlinebutton}> <i className="fa fa-floppy-o" /> </div>
                                                          </div>:
                                                    <div>
                                                      <div className={s.inlinedivdesc}>{userdetaile.description}</div><div onClick={this.changedescriptionstate} role="button" tabIndex={0} className={s.inlinebutton2}><i className="fa fa-pencil-square-o" /></div>
                                                    </div>
                                }
                    </div>
            </div>
            <div className={s.pfcontent}>
              
                <div className={s.pfgrid}>


                  {_.map(titles, title => {
                              const mn = title.title;
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
                  )}

                </div>
              </div>
    
          
        </div>

      );
  }

}


DashboardPage.propTypes={
   fetchtitles: PropTypes.func.isRequired,
   fetchuserdetails: PropTypes.func.isRequired,
   saveName: PropTypes.func.isRequired,
   saveAddress: PropTypes.func.isRequired, 
   saveDescription: PropTypes.func.isRequired,
   titles: PropTypes.string.isRequired,
   isConfirmed:PropTypes.bool.isRequired,
   username:PropTypes.string.isRequired,
   userdetaile:PropTypes.shape(
                { 
                name: PropTypes.string.isRequired,
                address: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                 }
                ).isRequired
};

function mapStateToProps(state){
  return{
    isConfirmed: !!state.user.confirmed,
    titles:state.titles,
    username:state.user.username,
    userdetaile:state.userdetails
  };
}

export default connect(mapStateToProps, {fetchtitles,fetchuserdetails, saveName, saveAddress, saveDescription})(DashboardPage);