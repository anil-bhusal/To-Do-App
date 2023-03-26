import Header from "../components/header";
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import Box from "../components/box";

const CompletedTask = () => {
    const navigate = useNavigate()

    const [toDoList, setToDoList] = useState([])

    const fetchData = async () => {
        debugger;
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/tasklist`)
        const data = await response.json()

        if (data) {
            setToDoList(data.taskList)
        }
        debugger;
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <Header />

            <section>
                <div className="to-do-list">
                    <h1>Here are Your Completed Task</h1>
                    <Container>
                        <Row>
                            {toDoList.length > 0 ? toDoList.map((item, id) => {
                                return (
                                    <>
                                        {item.taskCompletionRate == 100 ? (
                                            <>
                                                <Box item = {item} taskStatus="complete" />
                                            </>
                                        ) : ''}
                                    </>
                                )
                            }) : 'to do list is empty'}
                        </Row>
                    </Container>
                </div>
            </section>
        </>
    )
}
export default CompletedTask;