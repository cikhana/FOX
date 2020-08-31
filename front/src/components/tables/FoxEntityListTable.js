import React, { Component } from 'react'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCardTitle,
  CCol,
  CDataTable,
  CRow,
  CLink
} from '@coreui/react'



class FoxEntityListTable extends Component {

  alertOnClick = (e) => {
    this.props.history.push(`${this.props.match.url}/${e.id}`)
  }

  render = () => {
    return (
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader
              className="d-flex justify-content-between">
              <CCardTitle>
                {this.props.tableName}
              </CCardTitle>
              <CLink
                className="btn btn-outline-success"
                to={`${this.props.match.url}/new`}
              >
                Add new
              </CLink>
            </CCardHeader>
            <CCardBody>
              <CDataTable
                items={this.props.tableData}
                fields={this.props.fields}
                hover
                striped
                bordered
                size="sm"
                itemsPerPage={10}
                pagination
                onRowClick={this.alertOnClick}
                scopedSlots={{
                  'status':
                    (item) => (
                      <td>
                        <CBadge color={this.props.getBadge(item.status)}>
                          {item.status}
                        </CBadge>
                      </td>
                    )
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow >
    )
  }

}

export default FoxEntityListTable