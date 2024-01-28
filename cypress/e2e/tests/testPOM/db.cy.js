describe('db', () => {
    it('TC1 sql select', () => {
        const sql = 'select * from students';
        cy.query(sql).then(res => {
            // cy.log(res);
            res.forEach(student => {
                cy.log(student.name)
            });

        })
    })

    it('TC2 ', () => {
        const sql = 'UPDATE sql12675950.students SET sql12675950.students.section ="B" Where sql12675950.students.section = "E"'

        cy.query(sql).then(res => {
            cy.log(res)
            expect(res.affectedRows).to.equal(1)
        })
    })

    it('TC3', () => {
        const sql = 'INSERT INTO students VALUES (9464234, "long", 12, "A", 2500), (34402, "long", 12, "A", 2500), (5555, "long", 12, "A", 2500)';

        cy.query(sql).then(res => {
            cy.log(res);
        });
    });

})