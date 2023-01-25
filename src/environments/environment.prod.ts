export const environment = {
  production: true,
  baseUrl : "https://garage-front.tobywallet.fr/",
  wsUrl : "https://garage-back.tobywallet.fr/",
  pipe : {
    date : 'medium',
    number : '0.2-2'
  },
  currency : 'Ar',
  status : {
    deleted : -1,
    created : 0,
    validated : 1
  },
  carStatus : {
    inCirculation : 0, 
    deposited : 1,
    inReparation: 2,
    waitExit : 3,
  },
  repairStatus : {
    todo : 0,
    inprogress : 1,
    ended : 2
  },
  tva : 20,
  roles : {
    "1" : "Client",
    "2" : "Resp. Atelier",
    "3" : "Resp. Financier",
  }
  // baseUrl : "http://localhost:4200",
  // wsUrl : "http://localhost:3000",
};
