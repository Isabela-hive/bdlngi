let backendUrl = "http://localhost:2000"; //"https://www.be.budalangi.com";
const defau = {
  appName: "budalang'i adage",
  phrase: "All about Budalangi",
  backendUrl,
  jsonGet(url, token) {
    return fetch(`${backendUrl}${url}`, {
      method: "GET",
      headers: {
        bunyala_token: token,
        "Content-Type": "application/json",
      },
    });
  },
};

export default defau;
