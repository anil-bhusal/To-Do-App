import React, { useEffect } from 'react'
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';


const toDoTaskSchema = Yup.object().shape({
    taskName: Yup.string().required('Required'),
    taskDesc: Yup.string().required('Required'),
    dueDate: Yup.string().required('Required'),
    taskCompletionRate: Yup.string().required('Required'),
});

const CreateToDoTask = (props) => {
    const navigate = useNavigate()

    const createTask = async (values) => {
        const requestOptions = {
            method: props.name ? "PUT" : "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        };

        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/tasks`, requestOptions);
        const data = await response.json()

        if (data) {
            message.success(data.msg)
        }
    }


    return (
        <div className='App'>
            <Formik
                initialValues={props.name ? {
                    _id: props.fillForm._id,
                    taskName: props.fillForm.taskName,
                    taskDesc: props.fillForm.taskDesc,
                    dueDate: props.fillForm.dueDate,
                    taskCompletionRate: props.fillForm.taskCompletionRate,
                } : {
                    taskName: '',
                    taskDesc: '',
                    dueDate: '',
                    taskCompletionRate: '',
                }}
                validationSchema={toDoTaskSchema}
                onSubmit={(values, { resetForm }) => {
                    createTask(values)
                    resetForm()
                    navigate('/')
                }}
            >
                {({ errors, touched, values, handleChange, handleBlur, handleSubmit }) => (
                    <div className='to-do'>
                        <Form onSubmit={handleSubmit}>
                            <h1>add to do task</h1>

                            <Field name="taskName" type="text" placeholder="task name" value={values.taskName} onChange={handleChange} onBlur={handleBlur} />
                            {errors.taskName && touched.taskName ? (<div className="error">{errors.taskName}</div>) : null}

                            <Field name="taskDesc" type="text" placeholder="task description" value={values.taskDesc} onChange={handleChange} onBlur={handleBlur} />
                            {errors.taskDesc && touched.taskDesc ? (<div className="error">{errors.taskDesc}</div>) : null}

                            <Field name="dueDate" type="date" placeholder="task due date" value={values.dueDate} onChange={handleChange} onBlur={handleBlur} />
                            {errors.dueDate && touched.dueDate ? (<div className="error">{errors.dueDate}</div>) : null}

                            <Field name="taskCompletionRate" type="percentage" placeholder="task completion rate" value={values.taskCompletionRate} onChange={handleChange} onBlur={handleBlur} />
                            {errors.taskCompletionRate && touched.taskCompletionRate ? (<div className="error">{errors.taskCompletionRate}</div>) : null}

                            <button className='btn btn-success' type="submit">{props.name ? "edit task" : "add task"}</button>
                        </Form>
                    </div>
                )}
            </Formik>
        </div>
    )
}
export default CreateToDoTask;