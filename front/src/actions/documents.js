import { RepresentationService } from '../services'

const repr = new RepresentationService
const getDocumentList = ({ params = null, additional = false, role = null, signal = null }) => {
  if (role === "CliAdm") {
    return repr.displayDeleteList('documents', params, additional, signal)
  }
  else {
    return repr.displaySimpleList('documents', params, additional, signal)
  }
}

const getDocuments = ({ signal = null, params = null }) => {
  return async dispatch => {
    await foxApi.getEntityList('documents', params, signal)
      .then(documents => {
        if (documents.length > 0) {
          dispatch(_addAllDocumentsToStore(documents))
          return Promise.resolve("Got some docs")
        }
      })
  }
}

const addNewDocument = (document) => {
  return dispatch => dispatch(_updateDocument(document))
}

const deleteDocument = (docId) => {
  return dispatch => dispatch(_deleteDocument(docId))

}

const deleteDocumentsFromStore = (allDocuments) => {
  return dispatch => dispatch(_deleteDocumentsFromStore(allDocuments))
}

const _updateDocument = docInfo => ({
  type: "UPDATE_DOCUMENT",
  docInfo: docInfo
})

const _deleteDocument = (docId) => ({
  type: "DELETE_DOCUMENT",
  docId: docId
})

const _addAllDocumentsToStore = (documents) => ({
  type: "ADD_ALL_DOCUMENTS_TO_STORE",
  projectDocs: documents
})

const _deleteDocumentsFromStore = () => ({
  type: "DELETE_DOCUMENTS_FROM_STORE"
})

export {
  getDocumentList,
  getDocuments,
  addNewDocument,
  deleteDocument,
  deleteDocumentsFromStore
}
