export const environment = {
  production: true,
  baseUrl : "https://garage-front.tobywallet.fr/",
  wsUrl : "https://garage-back.tobywallet.fr/",
  status : {
    deleted : -1,
    created : 0,
    validated : 1
  },
  carStatus : {
    inCirculation : 0, 
    deposited : 1,
    inReparation: 2
  },
  repairStatus : {
    todo : 0,
    inprogress : 1,
    ended : 2
  },
  tva : 20,
  // baseUrl : "http://localhost:4200",
  // wsUrl : "http://localhost:3000",
};
