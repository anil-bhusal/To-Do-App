import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import { message, Popconfirm, Modal } from 'antd';
import CreateToDoTask from './createToDoTask';

const ToDoTaskList = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

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
                                                <Col lg={3}>
                                                    <div className='to-do-item'>
                                                        <h5>Task Name : {item.taskName}</h5>
                                                        <p>Task Desc : {item.taskDesc}</p>
                                                        <p>Task DueDate : {item.dueDate}</p>
                                                        <p>Task CompletionRate : {item.taskCompletionRate}</p>
                                                        <button className='btn' onClick={showModal}>Update Status</button>
                                                        <Modal open={isModalOpen} onCancel={handleCancel} footer={null}>
                                                            <CreateToDoTask name="edit" fillForm={item} fetchData={fetchData} />
                                                        </Modal>
                                                    </div>
                                                </Col>
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