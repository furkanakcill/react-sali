import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import { connect } from "react-redux";

import { bindActionCreators } from "redux";
import * as userActions from "./redux/actions/userActions";
import BookDetail from "./components/books/BookDetail";

import Login from "./components/login/Login";
import Register from "./components/login/Register";
import { Route, Routes,} from "react-router-dom";
import { Container, Row, Col  } from "reactstrap";

function App() {
  // const [isLogin, setIsLogin] = useState(false);
  // useEffect(() => {
  //   if (this.props.currentUser) {
  //     setIsLogin(false);
  //   } else {
  //     setIsLogin(true);
  //   }
  // }, [isLogin])
  return (
    <>
      {/* {isLogin ? <Header /> : <h2>Not Found</h2>} */}

      <Container>
        <Row>
          <Col >
            <Header />
            
          </Col>
        </Row>
      </Container>
        
          
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        
   
    </>
  );
}

// function mapStateToProps(state) {
//   return {
//     currentUser: state.userReducer,
//   }
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: {
//       login: bindActionCreators(userActions.loginUser, dispatch),
//     }
//   }
// }

export default App;
