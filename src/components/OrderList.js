import React, {Component} from 'react';

class OrderList extends Component {
    render() {
        return (
            <ol type={this.props.item.type}>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ol>
        );
    }
}

export default OrderList