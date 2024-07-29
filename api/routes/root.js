module.exports = app => {
    app.route('/').get((req,res)=>{
        res.status(200).send("Bem-vindo a API Node JS")
    })
    
}