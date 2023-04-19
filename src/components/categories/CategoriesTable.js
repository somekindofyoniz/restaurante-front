import { map } from 'lodash'
import React from 'react'
import { Image, Table, Button, Icon } from 'semantic-ui-react'
import './CategoriesTable.scss'

export function CategoriesTable(props) {
    const { categories } = props;
    return (
        <Table>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Photo</Table.HeaderCell>
                    <Table.HeaderCell>Title</Table.HeaderCell>
                    <Table.HeaderCell>Description</Table.HeaderCell>
                    <Table.HeaderCell>Actions</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {map(categories, (category, id)=>(
                 <Table.Row key={id}>
                    <Table.Cell width={2}><Image className='cat-image' src={category.image} size='sm'/></Table.Cell>
                    <Table.Cell>{category.title}</Table.Cell>
                    <Table.Cell>{category.description}</Table.Cell>

                    <Actions category={category} />
                 </Table.Row>   
                ))}
            </Table.Body>
        </Table>
    )
}

function Actions(props) {
    const {category, editCategory, onDelete} = props;
    return (
        <Table.Cell width={2} textAlign='right'>
            <Button icon positive onClick={() => console.log(category)}>
                <Icon name='pencil' />
            </Button>
            <Button icon negative onClick={() => console.log(category)}>
                <Icon name='trash' />
            </Button>
        </Table.Cell>
    )
}
