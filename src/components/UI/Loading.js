import classes from "./Loading.module.css";

const Loading = ()=>{

    return <div className={classes["lds-ripple"]}><div></div><div></div></div>;

}

export default Loading;