import React,{Component} from 'react';

class Form extends Component {
    render(){
        return (
            <form onSubmit={this.props.getWeather}>
              <input type="text" name="city" />
              <input type="text" name="country" /> 
              <button className="btn-large">Hava Durumunu Göster</button>

            </form>
          );
    }

}

export default Form;
