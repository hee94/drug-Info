class SearchDrug {
    constructor(key) {
      this.key = key;
      this.getRequestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        }
      };
      
    }
   async  search(query) {
   const response = await fetch(`https://cors.bridged.cc/http://apis.data.go.kr/1471000/DrbEasyDrugInfoService/getDrbEasyDrugList?serviceKey=${this.key}&itemName=${query}&pageNo=1&startPage=1&numOfRows=10&type=json`, 
   this.getRequestOptions);
   const data = response.json();
   
   return data;
    }
   }

  

  export default SearchDrug;
  