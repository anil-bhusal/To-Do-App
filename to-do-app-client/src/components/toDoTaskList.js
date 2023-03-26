import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Container, Row } from 'react-bootstrap';
import Box from './box';

const ToDoTaskList = () => {
    const navigate = useNavigate()

    const [toDoList, setToDoList] = useState([])

    const fetchData = async () => {
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/tasklist`)
        const data = await response.json()

        if (data) {
            setToDoList(data.taskList)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <>
            <section>
                <div className="to-do-list">
                    <h1>Here are Your To Do Task</h1>
                    <Container>
                        <Row>
                            {toDoList.length > 0 ? toDoList.map((item, id) => {
                                return (
                                    <>
                                        {item.taskCompletionRate < 100 ? (
                                            <>
                                                <Box item = {item} fetchData = {fetchData} />
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
export default ToDoTaskList;