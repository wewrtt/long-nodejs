module.exports = {
    multiMongooseObject: function (mongooses) {
        return mongooses.map((i) => i.toObject());
    },
    MongooseObject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    },
};
