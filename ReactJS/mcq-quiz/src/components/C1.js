import React from 'react';

var C1=({questions,rowNo})=>{
    questions=questions.filter(que=>{
        return que.rowNo===rowNo
    })
    var questionList=questions.length ?(questions.map((que)=>{
        return(
            <div className=" container">
          
            <form action="#">
            <div className="Container" dangerouslySetInnerHTML={{__html: que.question}}></div>
            <p>
            <label>
                <input name="group1" type="radio"  />
                <span>{que.answerOne}</span>
            </label>
            </p>
            <p>
            <label>
                <input name="group1" type="radio" />
                <span>{que.answerTwo}</span>
            </label>
            </p>
            <p>
            <label>
                <input  name="group1" type="radio"  />
                <span>{que.answerThree}</span>
            </label>
            </p>
            <p>
            <label>
                <input name="group1" type="radio"  />
                <span>{que.answerFour}</span>
             </label>
            </p>
            <button className="btn waves-effect waves-light  right" type="submit" >Submit</button>
            <hr />
            <br />
            </form>
              
               
            </div>
        )
    })):(
        <p>List is empty</p>
    )
return(
   <div>
       <hr />
       {questionList}
   </div>
   
)
}

export default C1