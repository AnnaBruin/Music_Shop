const uuid = require('uuid')
const path = require('path');
const {Instrument, InstrumentInfo} = require('../models/models')
const ApiError = require('../error/ApiError');

class InstrumentController {
    async create(req, res, next) {
        try {
            let {name, price, brandId, typeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const instrument = await Instrument.create({name, price, brandId, typeId, img: fileName});

            if (info) {
                info = JSON.parse(info)
                info.forEach(i =>
                    InstrumentInfo.create({
                        title: i.title,
                        description: i.description,
                        instrumentId: instrument.id
                    })
                )
            }

            return res.json(instrument)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
        
    }

    async getAll(req, res) {
        let {brandId, typeId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let instruments;
        if (!brandId && !typeId) {
            instruments = await Instrument.findAndCountAll({limit, offset})
        }
        if (brandId && !typeId) {
            instruments = await Instrument.findAndCountAll({where:{brandId}, limit, offset})
        }
        if (!brandId && typeId) {
            instruments = await Instrument.findAndCountAll({where:{typeId}, limit, offset})
        }
        if (brandId && typeId) {
            instruments = await Instrument.findAndCountAll({where:{typeId, brandId}, limit, offset})
        }
        return res.json(instruments)
    }

    async getOne(req, res) {
        const {id} = req.params
        const instrument = await Instrument.findOne(
            {
                where: {id},
                include: [{model: InstrumentInfo, as: 'info'}]
            },
        )
        return res.json(instrument)
    }
}

module.exports = new InstrumentController()