const getImageURL = (originImage: string) => {
    const locationUrl = window.location.pathname;
    const count = locationUrl.split("/").length - 2;
    let addString = "";
    if (count === 0) addString = "./";
    for (let i = 0; i < count; i++) {
        addString += "../";
    }

    const newUrl = originImage.replace("./", addString);
    return newUrl;
};

export default getImageURL;
