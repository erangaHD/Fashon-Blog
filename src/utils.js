const getImageUrl = (path) =>{
    return require(`./static/${path}`);
};

export default getImageUrl;