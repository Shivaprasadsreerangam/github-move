import { React, Component } from "react";
class Popup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: 4,
      PatientSoundDisorderDetails: [],
      PatientSoundDisorderDetails_1: {}

    }
  }

  nextValue = (e) => {
    e.preventDefault();

    this.setState(
      {
        visible: this.state.visible + 4

      });
  }

  preValue = (e) => {
    e.preventDefault();
    this.setState(
      {
        visible: this.state.visible - 4

      });
  }

  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1>{this.props.text}</h1>
          <button id='submit3' onClick={this.props.closePopup}>close</button>
          {this.state.visible < this.props.articulationSoundsAges.length ?
            <button id='submit3' onClick={this.nextValue}>Next</button> : ''}
          {this.state.visible > 1 ?
            <button id='submit3' onClick={this.preValue}>Previous</button> : ''}


          <div>


            {this.props.articulationSoundsAges.slice(this.state.visible - 4, this.state.visible).map(usrdetails =>
              <table id='sounds' width="5px;" border="0">
                {(usrdetails.sound_type==='Phrases')?
                (<tr> {this.state.visible/4} of {this.props.articulationSoundsAges.length/4}
                  <label> <h2>Sound <u><b> {usrdetails.sounds}</b></u></h2></label>


                </tr>):null
                 }
                {(usrdetails.sound_type==='Word' || usrdetails.sound_type==='Syllable')?
                (<tr>
                  <label>{usrdetails.sound_type}  :</label>
                  <select name={usrdetails.sounds} id="APDtext" value={usrdetails.selected}
                    onChange={e => {
                     
                      usrdetails.selected = e.target.value

                      this.setState({
    
                        PatientSoundDisorderDetails: this.state.PatientSoundDisorderDetails + ":" + usrdetails.sounds + ":Syllable:" + e.target.value,

                      })


                    }}  >
                    <option> select option</option>
                    <option>initial</option>
                    <option>Medial</option>
                    <option>Final</option>
                  </select>

                </tr>):
                (<tr>
                  <label>{usrdetails.sound_type} :</label>
                  <select name="Phrases" id="APDtext" value={usrdetails.selected} onChange={e => {
                    usrdetails.selected = e.target.value
                    this.setState({

                      PatientSoundDisorderDetails: this.state.PatientSoundDisorderDetails + ":" + usrdetails.sounds + ":Phrases:" + e.target.value,



                    })
                  }}


                  >
                    <option> select Yes/No</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </tr>)}

             

              </table>
            )}
          </div>

        </div>
      </div>
    );
  }
}
export default Popup;