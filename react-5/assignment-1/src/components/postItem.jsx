const PostItem = ({id , title}) =>{
    return(
       <div style={{ border: "1px solid black", margin: "20px", padding: "10px" }}>
         <p> {id} </p>
         <p> {title} </p>
       </div>
    );
};

export default PostItem;