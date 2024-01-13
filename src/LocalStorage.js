const getItems = ()=>{
    const get = localStorage.getItem("theme");
    return get;

}
const setItem = ()=>{
    const set = localStorage.setItem("theme",false)
    return set ;
}

export default {getItems ,setItem};
