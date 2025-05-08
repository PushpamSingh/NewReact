export const Card =(props)=>{
    console.log("props: ",props);
    const {username,btnText="Visit me"}=props;
    
    return (
        <div className="border-1 border-blue-500 mt-2 p-4 flex justify-center items-center">
        <img src="./vite.svg" alt=""  className="w-[50%] h-full"/>
      <div className="flex flex-col">
        {/* <h1>{props.username}</h1> */}
        <h1>{username}</h1>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, quod
          sapiente numquam aut commodi mollitia vitae suscipit adipisci pariatur
          placeat nostrum quo quis omnis impedit nisi. Sunt odio pariatur
          corporis!
        </h3>
        <button>{btnText}</button>
      </div>
      </div>
    );
}