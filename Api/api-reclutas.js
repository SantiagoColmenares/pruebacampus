const opcion = {
    "GET":() => getDataAll(),
    "POST":(data) => postData(data),
    "PUT":(data,id) => putData(data,id),
    "DELETE":(id) => deleteData(id),
    "SEARCH": (data) => searchData(data)
}
let config = {
    headers: new Headers({
        "Content-Type":"application/json"
    })
};

const getDataAll = async()=>{
    config.method = "GET";
    let res = await ( await fetch("http://localhost:3000/reclutas",config)).json();
    return res;
}

const postData = async (data) => {
    config.method = "POST";
    config.body = JSON.stringify(data);
    let res = await (await fetch("http://localhost:3000/reclutas", config)).json();
    console.log(res);
}

const putData = async (data, id) => {
    config.method = "PUT";
    config.body = JSON.stringify(data);
    let res = (await fetch(`http://localhost:3000/${id}`, config)).json();
    return res;
}

const deleteData = async (data, id) => {
    config, method = "DELETE";
    config.body = JSON.stringify(data);
    let res = (await fetch(`http://localhost:3000/${id}`, config)).json();
    return res;
}

const searchData = async(data) =>{
    config.body = "SEARCH";
    let res = (await fetch (`http://localhost:3000/${Object.values(data).join("")}`,config)).json()
    return res
}


export{
    getDataAll,
    postData,
    putData,
    deleteData,
    searchData,
    opcion,
}
