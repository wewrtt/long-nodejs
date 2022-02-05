class test {
    multiMongooseObject(mongooses) {
        return mongooses.map((i) => i.toObject());
    }
    MongooseObject(mongooses) {
        return mongooses ? mongooses.toObject() : mongooses;
    }
}

module.exports = new test();
