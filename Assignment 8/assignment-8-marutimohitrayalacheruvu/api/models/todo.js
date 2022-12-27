import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
    title:
    {
        type: String,
        required:'Title is required'
    },
    description:
    {
        type: String,
        // required:'Description is required'
    },
    dueDate:
    {
        type: Date,
        // required:'Due date is required'
    },
    dueTime:
    {
        type: String,
        // required:'Due time is required'
    },
    createdDate:
    {
        type: Date,
        default: Date.now()
    },
    lastModifiedDate:
    {
        type: Date,
        default: Date.now()
    },
    status:
    {
        type: String,
        default: 'open'
    }
}, {versionKey: false});

const model = mongoose.model('todo', Schema);

export default model;