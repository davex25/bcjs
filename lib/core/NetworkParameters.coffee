require('coffee-script');
require('buffer');


class NetworkParameters
    @PROTOCOL_VERSION: 70001;
    @SATOSHI_KEY:Hex.decode("04fc9702847840aaf195de8442ebecedf5b095cdbb9bc716bda9110971b28a49e0ead8564ff0db22209e0374782c093bb899692d524e9d6a6956e7c5ecbcd68284");

    constructor: -> 
        alertSigningKey = @SATOSHI_KEY;
        genesisBlock = createGenesis(this);
    
    createGenesis = (netParms) ->
        block = new Block(netParms);
        t = new Transaction(n);
        