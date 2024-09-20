import connection from '../configs/connectDB';
let getHomepage = (req, res) => {
    //logic
    let data = [];
    connection.query(
        'SELECT * FROM `users` ',
        function (err, results, fields) {
            results.map((row) => {
                data.push({
                    id: row.id,
                    email: row.email,
                    address: row.address,
                    firstname: row.firstname,
                    name: row.name
                })

            });

            return res.render('index.ejs', { dataUser: data, test: 'abc string test' })

        })

}
module.exports = {
    getHomepage
}