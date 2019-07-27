import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getTechs } from '../../actions/techActions'

const TechSelectOptions = ({getTechs, tech: {techs, loading}}) => {

  useEffect(() => {

    getTechs();
    // eslint-disable-next-line
  }, []);

  return (
    

    !loading && techs !== null && techs.map(t => (
      <option key={t._id} value={`${t.firstName} ${t.lastName}`}>{t.firstName}{' '}{t.lastName}</option>
    ))

  )
}

TechSelectOptions.propTypes = {

  getTechs: PropTypes.func

}

//just like map reducer to props
const mapStateToProps = state => ({
  //you can call log (a props) any name you want
  tech: state.tech
  
})

export default connect(mapStateToProps, {getTechs})(TechSelectOptions)
