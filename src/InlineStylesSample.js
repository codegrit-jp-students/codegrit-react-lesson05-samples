import React from 'react';

const InlineStylesSample = () => {

  const linkStyle = {
    color: 'red',
    fontSize: '16px',
    ':hover': { // これは動きません。
      color: 'blue'
    }
  }

  const listStyle = {
    marginTop: '16px',
    color: 'red',
    fontSize: '16px',
  }

  return (
    <ul>
      <li style={listStyle}>
        <a style={linkStyle}>
          リンク1
        </a>
      </li>
      <li style={listStyle}>
        <a style={linkStyle}>
          リンク2
        </a>
      </li>
    </ul>
  );
}

export default InlineStylesSample;