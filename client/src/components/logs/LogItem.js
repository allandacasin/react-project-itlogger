import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import { deleteLog, setCurrent } from '../../actions/logActions'
import { connect } from 'react-redux'

import M from 'materialize-css/dist/js/materialize.min.js'

const LogItem = ({log, deleteLog, setCurrent}) => {

  const {_id, attention, message, tech, date} = log;

  const onDelete = () => {

    deleteLog(_id);

    M.toast({ html: 'Log deleted.'})
  }

  return (
    <li className="collection-item">
      <div>
        <a onClick = {() => setCurrent(log)} href='$edit-log-modal' className={`modal-trigger ${attention ? 'red-text' : 'blue-text'}`}>
          {message} 
        </a>
        <br />
        <span className='grey-text'>
          <span className='black-text'>ID no. {_id}</span> last update by {' '}
          <span className='black-text'>{tech}</span> on{' '}
          <Moment format='MMMM Do YYYY, h:mm:ss a'>{date}</Moment>
        </span>
        <a href="#!" onClick={onDelete} className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  )
}

LogItem.propTypes = {

  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,

}

export default connect(null, { deleteLog, setCurrent })(LogItem);

