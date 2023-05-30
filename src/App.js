import React from "react";
import {Component} from "react";
import Groups from "./Groups";
import Staffs from "./Staffs";
import CustomNavbar from './Navbar';
import {Row, Container, Col} from "reactstrap";

export default class App extends Component {

  state = {
    staffs :[],
    currentGrou: "",
  };

  changeGroup = (group) => {
    this.setState({currentGroup : group.groupName});
    this.getStaffs(group.id);
  };

  getStaffs = (groupId) => {
    let url = "http://localhost:3000/groups";
    if (groupId) {
      url += "?groupId=" + groupId;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({staffs: data}));
  }

  componentDidMount() {
    this.getStaffs();
  }

  render () {
    return (
      <Container>
        <CustomNavbar/>
          <Row>
            <Col xs="3">
              <Groups
              changeGroup={this.changeGroup}
              currentGroup={this.state.currentGroup}
              />
            </Col>
            <Col xs="9">
              <Staffs
                staffs={this.state.staffs}
                currentGroup={this.state.currentGroup}

              />
            </Col>
          </Row>
        </Container>
    );
  }
}