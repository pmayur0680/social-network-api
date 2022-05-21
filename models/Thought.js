const { Schema, model, Types } = require('mongoose');
const moment = require('moment');
// Schema reference: https://mongoosejs.com/docs/schematypes.html
// Validation reference: https://mongoosejs.com/docs/validation.html

// getter function to format the timestamp as Jun 10th, 2020 at 01:37 pm using moment
function formatTimestamp(createdAt) {
    return moment(createdAt).format('MMM Do, YYYY [at] hh:mm a');
}

// will be used as the `reaction` field's subdocument schema in the `Thought` schema.
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,            
            required: true,
            maxlength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: formatTimestamp
        },
    },
    {
        toJSON: {            
            getters: true // force as this schema includes getters
        },  
    }
)
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,            
            required: true,
            maxlength: 280,
            minlength: 1,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: formatTimestamp
        },
        username: {
            type: String,
            required: true
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            virtuals: true, // force as this schema includes virtuals
            getters: true // force as this schema includes getters
        },
        id: false // no id for subdocuments, default ture
    }
)

// Create a virtual called `reactionCount` that retrieves the length of the thought's `reactions` array field on query.
thoughtSchema
    .virtual('reactionCount')
    .get(function() {
        return this.reactions.length();
    })
 
// Intialize User model
const Thought = model('thought', thoughtSchema);
model.exports = Thought;