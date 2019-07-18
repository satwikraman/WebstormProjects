import React from 'react'

const Ninjas = ({ ninjas, deleteninja }) => {

  // const { ninjas } = this.props;
  // const ninjaList = ninjas.map(ninja => {
  //   if (ninja.age > 20){
  //     return (
  //       <div className="ninja" key={ninja.id}>
  //         <div>Name: { ninja.name }</div>
  //         <div>Age: { ninja.age }</div>
  //         <div>Belt: { ninja.belt }</div>
  //       </div>
  //     )
  //   } else {
  //     return null
  //   }
  // });

  return (
    <div className="ninja-list">
      {
        ninjas.map(ninja => {
          return true ? (
            <div className="ninja" key={ninja.id}>
              <React.Fragment>Name: {ninja.name}</React.Fragment><br />
              <React.Fragment>Age: {ninja.age}</React.Fragment><br />
              <React.Fragment>Belt: {ninja.belt}</React.Fragment><br />
              <React.Fragment>id:{ninja.id}</React.Fragment><br />
              <button onClick={() => { deleteninja(ninja.id) }}>Delete</button>
              <hr />
            </div>
          ) : null
        })
      }
    </div>
  );

}

export default Ninjas