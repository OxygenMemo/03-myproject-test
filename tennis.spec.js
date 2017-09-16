function TennisApp(){
    let playerAScore = 0
    let playerBScore = 0
    const scoreString = ['Love','Fifteen','Thirthy','Forthy']
    this.reset=()=>{
        playerAScore=0
        playerBScore=0
    }
    this.echo=()=>{
        if(playerAScore>3){
            return "Player A wins game"
        }
        return `${scoreString[playerAScore]} - Love`
    }
    this.playerAGetScore = () => {
        playerAScore++
    }
}
describe(`Tennis App`,() => {
    describe(`When Player A gets score`,() => {
        let app

        beforeEach(()=>{
            app=new TennisApp()
            app.reset()
        })
        it(`should echo "Love - Love" when game start`,()=>{            
            let result=app.echo()

            expect(result).toBe("Love - Love")
        })
        it('should echo "Fifteen - Love" when score is 15 - 0',() => {
            app.playerAGetScore()
            let result = app.echo()

            expect(result).toBe('Fifteen - Love')
        })
        it('should echo "Thirthy - Love" when score is 30 - 0',()=>{
            app.playerAGetScore()
            app.playerAGetScore()
            let result=app.echo()

            expect(result).toBe('Thirthy - Love')
        })
        it('should echo "Forthy - Love" when score is 40 - 0',()=>{
            app.playerAGetScore()
            app.playerAGetScore()
            app.playerAGetScore()
            let result=app.echo()
            
            expect(result).toBe('Forthy - Love')
        })
        it('should echo "Player A wins game" when player A gets next scroe at 40 -0',()=>{
            app.playerAGetScore()
            app.playerAGetScore()
            app.playerAGetScore()
            app.playerAGetScore()

            let result=app.echo()
            expect(result).toBe('Player A wins game')
        })
       
    })
})