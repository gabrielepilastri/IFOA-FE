import { Component } from "react"
import SingleAppointment from "./SingleAppointment"

class List extends Component {
    render() {
        return(
            <>
            <ul className="user-list">
                {this.props.data.map((item) => (
                    <li key={item.id}>
                        <SingleAppointment item={item} removeAppointment={this.props.removeAppointment} />
                    </li>
                ))}
            </ul>
            </>
        )
    }
}



// const List = ({data, removeAppointment}) => {
//  return (
//     <>
//     <ul className="user-list">
//         {data.map((item) => (
//             <li key={item.id}>
//                 <SingleAppointment item={item} removeAppointment={removeAppointment} />
//             </li>
//         ))}
//     </ul>
//     </>
//  )

// }


export default List