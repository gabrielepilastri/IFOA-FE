import { Component } from 'react'
import {RiDeleteBack2Fill} from 'react-icons/ri'


class SingleAppointment extends Component {
    render() {
        return(
            <article>
            <img src={this.props.item.img} alt={this.props.item.nome} className="person-img"/>
            <div className="person-info">
                <div className="person-action">
                    <h4>{this.props.item.nome}</h4>
                    <button className="btn" onClick={this.props.removeAppointment(this.props.item.id)}>
                        <RiDeleteBack2Fill className="icon" />
                    </button>
                </div>
                <p>{this.props.item.stato}</p>
            </div>
        </article>
        )
    }
}



// const SingleAppointment = ({item, removeAppointment}) => {
//     return (
//         <article>
//             <img src={item.img} alt={item.nome} className="person-img"/>
//             <div className="person-info">
//                 <div className="person-action">
//                     <h4>{item.nome}</h4>
//                     <button className="btn" onClick={() => removeAppointment(item.id)}>
//                         <RiDeleteBack2Fill className="icon" />
//                     </button>
//                 </div>
//                 <p>{item.stato}</p>
//             </div>
//         </article>
//     )
// }

export default SingleAppointment