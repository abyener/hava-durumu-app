import React,{Component} from 'react';

class Weather extends Component {
    render(){
        return (
            <div className="flow-text">
             {this.props.city && this.props.country && <p><b>Konum: </b>{this.props.city},{this.props.country} </p>}
             {this.props.temp && <p><b>Sıcaklık:</b> {this.props.temp} </p> }
             {this.props.humidity && <p><b>Nem:</b> {this.props.humidity} </p>}
             {this.props.description && <p><b>Açıklama:</b> {this.props.description}</p> }
             {this.props.error && <p><b>Hata:</b> {this.props.error}</p>}
            </div>
          );
    }

}

export default Weather;
