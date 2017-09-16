
describe(`Tennis App`,() => {
    describe(`Player A gets score`,() => {
        it(`echo "Love - Love" when game start`,()=>{
            let app = new TennisApp()
            app.reset()
            let result=app.echo()

            expect(result).toBe(`Love - Love`)
        })
    })
})