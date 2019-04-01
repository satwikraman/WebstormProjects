import React from 'react';

    const C1=({ninjas})=>{

        const ninjaList=ninjas.map(ninjas=>{
            return(
                <div className="c1" key={ninjas.id}>
                    <div>Name: {ninjas.name}</div>
                    <div>Age:{ninjas.age}</div>
                    <div>Height:{ninjas.height}</div>
                </div>
            )
        })
        return(
            <div className="className ninjaList">
                {ninjaList}
            </div>
        )
       
    }

export default C1