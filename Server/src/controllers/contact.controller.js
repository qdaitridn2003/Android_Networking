import { jsonData, personArr, personObj } from '../utils/constants';

class ContactController {
    handleReturnList(req, res, next) {
        return res.json(jsonData);
    }

    handleReturnArray(req, res, next) { 
        return res.json(personArr);

    }

    handleReturnObject(req, res, next) { 
        return res.json(personObj);
    }
}

export default new ContactController;