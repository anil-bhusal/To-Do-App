import React, { useEffect, useState } from 'react';
import Header from "../components/header";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';

const TaskCompletionRate = () => {
    const [date, setDate] = useState('');
    const [completionRate, setCompletionRate] = useState(null);


    const handleSubmit = async (e) => {
        debugger;
        e.preventDefault();
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/task-completion-rate/${date}`)
        const data = await response.json()

        if (data) {
            setCompletionRate(data.taskCompletionRate);
        }
        debugger;
    };

    return (
        <>
            <Header />

            <div className='to-do-list'>
                <h1>Here Is Your Task Completion Rate</h1>
                <p>Note: remember the date that you have created the to do task</p>
                <p>if you completion rate doesnot appear then you may not have task to do on particular date</p>
                <span>Do not forget the update task completion rate.</span>

                <Container>
                    <Row>
                        <form onSubmit={handleSubmit}>
                            <label>
                                Task Date: &nbsp; &nbsp;
                                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                            </label> &nbsp; &nbsp;
                            <button type="submit">Calculate</button>
                        </form>

                        <div className='completion-rate'>
                            {date ?
                                (completionRate ? <p>Average Completion Rate: {completionRate} %</p>
                                    : <p> </p>)
                                : <p>Please select date</p>
                            }
                        </div>
                    </Row>
                </Container>
            </div>
        </>
    )
}
export default TaskCompletionRate;