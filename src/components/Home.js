import React from 'react'
import {connect} from 'react-redux'
import AddCircleIcon from '@material-ui/icons/AddCircle';
// import Button from '@material-ui/core/Button';
import {Card} from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import { Button } from 'react-bootstrap';
import {addToBag} from './actions/cartActions';

class Home extends React.Component {

    handleClick = (id) => {
        this.props.addToBag(id);
    }
    render() {
        let itemList = this.props.items.map(item => {
            return (
                <Card className="text-center card">
                    <Image variant="top" src={item.img} width="320" height="320"/>
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                    {item.desc}
                                </Card.Text>
                                <Card.Text>
                                    <b>Price: Rs.{item.price}</b>
                                </Card.Text>
                                <Button variant="dark" onClick={()=>{this.handleClick(item.id)}}>Add to Bag<AddCircleIcon/></Button>
                        </Card.Body>
                </Card>
            )
        })
        return (
            <div className="container">
                <h3><center>Dresses</center></h3>
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToBag: (id) => {
            dispatch(addToBag(id))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)