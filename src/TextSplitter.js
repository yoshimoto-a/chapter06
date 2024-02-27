/*改行するコンポーネント*/
import React from 'react';

const TextSplitter = ({text}) => {

  /* 改行タグで分割し、空文字しかない行は削除しておく */
    const ary = text.split('<br/>').filter(item => item !== "");
    let newText = ary.map((item, index) => {
      /*1行目以外各行の値と改行を結合する*/
      return index !== 0 ? (
            <React.Fragment key={index}>
                {item}<br/>
            </React.Fragment>
            ):null;
          });
      return newText;
}

export default TextSplitter;