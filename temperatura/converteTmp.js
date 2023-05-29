var conversorTmp = {
    cels_fahr: function(temp){
        return temp * 1.8 + 32;
    },
    fahr_cels: function(temp){
        return (temp - 32) / 1.8 ;
    },
    cels_kelv: function(temp){
        return temp + 273;
    },
     kelv_cels: function(temp){
        return temp - 273;
    }
};