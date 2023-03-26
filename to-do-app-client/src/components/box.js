import React, { useState, useEffect } from 'react';
import { Col } from 'react-bootstrap';
import { message, Popconfirm, Modal } from 'antd';
import CreateToDoTask from './createToDoTask';

const Box = ({ item, fetchData, taskStatus }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };


    return (
        <>
            <Col lg={3}>
                <div className='to-do-item'>
                    <h5>Task Name : {item.taskName}</h5>
                    <p>Task Desc : {item.taskDesc}</p>
                    <p>Task DueDate : {item.dueDate}</p>
                    <p>Task CompletionRate : {item.taskCompletionRate} % </p>
                    {taskStatus ? ' ' : (<button className='btn' onClick={showModal}>Update Status</button>) }
                    <Modal open={isModalOpen} onCancel={handleCancel} footer={null}>
                        <CreateToDoTask name="update" fillForm={item} fetchData={fetchData} />
                    </Modal>
                </div>
            </Col>
        </>
    )
}
export default Box