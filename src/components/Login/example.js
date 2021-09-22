import React from 'react'
import ReactCircleModal from 'react-circle-modal'

const Example = () => {
  return (
    <ReactCircleModal
      backgroundColor="#97349a"
      toogleComponent={onClick => (
        <button onClick={onClick}>
          Click here to open modal
        </button>
      )}
      // Optional fields and their default values
      offsetX={0}
      offsetY={0}
    >
      {(onClick) => (
        <div style={{ backgroundColor: '#fff', padding: '1em' }}>
          <p>
            Content inside of modal
          </p>
          <button onClick={onClick}>
            Click here to close modal
          </button>
        </div>
      )}
    </ReactCircleModal>
  )
}

export default Example;

