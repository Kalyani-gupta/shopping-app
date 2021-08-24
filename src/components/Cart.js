import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import KeyboardArrowUpRoundedIcon from '@material-ui/icons/KeyboardArrowUpRounded';
import KeyboardArrowDownRoundedIcon from '@material-ui/icons/KeyboardArrowDownRounded';
import {removeFromBag, addQty, subQty} from './actions/cartActions';
import {Card} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { Button } from 'react-bootstrap';
class Cart extends React.Component {

    handleRemove = (id) => {
        this.props.removeFromBag(id)    
    }

    handleAddQty = (id) => {
        this.props.addQty(id)
    }

    handleSubQty = (id) => {
        this.props.subQty(id)
    }

    render() {
        let addedItems = this.props.items.length ?
            (
                this.props.items.map(item => {
                    return (
                        <Card key={item.id} className="text-center card">
                            <Image variant="top" src={item.img} alt = {item.title} width="320" height="320"/>
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>{item.desc}</Card.Text>
                                <Card.Text><b>Price: {item.price}</b></Card.Text>
                                <Card.Text><b>Quantity: {item.quantity}</b></Card.Text>
                                <p>
                                    <span>
                                        <Link to="/bag"><KeyboardArrowUpRoundedIcon onClick={() => {this.handleAddQty(item.id)}}/></Link>
                                    </span>
                                    <span>
                                        <Link to="/bag"><KeyboardArrowDownRoundedIcon onClick={()=>{this.handleSubQty(item.id)}}/></Link>
                                    </span>
                                </p>
                                <p>
                                    <Button variant="dark" onClick={()=>{this.handleRemove(item.id)}}>Remove</Button>
                                </p>
                            </Card.Body>
                            
                        </Card>
                    // <li key={item.id} style={{listStyle:"none"}}>
                    //     <div>
                    //         <img src={item.img} alt={item.title}></img>
                    //     </div>

                    //     <div>
                    //         <span>{item.title}</span>
                    //         <p>{item.desc}</p>
                    //         <p><b>Price: Rs.{item.price}</b></p>
                    //         <p><b>Quantity: {item.quantity}</b>
                    //         <span><Link to="/bag"><KeyboardArrowUpRoundedIcon onClick={()=>{this.handleAddQty(item.id)}}/></Link>
                    //         <Link to="/bag"><KeyboardArrowDownRoundedIcon onClick={()=>{this.handleSubQty(item.id)}}/></Link></span>
                    //         </p>
                    //     </div>

                    //     <div>
                    //         <button onClick={()=>{this.handleRemove(item.id)}}>Remove</button>
                    //     </div>

                    // </li>
                    )
                })
            ):
            (
                <p>No item added in bag.</p>
            )
            console.log(this.props.items.length)
            return (
                <div className="container">
                    
                    <h3>Items in Bag: {this.props.items.length}</h3>
                        <div className="box">
                       
                        {addedItems}
                       
                        </div>
                    
                    

                </div>
            )
    }
}


const mapStateToProps = (state) => {
    return {
        items: state.addedItems
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeFromBag: (id) => {dispatch(removeFromBag(id))},
        addQty: (id) => {dispatch(addQty(id))},
        subQty: (id) => {dispatch(subQty(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)
