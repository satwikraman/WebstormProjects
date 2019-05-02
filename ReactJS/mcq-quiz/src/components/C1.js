import React from 'react';

var C1=({resp,rowNo,handleSubmit,handleChange})=>{
    let questions=resp.questions
    if(questions){
    questions=questions.filter(que=>{
        return que.rowNo===rowNo
    })

    var questionList=questions.length ?(questions.map((que)=>{
        
        return(
            <div className="container" key={rowNo}>
          
            <form className="with-gap" onSubmit={handleSubmit}>
            <div className="Container" dangerouslySetInnerHTML={{__html: que.question}}></div>
        
            <label>
                <input name="group1"  onChange={handleChange} value="a" type="radio"  />
                <span>{que.answerOne}</span>
            </label>

            <br />
            <label>
                <input name="group1"    onChange={handleChange} value="b"  type="radio" />
                <span>{que.answerTwo}</span>
            </label>
          
            <br />
            <label>
                <input  name="group1"  onChange={handleChange} value="c" type="radio"  />
                <span>{que.answerThree}</span>
            </label>
      
            <br />
            <label>
                <input name="group1"    onChange={handleChange} value="d" type="radio"  />
                <span>{que.answerFour}</span>
             </label>
             <br />
            <button className="btn waves-effect waves-light right" type="submit" >Submit</button>
            </form>
              
            </div>
        ) 
    })
    ):(
         <div className="row">
                <div className="col s12 m5">
                <div className="card-panel teal">
                    <span className="white-text">No of Correct Answers={resp.correct} out of {rowNo-1}</span>
                </div>
                </div>
            </div>
            )
          }
    
    
return(
   <div>
       {questionList}
   </div>
   
)
}

export default C1