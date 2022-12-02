class KepekModell{
    #kepeim = []

    constructor(kepeim){
        this.#kepeim = kepeim;
    }

    getKepeim(){
        return this.#kepeim;
    }

    setKepeim(adat){
        if (this.#kepeim.length>=1){
            
        }
        this.#kepeim.push(adat);
        //console.log(this.#kepeim,"kosarmodell")
    }

}

export default KepekModell;