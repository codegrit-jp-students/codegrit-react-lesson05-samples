/** @jsx jsx */
import { Component } from 'react';
import { css, jsx } from '@emotion/core'

const buttonCss = css({
  color: '#fff',
  backgroundColor: '#D9728E',
  marginBottom: '7px',
  padding: '10px 20px',
})

export default class extends Component {
  render() {
    return (
      <main style={{ margin: 50 }}>
        <button css={buttonCss}>Test</button>
      </main>
    );
  }
}