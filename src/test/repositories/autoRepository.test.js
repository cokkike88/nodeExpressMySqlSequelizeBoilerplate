const db = require('../../data/models');
const autorRepository = require('../../data/repositories/autorRepository');

jest.mock('../../data/models');

test('get autor', () => { 

    const res = {
        type: 'success',
        code: 200,
        response: {
            id: 1,
            first_name: "oscar",
            last_name: "munoz"
        }
    };

    db.Autor.findByPk(1).mockResolveValue(res);

    autorRepository.getById(1).then(data => {
        expect(data).toEqual(res);
    })


 });
