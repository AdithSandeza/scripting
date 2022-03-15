
var vm
var client





 document.onreadystatechange = function() {
    if (document.readyState === 'interactive') renderApp();
  
    function renderApp() {
      var onInit = app.initialized();
  
      onInit.then(getClient);
  
      function getClient(_client) {
      client = _client;
        client.events.on('app.activated', onAppActivate);
  
  
        
        // Vue.filter('formatDateDiffForHumans', function(value) {
        //   if (!value) return null;
        //   return dayjs(value).format('h:mm A');
        // });
        
  
   vm = new Vue({
  el: '#wikiApp',
  data: {
    wikiObj: [],
    isResult: false,
    searchQuery: '',
    
  },
  computed: {

  },
  // ready: function() {
  // },
  methods: {
    removeSearchQuery: function() {
      this.searchQuery = '';
      this.isResult = false;
    },
    // submitSearch: function() {
    //   var reqURL = "https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrnamespace=0&exsentences=1&exintro&explaintext&exlimit=max&prop=extracts&gsrlimit=10&gsrsearch="+this.searchQuery+"&format=json";
     
    //   this.$http.jsonp(reqURL).then(function(response) {
    //     this.wikiObj = response.data.query.pages;
    //     this.isResult = true;
    //   }, function(response) { /* fail response msg */
    //     console.log(response);
    //   });
    // }
   async submitSearch(){
     let result = []
     client.request.get("https://jlontm3tlj.execute-api.us-east-1.amazonaws.com/default/nyraScriptLambda?search="+this.searchQuery).then(data => {
                result = JSON.parse(data.response)
                this.wikiObj = result
                console.log(result)
     })
    
      console.log(this.searchQuery)
      this.wikiObj = []
      this.isResult = true;
      
      // let res = await axios.get("https://jlontm3tlj.execute-api.us-east-1.amazonaws.com/default/nyraScriptLambda?search=pass")
      // console.log(res)
      
    },
    openLink(id){
      console.log('THIS IS IDDDDDD',id)
      window.open(id,'_blank')
      
    }
  }
})

function onAppActivate(){
  console.log("App Activated")
}




      }
    }}