(function() {
  'use strict';

  new Polymer({
    is: 'egyenleg-lista',

    properties: {
      egyenlegsorok: {
        type: String,
        notify: true
      },
      egyenlegTomb: {
        type: Array,
        notify: true
      }
    },
    
    listeners: {
        'egyenlegsorok-changed': '_egyenlegsorokChanged'
    },
            

    _egyenlegsorokChanged: function() 
    {
      //console.log(this.egyenlegsorok);
      //Legalább 3 karakter, tehát van esélye, hogy json legyen benne, és nem üres
      if ((this.egyenlegsorok !== undefined) && (this.egyenlegsorok.length > 2))
      {
        //JSON értelmezése        
        var parsed = JSON.parse(this.egyenlegsorok);
        //JS objektum létrehozása
        this.setAttribute("egyenlegTomb",[]);
        var arr = [];
        //Értelmezett json tömbből JS objektum létrehozása
        for(var x in parsed)
        {
          arr.push(parsed[x]);
        }
        this.egyenlegTomb = arr;
        //Debug:
        //console.log(this.getAttribute("egyenlegTomb"));
      }
    },

    ready: function() {
		this.setAttribute("egyenlegTomb",[]);
		this._egyenlegsorokChanged();
		//this.msieversion();
		//console.log(this.egyenlegsorok);
    }
  });
})();



