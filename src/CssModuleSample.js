import React from 'react';
import './index.css';
import Css from './CssModuleSample.module.css';

export default class extends React.Component {

  render() {
    console.log(Css);
    return (
      <body className="bodyWrap">
        <main className={Css.wrap}>
          ...省略
        </main>
      </body>
    );
  }
}