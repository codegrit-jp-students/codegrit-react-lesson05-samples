/** @jsx jsx */
import React, { Component } from 'react';
import styled from '@emotion/styled/macro'
import { css, jsx } from '@emotion/core'

const Button = styled.button({
  color: '#fff',
  backgroundColor: '#D9728E',
  marginBottom: '7px',
  padding: '10px 20px',
})

const btnLabelCss = css({
  label: 'Button'
})

const buttonCss = css({
  color: '#fff',
  backgroundColor: '#D9728E',
  marginBottom: '7px',
  padding: '10px 20px',
})

class App extends Component {
  render() {
    return (
      <main style={{ margin: 50 }}>
        <button css={[buttonCss, btnLabelCss]}>Test</button>
        <Button>Test2</Button>
      </main>
    );
  }
}

export default App;
