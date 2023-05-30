import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardGroup, Button } from 'reactstrap';
import { Col } from 'reactstrap';
export default class Staffs extends Component {

    state = {
        staffs :[
            
 
        ],
        
    };

    render() {
        const {staffs} = this.props;
        return (
            <div>
                <h2>{this.props.currentGroup}</h2>
                <CardGroup>
                    {staffs.map((staff) => (
                        <Col xs="3">
                            <Card
                            style={{marginLeft: "10px", marginRight: "10px"}} key={staff.id}>
                                <CardImg
                                    top
                                    width="100%"
                                    src={staff.image}
                                    alt={staff.staffName}
                                    />
                                <CardBody>
                                    <CardTitle>{staff.staffName}</CardTitle>
                                    <CardText>{staff.desc}</CardText>
                                    <Button>Buy</Button>
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                </CardGroup>
            </div>   
        );
    }
}