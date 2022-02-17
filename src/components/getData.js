const HandleUpdData = (arr) => {
  if ((getData.length = 0)) {
    getData.push(arr);
    console.log(getData);
  } else {
    getData.splice(0, 1, arr);
    console.log(getData);
  }
};
const getData = [];

export { getData, HandleUpdData };
