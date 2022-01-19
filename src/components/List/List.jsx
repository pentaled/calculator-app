import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types'
import ListItem from './ListItem'
import { Empty, Button } from 'antd'
import { PlusOutlined, CloseOutlined } from '@ant-design/icons'
import TodoForm from '../Form/TodoForm';
import { v4 as uuidv4 } from 'uuid';

const Wrapper = styled.div`
    margin: 20px 10px;
`

const ButtonAdd = styled(Button)`
    position: absolute;
    top: 30px;
    right: 30px;
`

const List = ({ data }) => {
    const [dataList, setDataList] = useState([]);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        setDataList(data)
    }, [data])
    const actionComplete = (id) => {const newData = dataList.filter(item => item.id !== id)
        setDataList(newData)  
    }

    const actionDelete = (id) => {const newData = dataList.filter(item => item.id !== id)
        setDataList(newData)
    }

    const actionUpdateItem = (id, description) => {
        dataList.map((item) => {//update this coon
            if (id === item.id) {
                item.description = description 
            }
            return item
        })
    }

    const actionCreateItem = (values) => {
        const newTodo = {
            id: uuidv4(),
            description: values.description,
            status: "NEW"
        }
        const List = [...dataList] //duplicate array
        List.push(newTodo)
        setDataList(List)

    }

    return (
        <Wrapper>                           
            <ButtonAdd
                data-testid={showForm ? 'button-hide-form' : 'button-show-form'}
                onClick={() => setShowForm(!showForm)}
                type="primary"
                shape="circle"
                icon={showForm ? <CloseOutlined /> : <PlusOutlined />}
                size={"large"} />
            {showForm &&
                <Wrapper>
                    <TodoForm handleSubmit={actionCreateItem} />
                </Wrapper>
            }
            {dataList.length > 0? (
                dataList.map((item) => {
                    return <ListItem key={item.id} item={item} actionComplete={actionComplete} actionUpdateItem={actionUpdateItem} actionDelete={actionDelete}/>
                })
            ) : (
                <Empty />
            )} 
        </Wrapper>
    )
}

List.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        description: PropTypes.string,
        status: PropTypes.string.isRequired
    }))
}

export default List