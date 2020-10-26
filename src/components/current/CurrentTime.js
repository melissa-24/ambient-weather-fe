import React from 'react'


function CurrentTime() {
  
  let time = {
    curTime: new Date().toLocaleString(),
}

  let zulu = {
      curTime: new Date().toLocaleString('en-US', {timeZone: 'UTC'}),
  }


    return (
      <>
        <h3>Current Date & Time: {time.curTime}</h3>
        <h3>Zulu Date & Time: {zulu.curTime}</h3>
      </>
    );
};

export default CurrentTime