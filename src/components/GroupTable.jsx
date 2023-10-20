
import { Table } from '@mantine/core';
import React from 'react'

const GroupTable = ({ data, tableContent ,sameCheck}) => {
  return (
      <Table highlightOnHover withTableBorder withColumnBorders className='font-calde text-start'>
          <Table.Thead>
              <Table.Tr>
                  <Table.Th>Name</Table.Th>
                  <Table.Th>ID</Table.Th>
                  <Table.Th>Department</Table.Th>
                  <Table.Th>Section</Table.Th>
                  <Table.Th>Batch</Table.Th>
              </Table.Tr>
          </Table.Thead>
          <Table.Tbody>

              {tableContent.map((table, ind) => (
                  <Table.Tr key={ind} >
                      <Table.Td>{data[`studentName${table}`] || '--'}</Table.Td>
                      <Table.Td>{data[`studentId${table}`] || '--'} </Table.Td>
                      <Table.Td>{sameCheck ? data[`studentDepartment1`] : data[`studentDepartment${table}`] || '--'}</Table.Td>
                      <Table.Td>{sameCheck ? data[`studentSection1`] : data[`studentSection${table}`] || '--'}</Table.Td>
                      <Table.Td>{sameCheck ? data[`studentBatch1`] : data[`studentBatch${table}`] || '--'}</Table.Td>
                  </Table.Tr>
              ))}


          </Table.Tbody>
      </Table>
  )
}

export default GroupTable