var client
var vm


document.onreadystatechange = function() {
    if (document.readyState === 'interactive') renderApp();
    function renderApp() {
      var onInit = app.initialized();
  
      onInit.then(getClient).catch(handleErr);
  
      function getClient(_client) {
        window.client = _client;
        client.events.on('app.activated', onAppActivate);
      }
    }
  };


  function onAppActivate() {
    var btn = document.querySelector('.btn-search');
    btn.addEventListener('click', openModal);
    
      client.instance.get().then((data) => {
           var overlay = data.find(x => x.location === "overlay");
     client.instance.send({ message:  {search: "helloworld",email: "world@freshworks.com"}, receiver: overlay.instanceId});
     },function(error){error});
        }
    // Start writing your code...


    function openModal() {
        client.interface.trigger(
          'showModal',
          useTemplate('Title of the Modal', '../index.html')
          
        );
        

          
        
        // client.instance.receive(
        //   function(event)  {
        //     var data = event.helper.getData();
        //     console.log(data);
        //     /* data contains {senderId: "1", message: { message: {name: "James", email: "James@freshworks.com"}} */
        //   }
        // );
      }
     

 new Vue({
    el: "#app",
    data() {
      return {
        search: ""
      }
    },
    computed: {
      someComputed() {
        return this.someValue * 10;
      }
    },
    methods:{
      async searchTheDoc(){
        console.log("THIS IS SEARCH",this.search)
        
        const result = await axios.get(`https://en5dm918ae.execute-api.us-east-1.amazonaws.com/default/fsPdf?search=${this.search}`,{
            headers: {
                'Content-Type':'application/json'
            }
        })

        console.log(result)


      }
    }
  });
  


  function handleErr(err) {
    console.error(`Error occured. Details:`, err);
  }
  function useTemplate(title, template) {
    return {
      title,
      template
    };
  }