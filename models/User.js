const { Schema, model } = require('mongoose');
// Schema reference: https://mongoosejs.com/docs/schematypes.html
// Validation reference: https://mongoosejs.com/docs/validation.html

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            match: /.+\@.+\..+/ // use of regex to match and validate email
        },
        thoughts: [
            {
                // referencing the `Thought` model
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            }
        ],
        friends: [
            {
                // referencing the `User` model (self-reference)
                type: Schema.Types.ObjectId,
                ref: 'User',
            }
        ]
        
    },
    {
        toJSON: {
            virtuals: true // force as this schema includes virtual
        },
        id: false // no id for subdocuments, default ture
    }
)

// Create a virtual called `friendCount` that retrieves the length of the user's `friends` array field on query.
userSchema
    .virtual('friendCount')
    .get(function() {
        return this.friends.length();
    })
 
// Intialize User model
const User = model('user', userSchema);
model.exports = User;