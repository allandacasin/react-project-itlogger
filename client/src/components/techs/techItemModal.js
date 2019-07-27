import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {deleteTech} from '../../actions/techActions'

import M from 'materialize-css/dist/js/materialize.min.js'

const TechItemModal = ({ tech, deleteTech}) => {

  const {_id, firstName, lastName} = tech;

  const onDelete = () => {

    deleteTech(_id);

    M.toast({ html: 'Tech deleted.'})

  }


  return (
    <div className="collection-item">
      <div>{firstName}{' '}{lastName}</div>
      <a href="#!" onClick={onDelete} className="secondary-content">
        <i className="material-icons grey-text">delete</i>
      </a>
    </div>
  )
}

TechItemModal.propTypes = {

  tech: PropTypes.object.isRequired,
  deleteTech: PropTypes.func,

}

export default connect(null, {deleteTech})(TechItemModal)
