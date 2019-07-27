import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import LogItem from './LogItem'
import Preloader from '../layouts/Preloader'
import PropTypes from 'prop-types'
import { getLogs } from '../../actions/logActions'

const Logs = ({ log: {logs, loading, search}, getLogs}) => {

  
  useEffect(() => {

    getLogs();

    // eslint-disable-next-line
  }, []);

  if(loading || logs === null) {

    return <Preloader />

  };

  return (
    <ul className="collection with-header">
      <li className="collection-header"><h4 className="center">System Logs</h4></li>

      {!loading && logs.length === 0 ? (<p className="center">No Logs to show...</p>) : (
        
        search !== null ? 
        search.map(log => <LogItem key={log._id} log={log} />)
        
        : logs.map(log => <LogItem key={log._id} log={log} />))}     

    </ul>
  )
}

Logs.prototypes = {

  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired,

}

//just like map reducer to props
const mapStateToProps = state => ({
  //you can call log (a props) any name you want
  log: state.log
  
})

export default connect(mapStateToProps, { getLogs })(Logs);
