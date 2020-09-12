import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null
    }
  }
  handleChange = (event)=>{    
    const objectUrl = URL.createObjectURL(event.target.files[0]);
    this.setState({
      selectedFile:objectUrl
    })
  }
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <b className="navbar-brand mr-auto mr-lg-0">
            <img alt="Logo" src={logo} />
              Face Mask Detection App
            </b>
        </nav>
        <main role="main" className="container">
          <div className="my-3 p-3 bg-white rounded shadow-sm">
            <h6 className="border-bottom border-gray pb-2 mb-0">Please upload the face image</h6>
            <div className="media text-muted pt-3">
              <form className="">
                {/*was-validated*/}
                <div className="form-group">
                  <div className="custom-file">
                    <input type="file" className="custom-file-input" 
                      id="validatedCustomFile" 
                      required 
                      accept="image/x-png,image/gif,image/jpeg" 
                      ref="file" 
                      onChange={this.handleChange}
                      />
                    <label className="custom-file-label" for="validatedCustomFile">Choose file...</label>
                    {/*<div className="invalid-feedback">Example invalid custom file feedback</div>*/}
                    
                  </div>
                </div>
                <div className="form-group">
                {this.state.selectedFile &&  <img className="imgPrivew" src={this.state.selectedFile} /> }
                </div>
                <div className="form-group">
                  <button type="button" className="btn btn-outline-success mt-10">Upload</button>
                </div>

              </form>
            </div>
          </div>
        </main>
      </div>
    );
  }
};

export default App;
