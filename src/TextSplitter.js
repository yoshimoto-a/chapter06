/*改行するコンポーネント*/
import React from 'react';

const TextSplitter = ({text}) => {

    const ary = text.split('<br/>').filter(item => item !== "");
    let newText = ary.map((item, index) => {
      return index !== 0 ? (
            <React.Fragment key={index}>
                <br/>{item}
            </React.Fragment>
            ):null;
          });
      return newText;
}

export default TextSplitter;