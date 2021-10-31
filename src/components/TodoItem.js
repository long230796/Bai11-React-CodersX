import React, {Component} from 'react';
import classNames from 'classnames'

class TodoItem extends Component {
    render() {
        const {item} = this.props;
        let className = "pending"
        
        if (item.isComplete) {
            className += " done"
        }

        return (
            <div>
                <h2 className={className}>{item.title}</h2>
                
            </div>
        );
    }
}
// c2
// class TodoItem extends Component {
//     render() {

//        let titleClass = classNames({
//            pending: true,
//            done: this.props.item.isComplete
//        })

//         return (
//             <div>
//                 <h2 className={titleClass}>{this.props.item.title}</h2>
                
//             </div>
//         );
//     }
// }

export default TodoItem;