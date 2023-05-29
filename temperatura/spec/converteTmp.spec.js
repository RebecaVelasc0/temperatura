describe('Conversor de Temperatura',function(){
    var temp = 10

    it('A conversão de ' + temp + ' Celsius para Fahrenheit é: ' + (temp * 1.8 + 32),function(){
        expect(conversorTmp.cels_fahr(temp)).toBe(temp * 1.8 + 32);
    });
    it('A conversão de ' + temp + ' Fahrenheit para Celsius é: ' + ((temp - 32) / 1.8),function(){
        expect(conversorTmp.fahr_cels(temp)).toBe((temp - 32) / 1.8);
    });
    
    it('A conversão de ' + temp + ' Celsius para Kelvin é: ' + (temp + 273),function(){
        expect(conversorTmp.cels_kelv(temp)).toBe(temp + 273);
    });

    it('A conversão de ' + temp + ' Kelvin para Celsius é: ' + (temp - 273),function(){
        expect(conversorTmp.kelv_cels(temp)).toBe(temp - 273);
    });

});