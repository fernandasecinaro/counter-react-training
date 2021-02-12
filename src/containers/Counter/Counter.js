import React, { useState } from 'react';
import { connect } from 'react-redux'; // connect es una funcion que devuelve un hoc
import * as actionCreators from '../../store/actions/index';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import * as actionTypes from '../../store/actions/actionTypes';

const Counter = props => {
  const [state, setstate] = useState({
    counter: 0,
  });

  return (
    <div>
      <CounterOutput value={props.ctr} />
      <CounterControl label="Increment" clicked={props.onIncrementCounter} />
      <CounterControl label="Decrement" clicked={props.onDecrementCounter} />
      <CounterControl label="Add 10" clicked={props.onAddCounter} />
      <CounterControl label="Subtract 15" clicked={props.onSubtractCounter} />
      <hr />
      <button onClick={() => props.onStoreResult(props.ctr)}>Store result</button>
      <ul>
        {props.storedResults.map(strResult => (
          <li key={strResult.id} onClick={() => props.onDeleteResult(strResult.id)}>
            {strResult.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    ctr: state.ctr.counter,
    storedResults: state.res.results,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch(actionCreators.increment()),
    onDecrementCounter: () => dispatch(actionCreators.decrement()),
    onAddCounter: () => dispatch(actionCreators.add(10)),
    onSubtractCounter: () => dispatch(actionCreators.subtract(15)),
    onStoreResult: result => dispatch(actionCreators.storeResult(result)),
    onDeleteResult: id => dispatch(actionCreators.deleteResult(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
