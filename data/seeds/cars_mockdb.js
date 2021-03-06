
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {"make":"Volvo","model":"C30","year":2008,"VIN":"1G6DN57PX90225111","mileage":68422,"transmission":"manual","title_status":"salvage"},
        {"make":"Chevrolet","model":"Corvette","year":1978,"VIN":"JN8AF5MR5ET168798","mileage":56327,"transmission":"automatic","title_status":null},
        {"make":"Honda","model":"S2000","year":2009,"VIN":"1G4HJ5EM3AU104934","mileage":68381,"transmission":"automatic","title_status":null},
        {"make":"Ford","model":"E250","year":2009,"VIN":"WBAFR9C54DD857915","mileage":21812,"transmission":"dual clutch","title_status":"clean"},
        {"make":"Chevrolet","model":"Express 2500","year":2003,"VIN":"1FAHP3EN3BW278482","mileage":33243,"transmission":"dual clutch","title_status":null},
        {"make":"Dodge","model":"D250 Club","year":1992,"VIN":"5GAKRBKD4DJ178473","mileage":9739,"transmission":"dual clutch","title_status":"clean"},
        {"make":"Hyundai","model":"HED-5","year":2012,"VIN":"1GYS3DEF2DR791356","mileage":33650,"transmission":"automatic","title_status":"clean"},
        {"make":"Mazda","model":"MPV","year":1992,"VIN":"3GYFNJE49AS710676","mileage":59954,"transmission":"dual clutch","title_status":"clean"},
        {"make":"Dodge","model":"Charger","year":2010,"VIN":"1ZVBP8JS7B5029016","mileage":54401,"transmission":null,"title_status":"salvage"},
        {"make":"Toyota","model":"Corolla","year":2007,"VIN":"1G6DK8EYXB0834937","mileage":14554,"transmission":"dual clutch","title_status":"clean"},
        {"make":"Volvo","model":"940","year":1995,"VIN":"1G6DL1E31C0662808","mileage":3283,"transmission":"automatic","title_status":"clean"},
        {"make":"Audi","model":"A6","year":2006,"VIN":"1G6AB5SA9D0083356","mileage":10037,"transmission":"dual clutch","title_status":null},
        {"make":"Kia","model":"Sorento","year":2003,"VIN":"1FTWX3B55AE577205","mileage":62444,"transmission":"manual","title_status":"clean"},
        {"make":"Bentley","model":"Continental Flying Spur","year":2006,"VIN":"JA32U2FU3EU774163","mileage":26113,"transmission":"automatic","title_status":"clean"},
        {"make":"BMW","model":"3 Series","year":1998,"VIN":"5N1CR2MM8EC033048","mileage":42006,"transmission":"manual","title_status":"salvage"},
        {"make":"Dodge","model":"Ram 1500","year":1996,"VIN":"5GAKVCKD0DJ330539","mileage":191,"transmission":"dual clutch","title_status":"clean"},
        {"make":"Dodge","model":"Intrepid","year":2003,"VIN":"1G4CU541744890640","mileage":29727,"transmission":"dual clutch","title_status":"salvage"},
        {"make":"Chevrolet","model":"S10","year":1996,"VIN":"WAUVT64B93N738363","mileage":3341,"transmission":"dual clutch","title_status":null},
        {"make":"Isuzu","model":"Hombre Space","year":1998,"VIN":"WBABN33483P815839","mileage":69354,"transmission":"manual","title_status":null},
        {"make":"Hyundai","model":"Sonata","year":1996,"VIN":"1ZVBP8AM9C5347528","mileage":10450,"transmission":"dual clutch","title_status":null},
        {"make":"Hyundai","model":"Sonata","year":1999,"VIN":"1G6DV5EP3C0494769","mileage":27020,"transmission":"manual","title_status":null},
        {"make":"Honda","model":"CR-V","year":2010,"VIN":"WBA1F5C58FV427734","mileage":43982,"transmission":"automatic","title_status":"salvage"},
        {"make":"Chevrolet","model":"Express 1500","year":1997,"VIN":"1GYUCEEJ3AR005028","mileage":16053,"transmission":"automatic","title_status":"clean"},
        {"make":"Mazda","model":"RX-8","year":2004,"VIN":"19XFB2E25CE085956","mileage":41419,"transmission":"dual clutch","title_status":"clean"},
        {"make":"Chevrolet","model":"Corsica","year":1994,"VIN":"2C3CDZAT5FH091824","mileage":12619,"transmission":"automatic","title_status":"salvage"},
        {"make":"Toyota","model":"Tacoma","year":2012,"VIN":"YV1672MW1B2694702","mileage":32802,"transmission":"manual","title_status":"clean"},
        {"make":"Toyota","model":"Avalon","year":2002,"VIN":"WBAPK5C50AA572241","mileage":44417,"transmission":"dual clutch","title_status":"clean"},
        {"make":"Lexus","model":"IS","year":2002,"VIN":"19UUA56632A504628","mileage":67700,"transmission":"manual","title_status":"clean"},
        {"make":"Suzuki","model":"Kizashi","year":2010,"VIN":"SCFBF03B78G200219","mileage":34459,"transmission":"manual","title_status":"salvage"},
        {"make":"Dodge","model":"Ramcharger","year":1993,"VIN":"2FMHK6CT7AB298948","mileage":16254,"transmission":"automatic","title_status":null},
        {"make":"Studebaker","model":"Avanti","year":1962,"VIN":"2G61V5S38D9603237","mileage":30836,"transmission":"dual clutch","title_status":"salvage"},
        {"make":"Nissan","model":"Altima","year":2010,"VIN":"WAUFGAFB5BN192376","mileage":33498,"transmission":"automatic","title_status":"salvage"},
        {"make":"Mercedes-Benz","model":"500SL","year":1993,"VIN":"WVGAV7AX7CW152199","mileage":42616,"transmission":"dual clutch","title_status":null},
        {"make":"Lexus","model":"LX","year":2006,"VIN":"SCBDR33W59C757466","mileage":10264,"transmission":"dual clutch","title_status":"salvage"},
        {"make":"Pontiac","model":"Grand Prix","year":2002,"VIN":"WBXPA73434W571362","mileage":46168,"transmission":"manual","title_status":"salvage"},
        {"make":"Mercury","model":"Villager","year":2001,"VIN":"SCFFDABE7CG509075","mileage":35214,"transmission":"dual clutch","title_status":"salvage"},
        {"make":"Kia","model":"Rio","year":2009,"VIN":"WAULD54B12N719688","mileage":27142,"transmission":"automatic","title_status":"salvage"},
        {"make":"Dodge","model":"Viper RT/10","year":1995,"VIN":"WBANA73595C676520","mileage":40440,"transmission":"manual","title_status":null},
        {"make":"Ford","model":"F350","year":2007,"VIN":"JH4CU26629C303929","mileage":6043,"transmission":"automatic","title_status":null},
        {"make":"Lexus","model":"LS Hybrid","year":2011,"VIN":"WBAYF4C57DD869951","mileage":44992,"transmission":"dual clutch","title_status":"clean"},
        {"make":"Lincoln","model":"Continental Mark VII","year":1985,"VIN":"1G4HP57258U350629","mileage":19492,"transmission":"dual clutch","title_status":"clean"},
        {"make":"GMC","model":"Envoy","year":2009,"VIN":"1D4PT4GX0BW417847","mileage":34271,"transmission":"dual clutch","title_status":null},
        {"make":"Austin","model":"Mini Cooper","year":1961,"VIN":"WA1DKAFP9CA660228","mileage":49424,"transmission":"manual","title_status":"clean"},
        {"make":"Honda","model":"Element","year":2005,"VIN":"2HNYD2H87DH910852","mileage":41680,"transmission":null,"title_status":"clean"},
        {"make":"Land Rover","model":"Range Rover Classic","year":1993,"VIN":"JN1CV6AP9DM637497","mileage":69494,"transmission":"automatic","title_status":"salvage"},
        {"make":"Dodge","model":"Dakota","year":2000,"VIN":"5UXZV4C55CL393728","mileage":18044,"transmission":"dual clutch","title_status":"clean"},
        {"make":"Volkswagen","model":"Rabbit","year":2009,"VIN":"WBAFV3C57FD554008","mileage":2005,"transmission":"dual clutch","title_status":"salvage"},
        {"make":"Saab","model":"9000","year":1987,"VIN":"JN8AZ1MU4CW400078","mileage":21707,"transmission":"dual clutch","title_status":"salvage"},
        {"make":"Ford","model":"F350","year":1995,"VIN":"WAULD54B43N493907","mileage":64407,"transmission":"automatic","title_status":null},
        {"make":"BMW","model":"1 Series","year":2010,"VIN":"1GYEK63N05R623254","mileage":20490,"transmission":null,"title_status":"salvage"},
        {"make":"Audi","model":"S4","year":2009,"VIN":"2C3CCAPG5DH165593","mileage":51577,"transmission":"automatic","title_status":null},
        {"make":"Pontiac","model":"G5","year":2008,"VIN":"5GAKVCED2BJ990610","mileage":47470,"transmission":"dual clutch","title_status":"salvage"},
        {"make":"Mercedes-Benz","model":"CLS-Class","year":2011,"VIN":"WAUGFAFCXFN357845","mileage":44591,"transmission":"automatic","title_status":null},
        {"make":"Maserati","model":"Biturbo","year":1986,"VIN":"1GD12ZCG2BF241095","mileage":12007,"transmission":"dual clutch","title_status":"clean"},
        {"make":"Infiniti","model":"I","year":1998,"VIN":"WP0AB2A88FK120365","mileage":49684,"transmission":"automatic","title_status":null},
        {"make":"Mercedes-Benz","model":"M-Class","year":2003,"VIN":"SCFBB04C59G183134","mileage":25867,"transmission":"automatic","title_status":null},
        {"make":"Volkswagen","model":"Eurovan","year":1992,"VIN":"5NPDH4AE0FH684216","mileage":532,"transmission":"manual","title_status":"salvage"},
        {"make":"Acura","model":"Integra","year":1992,"VIN":"4JGCB2FE4AA630326","mileage":27557,"transmission":null,"title_status":"clean"},
        {"make":"Saab","model":"9-3","year":2010,"VIN":"1N4AL3AP5EC134779","mileage":44021,"transmission":"dual clutch","title_status":"salvage"},
        {"make":"Cadillac","model":"Escalade EXT","year":2008,"VIN":"WAUVFAFH5DN768862","mileage":62078,"transmission":"dual clutch","title_status":"clean"},
        {"make":"Ford","model":"Galaxie","year":1966,"VIN":"5NPEB4AC6CH032023","mileage":57467,"transmission":null,"title_status":"clean"},
        {"make":"Pontiac","model":"Solstice","year":2009,"VIN":"SAJWA0FS3FP925941","mileage":69723,"transmission":"manual","title_status":"clean"},
        {"make":"BMW","model":"X3","year":2006,"VIN":"5J8TB4H50EL879487","mileage":66225,"transmission":"manual","title_status":null},
        {"make":"Toyota","model":"Celica","year":2002,"VIN":"SCBFT7ZA6EC756429","mileage":33518,"transmission":"automatic","title_status":"salvage"},
        {"make":"BMW","model":"X5 M","year":2013,"VIN":"1G6DN57S450572724","mileage":47347,"transmission":"automatic","title_status":"salvage"},
        {"make":"GMC","model":"Yukon","year":1999,"VIN":"WBAVD53537A258593","mileage":68095,"transmission":"manual","title_status":"salvage"},
        {"make":"Cadillac","model":"Eldorado","year":1993,"VIN":"WAUEH94F07N877650","mileage":27384,"transmission":"dual clutch","title_status":null},
        {"make":"Mazda","model":"Mazdaspeed6","year":2006,"VIN":"1FTEW1CMXEF828843","mileage":8831,"transmission":"automatic","title_status":"salvage"},
        {"make":"Suzuki","model":"XL-7","year":2003,"VIN":"WA1VMAFE6DD294628","mileage":8619,"transmission":"dual clutch","title_status":"clean"},
        {"make":"Honda","model":"Pilot","year":2005,"VIN":"1D4PT7GXXBW824933","mileage":45957,"transmission":"automatic","title_status":null},
        {"make":"Infiniti","model":"G37","year":2011,"VIN":"JTEBU4BF8CK518576","mileage":2289,"transmission":"dual clutch","title_status":null},
        {"make":"Audi","model":"A4","year":2009,"VIN":"2FMHK6DC1AB621082","mileage":52050,"transmission":"manual","title_status":"salvage"},
        {"make":"Chevrolet","model":"Silverado 1500","year":2002,"VIN":"WBAVC53588A794945","mileage":50919,"transmission":"dual clutch","title_status":null},
        {"make":"Hyundai","model":"Santa Fe","year":2002,"VIN":"WAUJT64B54N127956","mileage":25742,"transmission":"manual","title_status":"salvage"},
        {"make":"Suzuki","model":"Vitara","year":2003,"VIN":"2G4GN5EX2E9278877","mileage":67677,"transmission":"manual","title_status":"salvage"},
        {"make":"Volvo","model":"S80","year":2006,"VIN":"19VDE1F33FE321887","mileage":41880,"transmission":"automatic","title_status":"salvage"},
        {"make":"Ford","model":"ZX2","year":2001,"VIN":"3FA6P0LU7DR539747","mileage":50217,"transmission":"automatic","title_status":"clean"},
        {"make":"Saab","model":"900","year":1984,"VIN":"WAUBH74F38N753218","mileage":63076,"transmission":"dual clutch","title_status":"clean"},
        {"make":"Mercedes-Benz","model":"R-Class","year":2009,"VIN":"5UXFG4C54AL213732","mileage":27059,"transmission":"manual","title_status":"salvage"},
        {"make":"Honda","model":"Ridgeline","year":2010,"VIN":"1G6AX5SX0E0322722","mileage":35076,"transmission":"manual","title_status":"salvage"},
        {"make":"Dodge","model":"Neon","year":1999,"VIN":"1J4NF1GB4AD274016","mileage":60433,"transmission":"dual clutch","title_status":null},
        {"make":"Chrysler","model":"New Yorker","year":1995,"VIN":"WBAUN1C50DV555102","mileage":27892,"transmission":null,"title_status":"salvage"},
        {"make":"Honda","model":"CR-V","year":2012,"VIN":"SCBBP93W59C910685","mileage":20778,"transmission":"manual","title_status":"clean"},
        {"make":"Mitsubishi","model":"Galant","year":1988,"VIN":"1G6AX5SX9F0015082","mileage":28741,"transmission":"automatic","title_status":"clean"},
        {"make":"Chrysler","model":"Sebring","year":2008,"VIN":"2T1KU4EE6BC320618","mileage":58794,"transmission":"manual","title_status":null},
        {"make":"Mitsubishi","model":"GTO","year":1993,"VIN":"5N1AN0NWXEN170214","mileage":15675,"transmission":"dual clutch","title_status":"clean"},
        {"make":"Mercedes-Benz","model":"CL65 AMG","year":2009,"VIN":"1D7RW3BK0AS054755","mileage":2516,"transmission":null,"title_status":null},
        {"make":"Nissan","model":"Pathfinder","year":2007,"VIN":"WAUGGAFR1DA468886","mileage":30428,"transmission":"manual","title_status":null},
        {"make":"Porsche","model":"Boxster","year":2006,"VIN":"WAUDL74F25N271844","mileage":3152,"transmission":"dual clutch","title_status":"clean"},
        {"make":"Volkswagen","model":"Touareg","year":2010,"VIN":"WBAFR9C53CD942727","mileage":45934,"transmission":"automatic","title_status":null},
        {"make":"Dodge","model":"Neon","year":1999,"VIN":"WAUKG94F36N325421","mileage":53181,"transmission":"dual clutch","title_status":"clean"},
        {"make":"Mercury","model":"Topaz","year":1986,"VIN":"1GYS4KEF0CR423869","mileage":43417,"transmission":"dual clutch","title_status":null},
        {"make":"Lincoln","model":"MKS","year":2012,"VIN":"1GYS3JEF4BR296507","mileage":7392,"transmission":"automatic","title_status":"salvage"},
        {"make":"Chevrolet","model":"Cobalt","year":2010,"VIN":"WA1LGBFE7BD442044","mileage":46361,"transmission":"dual clutch","title_status":null},
        {"make":"Buick","model":"Park Avenue","year":2004,"VIN":"1N4AB7AP2DN200539","mileage":44685,"transmission":"automatic","title_status":"salvage"},
        {"make":"Scion","model":"xA","year":2006,"VIN":"19VDE3F36EE509281","mileage":55209,"transmission":"automatic","title_status":"salvage"},
        {"make":"Lincoln","model":"Continental","year":1986,"VIN":"WBANV935X9C640129","mileage":57982,"transmission":"manual","title_status":null},
        {"make":"Bentley","model":"Continental GTC","year":2007,"VIN":"KMHHT6KD7DU448811","mileage":68131,"transmission":"dual clutch","title_status":"salvage"},
        {"make":"Kia","model":"Amanti","year":2006,"VIN":"5FRYD4H23EB415583","mileage":58745,"transmission":"automatic","title_status":"clean"},
        {"make":"Buick","model":"Electra","year":1987,"VIN":"JN8AE2KPXC9354138","mileage":60098,"transmission":"dual clutch","title_status":"clean"},
        {"make":"Mercedes-Benz","model":"300SD","year":1993,"VIN":"JH4CU2F8XEC970663","mileage":36992,"transmission":"dual clutch","title_status":null},
        {"make":"Mercedes-Benz","model":"S-Class","year":1993,"VIN":"5N1AN0NU0EN613131","mileage":39835,"transmission":"automatic","title_status":"salvage"}
      ]);
    })
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {"make":"Honda","model":"Passport","year":2000,"VIN":"5UXWX7C5XDL619827","mileage":37501,"transmission":"manual","title_status":null},
  {"make":"Mazda","model":"CX-7","year":2008,"VIN":"3C6TD5ET0CG714753","mileage":47123,"transmission":"dual clutch","title_status":"clean"},
  {"make":"Ford","model":"Escort","year":1985,"VIN":"JH4CU2F60CC256116","mileage":38694,"transmission":"dual clutch","title_status":"salvage"},
  {"make":"Land Rover","model":"Discovery","year":2010,"VIN":"3D7JV1EP7BG126703","mileage":62737,"transmission":"manual","title_status":"clean"},
  {"make":"Acura","model":"TSX","year":2007,"VIN":"WBAVA33588K279089","mileage":66428,"transmission":"automatic","title_status":"salvage"},
  {"make":"Volkswagen","model":"Golf III","year":1995,"VIN":"WBSDE934X3C681155","mileage":61231,"transmission":"automatic","title_status":null},
  {"make":"Toyota","model":"Corolla","year":2007,"VIN":"WAULH64B21N603764","mileage":22555,"transmission":null,"title_status":"salvage"},
  {"make":"Pontiac","model":"Aztek","year":2005,"VIN":"5YMGZ0C53D0901856","mileage":2754,"transmission":"automatic","title_status":null},
  {"make":"Ford","model":"Explorer","year":2010,"VIN":"JHMFA3F22AS654701","mileage":10652,"transmission":"manual","title_status":"clean"},
  {"make":"Cadillac","model":"Escalade","year":2007,"VIN":"1GYUKGEF1AR484639","mileage":53665,"transmission":"automatic","title_status":"salvage"},
  {"make":"Pontiac","model":"Firebird","year":1999,"VIN":"WA1VMBFE6BD177604","mileage":13843,"transmission":"automatic","title_status":"clean"},
  {"make":"Volkswagen","model":"Corrado","year":1993,"VIN":"WA1BY94L07D907984","mileage":49498,"transmission":null,"title_status":"salvage"},
  {"make":"Dodge","model":"Ram 2500","year":1996,"VIN":"1VWAH7A36DC393602","mileage":44752,"transmission":"dual clutch","title_status":"salvage"},
  {"make":"Volkswagen","model":"Eurovan","year":1997,"VIN":"WAULC58EX2A737055","mileage":2508,"transmission":"automatic","title_status":"clean"},
  {"make":"Audi","model":"A8","year":2010,"VIN":"KNAGM4AD2E5380817","mileage":62906,"transmission":"manual","title_status":"clean"},
  {"make":"GMC","model":"Savana 3500","year":1996,"VIN":"1G6DP57V490738248","mileage":20,"transmission":"dual clutch","title_status":"salvage"},
  {"make":"Bentley","model":"Continental Flying Spur","year":2011,"VIN":"SCBZU25E71C280983","mileage":53421,"transmission":"automatic","title_status":"salvage"},
  {"make":"Mazda","model":"Miata MX-5","year":1993,"VIN":"5UXZW0C58BL402328","mileage":54641,"transmission":"automatic","title_status":"salvage"},
  {"make":"Volkswagen","model":"Jetta","year":1998,"VIN":"1N6AA0CA8CN431616","mileage":37951,"transmission":"dual clutch","title_status":null},
  {"make":"Audi","model":"A5","year":2010,"VIN":"JH4DC54836S525541","mileage":5210,"transmission":null,"title_status":"salvage"},
  {"make":"Toyota","model":"Camry","year":2003,"VIN":"1G6DX67D790051214","mileage":4854,"transmission":"automatic","title_status":"salvage"},
  {"make":"Dodge","model":"Dakota","year":2001,"VIN":"5GADT13SX42744437","mileage":22763,"transmission":"dual clutch","title_status":"clean"},
  {"make":"Mazda","model":"Mazda5","year":2012,"VIN":"19UUA86269A355754","mileage":17061,"transmission":"dual clutch","title_status":"clean"},
  {"make":"GMC","model":"2500 Club Coupe","year":1998,"VIN":"1FMCU4K32CK038332","mileage":38676,"transmission":"manual","title_status":"clean"},
  {"make":"Acura","model":"Integra","year":1997,"VIN":"1D7RV1GP5AS863793","mileage":57241,"transmission":"automatic","title_status":"clean"},
  {"make":"Volvo","model":"S40","year":2000,"VIN":"1FTMF1EW1AF589106","mileage":47481,"transmission":"manual","title_status":"salvage"},
  {"make":"Mercedes-Benz","model":"M-Class","year":2006,"VIN":"5N1BA0NE7FN334575","mileage":64705,"transmission":"automatic","title_status":"salvage"},
  {"make":"Volvo","model":"XC70","year":2008,"VIN":"3FAHP0HAXAR544198","mileage":43328,"transmission":"automatic","title_status":"salvage"},
  {"make":"Nissan","model":"Pathfinder","year":2001,"VIN":"WVGEG9BP1CD419032","mileage":4300,"transmission":"automatic","title_status":"salvage"},
  {"make":"Ford","model":"Taurus","year":2004,"VIN":"JH4DC53093S670235","mileage":20317,"transmission":"automatic","title_status":"salvage"},
  {"make":"Buick","model":"Reatta","year":1991,"VIN":"1G6KD57Y39U324347","mileage":41319,"transmission":null,"title_status":"clean"},
  {"make":"Chrysler","model":"Sebring","year":2000,"VIN":"WAUSH74F88N146974","mileage":29820,"transmission":"dual clutch","title_status":"salvage"},
  {"make":"Lamborghini","model":"Gallardo","year":2005,"VIN":"2HNYD282X8H138266","mileage":43209,"transmission":"manual","title_status":"salvage"},
  {"make":"Volkswagen","model":"GTI","year":1999,"VIN":"WAUVT58E84A979208","mileage":65958,"transmission":"automatic","title_status":"clean"},
  {"make":"Ford","model":"Expedition EL","year":2007,"VIN":"SCBLF44JX9C472582","mileage":32270,"transmission":"manual","title_status":null},
  {"make":"Nissan","model":"Stanza","year":1992,"VIN":"3D73M4CL0BG303122","mileage":14384,"transmission":"automatic","title_status":"clean"},
  {"make":"Lexus","model":"GX","year":2004,"VIN":"3C6TD5MT8CG628947","mileage":61515,"transmission":"dual clutch","title_status":null},
  {"make":"Ford","model":"Taurus X","year":2008,"VIN":"1C6RD6HT9CS014248","mileage":57527,"transmission":"manual","title_status":null},
  {"make":"GMC","model":"2500","year":1997,"VIN":"1G6KD57YX7U210360","mileage":61775,"transmission":"dual clutch","title_status":"salvage"},
  {"make":"Dodge","model":"D350 Club","year":1993,"VIN":"2C3CDYAG8CH398851","mileage":56449,"transmission":null,"title_status":null},
  {"make":"Dodge","model":"Stratus","year":1995,"VIN":"1D4PU5GK5BW514453","mileage":46453,"transmission":"automatic","title_status":null},
  {"make":"Dodge","model":"Viper RT/10","year":1993,"VIN":"5J8TB4H53GL565500","mileage":15992,"transmission":"automatic","title_status":"salvage"},
  {"make":"Honda","model":"CR-V","year":1997,"VIN":"1FTFW1E86AK106100","mileage":15648,"transmission":"manual","title_status":"salvage"},
  {"make":"Pontiac","model":"Firebird","year":1997,"VIN":"1G6DJ5E36D0662916","mileage":34055,"transmission":"dual clutch","title_status":"salvage"},
  {"make":"Ford","model":"Mustang","year":2005,"VIN":"1VWAS7A38FC453724","mileage":63358,"transmission":null,"title_status":"clean"},
  {"make":"Chevrolet","model":"3500","year":1997,"VIN":"5J6TF1H30BL369632","mileage":24734,"transmission":"manual","title_status":null},
  {"make":"Pontiac","model":"Grand Prix","year":1983,"VIN":"3VWKX7AJ3AM649968","mileage":43798,"transmission":"manual","title_status":null},
  {"make":"Chevrolet","model":"Express 1500","year":2001,"VIN":"1G6DV1EP6F0559322","mileage":7452,"transmission":null,"title_status":null},
  {"make":"Buick","model":"Riviera","year":1992,"VIN":"1G6AT5SX2E0255147","mileage":24438,"transmission":null,"title_status":"salvage"},
  {"make":"Chevrolet","model":"S10","year":1998,"VIN":"3D73Y4CL6AG896634","mileage":64366,"transmission":"dual clutch","title_status":null},
  {"make":"Plymouth","model":"Neon","year":1997,"VIN":"1G6DL67A890500157","mileage":31272,"transmission":"manual","title_status":"clean"},
  {"make":"Ford","model":"Mustang","year":2005,"VIN":"SCFFDAAE4BG941087","mileage":1997,"transmission":"automatic","title_status":null},
  {"make":"Pontiac","model":"Grand Prix","year":1998,"VIN":"WA1DGAFPXEA736172","mileage":401,"transmission":"dual clutch","title_status":"salvage"},
  {"make":"Mazda","model":"CX-7","year":2008,"VIN":"1G4PP5SK7C4226387","mileage":63704,"transmission":"dual clutch","title_status":"clean"},
  {"make":"Lexus","model":"LFA","year":2012,"VIN":"1GD01ZCG9BF740765","mileage":50318,"transmission":"dual clutch","title_status":"clean"},
  {"make":"Chevrolet","model":"Cavalier","year":2002,"VIN":"1G6DU6EV4A0724940","mileage":68552,"transmission":null,"title_status":null},
  {"make":"Mercedes-Benz","model":"C-Class","year":2005,"VIN":"5GAKRCKD1EJ478060","mileage":59326,"transmission":"dual clutch","title_status":"clean"},
  {"make":"Dodge","model":"Nitro","year":2010,"VIN":"WAUUL98E57A852391","mileage":43185,"transmission":"manual","title_status":null},
  {"make":"Buick","model":"Rendezvous","year":2002,"VIN":"1G6DP5EVXA0791513","mileage":13950,"transmission":"automatic","title_status":null},
  {"make":"Dodge","model":"D150","year":1992,"VIN":"1G4HE57Y38U960183","mileage":385,"transmission":"manual","title_status":"clean"},
  {"make":"Acura","model":"TSX","year":2010,"VIN":"1G4GC5ER0DF451745","mileage":4487,"transmission":"automatic","title_status":"salvage"},
  {"make":"Toyota","model":"Celica","year":2000,"VIN":"WAUPL58E15A923427","mileage":66189,"transmission":"automatic","title_status":null},
  {"make":"Suzuki","model":"Swift","year":2006,"VIN":"WBAHN03518D975149","mileage":40015,"transmission":"dual clutch","title_status":null},
  {"make":"Lexus","model":"GX","year":2009,"VIN":"4T1BF3EK9BU154491","mileage":2483,"transmission":"dual clutch","title_status":"salvage"},
  {"make":"Land Rover","model":"Discovery Series II","year":2002,"VIN":"5UXFE835X9L826625","mileage":28587,"transmission":"manual","title_status":"salvage"},
  {"make":"Lexus","model":"LX","year":2003,"VIN":"3N1AB6AP5BL785539","mileage":62183,"transmission":"manual","title_status":"salvage"},
  {"make":"GMC","model":"Sonoma","year":2002,"VIN":"WAUDF78EX8A607003","mileage":12373,"transmission":"automatic","title_status":"salvage"},
  {"make":"Buick","model":"Regal","year":2012,"VIN":"TRUXD38J291381252","mileage":22570,"transmission":"dual clutch","title_status":"salvage"},
  {"make":"Bentley","model":"Continental GTC","year":2008,"VIN":"WBAKF3C53CE105877","mileage":24431,"transmission":"automatic","title_status":"salvage"},
  {"make":"Buick","model":"Skylark","year":1994,"VIN":"5UXZV8C56CL273301","mileage":11528,"transmission":"automatic","title_status":"clean"},
  {"make":"Pontiac","model":"Sunfire","year":2003,"VIN":"1GYFC53289R098418","mileage":57774,"transmission":"automatic","title_status":"clean"},
  {"make":"Honda","model":"Accord","year":1985,"VIN":"WBASP4C54AC254276","mileage":39602,"transmission":"dual clutch","title_status":"clean"},
  {"make":"Jaguar","model":"X-Type","year":2008,"VIN":"WBAUN93549V846725","mileage":29517,"transmission":null,"title_status":null},
  {"make":"Mazda","model":"Protege5","year":2003,"VIN":"1G6DG5E5XC0751919","mileage":5971,"transmission":"manual","title_status":"clean"},
  {"make":"Mitsubishi","model":"Diamante","year":1992,"VIN":"3D73M4EL7AG744077","mileage":39333,"transmission":"automatic","title_status":"clean"},
  {"make":"Chevrolet","model":"TrailBlazer","year":2003,"VIN":"19UUA9F29DA232609","mileage":31116,"transmission":null,"title_status":"salvage"},
  {"make":"Chrysler","model":"LeBaron","year":1995,"VIN":"WP1AA2A21DL450253","mileage":61059,"transmission":"dual clutch","title_status":"clean"},
  {"make":"Volvo","model":"V70","year":1999,"VIN":"3GYFNDE3XFS940808","mileage":61515,"transmission":"dual clutch","title_status":"clean"},
  {"make":"Hyundai","model":"Genesis","year":2010,"VIN":"WAUDH78EX6A124716","mileage":24892,"transmission":"dual clutch","title_status":"salvage"},
  {"make":"Chevrolet","model":"Sportvan G30","year":1993,"VIN":"3VWML7AJ2EM598473","mileage":7564,"transmission":"manual","title_status":"clean"},
  {"make":"Mercedes-Benz","model":"W201","year":1991,"VIN":"1C4RJEAG9EC744358","mileage":52796,"transmission":"automatic","title_status":"salvage"},
  {"make":"Buick","model":"Skyhawk","year":1989,"VIN":"JTHBL5EF3F5597665","mileage":32885,"transmission":"automatic","title_status":"salvage"},
  {"make":"Nissan","model":"Altima","year":2005,"VIN":"1G6DU6EA1A0715691","mileage":46958,"transmission":"automatic","title_status":null},
  {"make":"Cadillac","model":"STS","year":2010,"VIN":"1N6AA0CC1EN824975","mileage":57489,"transmission":"manual","title_status":null},
  {"make":"GMC","model":"Sierra 2500","year":2005,"VIN":"1GKS1GEJ3DR271902","mileage":22202,"transmission":"dual clutch","title_status":null},
  {"make":"Chevrolet","model":"Express","year":2006,"VIN":"1D4PU7GX6BW002370","mileage":13905,"transmission":"automatic","title_status":null},
  {"make":"Mazda","model":"626","year":2000,"VIN":"WVWAP7AN7EE866078","mileage":31656,"transmission":"manual","title_status":"salvage"},
  {"make":"Volkswagen","model":"Phaeton","year":2004,"VIN":"3VWML7AJ9CM107040","mileage":15975,"transmission":"automatic","title_status":"salvage"},
  {"make":"Subaru","model":"Baja","year":2005,"VIN":"1G6AH5SX5E0503621","mileage":36831,"transmission":"manual","title_status":null},
  {"make":"Hyundai","model":"Accent","year":2010,"VIN":"JM3TB2BAXB0207997","mileage":41989,"transmission":"dual clutch","title_status":"clean"},
  {"make":"Kia","model":"Spectra","year":2007,"VIN":"1G6DN57S750826720","mileage":20069,"transmission":"dual clutch","title_status":"clean"},
  {"make":"Mitsubishi","model":"Diamante","year":1999,"VIN":"WAUHF78P58A192952","mileage":17101,"transmission":"automatic","title_status":"salvage"},
  {"make":"GMC","model":"Sierra 3500","year":2007,"VIN":"1N6AA0CC8AN732708","mileage":63068,"transmission":"dual clutch","title_status":"salvage"},
  {"make":"BMW","model":"6 Series","year":2006,"VIN":"1FTEX1E86AK865337","mileage":36985,"transmission":"automatic","title_status":"clean"},
  {"make":"Mazda","model":"MPV","year":1994,"VIN":"3GTU1YEJ5DG500980","mileage":12489,"transmission":"automatic","title_status":"clean"},
  {"make":"Volkswagen","model":"Golf","year":2006,"VIN":"WAUHF78P97A020065","mileage":24555,"transmission":"automatic","title_status":"clean"},
  {"make":"Dodge","model":"Grand Caravan","year":1993,"VIN":"1N6AA0CAXDN156252","mileage":50342,"transmission":null,"title_status":null},
  {"make":"Hyundai","model":"Azera","year":2007,"VIN":"5N1AT2MK9FC073051","mileage":17127,"transmission":"manual","title_status":null},
  {"make":"Acura","model":"SLX","year":1998,"VIN":"SCFHDDBT0EG343820","mileage":20130,"transmission":"automatic","title_status":"salvage"},
  {"make":"Kia","model":"Sportage","year":1998,"VIN":"TRUWX28N321069687","mileage":27601,"transmission":"dual clutch","title_status":"salvage"},
  {"make":"Mercedes-Benz","model":"SL-Class","year":2007,"VIN":"1D7RB1CP9AS517342","mileage":27940,"transmission":"manual","title_status":"clean"},
  {"make":"Jeep","model":"Comanche","year":1992,"VIN":"1HGCR2F3XEA869689","mileage":36994,"transmission":null,"title_status":"clean"},
  {"make":"BMW","model":"3 Series","year":1996,"VIN":"NM0KS9ANXAT605299","mileage":45393,"transmission":"manual","title_status":"clean"},
      ]);
    });
};
