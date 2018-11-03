// Lab09

// created Fall 2018 (11/02) 
// @author: Chan Kim (ck45) for CS 336 at Calvin College  

import React from 'react';
import ReactDOM from 'react-dom';
import Remarkable from 'remarkable';
import $ from 'jquery';

import '../css/base.css';

import CommentBox from './CommentBox';

ReactDOM.render(
  <CommentBox url="/api/comments" pollInterval={2000} />,
  document.getElementById('content')
);