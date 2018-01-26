// import React from 'react';
import { connect } from 'react-redux';
import ItemDetail from './item_detail';
import {selectOneItem} from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  return {
    item: selectOneItem(state, ownProps.match.params.itemId)
  };
};

export default connect(mapStateToProps)(ItemDetail);
