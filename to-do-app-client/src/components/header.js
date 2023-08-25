import React from "react"
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';

const Header = () => {

  return (
    <>
      <header>
        <div className="header-nav">
          <Container>
            <Row>
              <Col lg={3}>
                <div className="left-part">
                  <ul>
                    <li><Link to="/">to-do</Link></li>
                  </ul>
                </div>
              </Col>
              <Col lg={2}>

              </Col>
              <Col lg={6}>

                
                <div className="right-part">
                  <ul>
                    <li><Link to="/">add task</Link></li>
                    <li><Link to="/task-list">task list</Link></li>
                    <li><Link to="/completed-task">completed task</Link></li>
                    <li><Link to="/task-completion-rate">task completion rate</Link></li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </header>
    </>
  )

}

export default Header;