import React, {useEffect} from 'react'
import TechItemModal from './techItemModal'
import { connect } from 'react-redux'
import {getTechs} from '../../actions/techActions'
import PropTypes from 'prop-types'

const TechListModal = ({getTechs, tech: {techs, loading}}) => {


  useEffect(() => {

    getTechs();

    // eslint-disable-next-line
  }, []);

  return (

    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection">
          {!loading && techs !== null && techs.map(tech => (

            <TechItemModal key={tech._id} tech={tech} />

          ))}
        </ul>
      </div>
    </div>

  )
}

TechItemModal.propTypes = {

  getTechs: PropTypes.func,
  tech: PropTypes.object.isRequired,

}

//just like map reducer to props
const mapStateToProps = state => ({
  //you can call log (a props) any name you want
  tech: state.tech
  
})

export default connect(mapStateToProps, {getTechs})(TechListModal)
